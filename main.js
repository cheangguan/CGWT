var pageheight=document.documentElement.clientHeight;
var pagewidth=document.documentElement.clientWidth;



var mapheight=String(pageheight-102)+"px";
document.getElementById("map").style.height=mapheight;


var righticon=String((pagewidth)-pagewidth*0.1)+"px";
document.getElementById("getloc").style.left=righticon;
document.getElementById("iot").style.left=righticon;
