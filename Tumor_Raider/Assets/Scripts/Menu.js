//this is the main menu script
//it's attached to main camera in main menu scene
#pragma strict

import UnityEngine.UI;
import UnityEngine.SceneManagement;

var mainMenuUI:Canvas;
var instructionsUI:Canvas;

function Start () {
		//hide the instructions canvas
		instructionsUI.enabled = false;
}

function Update () {

	
}
function playGame(){
    //start play when play button is pressed
	SceneManager.LoadScene("Level 1");


}

function showMainMenu(){
    //when main menu button is pressed, hide instructions canvas and show main menu canvas
	mainMenuUI.enabled = true;
	instructionsUI.enabled = false;

}

function showInstructions(){
	//when instructions button is pressed, hide main menu canvas and show instructions canvas
	mainMenuUI.enabled = false;
	instructionsUI.enabled = true;
}

function exitGame(){
    //exit game
	SceneManager.UnloadScene("Level 1");

	
}