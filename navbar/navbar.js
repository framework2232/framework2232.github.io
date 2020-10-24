
//      display the HTML
//      set the onload default values
//      display the onload default style


// =====================================================================
//          Navbar - Build HTML with onload default
// =====================================================================
let nav = document.getElementById('navbar')
nav.innerHTML = '<header id="navbar__container"><h1 id="navbar__logo"></h1><nav id="navbar__menu__container"><a id="navbar__menu__item__1" onmouseover="menuItemOneHoverTrue()" onmouseout="menuItemOneHoverFalse()"  href=""></a><a id="navbar__menu__item__2" onmouseover="menuItemTwoHoverTrue()" onmouseout="menuItemTwoHoverFalse()" href=""></a></nav></header>'
// Define the onload defaults
document.getElementById("navbar__logo").innerText = "Heading"
document.getElementById("navbar__menu__item__1").innerText = "Menu 1"
document.getElementById("navbar__menu__item__1").setAttribute("href", "#")
document.getElementById("navbar__menu__item__2").innerText = "Menu 2"
document.getElementById("navbar__menu__item__2").setAttribute("href", "#")
document.getElementById('bgColour').value = "#000000";
document.getElementById('ltColour').value = "#FFFFFF";
document.getElementById('mtColour').value = "#FFFFFF";
document.getElementById('mhColour').value = "#FF0000";


// =====================================================================
//                 Navbar - style navbar with onload defaults
// =====================================================================
// Navbar Container
document.getElementById('navbar__container').style.cssText = 'display: flex;flex-wrap: wrap;width: 100%;background-color:' + bgColour.value + ';'
// Navbar Logo
document.getElementById('navbar__logo').style.cssText = 'margin:0.5rem auto;text-align:center;width:320px;color:' + ltColour.value + ';font-size:35px;'
// Navbar Menu Container
document.getElementById('navbar__menu__container').style.cssText = 'display:flex;margin:auto;width:320px;'
// Navbar Menu Item 1 
document.getElementById('navbar__menu__item__1').style.cssText = 'margin:1rem auto;color:' + mtColour.value + ';font-weight:bold;font-size:20px;text-decoration:none;'
// Navbar Menu Item 2
document.getElementById('navbar__menu__item__2').style.cssText = 'margin:1rem auto;color:' + mtColour.value + ';font-weight:bold;font-size:20px;text-decoration:none;'









function build() {
    // ========================================================== 
    // Gets the text box input values and allocates to element
    // ==========================================================
    // get site name from input text box
    siteName = document.getElementById("siteName");
    if (siteName.value === "" || siteName.value == null) {
        document.getElementById("navbar__logo").innerText = "Heading";
    } else {
        document.getElementById("navbar__logo").innerText = siteName.value;
    }

    // get menu ONE name from input text box
    menuOneName = document.getElementById("menuOneName");
    if (menuOneName.value === "" || menuOneName.value == null) {
        document.getElementById("navbar__menu__item__1").innerText = "Menu 1";
    } else {
        document.getElementById("navbar__menu__item__1").innerText = menuOneName.value;
    }

// ==================
//     document.getElementById('mhColour').value = "#FF0000";
// ======================



    // get menu TWO name from input text box
    menuTwoName = document.getElementById("menuTwoName");
    if (menuTwoName.value === "" || menuTwoName.value == null) {
        document.getElementById("navbar__menu__item__2").innerText = "Menu 2";
    } else {
        document.getElementById("navbar__menu__item__2").innerText = menuTwoName.value;
    }

   



    // ========================================================== 
    // Gets the colour values selected and allocates to element
    // ==========================================================
    // background colour
    bgColour = document.getElementById('bgColour');
    document.getElementById('navbar__container').style.backgroundColor = bgColour.value;
    // logo text colour
    ltColour = document.getElementById('ltColour');
    document.getElementById('navbar__logo').style.color = ltColour.value;
    // menu text colour
    mtColour = document.getElementById('mtColour');
    document.getElementById('navbar__menu__item__1').style.color = mtColour.value;
    document.getElementById('navbar__menu__item__2').style.color = mtColour.value;
    // menu text HOVER colour
    mhColour = document.getElementById('mhColour');

}




// Navbar Menu Item HOVER
// uses onmouseover and onmouseout inside the HTML
function menuItemOneHoverTrue() {
    document.getElementById("navbar__menu__item__1").style.color = mhColour.value;
}
function menuItemOneHoverFalse() {
    document.getElementById("navbar__menu__item__1").style.color = mtColour.value;
}
function menuItemTwoHoverTrue() {
    document.getElementById("navbar__menu__item__2").style.color = mhColour.value;
}
function menuItemTwoHoverFalse() {
    document.getElementById("navbar__menu__item__2").style.color = mtColour.value;
}




function reset() {
    // ========================================================== 
    //                  Reset back to defaut / clear
    // ========================================================== 

    // Clear the Nav Logo Text and reset to default
    document.getElementById("navbar__logo").innerText = "Heading";
    document.getElementById("siteName").value = "";

    // Clear the Nav Menu ONE Text and reset to default
    document.getElementById("navbar__menu__item__1").innerText = "Menu 1";
    document.getElementById("menuOneName").value = "";

    // Clear the Nav Menu ONE URL and reset to default
    document.getElementById("navbar__menu__item__1").setAttribute("href", "#")
    document.getElementById("menuOneURL").value = "";
    

    // Clear the Nav Menu TWO Text and reset to default
    document.getElementById("navbar__menu__item__2").innerText = "Menu 2";
    document.getElementById("menuTwoName").value = "";    
    
    // Clear the Nav Menu ONE URL and reset to default
    document.getElementById("navbar__menu__item__2").setAttribute("href", "#")
    document.getElementById("menuTwoURL").value = "";

   

    // Reset background colour back to default
    document.getElementById('bgColour').value = "#000000";
    document.getElementById('navbar__container').style.backgroundColor = "#000000";
    // Reset logo text colour back to default
    document.getElementById('ltColour').value = "#FFFFFF";
    document.getElementById('navbar__logo').style.color = "#FFFFFF";
    // Reset menu text colour back to default
    document.getElementById('mtColour').value = "#FFFFFF";
    document.getElementById('navbar__menu__item__1').style.color = "#FFFFFF";
    document.getElementById('navbar__menu__item__2').style.color = "#FFFFFF";
    // Reset menu text HOVER colour back to default
    document.getElementById('mhColour').value = "#FF0000";
}