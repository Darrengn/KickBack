package kickbackapp;

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
import kickbackapp.SimplifiedEvent;

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
    @GetMapping("/event")
    public ResponseEntity findEvents(@RequestHeader("AuthToken") String authToken) throws IOException {
    	/**
    	 * Finds all events and returns a simplified list of them
    	 */
    	try {
    		List<EventEntity> eventList = eventService.findEvents();
	    	List<SimplifiedEvent> simplifiedList = new ArrayList<SimplifiedEvent>();
	    	for (int i = 0; i < eventList.size(); i++) {
	    		EventEntity event = eventList.get(i);
    			simplifiedList.add(new kickbackapp.SimplifiedEvent(event.getId(), event.getName(), event.getOwner()));
	    	}
	    	return ResponseEntity.status(HttpStatus.OK).body(simplifiedList);
    	} catch (NullPointerException e) {
    		return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
    	}
    }
    
    
    @GetMapping("/event/{eventId}")
    public ResponseEntity findEvent(@PathVariable Integer eventId, @RequestHeader ("AuthToken") String userToken) throws IOException {
    	/**
    	 * Finds event given id and returns it
    	 */
    	try {
    		userService.findUserByToken(userToken);
	    	return ResponseEntity.status(HttpStatus.OK).body(eventService.findEvent(eventId));
    	} catch (NullPointerException e) {
    		return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
    	}
    }
    

    @PostMapping("/event")
    public ResponseEntity saveEvent( @RequestHeader("AuthToken") String userToken, @RequestBody EventEntity event) throws IOException {
    	/**
    	 * Saves event if all not nullable attributes are assigned
    	 */
    	try {
    		userService.findUserByToken(userToken);
    		event.setOwner(userService.findUserByToken(userToken).getName());
	    	EventEntity saved = eventService.saveEvent(event);
	    	System.out.println("saving event");
	    	return ResponseEntity.status(HttpStatus.OK).body(saved);
    	} catch (NullPointerException e) {
    		return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
    	}
    }

    
    //TODO: change to check if user is owner and update PathVariable to proper id pass
	@DeleteMapping("/event/{eventId}")
    public ResponseEntity<String> deleteEvent(@PathVariable Integer eventid, @RequestHeader ("AuthToken") String userToken) throws IOException {
    	/**
    	 * Deletes event given ID
    	 */
		try {
			userService.findUserByToken(userToken);
			eventService.deleteEvent(eventid);
			return ResponseEntity.status(HttpStatus.OK).body("User Created");
		} catch (NullPointerException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
		}
	}
}
