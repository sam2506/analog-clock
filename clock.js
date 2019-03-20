var d=new Date();
var sec=d.getSeconds();
var min=d.getMinutes();
var hour=d.getHours();
var sec1=sec*6-90;

var a=min*6-90;
var b=(hour%12)*30;
hour=b+min/2-90;
var x=document.getElementById("hr1");
var y=document.getElementById("hr2");
var z=document.getElementById("hr3");
x.style.transformOrigin="20%";
y.style.transformOrigin="20%";
z.style.transformOrigin="20%";
x.style.transform='rotate('+sec1+'deg)';
y.style.transform='rotate('+a+'deg)';
z.style.transform='rotate('+hour+'deg)';
//var elem = document.getElementById("hr1");  
    var elem = document.getElementById("hr1"); 
    var id = setInterval(frame,50);
    function frame() {
            elem.style.transform+="rotate(0.3deg)";
    }
    var elem1 = document.getElementById("hr2"); 
    var id = setInterval(frame1,60000);
    function frame1() {
            elem1.style.transform+="rotate(6deg)";
    }
    var elem2 = document.getElementById("hr3"); 
    var id = setInterval(frame2,720000);
    function frame2() {
            elem1.style.transform+="rotate(6deg)";
    }
    



