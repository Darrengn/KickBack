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
	private MessageGroupRelationRepo relationRepo;
	
	@Autowired
	private MessageGroupRepo groupRepo;

    public MessageService() {

    }
    
	/**
	 * Returns a list of all groups user is a part of
	 */
    public List<MessageGroupRelationEntity> findMessageRelations(int userId) {    	
    	return relationRepo.findByUserId(userId);
	}
    
	/**
	 * Returns a list of all messages from a group
	 * Only returns messages from unblocked users?
	 */
    public List<MessageEntity> findMessages(int userId, int groupId) throws NotFoundException {
    	if(relationRepo.findByUserIdAndGroupId(userId, groupId) != null) {
    		System.out.println("User is part of group");
    		return messageRepo.findByGroupId(groupId);
    	} else {
    		throw new NotFoundException("User is not part of group");
    	}
    }
    
	/**
	 * Creates a new group with members and returns the groupId
	 * 
	 */
    public int createGroup(int userId, String name, List<Integer> members) {
    	MessageGroupEntity newGroup = new MessageGroupEntity();
    	newGroup.setName(name);
    	newGroup.setOwner(userId);
    	int groupId = groupRepo.save(newGroup).getId();
    	System.out.println("Creating new group of id"+ groupId);
    	for(Integer memberId: members) {
    		MessageGroupRelationEntity relation = new MessageGroupRelationEntity();
    		relation.setGroupId(groupId);
    		relation.setUserId(memberId);
    		relationRepo.save(relation);
    		System.out.println("Adding member relation" + memberId);
    	}
    	return groupId;
    }
    
	/**
	 * Adds user of addedId to group of groupId
	 */
    public MessageGroupRelationEntity addToGroup(int userId, int groupId, int addedId) throws NotFoundException {
    	if (groupRepo.findById(groupId) != null) {
    		if(relationRepo.findByUserIdAndGroupId(userId, groupId) != null) {
	    		System.out.println("User is a part of group");
	    		MessageGroupRelationEntity mem = new MessageGroupRelationEntity();
	    		mem.setGroupId(groupId);
	    		mem.setUserId(userId);
	    		relationRepo.save(mem);
	    		return mem;
    		}else {
	    		throw new NotFoundException("User is not part of group");
	    	}	
    	} else {
    		throw new NotFoundException("No such group with id of " + groupId);
    	}
    }
    
	/**
	 * Adds message to group after checking if sender is part of group
	 */
    public MessageEntity sendMessage(int userId, int groupId, String message) throws NotFoundException {
    	if (groupRepo.findById(groupId) != null) {
    		if(relationRepo.findByUserIdAndGroupId(userId, groupId) != null) {
    			System.out.println("User is a part of group");
        		MessageEntity msg = new MessageEntity();
        		msg.setSender(userId); 
        		msg.setGroupId(groupId); 
        		msg.setMessage(message);
        		messageRepo.save(msg);
        		return msg;
    		}else {
	    		throw new NotFoundException("User is not part of group");
	    	}	
    	} else {
    		throw new NotFoundException("No such group with id of " + groupId);
    	}
    }
    
	/**
	 * Returns a list of all user ids in a MessageGroup
	 */
    public List<Integer> findUsersInMessage(int userId, int groupId) throws NotFoundException {
    	if (groupRepo.findById(groupId) != null) {
    		if(relationRepo.findByUserIdAndGroupId(userId, groupId) != null) {
        		System.out.println("User is a part of group");
        		List<MessageGroupRelationEntity> groupList = relationRepo.findByGroupId(groupId);
        		List<Integer> userList = new ArrayList<Integer>();
        		for(MessageGroupRelationEntity member: groupList) {
        			userList.add(member.getUserId());
        		}
        		return userList;
			} else {
				throw new NotFoundException("User is not part of group");
	    	}	
    	} else {
    		throw new NotFoundException("No such group with id of " + groupId);
    	}    
	}
    
	/**
	 * Removes userId from messageGroup if userId is owner
	 */    
    public void kickMember(int userId, int groupId, int kickedId) throws NotFoundException {
    	if (true) {
    		leaveGroup(kickedId, groupId);
    	}
    }
    
	/**
	 * Deletes userId from MessageGroup 
	 * checks if last user in Group before deleting messsages
	 */
    public void leaveGroup(int userId, int groupId) throws NotFoundException {
    	if(relationRepo.findByUserIdAndGroupId(userId, groupId) != null) {
    		System.out.println("User is a part of group");

    	} else {
    		throw new NotFoundException("User is not part of group");
    	}	
    }
    
    

}
