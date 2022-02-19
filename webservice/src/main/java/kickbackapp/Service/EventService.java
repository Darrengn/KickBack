package kickbackapp.Service;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kickbackapp.NotFoundException;
import kickbackapp.Entity.EventEntity;
import kickbackapp.Entity.UserEntity;
import kickbackapp.Repository.EventRepo;

@Service
public class EventService {

    @Autowired
    private EventRepo eventRepo;

    public EventService() {

    }
    /**
     * Returns all events
     */
    public List<EventEntity> findEvents() {
    	System.out.println("findEvents");
        return eventRepo.findAll();
    }
    
    /**
     * Returns an event given the id
     */
    public EventEntity findEvent(Integer id) throws NotFoundException {
    	EventEntity event = eventRepo.findById(id);
    	if (event != null) {
    		return event;
    	} else {
    		throw new NotFoundException(String.format("No such event with id %d", id));
    	}
    }
    
    /**
     * Saves event with owner as owner
     */
    public EventEntity saveEvent(EventEntity event, String owner) {
    	System.out.println("saveEvent");
    	event.setOwner(owner);
    	return eventRepo.save(event);
    }
    
    /**
     * Updates user with new values but ignores null values
     */
    public EventEntity updateEvent(EventEntity event) throws NotFoundException {
    	event.updateValues(event);
    	eventRepo.save(event);
    	return event;
    }
    
    /**
     * Deletes event if user is owner of event
     */
 	public void deleteEvent(Integer id, String owner) throws NotFoundException {
    	System.out.println("find event for delete:"+ id + owner);
		EventEntity event = eventRepo.findById(id);
		if (event != null) {
			if (event.getOwner().equals(owner)) {
				System.out.println("deleting event:"+event.getName());
				eventRepo.delete(event);
			} else {
				//TODO Change to new exception
				throw new NotFoundException(String.format("You are not owner of event %d", id));
			}
		} else {
    		throw new NotFoundException(String.format("No such event with id %d", id));
    	}
    }
}
