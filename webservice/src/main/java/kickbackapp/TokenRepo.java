package kickbackapp;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TokenRepo extends CrudRepository<TokenEntity, Long> {

    List<TokenEntity> findAll();
    TokenEntity findById(Integer id);
    TokenEntity findByUserid(Integer userid);
    TokenEntity findByToken(String token);
}
