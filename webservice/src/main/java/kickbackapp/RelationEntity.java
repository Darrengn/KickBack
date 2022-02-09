package kickbackapp;

import kickbackapp.Status;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Enumerated;
import javax.persistence.EnumType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "relation")
public class RelationEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false, unique = true)
	private Integer id;

	@Column(nullable = false)
	private Integer from1;

	@Column(nullable = false)
	private Integer to1;

	@Enumerated(EnumType.STRING)
	@Column(nullable = false)
	private Status status; // can split into request and friends columns and assign 0/1 to values

	public Integer getId() {
		return id;
	}

	public Integer getFrom() {
		return this.from1;
	}

	public Integer getTo() {
		return this.to1;
	}

	public Status getStatus() {
		return this.status;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public void setFrom(Integer id) {
		this.from1 = id;
	}

	public void setTo(Integer id) {
		this.to1 = id;
	}

	public void setStatus(Status status) {
		this.status = status;
	}
}
