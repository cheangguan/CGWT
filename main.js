var pageheight=document.documentElement.clientHeight;
var pagewidth=document.documentElement.clientWidth;


var pageheight=document.documentElement.clientHeight;
var pagewidth=document.documentElement.clientWidth;


var mapheight=String(pageheight-102)+"px";
document.getElementById("map").style.height=mapheight;


var iconwidth=String(pagewidth-(pagewidth*0.1))+"px";

document.getElementById("getloc").style.left=iconwidth;
document.getElementById("iot").style.left=iconwidth;
document.getElementById("lavel").style.left=iconwidth;

document.getElementById("locinfo").style.top=String(pageheight-137)+"px";   
document.getElementById("locinfo").style.width=String(pagewidth-2)+"px"; 
document.getElementById("toggle").onclick = function() 
{
  document.getElementById("sidebar").style.visibility="visible"; 
  document.getElementById("sidebar").style.width=iconwidth;
  document.getElementById("sidebar").style.height=String(pageheight-2)+"px";   
document.getElementById("functionbar").style.visibility="hidden";                                  
};

document.getElementById("mapf").onclick = function() 
{
  document.getElementById("sidebar").style.visibility="hidden"; 
  document.getElementById("functionbar").style.visibility="hidden";                                 
};

document.getElementById("buttom").onclick = function() 
{
document.getElementById("functionbar").style.visibility="visible"; 
document.getElementById("functionbar").style.width=String(pagewidth-2)+"px";
document.getElementById("functionbar").style.height=String(pageheight-pageheight*0.3)+"px";;         
document.getElementById("functionbar").style.top=String(pageheight*0.3-2)+"px";; 
document.getElementById("sidebar").style.visibility="hidden";         
};

document.getElementById("getloc").onclick = function() 
{

document.getElementById('map').scrollTop =1;
document.getElementById('map').scrollLeft =120;
document.getElementById('mapf').src="/CGWT/GFdw.png";
document.getElementById("locinfo").style.visibility="visible"; 
};

document.getElementById("bf").onclick = function() 
{


document.getElementById('mapf').src="/CGWT/UF.png";

};
document.getElementById("gf").onclick = function() 
{


document.getElementById('mapf').src="/CGWT/GFdw.png";

};
document.getElementById("1f").onclick = function() 
{


document.getElementById('mapf').src="/CGWT/1F.png";

};

