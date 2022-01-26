package kickbackapp;

import java.io.IOException;
import java.util.List;
import java.util.Random;
import java.util.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;
    
    private static final Random rand = new Random();

    public UserController() {

    }
/** Get all users and return a list of them (DEBUG ONLY)
    @GetMapping("/users")
    public List<UserEntity> findUsers(@RequestHeader("AuthToken") String userToken) throws IOException {
    	if(userService.isTokenValid(userToken)) {
	    	List<UserEntity>userList = userService.findUsers();
	    	for (UserEntity u:userList) {
	    		System.out.println(u.getName());
    		}
	    	return userList;
    	}
    	System.out.println("User not valid");
    	return null;
    }
	**/
    
	
	// NOTE: CAN ONLY ADD USER IF ALREADY VALID USER. 
	// TODO: check for users with same name
    @PostMapping("/users") 
    public UserEntity saveUser(@RequestBody UserEntity user, @RequestHeader("AuthToken") String userToken) throws IOException {
    	System.out.println("Save User");
    	if(userService.isTokenValid(userToken)) {
	    	UserEntity saved = userService.saveUser(user);
	        return saved;
    	} else {
			System.out.println("User is Invalid");
			return null;
		}
    }
    

    @DeleteMapping("/user/{userId}")
    public void deleteUser(@PathVariable Integer userId, @RequestHeader ("AuthToken") String userToken) throws IOException {
    	if(userToken == "dwimvalid") {
    		userService.deleteUser(userId);
    	}
	}
    

    @PostMapping("/login")
    public TokenEntity login(@RequestBody UserEntity loginUser) throws IOException {
		System.out.println("login with username:" + loginUser.getUsername() + "pw:" + loginUser.getPassword());
    	List<UserEntity>userList = userService.findUsers();
    	for(UserEntity dbUser : userList) {
    		if(dbUser.getUsername().equalsIgnoreCase(loginUser.getUsername()) && dbUser.getPassword().equals(loginUser.getPassword())) {
    			List<TokenEntity>tokenList = userService.findTokens();
    			for(TokenEntity token : tokenList) {
    				if(token.getUserId().equals(dbUser.getId())) {
    					System.out.println("User already has a token");
    					return token;
    				}
    			}
    			TokenEntity saved = new TokenEntity();
    			saved.setUserId(dbUser.getId());
    			saved.setToken(generateToken());
    			saved.setUsername(loginUser.getUsername());
    			 userService.saveToken(saved);
    			 System.out.println("Login Successful token:" + saved.getToken());
    			 return saved;
    		}
    	}
    	System.out.println("User is Invalid");
    	return null;
    }
    

    @DeleteMapping("/login/{token}")
    public void deleteTokenByString(@PathVariable String token, @RequestHeader ("AuthToken") String userToken) throws IOException{
    	userService.deleteTokenByString(userToken);
    }
    

    @DeleteMapping("/token/{tokenId}")
    public void deleteToken(@PathVariable Integer tokenId, @RequestHeader ("AuthToken") String userToken) throws IOException {
    	if(userService.isTokenValid(userToken)) {
    		userService.deleteToken(tokenId);
    	}
    }
    

    public static String generateToken() {
        byte[] byts = new byte[128];
        rand.nextBytes(byts);
        return Base64.getEncoder().encodeToString(byts).substring(0, 128);
    }
}
