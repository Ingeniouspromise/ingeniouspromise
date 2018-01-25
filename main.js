var x;
var y;

function down(e){
	var box = document.getElementById("box");
	
	if(!e){
		e = window.event;
	}
	
	
		x=e.clientX;
		y = e.clientY;
	
	
	console.log(x + " and " + y);
}



window.onload=down;