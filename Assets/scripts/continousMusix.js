#pragma strict

public var Music : AudioSource;
public static var i : int =0;

function Awake() 
{
	if(i>0)
	 {
	 	Destroy(gameObject);
	 }

	 DontDestroyOnLoad(gameObject);
	 Music.Play();
	 i=i+1;
	
}