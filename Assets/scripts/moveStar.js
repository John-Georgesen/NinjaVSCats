#pragma strict

var forwards : boolean = false;
var cat : GameObject;
public var killcatEffect : Transform;

function Start()
{
	forwards = true;
}

function Update () 
{
	if(forwards==true)
	{
		GetComponent.<Rigidbody2D>().velocity.x = 10;
	}
	if(forwards==false)
	{
		GetComponent.<Rigidbody2D>().velocity.x = -8;
		
	}
	
}

function OnCollisionEnter2D(col: Collision2D) 
{
	if(col.gameObject.tag == "dropper")
	{
		forwards=false;
	}
	if(col.gameObject.tag == "climbingStick")
	{
		forwards=false;
	}
	if(col.gameObject.tag == "end")
	{
		Destroy(gameObject);
	}
}
function OnTriggerEnter2D(coll : Collider2D) 
{
	if (coll.gameObject.tag == "starCatcher")
	{
		Destroy(gameObject);
	}
}

