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
    

    public List<TokenEntity> findTokens() {
    	System.out.println("findTokens");
        return tokenRepo.findAll();
    }
    
    public TokenEntity findTokenByUserid(int userid) {
        return tokenRepo.findByUserid(userid);
    }
    

    public UserEntity saveUser(UserEntity user) {
    	System.out.println("saveUser");
    	return userRepo.save(user);
    }
    
    
    public UserEntity updateUser(String token, UserEntity user) {
    	UserEntity thisUser = this.findUserByToken(token);
    	thisUser.updateValues(user);
    	userRepo.save(thisUser);
    	return thisUser;
    }

    public UserEntity findUser(Integer id) {
    	UserEntity user = userRepo.findById(id);
    	return user;
    }
    
    public UserEntity findUserByName(String name) {
    	UserEntity user = userRepo.findByName(name);
    	user.setUserId(0);
    	return user;
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
    

    public TokenEntity saveToken(TokenEntity token) {
    	System.out.println("saveToken");
    	return tokenRepo.save(token);
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


    //TODO: only checks token comparison, not event access comparison
    public boolean isTokenValid(String userToken) {
    	List<TokenEntity> tokenList = findTokens();
    	for(TokenEntity dbToken : tokenList) {
    		System.out.println("dbToken " + dbToken.getToken());
    		System.out.println("usToken " + userToken);
    		if(dbToken.getToken().equals(userToken)) {
    			System.out.println("Tokens are equal");
    			return true;
    		}
    	}
    	System.out.println("No tokens are equal");
    	return false;
    }
    
    //TODO can use TokenRepo FindById
    public UserEntity findUserByToken(String token) {
    	System.out.println("Find User by token" + token);
    	List<TokenEntity> tokenList = findTokens();
    	for(TokenEntity dbToken : tokenList) {
    		System.out.println("Comparing tokens"+ token + " ," + dbToken.getToken());
    		if(dbToken.getToken().equals(token)) {
    			System.out.println("found token");
    			return findUser(dbToken.getUserid());
    		}
    	}
    	return null;
    }
    
    public int findUserIdByToken(String token) {
    	return tokenRepo.findByToken(token).getUserid();
    }
}
