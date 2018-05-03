var i=2;
function preImg(){
	if (i==1) {
		i=7;
	} else {
		i--;
	}
var pic = document.getElementById("nImg");
pic.src = "pic"+i+".png";
}
function nextImg(){
	if (i==7) {
		i=1;
	} else {
		i++;
	}
var pic = document.getElementById("nImg");
pic.src = "pic"+i+".png";
}

