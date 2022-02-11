package kickbackapp;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageRepo extends CrudRepository<MessageEntity, Long> {
    List<MessageEntity> findByGroupId(int groupId);
}


