package kickbackapp;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;
    @Autowired
    private TokenRepo tokenRepo;

    public UserService() {

    }


    public List<UserEntity> findUsers() {
    	System.out.println("findUsers");
        return userRepo.findAll();
    }
    
    
    public UserEntity findUserById(Integer id) throws NullPointerException {
    	UserEntity user = userRepo.findById(id);
    	if (user != null) {
    		return user;
    	} else {
    		throw new NullPointerException("id is invalid");
    	}
    }
    
    
    public UserEntity findUserByName(String name) throws NullPointerException {
    	UserEntity user = userRepo.findByName(name);
    	if(user != null) {
	    	user.setUserId(0);
	    	return user;
    	} else {
    		throw new NullPointerException("name is invalid");
    	}
    }
    

    public UserEntity findUserByToken(String token) throws NullPointerException {
    	TokenEntity tokenEntity = tokenRepo.findByToken(token);
    	if (tokenEntity != null) {
    		return findUserById(tokenEntity.getUserid());
    	} else {
    		throw new NullPointerException("Token not valid");
    	}
    }
   
    
    public List<TokenEntity> findTokens() {
    	System.out.println("findTokens");
        return tokenRepo.findAll();
    }
    
    
    public TokenEntity findTokenByUserid(int userid) throws NullPointerException {
        TokenEntity  token = tokenRepo.findByUserid(userid);
        if( token != null) {
        	return token;
        } else {
        	throw new NullPointerException("User id is invalid");
        }
    }
    

    public UserEntity updateUser(String token, UserEntity user) throws NullPointerException {
    	UserEntity thisUser = this.findUserByToken(token);
    	if (thisUser != null) {
	    	thisUser.updateValues(user);
	    	userRepo.save(thisUser);
	    	return thisUser;
    	} else {
    		throw new NullPointerException("User is not valid");
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
    

    public void deleteUser(Integer id) throws NullPointerException {
    	System.out.println("find user for delete:" + id);
		UserEntity user = userRepo.findById(id);
		if (user != null) {
			System.out.println("deleting user:" + user.getName());
			userRepo.delete(user);
		} else {
			throw new NullPointerException("User does not exist");
		}
    }
    
    
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
