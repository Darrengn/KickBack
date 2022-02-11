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
public class MessageController {

    @Autowired
    private EventService eventService;


    @Autowired
    private UserService userService;
    

    @Autowired 
    private MessageService messageService;
    
    
    public MessageController() {

    }
    
    @GetMapping("/messagegroup")
    public ResponseEntity getGroups( @RequestHeader("AuthToken") String userToken) throws IOException {
    	try {
    		int userId = userService.findUserByToken(userToken).getId();
    		List<String> usersInGroup = new ArrayList<String>();
    		for(MessageGroupEntity member: messageService.findMessageGroups(userId)) {
    			usersInGroup.add(userService.findUserById(member.getId()).getName());
    		}
    		return ResponseEntity.status(HttpStatus.OK).body(usersInGroup);
    	} catch (NullPointerException e ) {
    		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
    	}
    }

    @GetMapping("/message")
    public ResponseEntity getMessages( @RequestHeader("AuthToken") String userToken, @RequestBody int groupId) throws IOException {
    	try {
    		int userId = userService.findUserByToken(userToken).getId();
    		return ResponseEntity.status(HttpStatus.OK).body(messageService.findMessages(userId, groupId));
    	} catch (NullPointerException e ) {
    		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
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
