package kickbackapp;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginUserRepo extends CrudRepository<LoginUserEntity, Long> {

    List<LoginUserEntity> findAll();
    LoginUserEntity findById(Integer id);
    LoginUserEntity findByUsernameAndPassword(String username, String password);
    LoginUserEntity findByUsername(String username);
    
}
