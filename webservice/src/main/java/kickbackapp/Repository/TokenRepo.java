package kickbackapp.Repository;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import kickbackapp.Entity.TokenEntity;

@Repository
public interface TokenRepo extends CrudRepository<TokenEntity, Long> {
    TokenEntity findByUserId(Integer userId);
    TokenEntity findByToken(String token);
}
