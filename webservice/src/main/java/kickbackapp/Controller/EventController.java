package kickbackapp.Controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;

import kickbackapp.NotFoundException;
import kickbackapp.Entity.EventEntity;
import kickbackapp.Entity.SimplifiedEvent;
import kickbackapp.Entity.UserEntity;
import kickbackapp.Service.EventService;
import kickbackapp.Service.UserService;

@RestController
@CrossOrigin
public class EventController {

    @Autowired
    private EventService eventService;

    @Autowired
    private UserService userService;
    
    public EventController() {

    }

    
    //TODO: Does not filter events without access
    /**
     * Returns all events user has access to
     */
    @GetMapping("/event")
    public ResponseEntity findEvents(@RequestHeader("AuthToken") String userToken) throws IOException {
    	try {
    		int userId = userService.findUserByToken(userToken).getUserId();
    		List<EventEntity> eventList = eventService.findEvents();
    		List<SimplifiedEvent> simplifiedList = new ArrayList<SimplifiedEvent>();
    		for (int i = 0; i < eventList.size(); i++) {
    			EventEntity event = eventList.get(i);
    			simplifiedList.add(new kickbackapp.Entity.SimplifiedEvent(event.getId(), event.getName(), event.getOwner()));
    		}
    		return ResponseEntity.status(HttpStatus.OK).body(simplifiedList);
    	} catch (NotFoundException e) { 
    		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
    	}
    	
    }
    
	/**
	 * Finds event given id and returns it
	 */
    @GetMapping("/event/{eventId}")
    public ResponseEntity findEventById(@PathVariable Integer eventId, @RequestHeader ("AuthToken") String userToken) throws IOException {
    	try {
    		userService.findUserByToken(userToken);
    		EventEntity events = eventService.findEvent(eventId);
			return ResponseEntity.status(HttpStatus.OK).body(events);
    	} catch (NotFoundException e) {
    		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
    	}
    }
    
	/**
	 * Saves event if all not nullable attributes are assigned and returns it
	 */
    @PostMapping("/event")
    public ResponseEntity saveEvent( @RequestHeader("AuthToken") String userToken, @RequestBody EventEntity event) throws IOException {
    	try {
    		UserEntity user = userService.findUserByToken(userToken);
	    	EventEntity saved = eventService.saveEvent(event, user.getName()); //Will throw its own error if not nullable attributes dont exist
	    	System.out.println("saving event");
	    	return ResponseEntity.status(HttpStatus.OK).body(saved);
    	} catch (NotFoundException e) {
    		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
    	} catch (Exception e) {
    		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
    	}
    }

    
    //TODO: change to check if user is owner and update PathVariable to proper id pass
	/**
	 * Deletes event given ID if user is owner
	 */
	@DeleteMapping("/event/{eventId}")
    public ResponseEntity<String> deleteEvent(@PathVariable Integer eventId, @RequestHeader ("AuthToken") String userToken) throws IOException {

		try {
			String user = userService.findUserByToken(userToken).getName();
			eventService.deleteEvent(eventId, user);
			return ResponseEntity.status(HttpStatus.OK).body("Event deleted");
		} catch (NotFoundException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
		}
	}
}
