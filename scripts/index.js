let isMenuOpen = false;
function showMenu(){
    let menumorado= document.getElementById('menumorado');
    let sButton = document.getElementById('signButton');
    if(!isMenuOpen){
        menumorado.style.height = "auto";
        menumorado.style.padding= "15px";
        sButton.style.display= "inline-block";
    }else{
        menumorado.style.height = "0px";
        menumorado.style.padding= "0px";
        sButton.style.display= "none";
    }
    isMenuOpen=!isMenuOpen;
}