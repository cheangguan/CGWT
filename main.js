var pageheight=document.documentElement.clientHeight;
var mapheight=String(pageheight-102)+"px";
var mapheighttext=document.createTextNode(mapheight);

document.getElementById("map").appendChild(mapheighttext);
