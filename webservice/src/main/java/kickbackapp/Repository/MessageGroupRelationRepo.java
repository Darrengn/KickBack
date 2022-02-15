package kickbackapp.Repository;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import kickbackapp.Entity.MessageGroupRelationEntity;

@Repository
public interface MessageGroupRelationRepo extends CrudRepository<MessageGroupRelationEntity, Long> {
    List<MessageGroupRelationEntity> findByUserId(int userId);
    List<MessageGroupRelationEntity> findByGroupId(int groupId);
    MessageGroupRelationEntity findByUserIdAndGroupId(int userId, int GroupId);
}


