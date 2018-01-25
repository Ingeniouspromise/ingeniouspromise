//global variables
var obj, x,y,dx,dy;

 var coor;

//find the div element
function check(){
    var div = document.getElementById("nav")
  //call the drag function on mousedown
    div.onmousedown = drag;
}

//set the offset of the object & unobstructive jvscript
function drag(e){
   //check if browser supports u or window.event
    if(!e) var e = window.event;
 // check if browser supports target or srcElement
    if(e.target){
     obj = e.target;
 }  
    else{
        obj=e.srcElement;
    }
 //change object border color to orange on dag
    obj.style.borderColor = "orange";
    // st dx and dy to the value of the offset
    dx = x- obj.offsetLeft;
    dy = y- obj.offsetTop;
    
    
}


//move the object
function Move(e){
    //unobstructive
    if(!e) var e = window.event;
    
    //get the mousemovement
    if(e.pageX){
        x = e.pageX;
        y = e.pageY;
    }
    else if(e.clientX){
        x=e.clientX;
        y=e.clientY;
        }
   //if the div is clicked
    if(obj){
      //set the left and top property to the position of the mouse and that of the offset
        obj.style.left =x;
        obj.style.top = y;
    }
   //set the position for the coor variable
    x=obj.style.left;
    y= obj.style.top;
   //lets the user know what point the box is
    coor = "The box is at point " + x + " and at piont " + y;

document.getElementById("demo").innerHTML= coor;
}

// set the box to stop boving when the mouse leaves it
function drop(){
    if (!obj) return;
    // reset the box bordercolor back to black
    obj.style.borderColor ="black";
    obj=false;
    Move=false;
   coor = "" 
}

//global event variable
document.onmousemove = Move;
document.onmouseup = drop;
window.onload = check;


