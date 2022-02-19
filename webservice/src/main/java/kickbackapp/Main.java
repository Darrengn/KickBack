package kickbackapp;

import javax.annotation.PostConstruct;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan
@EntityScan({"kickbackapp"})
@EnableJpaRepositories({"kickbackapp"})
public class Main {
    
    @PostConstruct
    private void init(){
    }
    
    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);
        /*
        JUnitCore junit = new JUnitCore();
        Class tests = LoginTest.class;
        Result result = junit.run(tests);
        for (Failure failure : result.getFailures()) {
        	System.out.println("Failed" +  failure.toString());
        }
        */
        
        
        
    }
}
