package kickbackapp.Controller;

import java.io.IOException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import kickbackapp.Status;
import kickbackapp.Entity.RelationEntity;
import kickbackapp.Service.RelationService;
import kickbackapp.Service.UserService;

@RestController
@CrossOrigin
public class RelationController {

	@Autowired
	private RelationService relationService;
	@Autowired
	private UserService userService;

	public RelationController() {

	}
	
	/**
	 * Gets info on specific relation id
	 */
	@GetMapping("/relation/{id}")
	public ResponseEntity getRelation(@RequestHeader("AuthToken") String authToken, @PathVariable Integer id)
			throws IOException {
		System.out.println("find relation");

		try {
			RelationEntity relation = relationService.findById(id);
			Integer userId = userService.findUserByToken(authToken).getUserId();

			if (userId == relation.getTo() || userId == relation.getFrom()) {
				return ResponseEntity.status(HttpStatus.OK).body(relation);
			}

			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid resource or insufficient permissions");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Unable to retrieve relation");
		}
	}

	/**
	 * Gets all friend requests pointing to an id
	 */
	@GetMapping("/relation/to/{id}")
	public ResponseEntity getIncoming(@RequestHeader("AuthToken") String authToken, @PathVariable Integer id)
			throws IOException {
		System.out.println("Finding incoming relations");

		try {
			Integer userId = userService.findUserByToken(authToken).getUserId();

			if (userId == id) {
				List<RelationEntity> relations = relationService.findIncoming(id);

				return ResponseEntity.status(HttpStatus.OK).body(relations);
			}

			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Insufficient permissions");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid resource");
		}
	}
	
	/**
	 * Gets all friend requests originating from an id
	 */
	@GetMapping("/relation/from/{id}")
	public ResponseEntity getOutgoing(@RequestHeader("AuthToken") String authToken, @PathVariable Integer id)
			throws IOException {
		System.out.println("Finding outgoing relations");

		try {
			Integer userId = userService.findUserByToken(authToken).getUserId();

			if (userId != id) {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Insufficient permissions");
			}

			List<RelationEntity> relations = relationService.findOutgoing(id);

			return ResponseEntity.status(HttpStatus.OK).body(relations);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid resource");
		}
	}

	/**
	 * Creates a new relation if not exist.
	 */
	@PostMapping("/relation/create")
	public ResponseEntity<String> sendRequest(@RequestHeader("AuthToken") String authToken, @RequestBody Integer id)
			throws IOException {
		System.out.println("Creation relation");

		try {
			Integer userId = userService.findUserByToken(authToken).getUserId();
			RelationEntity relation = relationService.findThread(userId, id);

			if (userId == null) {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Insufficient permissions");
			}

			if (relation != null) {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Relation already exists");
			}

			relation = new RelationEntity();
			relation.setFrom(userId);
			relation.setTo(id);
			relation.setStatus(Status.REQUESTED);
			relationService.save(relation);

			return ResponseEntity.status(HttpStatus.OK).body("Friend request sent");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid resource");
		}
	}
	
	/**
	 * Creates a new user if given all required values
	 */
	@PutMapping("/relation/{id}/accept")
	public ResponseEntity<String> updateRequest(@RequestHeader("AuthToken") String authToken, @PathVariable Integer id)
			throws IOException {
		System.out.println("Update request");

		try {
			RelationEntity relation = relationService.findById(id);
			Integer userId = userService.findUserByToken(authToken).getUserId();

			if (relation == null) {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Relation does not exist");
			}

			if (userId != relation.getTo()) {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Insufficient permissions");
			}

			relation.setStatus(Status.ACCEPTED);
			relationService.save(relation);

			return ResponseEntity.status(HttpStatus.OK).body("Friend request accepted");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error");
		}
	}
	
	/**
	 * Creates a new user if given all required values
	 */
	@DeleteMapping("/relation/{id}")
	public ResponseEntity<String> deleteRequest(@RequestHeader("AuthToken") String authToken, @PathVariable Integer id)
			throws IOException {
		System.out.println("Delete request");

		try {
			RelationEntity relation = relationService.findById(id);
			Integer userId = userService.findUserByToken(authToken).getUserId();

			if (relation == null) {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Relation does not exist");
			}

			if (userId != relation.getTo() || userId != relation.getFrom()) {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Insufficient permissions");
			}

			relationService.delete(id);

			return ResponseEntity.status(HttpStatus.OK).body("Friend request deleted");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error");
		}
	}
}
