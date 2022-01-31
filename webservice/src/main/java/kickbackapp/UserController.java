package kickbackapp;

import java.io.IOException;
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
    @Autowired
    private LoginUserService loginUserService;
    
    private static final Random rand = new Random();

    public UserController() {

    }
	
    @GetMapping("/user/{username}")
    public UserEntity getUser(@PathVariable String username) throws IOException {
    	/**
    	 * Gets details of specific user given username
    	 */
    	System.out.println("Finding user by name");
    	try {
    		UserEntity user = userService.findUserByName(username);
    		return user;
    	} catch(Exception e) {
    		System.out.println("No user by name: " + username);
    		return null;
    	}
    }
    

    @PostMapping("/saveuser") 
    public String saveUser(@RequestBody LoginUserEntity user) throws IOException {
    	/**
    	 * Creates a new user if given a unique username and returns AuthToken
    	 */
    	System.out.println("Saving new user");
    	if(user.getUsername() != null && user.getPassword() != null) {
	    	if (!loginUserService.saveLoginUser(user)) {
	    		System.out.println("Username is already taken");
	    	} else { 
	    		String token = login(user);
	    		System.out.println(token);
	    		return token;
	    	}
    	} else {
    		System.out.println("Cannot create user with null username or password");
    	}
    	return "FAIL";
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
    

    @PostMapping("/login")
    public String login(@RequestBody LoginUserEntity loginUser) throws IOException {
    	/**
    	 * Logs in user given valid username and password and returns AuthToken
    	 */
    	try {
			System.out.println("login with username:" + loginUser.getUsername() + "pw:" + loginUser.getPassword());
			int userId = loginUserService.findLoginUser(loginUser.getUsername(), loginUser.getPassword()).getId();
    		TokenEntity token = userService.findTokenByUserid(userId);
    		if(token != null) {
				System.out.println("User already has a token");
    		} else {
    			token = new TokenEntity(); token.setUserid(userId); token.setToken(generateToken());
    			userService.saveToken(token);
    		}
			System.out.println("Login Successful token:" + token.getToken());
			return token.getToken();
    	} catch(Exception e) {
    		System.out.println("user is invalid");
    		return null;
    	}
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
