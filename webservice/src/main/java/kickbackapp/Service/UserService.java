package kickbackapp.Service;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kickbackapp.NotFoundException;
import kickbackapp.Entity.TokenEntity;
import kickbackapp.Entity.UserEntity;
import kickbackapp.Repository.TokenRepo;
import kickbackapp.Repository.UserRepo;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;
    @Autowired
    private TokenRepo tokenRepo;

    public UserService() {

    }
    
    public UserEntity findUserById(Integer id) throws NotFoundException {
    	UserEntity user = userRepo.findByUserId(id);
    	if (user != null) {
    		return user;
    	} else {
    		throw new NotFoundException(String.format("id %d is invalid",id));
    	}
    }
    
    public UserEntity findUserByName(String name) throws NotFoundException {
    	System.out.println("find user by" + name);
    	UserEntity user = userRepo.findByName(name);
    	if(user != null) {
	    	user.setUserId(0);
	    	return user;
    	} else {
    		throw new NotFoundException(String.format("name %s is invalid",name));
    	}
    }
    

    public UserEntity findUserByToken(String token) throws NotFoundException {
    	System.out.println("Find user by token");
    	TokenEntity tokenEntity = tokenRepo.findByToken(token);
    	if (tokenEntity != null) {
    		return findUserById(tokenEntity.getUserid());
    	} else {
    		throw new NotFoundException("Token not valid");
    	}
    }
   
    
    public List<TokenEntity> findTokens() {
    	System.out.println("findTokens");
        return tokenRepo.findAll();
    }
    
    
    public TokenEntity findTokenByUserId(int userId) throws NotFoundException {
        TokenEntity  token = tokenRepo.findByUserid(userId);
        if( token != null) {
        	return token;
        } else {
        	throw new NotFoundException(String.format("User id  %d is invalid",userId));
        }
    }
    
    /**
     * Updates user with new values but ignores null values
     */
    public UserEntity updateUser(String token, UserEntity user) throws NotFoundException {
    	UserEntity thisUser = this.findUserByToken(token);
    	if (thisUser != null) {
	    	thisUser.updateValues(user);
	    	userRepo.save(thisUser);
	    	return thisUser;
    	} else {
    		throw new NotFoundException("User is not valid");
    	}
    }

    
    public TokenEntity saveToken(TokenEntity token) {
    	System.out.println("saveToken");
    	return tokenRepo.save(token);
    }
    
    
    public UserEntity saveUser(UserEntity user) {
    	System.out.println("saveUser");
    	return userRepo.save(user);
    }
    
    /*
    public void deleteUser(Integer id) throws NotFoundException {
    	System.out.println("find user for delete:" + id);
		UserEntity user = userRepo.findByUserId(id);
		if (user != null) {
			System.out.println("deleting user:" + user.getName());
			userRepo.delete(user);
		} else {
			throw new NotFoundException("User does not exist");
		}
    }
    */
    
    
    public void deleteToken(Integer id) {
    	TokenEntity token = tokenRepo.findById(id);
    	System.out.println("deleteToken");
    	tokenRepo.delete(token);
    }
    

    public void deleteTokenByString(String userToken) {
    	List<TokenEntity> tokenList = findTokens();
    	for(TokenEntity dbToken : tokenList) {
    		if(dbToken.getToken().equals(userToken)) {
    			System.out.println("deleting token ID:"+dbToken.getId());
    			deleteToken(dbToken.getId());
    		}	
    	}
    }
}
