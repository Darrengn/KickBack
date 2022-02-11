package kickbackapp;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MessageService {
	
	@Autowired
	private MessageRepo messageRepo;
	
	@Autowired 
	private MessageGroupRepo groupRepo;

    public MessageService() {

    }
    
    public List<MessageGroupEntity> findMessageGroups(int userId) {
    	/**
    	 * Returns a list of all groups user is a part of and who is in each group
    	 */
    	return null;
    }
    
    
    public List<MessageEntity> findMessages(int userId, int groupId) {
    	/**
    	 * Returns a list of all messages from a group
    	 * Only returns messages from unblocked users?
    	 */
    	return null;
    }
    
    public int createGroup(int userId, String initialMessage, List members) {
    	/**
    	 * Creates a new group with members and returns the groupId
    	 * 
    	 */
    	return -1;
    }
    
    public MessageGroupEntity addToGroup(int userId, int groupId, int addedId) {
    	/**
    	 * Adds user of addedId to group of groupId
    	 */
    	return null;
    	
    }
    
    public MessageEntity sendMessage(int userId, int groupId, String message) {
    	/**
    	 * Adds message to group after checking if sender is part of group
    	 */
    	return null;
    }
    
    public List<Integer> findUsersInMessage(int userId, int groupId) {
    	/**
    	 * Returns a list of all user ids in a MessageGroup
    	 */
    	return null;
    }
    
    public void kickMember(int userId, int groupId, int kickedId) {
    	/**
    	 * Removes userId from messageGroup if userId is owner
    	 */
    	if (true) {
    		leaveGroup(kickedId, groupId);
    	}
    }
    
    public void leaveGroup(int userId, int groupId) {
    	/**
    	 * Deletes userId from MessageGroup 
    	 * checks if last user in Group before deleting messsages
    	 */
    }
    
    

}
