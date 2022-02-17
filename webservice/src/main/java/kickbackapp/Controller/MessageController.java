package kickbackapp.Controller;

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

import kickbackapp.NotFoundException;
import kickbackapp.Entity.MessageGroupRelationEntity;
import kickbackapp.Entity.SimplifiedEvent;
import kickbackapp.Service.EventService;
import kickbackapp.Service.MessageService;
import kickbackapp.Service.UserService;

@RestController
@CrossOrigin
public class MessageController {

    @Autowired
    private UserService userService;
    
    @Autowired 
    private MessageService messageService;
    
    public MessageController() {
    }
    
    /**
     * Returns a list of groups that a user is a part of
     */
    @GetMapping("/messagegroup")
    public ResponseEntity getGroups( @RequestHeader("AuthToken") String userToken) throws IOException {
    	try {
    		int userId = userService.findUserByToken(userToken).getId();
    		Map<Integer, List<Integer>> groups = new HashMap<Integer, List<Integer>>();
    		//Loop thru all MessageRelations with userId in them
    		for(MessageGroupRelationEntity memberOfGroup: messageService.findMessageRelations(userId)) {
    			List<Integer> group = new ArrayList<Integer>();
    			//Find all users in each group and add them to a list
    			for (Integer memberInGroup: messageService.findUsersInMessage(userId, memberOfGroup.getGroupId())) {
    				group.add(memberInGroup);
    			}
    			//Map that list to the groupId in the mapping
    			groups.put(memberOfGroup.getGroupId(), group);
    		}
    		return ResponseEntity.status(HttpStatus.OK).body(groups);
    	} catch (NotFoundException e ) {
    		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
    	}
    }
    
    /**
     * Creates a new group given list of users
     */
    @PostMapping("/messagegroup/{groupName}")
    public ResponseEntity createGroup(@PathVariable String groupName, @RequestHeader("AuthToken") String userToken, @RequestBody List<String> users) throws IOException{
    	try {
    		System.out.println("Create group");
    		int userId = userService.findUserByToken(userToken).getId();
    		List<Integer> userIds = new ArrayList<Integer>();
    		userIds.add(userId);
    		for (String user: users) {
    			userIds.add(userService.findUserByName(user).getId());
    		}
    		Integer groupId = messageService.createGroup(userId, groupName, userIds);
    		return ResponseEntity.status(HttpStatus.OK).body(groupId);
    	} catch (NotFoundException e ) {
    		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
    	}
    }
    //TODO: Change MessageEntity sender to be username not id
    /**
     * Returns a list of messages for a group
     */
    @GetMapping("/message")
    public ResponseEntity getMessagesFromGroup( @RequestHeader("AuthToken") String userToken, @RequestBody int groupId) throws IOException {
    	try {
    		int userId = userService.findUserByToken(userToken).getId();
    		return ResponseEntity.status(HttpStatus.OK).body(messageService.findMessages(userId, groupId));
    	} catch (NotFoundException e ) {
    		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
    	}
    }
    
    /**
     * Sends a message to a group
     */
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
