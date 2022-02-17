package kickbackapp.Service;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kickbackapp.NotFoundException;
import kickbackapp.Entity.LoginUserEntity;
import kickbackapp.Repository.LoginUserRepo;

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
    
    public LoginUserEntity findLoginUser(String username, String password) throws NotFoundException {
    	LoginUserEntity loginUser = loginUserRepo.findByUsernameAndPassword(username,password);
    	System.out.println("Found login user" + loginUser.getId());
    	if (loginUser != null) {
	    	return loginUser;
    	} else {
    		throw new NotFoundException("No such Login user");
    	}
    }
    

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
    
    
    public void deleteLoginUser(Integer id) {
    	System.out.println("find loginuser for delete:" + id);
		LoginUserEntity user = loginUserRepo.findById(id);
		if (user != null) {
			System.out.println("deleting user:" + user.getUsername());
			loginUserRepo.delete(user);
		}	
    }
    
}
