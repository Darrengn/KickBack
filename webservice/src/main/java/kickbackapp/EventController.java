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


    @GetMapping("/events")
    public List<SimplifiedEvent> findEvents(@RequestHeader("AuthToken") String userToken) throws IOException {
    	
    	System.out.println("Finding events for userToken" + userToken);
    	if(userService.isTokenValid(userToken)) {
	    	List<EventEntity> eventList = eventService.findEvents();
	    	List<SimplifiedEvent> simplifiedList = new ArrayList<SimplifiedEvent>();
	    	for (int i = 0; i < eventList.size(); i++) {
	    		EventEntity event = eventList.get(i);
	    		//if(event.getOwner() == userService.findUserByToken(userToken).getName()) {
	    			simplifiedList.add(new kickbackapp.SimplifiedEvent(event.getId(), event.getName(), event.getOwner()));
	    		//}
	    	}
	    	return simplifiedList;   
    	}
    	System.out.println(userToken + "invalid");
    	return null;
    }
    
    
    @GetMapping("/events/{eventId}")
    public EventEntity findEvent(@PathVariable Integer eventId, @RequestHeader ("AuthToken") String userToken) throws IOException {
    	if(userService.isTokenValid(userToken)) {
    		return eventService.findEvent(eventId);
    	}
    	System.out.println(userToken + "invalid");
    	return null;
    }
    

    @PostMapping("/event")
    public EventEntity saveEvent( @RequestHeader("AuthToken") String userToken, @RequestBody EventEntity event) throws IOException {
    	if(userService.isTokenValid(userToken)) {
    		event.setOwner(userService.findUserByToken(userToken).getName());
	    	System.out.println("user of event" + event.getName());
	    	EventEntity saved = eventService.saveEvent(event);
	    	System.out.println("saving event");
	        return saved;
    	} else {
    	System.out.println("User not valid");
    	return null;
		}
    }


	@DeleteMapping("/event/{userId}")
    public void deleteEvent(@PathVariable Integer userId, @RequestHeader ("AuthToken") String userToken) throws IOException {
    	if(userService.isTokenValid(userToken)) {
    		eventService.deleteEvent(userId);
    	}
	}
}
