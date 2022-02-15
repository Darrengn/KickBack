package kickbackapp.Repository;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import kickbackapp.Entity.EventEntity;

@Repository
public interface FriendRepo extends CrudRepository<EventEntity, Long> {
    List<EventEntity> findAll();
    
    EventEntity findById(Integer id);
    EventEntity findByName(String name);
    
    
}


