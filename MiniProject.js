function validateForm(){
	const n = document.forms["Form"]["name"].value;
	const m = document.forms["Form"]["mobno"].value;
	const e = document.forms["Form"]["email"].value;

	if(n == "" || m == "" || e == "")
	{
		alert("PLEASE ENTER REQUIRED VALUE");
		return false;
	}
}
var list1 = [];
var list2 = [];
var list3 = [];

var n =1;
var  x = 0;
function Add(){

	var AddRown = document.getElementById('show');
	var NewRow = AddRown.insertRow(n);

	list1[x] = document.getElementById("name").value;
	list2[x] = document.getElementById("number").value;
	list3[x] = document.getElementById("email").value;
	var cel1 = NewRow.insertCell(0);
	var cel2 = NewRow.insertCell(1);
	var cel3 = NewRow.insertCell(2);
	
	cel1.innerHTML = list1[x];
	cel2.innerHTML = list2[x];
	cel3.innerHTML = list3[x];

	n++;
	x++;