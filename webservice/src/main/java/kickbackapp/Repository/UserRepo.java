package kickbackapp.Repository;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import kickbackapp.Entity.UserEntity;

@Repository
public interface UserRepo extends CrudRepository<UserEntity, Long> {
    UserEntity findByUserId(Integer userId);
    UserEntity findByName(String name);
    
}
