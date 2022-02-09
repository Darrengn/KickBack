package kickbackapp;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends CrudRepository<UserEntity, Long> {

    List<UserEntity> findAll();
    UserEntity findById(Integer id);
    UserEntity findByName(String name);
    
}
