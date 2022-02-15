package kickbackapp;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kickbackapp.Entity.UserEntity;
import kickbackapp.Service.UserService;

import java.util.List;
@Service
public class LoginTest {
	
	@Autowired
	public UserService userService = new UserService();

	@Test
	public void testLogin() {
		System.out.println("testLogin" + userService);
		List<UserEntity> users = null;
		System.out.println("Found users");
		assertEquals(users.size() == 0 ,true);
		System.out.println("x");
		
	}
	@Test
	public void testTest() {
		fail("Nothing");
	}

}
