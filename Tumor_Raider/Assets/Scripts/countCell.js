#pragma strict
//this script counts the number of cancer cells remaining in the game
//it's attached to the main camera
import UnityEngine.UI;

var cellCount: int;
var cellGroup:GameObject;

var countTxt: UnityEngine.UI.Text;

function Start () {
//count how many cancer cells are present at the beginning of the game
cellCount = cellGroup.transform.childCount;

}

function Update () {
//once a cancer cell is removed, the number of children of the cell group will be
//different than the cellCount var
if (cellCount != cellGroup.transform.childCount) {
      //remove destroyed cell
      cellCount -= 1;
      //display on screen how many cancer cells are left in the game
      countTxt.text = "Cell Count: " + (cellCount);
      //update cellCount var
      cellCount = cellGroup.transform.childCount; }
}