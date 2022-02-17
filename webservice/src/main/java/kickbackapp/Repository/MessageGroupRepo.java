package kickbackapp.Repository;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import kickbackapp.Entity.MessageGroupEntity;

@Repository
public interface MessageGroupRepo extends CrudRepository<MessageGroupEntity, Long> {
    MessageGroupEntity findById(int id);
}


