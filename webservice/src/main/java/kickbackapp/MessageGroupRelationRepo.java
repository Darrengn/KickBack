package kickbackapp;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageGroupRelationRepo extends CrudRepository<MessageGroupRelationEntity, Long> {
    List<MessageGroupRelationEntity> findByUserId(int userId);
    List<MessageGroupRelationEntity> findByGroupId(int groupId);
    MessageGroupRelationEntity findByUserIdAndGroupId(int userId, int GroupId);
}


