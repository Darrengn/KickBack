package kickbackapp;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RelationService {

    @Autowired
    private RelationRepo relationRepo;

    public RelationService() {

    }

    public List<RelationEntity> find() {
        System.out.println("findRelations");

        return relationRepo.findAll();
    }

    public RelationEntity findById(Integer id) {
        System.out.println("findRelationById");

        RelationEntity relation = relationRepo.findById(id);

        return relation;
    }

    public List<RelationEntity> findIncoming(Integer id) {
        System.out.println("findIncomingRelations");

        List<RelationEntity> relations = relationRepo.findDistinctByTo(id);

        return relations;
    }

    public List<RelationEntity> findOutgoing(Integer id) {
        System.out.println("findIncomingRelations");

        List<RelationEntity> relations = relationRepo.findDistinctByFrom(id);

        return relations;
    }

    public RelationEntity findThread(Integer from, Integer to) {
        System.out.println("findIncomingRelations");

        RelationEntity relation = relationRepo.findByFromAndTo(from, to);

        return relation;
    }

    public RelationEntity save(RelationEntity relation) {
        System.out.println("saveRelation");

        return relationRepo.save(relation);
    }

    public void delete(Integer id) {
        System.out.println("find relation for delete:" + id);
        RelationEntity relation = relationRepo.findById(id);

        if (relation != null) {
            System.out.println("deleting relation:" + relation.getId());
            relationRepo.delete(relation);
        }
    }
}
