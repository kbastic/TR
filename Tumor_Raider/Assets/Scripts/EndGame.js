//this script is used to end the game when all cancer cells are collected
//it's attached to exitLevel game object
#pragma strict
import UnityEngine.UI;
import UnityEngine.SceneManagement;

var End_sound:AudioSource;
var endTxt: UnityEngine.UI.Text;

var cellGroup:GameObject;
var exitLev:GameObject;

function Start () {

}

function Update () {

}
function OnTriggerEnter(event:Collider) {
//when all cancer cells are collected, freeze the game and display "you win" text
if (cellGroup.transform.childCount == 0) {


        Time.timeScale = 0;

		      
		 endTxt.text = "YOU WIN!";
		 End_sound.Play();
}


}
