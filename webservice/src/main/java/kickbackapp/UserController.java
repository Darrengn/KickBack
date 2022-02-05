package kickbackapp;

import java.io.IOException;
import java.util.Random;
import java.util.Base64;
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

@RestController
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private LoginUserService loginUserService;
    
    private static final Random rand = new Random();

    public UserController() {

    }
	
    
    @GetMapping("/user/{name}")
    public ResponseEntity getUser(@PathVariable String name) throws IOException {
    	/**
    	 * Gets details of specific user given username
    	 */
    	System.out.println("Finding user by name");
    	try {
    		UserEntity user = userService.findUserByName(name);
    		return ResponseEntity.status(HttpStatus.OK).body(user);
    	} catch(Exception e) {
    		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("No user by name " + name);
    	}
    }
    

    @PostMapping("/createlogin") 
    public ResponseEntity<String> createlogin(@RequestBody LoginUserEntity user) throws IOException {
    	/**
    	 * Creates a new login user if given a unique username and returns AuthToken
    	 */
    	System.out.println("Saving new user");
    	if(user.getUsername() != null && user.getPassword() != null) {
	    	if (!loginUserService.saveLoginUser(user)) {
	    		System.out.println("Username is already taken");
	    	} else { 
	    		String token = login(user).getBody();
	    		System.out.println(token);
	    		return ResponseEntity.status(HttpStatus.OK).body(token);
	    	}
    	} else {
    		System.out.println("Cannot create user with null username or password");
    	}
    	return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Fail");
    }
    
    
    @PostMapping("/createuser")
    public ResponseEntity<String> createUser(@RequestBody UserEntity user, @RequestHeader ("AuthToken") String authToken) throws IOException {
    	/**
    	 * Creates a new user if given all required values
    	 */
    	user.setUserId(userService.findUserByToken(authToken).getId());
		if (user.getUserId() == null) {
			userService.saveUser(user);
			return ResponseEntity.status(HttpStatus.OK).body("User Created");
		} else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User already created");
		}    	
    }
    
    
    @PutMapping("/user/{userId}")
    public ResponseEntity<String> updateUser(@RequestBody UserEntity user, @RequestHeader ("AuthToken") String userToken) throws IOException {
    	try {
    		userService.updateUser(userToken,user);
    		return ResponseEntity.status(HttpStatus.OK).body(null);
    	} catch (NullPointerException e){
    		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
    	}
    }
    

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginUserEntity loginUser) throws IOException {
    	/**
    	 * Logs in user given valid username and password and returns AuthToken
    	 */
    	try {
			System.out.println("login with username:" + loginUser.getUsername());
			int userId = loginUserService.findLoginUser(loginUser.getUsername(), loginUser.getPassword()).getId();
			
    		TokenEntity token = userService.findTokenByUserid(userId);
    		if(token != null) {
				System.out.println("User already has a token");
    		} else {
    			token = new TokenEntity(); token.setUserid(userId); token.setToken(generateToken());
    			userService.saveToken(token);
    		}
    		
			System.out.println("Login Successful token:" + token.getToken());
			return ResponseEntity.status(HttpStatus.OK).body(token.getToken());
    	} catch(NullPointerException e) {
    		System.out.println("Invalid Login");
    		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
    	}
    }
    

    @DeleteMapping("/user/{userId}")
    public void deleteUser(@PathVariable Integer userId, @RequestHeader ("AuthToken") String userToken) throws IOException {
    	/**
    	 * Deletes user
    	 */
    	if(userToken == "dwimvalid") {
    		userService.deleteUser(userId);
    	}
	}
    
    
    @DeleteMapping("/login/{token}")
    public void deleteTokenByString(@PathVariable String token, @RequestHeader ("AuthToken") String userToken) throws IOException {
    	userService.deleteTokenByString(userToken);
    }
    

    public static String generateToken() {
        byte[] byts = new byte[128];
        rand.nextBytes(byts);
        return Base64.getEncoder().encodeToString(byts).substring(0, 128);
    }
}
