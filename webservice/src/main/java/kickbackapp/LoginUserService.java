package kickbackapp;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginUserService {

    @Autowired
    private LoginUserRepo loginUserRepo;

    public LoginUserService() {

    }


    public List<LoginUserEntity> findLoginUsers() {
    	System.out.println("findLoginUsers");
        return loginUserRepo.findAll();
    }
    
    public LoginUserEntity findLoginUser(String username, String password) throws NullPointerException {
    	LoginUserEntity loginUser = loginUserRepo.findByUsernameAndPassword(username,password);
    	return loginUser;
    }
    

    public boolean saveLoginUser(LoginUserEntity loginUser) {
    		if(loginUserRepo.findByUsername(loginUser.getUsername().toLowerCase()) == null) {
    			System.out.println("Saving User");
    			loginUserRepo.save(loginUser);
    			return true;
    		} else {
    			System.out.println("Already a user with that name");
    			return false;
    		}
    }
    
    
    public void deleteLoginUser(Integer id) {
    	System.out.println("find loginuser for delete:" + id);
		LoginUserEntity user = loginUserRepo.findById(id);
		if (user != null) {
			System.out.println("deleting user:" + user.getUsername());
			loginUserRepo.delete(user);
		}	
    }
    
}
