package kickbackapp;


import java.util.ArrayList;
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
    	
    	return groupRepo.findByUserId(userId);
	}
    
    
    public List<MessageEntity> findMessages(int userId, int groupId) throws NullPointerException {
    	/**
    	 * Returns a list of all messages from a group
    	 * Only returns messages from unblocked users?
    	 */
    	if(groupRepo.findByUserIdAndGroupId(userId, groupId) != null) {
    		System.out.println("User is part of group");
    		return messageRepo.findByGroupId(groupId);
    	} else {
    		throw new NullPointerException("User is not part of group");
    	}
    }
    
    public int createGroup(int userId, String initialMessage, List<Integer> members) {
    	/**
    	 * Creates a new group with members and returns the groupId
    	 * 
    	 */
    	/*
    	for(int userid: members) {
    		MessageGroupEntity mem = new MessageGroupEntity();
    		mem.setGroupId(userId); mem.setUserId(userid);
    		groupRepo.save(mem)
    	}
    	groupRepo.save(null);
    	*/
    	return -1;
    }
    
    public MessageGroupEntity addToGroup(int userId, int groupId, int addedId) {
    	/**
    	 * Adds user of addedId to group of groupId
    	 */
    	if(groupRepo.findByUserIdAndGroupId(userId, groupId) != null) {
    		System.out.println("User is a part of group");
    		MessageGroupEntity mem = new MessageGroupEntity();
    		mem.setGroupId(groupId); mem.setUserId(userId);
    		groupRepo.save(mem);
    		return mem;
    	} else {
    		throw new NullPointerException("User is not part of group");
    	}	
    }
    
    public MessageEntity sendMessage(int userId, int groupId, String message) {
    	/**
    	 * Adds message to group after checking if sender is part of group
    	 */
    	if(groupRepo.findByUserIdAndGroupId(userId, groupId) != null) {
    		System.out.println("User is a part of group");
    		MessageEntity msg = new MessageEntity();
    		msg.setSender(userId); msg.setGroupId(groupId); msg.setMessage(message);
    		messageRepo.save(msg);
    		return msg;
    	} else {
    		throw new NullPointerException("User is not part of group");
    	}	
    }
    
    public List<Integer> findUsersInMessage(int userId, int groupId) {
    	/**
    	 * Returns a list of all user ids in a MessageGroup
    	 */
    	if(groupRepo.findByUserIdAndGroupId(userId, groupId) != null) {
    		System.out.println("User is a part of group");
    		List<MessageGroupEntity> groupList = groupRepo.findByGroupId(groupId);
    		List<Integer> userList = new ArrayList<Integer>();
    		for(MessageGroupEntity member: groupList) {
    			userList.add(member.getUserId());
    		}
    		return userList;
    	} else {
    		throw new NullPointerException("User is not part of group");
    	}	
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
    	if(groupRepo.findByUserIdAndGroupId(userId, groupId) != null) {
    		System.out.println("User is a part of group");

    	} else {
    		throw new NullPointerException("User is not part of group");
    	}	
    }
    
    

}
