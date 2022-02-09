package kickbackapp;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "token")
public class TokenEntity implements Serializable {

	private static final long serialVersionUID = 1L;
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, unique = true)
    private Integer id;

    @Column(nullable = false)
    private String token;
    
    @Column(nullable = false)
    private Integer userid;
    
    
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

	
	public Integer getUserid() {
		return userid;
	}

	public void setUserid(Integer userId) {
		this.userid = userId;
	}
}