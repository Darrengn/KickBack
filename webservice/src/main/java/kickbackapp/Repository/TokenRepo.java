package kickbackapp.Repository;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import kickbackapp.Entity.TokenEntity;

@Repository
public interface TokenRepo extends CrudRepository<TokenEntity, Long> {
    TokenEntity findByUserid(Integer userid);
    TokenEntity findByToken(String token);
}
