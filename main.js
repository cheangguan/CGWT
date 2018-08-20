

var pageheight=document.documentElement.clientHeight;
var pagewidth=document.documentElement.clientwidth;


var pageheight=document.documentElement.clientHeight;
var pagewidth=document.documentElement.clientWidth;


var mapheight=String(pageheight-102)+"px";
document.getElementById("map").style.height=mapheight;


var iconwidth=String(pagewidth-(pagewidth*0.1))+"px";

document.getElementById("getloc").style.left=iconwidth;
document.getElementById("iot").style.left=iconwidth;


document.getElementById("toggle").onclick = function() 
{
  document.getElementById("sidebar").style.visibility="visible"; 
  document.getElementById("sidebar").style.width=iconwidth;
  document.getElementById("sidebar").style.height=String(pageheight-2)+"px";;                                   
};

document.getElementById("map").onclick = function() 
{
  document.getElementById("sidebar").style.visibility="hidden";                                 
};
