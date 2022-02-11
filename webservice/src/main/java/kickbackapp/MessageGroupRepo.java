package kickbackapp;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageGroupRepo extends CrudRepository<MessageGroupEntity, Long> {
    List<MessageGroupEntity> findByUserId(int userId);
    List<MessageGroupEntity> findByGroupId(int groupId);
    MessageGroupEntity findByUserIdAndGroupId(int userId, int GroupId);
}


