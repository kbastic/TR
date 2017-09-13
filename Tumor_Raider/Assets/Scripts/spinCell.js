//this script spins cancer cell
//it's attached to cell prefab
#pragma strict
var rotateAmt:Vector3 = Vector3(0, 2, 0);
var myCell:GameObject;

function Start () {

}

function Update () {
myCell.transform.Rotate(rotateAmt);
}