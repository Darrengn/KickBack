package kickbackapp;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Dictionary;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
    //returns all groups of all users
    @GetMapping("/messagegroup")
    public ResponseEntity getGroups( @RequestHeader("AuthToken") String userToken) throws IOException {
    	try {
    		int userId = userService.findUserByToken(userToken).getId();
    		Map<Integer, List<Integer>> groups = new HashMap<Integer, List<Integer>>();
    		for(MessageGroupRelationEntity member: messageService.findMessageRelations(userId)) {
    			List<Integer> group = groups.getOrDefault(member.getGroupId(), new ArrayList<Integer>());
    			group.add(member.getId());
    			groups.put(member.getGroupId(), group);
    		}
    		return ResponseEntity.status(HttpStatus.OK).body(groups);
    	} catch (NotFoundException e ) {
    		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
    	}
    }
    
    @PostMapping("/messagegroup/{groupName}")
    public ResponseEntity createGroup(@PathVariable String groupName, @RequestHeader("AuthToken") String userToken, @RequestBody List<String> users) throws IOException{
    	try {
    		System.out.println("Create group");
    		int userId = userService.findUserByToken(userToken).getId();
    		System.out.println("x");
    		List<Integer> userIds = new ArrayList<Integer>();
    		for (String user: users) {
    			userIds.add(userService.findUserByName(user).getId());
    		}
    		messageService.createGroup(userId, groupName, userIds);
    		return ResponseEntity.status(HttpStatus.OK).body(null);
    	} catch (NotFoundException e ) {
    		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
    	}
    }

    @GetMapping("/message")
    public ResponseEntity getMessages( @RequestHeader("AuthToken") String userToken, @RequestBody int groupId) throws IOException {
    	try {
    		int userId = userService.findUserByToken(userToken).getId();
    		return ResponseEntity.status(HttpStatus.OK).body(messageService.findMessages(userId, groupId));
    	} catch (NotFoundException e ) {
    		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
    	}
    }
    
    @PostMapping("/message/{groupId}")
    public ResponseEntity sendMessage(@PathVariable Integer groupId, @RequestHeader("AuthToken") String userToken, @RequestBody String message) throws IOException {
    	try {
    		int userId = userService.findUserByToken(userToken).getId();
    		return ResponseEntity.status(HttpStatus.OK).body(messageService.sendMessage(userId, groupId, message));
    	} catch (NotFoundException e ) {
    		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
    	}
    }
}
