package kickbackapp.Service;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kickbackapp.NotFoundException;
import kickbackapp.Entity.EventEntity;
import kickbackapp.Repository.EventRepo;

@Service
public class EventService {

    @Autowired
    private EventRepo eventRepo;

    public EventService() {

    }


    public List<EventEntity> findEvents() {
    	System.out.println("findEvents");
        return eventRepo.findAll();
    }
    
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
     * Deletes event if user is owner of event
     */
 	public void deleteEvent(Integer id, String owner) {
    	System.out.println("find event for delete:"+id);
		EventEntity event = eventRepo.findById(id);
		if (event != null) {
			if (event.getOwner() ==  owner) {
				System.out.println("deleting event:"+event.getName());
				eventRepo.delete(event);
			}
		}	
    }
}
