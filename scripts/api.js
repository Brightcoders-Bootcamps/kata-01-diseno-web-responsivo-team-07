function addElemento(text){
    console.log(text);
    let url_post = 'https://rel.ink/api/links/'
    axios.post(url_post, {
        "url": text,
      })
      .then(function (response) {
          let shortdiv = document.getElementById('prueba');
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