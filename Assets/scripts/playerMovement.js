#pragma strict

var speed : int = 4;
var jumpHeight = 3;
var climbing : boolean = false;
var flip : int=0;
var death : AudioSource;

var drop : boolean = false;

public var explosion : GameObject;

public static var destroyed : boolean = false;
public static var isFalling = false;

var anim : Animator;

function Update () 
{
	if(flip==1)
	{
		anim.SetInteger("State",1);
	}
	if(climbing == true)
	{
		anim.SetInteger("State",1);
		speed = 0;
		GetComponent.<Rigidbody2D>().velocity.y = 2;
	}
	if(climbing == false)
	{
		anim.SetInteger("State",0);
		speed = 4;
	}
	if(drop == true)
	{
		anim.SetInteger("State",1);
		speed = 0;
	}
	
	GetComponent.<Rigidbody2D>().velocity.x = speed;
}

function OnCollisionEnter2D(col: Collision2D) 
{
	if (col.gameObject.tag == "cat")
	{
		death.Play();
	    destroyed = true;
		Instantiate(explosion, transform.position, transform.rotation);
		GetComponent.<SpriteRenderer>().enabled = false;
		GetComponent.<BoxCollider2D>().enabled = false;
		GetComponent.<Rigidbody2D>().gravityScale = 0;
        yield WaitForSeconds(1);
        Application.LoadLevel("level1");
		destroyed=false;
	}
	
	if(col.gameObject.tag == "ground")
	{
		isFalling = false;
	}
	
	if(col.gameObject.tag == "dropper")
	{
		drop = true;
	}
	if(col.gameObject.tag == "climbingStick")
	{
		climbing = true;
	}
	if(col.gameObject.tag == "stopClimb")
	{
		climbing=false;
		speed=4;
		GetComponent.<Rigidbody2D>().velocity.x = speed;
		GetComponent.<Rigidbody2D>().velocity.y = 0;
	}
	if(col.gameObject.tag == "star")
	{
		death.Play();
		destroyed = true;
		Instantiate(explosion, transform.position, transform.rotation);
		GetComponent.<SpriteRenderer>().enabled = false;
		GetComponent.<BoxCollider2D>().enabled = false;
		GetComponent.<Rigidbody2D>().gravityScale = 0;
        yield WaitForSeconds(1);
        Application.LoadLevel("level1");
		destroyed=false;
	}
	if(col.gameObject.tag == "end")
	{
		Application.LoadLevel("startScreen");
	}
	
}

function OnTriggerEnter2D(col:Collider2D)
{
	if(col.gameObject.tag == "flipster")
	{
		flip=1;
		Debug.Log(flip);
	}
	if(col.gameObject.tag == "antiFlip")
	{
		flip=0;
		Debug.Log(flip);
	}
	if(col.gameObject.tag == "endLevel")
	{
		Application.LoadLevel("end");
	}
}


