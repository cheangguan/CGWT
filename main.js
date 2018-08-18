var pageheight=document.documentElement.clientHeight;
var mapheight=String(pageheight-100)+"px";
var mapheighttext=document.createTextNode(mapheight);
document.getElementById("map").style.height=
mapheight;
document.getElementById("p1").appendChild(mapheighttext);
