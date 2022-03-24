package kickbackapp;

public class SimplifiedEvent {
	private int id;
	private String name;
	private String owner;
	
	
	public SimplifiedEvent(int id, String name, String owner) {
		this.setId(id);
		this.setName(name);
		this.setOwner(owner);
	}
	
	
	public String getName() {
		return name;
	}
	
	
	public void setName(String name) {
		this.name = name;
	}
	
	
	public String getOwner() {
		return owner;
	}
	
	
	public void setOwner(String owner) {
		this.owner = owner;
	}
	
	
	public int getId() {
		return id;
	}
	
	
	public void setId(int id) {
		this.id = id;
	}
}
