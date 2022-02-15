package kickbackapp.Repository;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import kickbackapp.Entity.MessageEntity;

@Repository
public interface MessageRepo extends CrudRepository<MessageEntity, Long> {
    List<MessageEntity> findByGroupId(int groupId);
}


