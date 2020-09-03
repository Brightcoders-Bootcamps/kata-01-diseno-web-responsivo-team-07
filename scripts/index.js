let isMenuOpen = false;
function showMenu(){
    let menumorado= document.getElementById('menumorado');
    if(!isMenuOpen){
        menumorado.style.display = "block";
        menumorado.style.padding= "15px";
    }else{
        menumorado.style.display = "none";
        menumorado.style.padding= "0px";
    }
    isMenuOpen=!isMenuOpen;
}