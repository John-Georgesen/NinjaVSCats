#pragma strict
public var x:float;
public var y:float;
public var z:float;
public var target : Transform;

function Start()
{
	this.enabled = true;
}

function Update () 
{
	transform.position = target.position + Vector3(x, y, z);
	
	if(playerMovement.destroyed == true)
	{
		this.enabled = false;
	}
}
