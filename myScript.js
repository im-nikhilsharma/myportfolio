// skills button
function first(){
  document.getElementById('myname1').style.display = "flex";
  document.getElementById('myname2').style.display = "none";
  document.getElementById('myname3').style.display = "none";
  document.getElementById('myname4').style.display = "none";
  document.getElementById('myname5').style.display = "none";
  document.getElementById('dotid1').style.display = "flex";
  document.getElementById('dotid2').style.display = "none";
  document.getElementById('dotid3').style.display = "none";
  document.getElementById('dotid4').style.display = "none";
  document.getElementById('dotid5').style.display = "none";
}
function second(){
  document.getElementById('myname1').style.display="none";
  document.getElementById('myname2').style.display="flex";
  document.getElementById('myname3').style.display = "none";
  document.getElementById('myname4').style.display = "none";
  document.getElementById('myname5').style.display = "none";
  document.getElementById('dotid1').style.display = "none";
  document.getElementById('dotid2').style.display = "flex";
  document.getElementById('dotid3').style.display = "none";
  document.getElementById('dotid4').style.display = "none";
  document.getElementById('dotid5').style.display = "none";
}
function third(){
  document.getElementById('myname1').style.display = "none";
  document.getElementById('myname2').style.display = "none";
  document.getElementById('myname3').style.display = "flex";
  document.getElementById('myname4').style.display = "none";
  document.getElementById('myname5').style.display = "none";
  document.getElementById('dotid1').style.display = "none";
  document.getElementById('dotid2').style.display = "none";
  document.getElementById('dotid3').style.display = "flex";
  document.getElementById('dotid4').style.display = "none";
  document.getElementById('dotid5').style.display = "none";
}
function four(){
  document.getElementById('myname1').style.display = "none";
  document.getElementById('myname2').style.display = "none";
  document.getElementById('myname3').style.display = "none";
  document.getElementById('myname4').style.display = "flex";
  document.getElementById('myname5').style.display = "none";
  document.getElementById('dotid1').style.display = "none";
  document.getElementById('dotid2').style.display = "none";
  document.getElementById('dotid3').style.display = "none";
  document.getElementById('dotid4').style.display = "flex";
  document.getElementById('dotid5').style.display = "none";
}
function five(){
  document.getElementById('myname1').style.display = "none";
  document.getElementById('myname2').style.display = "none";
  document.getElementById('myname3').style.display = "none";
  document.getElementById('myname4').style.display = "none";
  document.getElementById('myname5').style.display = "flex";
  document.getElementById('dotid1').style.display = "none";
  document.getElementById('dotid2').style.display = "none";
  document.getElementById('dotid3').style.display = "none";
  document.getElementById('dotid4').style.display = "none";
  document.getElementById('dotid5').style.display = "flex";
}
function myfunction(){
  document.getElementById('myname1').style.display = "flex";
  document.getElementById('myname2').style.display = "none";
  document.getElementById('myname3').style.display = "none";
  document.getElementById('myname4').style.display = "none";
  document.getElementById('myname5').style.display = "none";
  document.getElementById('dotid1').style.display = "flex";
  document.getElementById('dotid2').style.display = "none";
  document.getElementById('dotid3').style.display = "none";
  document.getElementById('dotid4').style.display = "none";
  document.getElementById('dotid5').style.display = "none";
}
// Experience_button
function experience() {
  var x = document.getElementById("exp_id");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
    document.querySelector("#svg_arrow").style.transform = "rotate(180deg)";
  }
}
function experience1() {
  var x = document.getElementById("exp_id1");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
  document.querySelector("#svg_arrow1").style.transform = "rotate(180deg)";
}
// Roteting arrow in experience
