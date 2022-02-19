package kickbackapp.Entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "token")
public class TokenEntity implements Serializable {
	
    @PrePersist
    private void onCreate() {
    	// Executes before Entity is inserted into table
    	creationDateTime = new Date();
    }

	private static final long serialVersionUID = 1L;
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, unique = true)
    private Integer id;

    @Column(nullable = false)
    private String token;
    
    @Column(nullable = false)
    private Integer userId;
    
    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = false)
    private Date creationDateTime;
    
    
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }


	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	
	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}
}