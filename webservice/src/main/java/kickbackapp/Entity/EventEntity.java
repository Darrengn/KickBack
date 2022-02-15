package kickbackapp.Entity;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "event")
public class EventEntity implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, unique = true)
    private Integer id;

    @Column(nullable = false)
    private String name;

    @Column(nullable =false)
    private String owner;
    
    @Column(nullable = false)
    private boolean isInvite;
    
    @Column(nullable = true)
    private int numGuests;
    
    @Column(nullable = true)
    private String category;
    
    @Column(nullable = true)
    private String contact;
    
    @Column(nullable = true)
    private String description;
    

	public boolean isInvite() {
		return isInvite;
	}

	public void setInvite(boolean isInvite) {
		this.isInvite = isInvite;
	}

	public int getNumGuests() {
		return numGuests;
	}

	public void setNumGuests(int numGuests) {
		this.numGuests = numGuests;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public  String getOwner() {
		return owner;
	} 
	
	public void setOwner(String owner) {
		this.owner = owner;
	}



}
