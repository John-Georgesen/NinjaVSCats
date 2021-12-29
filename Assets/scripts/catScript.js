#pragma strict

public var ninja : GameObject;
public var cat : GameObject;
public var explosion : GameObject;
public var catSound : AudioSource;
function OnCollisionEnter2D(col: Collision2D) 
{
    
	if(col.gameObject.tag == "star")
	{
	    Instantiate(explosion, transform.position, transform.rotation);
		Destroy(col.gameObject);
		Destroy(gameObject);
		catSound.Play();
	}
}

