

var pageheight=document.documentElement.clientHeight;
var mapheight=String(pageheight-102)+"px";
document.getElementById("map").style.height=mapheight;


var pagewidth=String((document.documentElement.clientWidth)-document.documentElement.clientWidth*0.1)+"px";
document.getElementById("getloc").style.left=pagewidth;
document.getElementById("iot").style.left=pagewidth;

document.getElementById("toggle").onclick = function() 
{
  document.getElementById("sidebar").style.visibility="visible"; 
  document.getElementById("sidebar").style.width=pagewidth;
  document.getElementById("sidebar").style.height=String(pageheight-2)+"px";;                                   
};

document.getElementById("back").onclick = function() 
{
  document.getElementById("sidebar").style.visibility="hidden";                                 
};
