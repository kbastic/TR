//this script is used to set up game timer, remove pills and add extra 10 sec. to the clock
//it's attached to FPS Controller
#pragma strict

import UnityEngine.UI;
import UnityEngine.SceneManagement;

var timerRunning:boolean = true;
var startTime:int = 180;
var currentTime:int;

var pillCount: int;
var pillGroup:GameObject;
var Pill_sound:AudioSource;
var pill_clip:AudioClip;

var timeTxt: UnityEngine.UI.Text;
var endTxt: UnityEngine.UI.Text;

function Start () {
//count the number of pills at the beginning of the game
pillCount = pillGroup.transform.childCount;

}
function Update () {
//as long as the timer is running
if (timerRunning) {
        //count down
		currentTime = startTime - Mathf.Ceil(Time.timeSinceLevelLoad);
		//display timer countdown on the screen
		timeTxt.text = "Time: " + currentTime;
		//when timer reaches 0
		 if (currentTime <= 0) {
		      //stop the timer
		      timerRunning = false;
		      //freeze the game
		      Time.timeScale = 0;
		      //display "game over" msg
		      endTxt.text = "GAME OVER";



	     }
}
}
//execute when FP and pill collide
function OnControllerColliderHit(event:ControllerColliderHit) {

  if (event.gameObject.name == "pill") {
          //turn the pill to magenta
          event.gameObject.GetComponent(Renderer).material.color = Color.magenta;

          //destroy the pill after 1 sec.
          Destroy (event.gameObject, 1);

         
          
  }

  //keep count of how many pills remain and add 10 sec. to the timer
   if (pillCount != pillGroup.transform.childCount) {
                pillCount -= 1;
                startTime += 10;
                //play pill pick up sound
                Pill_sound.PlayOneShot(pill_clip);
                pillCount = pillGroup.transform.childCount; 

   }

          
         
}
