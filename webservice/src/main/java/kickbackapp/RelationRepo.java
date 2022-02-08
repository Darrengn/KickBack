package kickbackapp;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.query.*;

@Repository
public interface RelationRepo extends CrudRepository<RelationEntity, Long> {
    List<RelationEntity> findAll();

    RelationEntity findById(Integer id);

    RelationEntity findByName(String name);

    List<RelationEntity> findDistinctByFrom(Integer from);

    List<RelationEntity> findDistinctByTo(Integer to);

    RelationEntity findByFromAndTo(Integer from, Integer to);

    /*
     * @Query("SELECT r FROM Request r WHERE r.from = :from"); List<RelationEntity>
     * findByFrom(@Param("from") Integer from);
     * 
     * @Query("SELECT r FROM Request r WHERE r.to = :to"); List<RelationEntity>
     * findByTo(@Param("to") Integer to);
     * 
     * @Query("SELECT r FROM Request r WHERE r.from = :from and r.to = :to");
     * List<RelationEntity> findByBetween(@Param("from") Integer from, @Param("to")
     * Integer to);
     */
}
