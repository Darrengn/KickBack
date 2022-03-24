package kickbackapp;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
    
    public EventEntity findEvent(Integer id) {
    	EventEntity event = eventRepo.findById(id);
    	return event;
    }
    

    public EventEntity saveEvent(EventEntity event) {
    	System.out.println("saveEvent");
    	return eventRepo.save(event);
    }
    
    
    public void deleteEvent(Integer id) {
    	System.out.println("find event for delete:"+id);
		EventEntity event = eventRepo.findById(id);
		if (event != null) {
			System.out.println("deleting event:"+event.getName());
			eventRepo.delete(event);
		}	
    }
}
