//this script is used to distroy a cancer cell
//it's attached to FPS Controller
#pragma strict

var myCell:GameObject;
var Cell_sound:AudioSource;

function Start () {

}

function Update () {

}
//execute when FP and cancer cell collide
function OnControllerColliderHit(event:ControllerColliderHit) {

  if (event.gameObject.name == "cell") {
          //turn cancer cell blue
          event.gameObject.GetComponent(Renderer).material.color = Color.blue;
          //play cell destruction sound
          Cell_sound.Play();
          //destroy cancer cell after 1 second
          Destroy (event.gameObject, 1);

         

  }
}
