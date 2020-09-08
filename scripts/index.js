let isMenuOpen = false;
function showMenu(){
    let menumorado= document.getElementById('menumorado');
    let sButton = document.getElementById('signButton');
    if(!isMenuOpen){
        menumorado.style.display = "block";
        menumorado.style.padding= "15px";
        sButton.style.display= "inline-block";
    }else{
        menumorado.style.display = "none";
        menumorado.style.padding= "0px";
        sButton.style.display= "none";
    }
    isMenuOpen=!isMenuOpen;
}


function btncopy(){

    //this.style.backgroundColor = "white";
}