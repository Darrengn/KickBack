package kickbackapp;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user")
public class UserEntity implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, unique = true)
    private Integer id;
	

    @Column(nullable = false)
    private String name;
    
    @Column(nullable = false)
    private Integer userId;
    
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }


    public String getName() {
        return name;
    }
    

    public Integer getUserId() {
        return userId;
    }


    public void setName(String name) {
        this.name = name;
    }
    

    public void setUserId(int userId) {
        this.userId = userId;
    }
    
	public void updateValues(UserEntity updates) {
		if(updates.getName() != null) {
			this.setName(updates.getName());
		}
		
	}
}
