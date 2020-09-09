var sptxt ="0";
let divInput;
var inptVar;
function addElemento(text){
    divInput = document.getElementById("div-input");
    inptVar = document.getElementById("input-short");
    if(text==""){
        inptVar.classList.add('inputWarning');
        if (sptxt=="0"){
            sptxt = document.createElement("SPAN");
            sptxt.innerHTML = "Please add a link";
            sptxt.classList.add('span-short');
            divInput.appendChild(sptxt);
        }
    }else{
        if (inptVar.classList.contains('inputWarning')){
            inptVar.classList.remove('inputWarning');
            divInput.removeChild(sptxt);
            sptxt ="0";
        }
        
        console.log(text);
        let url_post = 'https://rel.ink/api/links/'
        axios.post(url_post, {
            "url": text,
        })
        .then(function (response) {
            let shortdiv = document.getElementById('linksContainer');
            console.log(shortdiv);
            let divchild = document.createElement("div")
            let hashid = response.data.hashid;
            console.log(hashid);
            shortdiv.innerHTML+="<div class='cards-shortened'>"+
                "<div class='div-center'>"+
                "<span>"+text+"</span>"+
                "</div>"+
                "<div class='rayita-shorten'></div>"+
                "<div class='grid-cont'>"+
                "<div class='div-center'>"+
                    "<span class='cyan-color'>https://rel.ink/"+hashid+"</span>"+
                "</div>"+
                "<div class='div-center'>"+
                    "<button  onclick='+btncopy(+id+1)' class='btn-short-it btn-copy'>Copy</button>"+
                "</div>"+
                "</div>"+
            "</div>";
            
            addItemToStorage(response.data.url, response.data.hashid);

            // shortdiv.appendChild(divchild);
            /*var capa = document.getElementById("capa");
            var h1 = document.createElement("h1");
            var button = document.createElement("button");
            h1.classList.add('blanco');
            h1.innerHTML = response.data.hashid;
            button.innerHTML = "copied";
            capa.appendChild(h1);
            capa.appendChild(button);*/
        })
        .catch(function (error) {
            console.log(error);
        });
        } 
}


function addItemToStorage(url, hashid){
    sessionStorage.setItem(url, hashid); 
    console.log(sessionStorage)
}

for(var i=0;i<sessionStorage.length;i++){
    let url=sessionStorage.key(i);
    let hashid=sessionStorage.getItem(url);
    console.log(url +", "+hashid)
    let shortdiv = document.getElementById('linksContainer');
    shortdiv.innerHTML+="<div class='cards-shortened'>"+
            "<div class='div-center'>"+
            "<span>"+url+"</span>"+
            "</div>"+
            "<div class='rayita-shorten'></div>"+
            "<div class='grid-cont'>"+
            "<div class='div-center'>"+
                "<span class='cyan-color'>https://rel.ink/"+hashid+"</span>"+
            "</div>"+
            "<div class='div-center'>"+
                "<button  onclick='+btncopy(+id+1)' class='btn-short-it btn-copy'>Copy</button>"+
            "</div>"+
            "</div>"+
        "</div>";
}