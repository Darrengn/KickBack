package kickbackapp.Service;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kickbackapp.NotFoundException;
import kickbackapp.Entity.LoginUserEntity;
import kickbackapp.Entity.TokenEntity;
import kickbackapp.Entity.UserEntity;
import kickbackapp.Repository.LoginUserRepo;
import kickbackapp.Repository.TokenRepo;
import kickbackapp.Repository.UserRepo;

@Service
public class UserService {
	
    @Autowired
    private LoginUserRepo loginUserRepo;
    
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private TokenRepo tokenRepo;

    public UserService() {

    }
    
    /*-----------LOGIN METHODS----------*/
    /**
     * Returns the Login User for given username and password
     */
    public LoginUserEntity findLoginUser(String username, String password) throws NotFoundException {
    	LoginUserEntity loginUser = loginUserRepo.findByUsernameAndPassword(username,password);
    	if (loginUser != null) {
	    	return loginUser;
    	} else {
    		throw new NotFoundException("No such Login user");
    	}
    }

    /**
     * Creates a new login user if there isn't one already
     */
    public boolean saveLoginUser(LoginUserEntity loginUser) {
		if(loginUserRepo.findByUsername(loginUser.getUsername().toLowerCase()) == null) {
			System.out.println("Saving User");
			loginUserRepo.save(loginUser);
			return true;
		} else {
			System.out.println(String.format("Already a user with name %s", loginUser.getUsername()));
			return false;
		}
    }
    
    /**
     * Delete login user 
     */
    public void deleteLoginUser(Integer id) {
		LoginUserEntity user = loginUserRepo.findById(id);
		System.out.println("deleting user:" + user.getUsername());
		loginUserRepo.delete(user);
    }
    
    /**
     * Find token given user id
     */
    public TokenEntity findTokenByUserId(int userId) throws NotFoundException {
        TokenEntity  token = tokenRepo.findByUserId(userId);
        if( token != null) {
        	return token;
        } else {
        	throw new NotFoundException(String.format("User id  %d is invalid",userId));
        }
    }
    
    public TokenEntity saveToken(TokenEntity token) {
    	System.out.println("saveToken");
    	return tokenRepo.save(token);
    }
    
    /*----------User Methods----------*/
    public String findUsernameByUserId(Integer userId) throws NotFoundException {
    	String username = loginUserRepo.findById(userId).getUsername();
    	if (username != null) {
    		return username;
    	} else {
    		throw new NotFoundException(String.format("No such user with id %d", userId));
    	}
    }
    
    /**
     * Finds user id from username(NOT NAME)
     */
    public Integer findUserIdByUsername(String name) throws NotFoundException {
    	Integer username = loginUserRepo.findByUsername(name).getId();
    	if (username != null) {
    		return username;
    	} else {
    		throw new NotFoundException(String.format("No such user with id %s", name));
    	}
    }
    
    public UserEntity findUserByUserId(Integer id) throws NotFoundException {
    	UserEntity user = userRepo.findByUserId(id);
    	if (user != null) {
    		return user;
    	} else {
    		throw new NotFoundException(String.format("id %d is invalid",id));
    	}
    }
 
    public UserEntity findUserByUsername(String username) throws NotFoundException {
    	System.out.println("find user by" + username);
    	LoginUserEntity user = loginUserRepo.findByUsername(username);
    	if (user != null) {
    		return findUserByUserId(user.getId());
    	} else {
    		throw new NotFoundException(String.format("name %s is invalid",username));
    	}

    }
    
    public UserEntity findUserByToken(String token) throws NotFoundException {
    	System.out.println("Find user by token");
    	TokenEntity tokenEntity = tokenRepo.findByToken(token);
    	if (tokenEntity != null) {
    		return findUserByUserId(tokenEntity.getUserId());
    	} else {
    		throw new NotFoundException("Token not valid");
    	}
    }
    
    /**
     * Finds user id by token. Used for creating user
     */
    public Integer findUserIdByToken(String token) throws NotFoundException {
    	System.out.println("Find user by token");
    	TokenEntity tokenEntity = tokenRepo.findByToken(token);
    	if (tokenEntity != null) {
    		return tokenEntity.getUserId();
    	} else {
    		throw new NotFoundException("Token not valid");
    	}
    }
   
    /**
     * Updates user with new values but ignores null values
     */
    public UserEntity updateUser(UserEntity user) throws NotFoundException {
    	user.updateValues(user);
    	userRepo.save(user);
    	return user;
    }

    public UserEntity saveUser(UserEntity user) {
    	System.out.println("saveUser");
    	return userRepo.save(user);
    }
    
    public void deleteUser(Integer id, String token) throws NotFoundException {
    	System.out.println("find user for delete:" + id);
		UserEntity user = userRepo.findByUserId(id);
		if (user != null) {
			System.out.println("deleting user:" + user.getName());
			userRepo.delete(user);
			deleteLoginUser(user.getUserId());
	    	deleteToken(token);
		} else {
			throw new NotFoundException("User does not exist");
		}
    }
    
    public void deleteToken(Integer id) {
    	TokenEntity token = tokenRepo.findByUserId(id);
		System.out.println("deleting token");
		deleteToken(token.getId());
    }
   
    public void deleteToken(String userToken) {
    	TokenEntity token = tokenRepo.findByToken(userToken);
		System.out.println("deleting token");
    	deleteToken(token.getId());	
    }
}
