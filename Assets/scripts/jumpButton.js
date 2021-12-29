#pragma strict

public var ninjaRB : Rigidbody2D;
public var jumpheight : int;
public var jumpSound : AudioSource;

public var anim : Animator;

function shimmy () 
{
	
	if(playerMovement.isFalling == false)
	{
		ninjaRB.velocity.y = 7;
		playerMovement.isFalling = true;
		jumpSound.Play();
	}
	
	
}