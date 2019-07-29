var menuState = 0;
function toggleNav(){
	if(menuState ==0){
		menuState = 1;
		openNav();
	}
	else{
		menuState = 0;
		closeNav();
	}
}
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("floating-button").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("floating-button").style.marginLeft = "0";
}

function swapDerating(){
	var loc = "StandardDerating.pdf";
    document.getElementById('StandardsPDF').setAttribute('src', loc);
}

function swapIPC(){
	var loc = "StandardIPC.pdf";
    document.getElementById('StandardsPDF').setAttribute('src', loc);
}
function swapStress(){
	var loc = "StandardStress.pdf";
    document.getElementById('StandardsPDF').setAttribute('src', loc);
}
function swapElectrical(){
	var loc = "StandardElectrical.pdf";
    document.getElementById('StandardsPDF').setAttribute('src', loc);
}
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}