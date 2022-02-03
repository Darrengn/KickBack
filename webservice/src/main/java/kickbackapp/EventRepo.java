package kickbackapp;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepo extends CrudRepository<EventEntity, Long> {
    List<EventEntity> findAll();
    
    EventEntity findById(Integer id);
    EventEntity findByName(String name);
    
    
}


