var names_of_guest = [];

function submit() {
    var guest_name = document.getElementById("Name1").value ;
    names_of_guest.push(guest_name);
    document.getElementById("disp_nme").innerHTML=names_of_guest;
}

               
function sorting() {
    names_of_guest.sort();
    var names = names_of_guest.join("<br>");
    document.getElementById("sorted").innerHTML=names.toString();

}
 
function show() {
  var names = names_of_guest.join("<br>");
  document.getElementById("p1").innerHTML=names.toString();
  document.getElementById("sort_button").style.display="block";

}

function searching() {
  var s = document.getElementById("s1").value ;
  var found = 0 ;
  for ( j = 0; j < names_of_guest.length; j++) {
    if (s==names_of_guest[j]){
      found= found+1;
    }    
  }
  document.getElementById("p2").innerHTML="Name found " + found + "times";
}