#pragma strict

public var starRB : Rigidbody2D;
public var star : GameObject;
public var spawnPoint : Transform;

function spawnObjects () 
{
	var x : int = 0;
	Instantiate(star, spawnPoint.transform.position, Quaternion.identity);
	
	
}