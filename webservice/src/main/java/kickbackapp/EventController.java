package kickbackapp;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
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
    public List<SimplifiedEvent> findEvents(@RequestHeader("AuthToken") String userToken) throws IOException {
    	/**
    	 * Finds all events and returns a simplified list of them
    	 */
    	System.out.println("Finding events for userToken" + userToken);
    	if(userService.isTokenValid(userToken)) {
	    	List<EventEntity> eventList = eventService.findEvents();
	    	List<SimplifiedEvent> simplifiedList = new ArrayList<SimplifiedEvent>();
	    	for (int i = 0; i < eventList.size(); i++) {
	    		EventEntity event = eventList.get(i);
    			simplifiedList.add(new kickbackapp.SimplifiedEvent(event.getId(), event.getName(), event.getOwner()));
	    	}
	    	return simplifiedList;   
    	}
    	System.out.println(userToken + "invalid");
    	return null;
    }
    
    
    @GetMapping("/event/{eventId}")
    public EventEntity findEvent(@PathVariable Integer eventId, @RequestHeader ("AuthToken") String userToken) throws IOException {
    	/**
    	 * Finds event given id and returns it
    	 */
    	if(userService.isTokenValid(userToken)) {
    		return eventService.findEvent(eventId);
    	}
    	System.out.println(userToken + "invalid");
    	return null;
    }
    

    @PostMapping("/event")
    public EventEntity saveEvent( @RequestHeader("AuthToken") String userToken, @RequestBody EventEntity event) throws IOException {
    	/**
    	 * Saves event if all not nullable attributes are assigned
    	 */
    	if(userService.isTokenValid(userToken)) {
    		event.setOwner(userService.findUserByToken(userToken).getName());
	    	EventEntity saved = eventService.saveEvent(event);
	    	System.out.println("saving event");
	        return saved;
    	} else {
    	System.out.println("User not valid");
    	return null;
		}
    }

    
    //TODO: change to check if user is owner and update PathVariable to proper id pass
	@DeleteMapping("/event/{eventId}")
    public void deleteEvent(@PathVariable Integer eventid, @RequestHeader ("AuthToken") String userToken) throws IOException {
    	/**
    	 * Deletes event given ID
    	 */
		if(userService.isTokenValid(userToken)) {
    		eventService.deleteEvent(eventid);
    	}
	}
}
