let prenom = document.querySelector("#prenom");
let nom = document.querySelector("#nom");
let adresse = document.querySelector("#adresse");
let telephone = document.querySelector("#telephone");
let message = document.querySelector("#message");
let carte = document.querySelector(".carte");
let btn = document.querySelector(".bouton");

// const btnajout = "btnajout"+Date.now();
const btnmod = "btnmod" + Date.now();
const btnsup = "btnsup" + Date.now();
const para = "para" + Date.now();
const btnlike = "btnlike" + Date.now();
const btndislike = "dislike" + Date.now();

const tab = [];

btn.addEventListener("click", function(e) {
    e.preventDefault();

    const newtab = {
      prenom: prenom.value,
      nom: nom.value,
      adresse: adresse.value,
      telephone: telephone.value,
      message: message.value,
    };
 
    carte.insertAdjacentHTML("afterbegin", `
      <div class="col-12 col-md-5 offset-md-1 card gy-3">
        <div class="card-body">
        <h5 class="card-title">${newtab.prenom}</h5>
        <h5 class="card-text">${newtab.nom}</h5>
        <p class="card-text">${newtab.adresse}</p>
        <p class="card-text">${newtab.telephone}</p>
        <p class="card-text">${newtab.message}</p>
        <p class="card-text ${para}"></p>
        <a href="#" class="btn btn-warning ${btnmod}"><i class="bi bi-pencil-square"></i></a>
        <a href="#" class="btn btn-primary ${btnlike}"><i class="bi bi-hand-thumbs-up-fill"></i></a>
        <a href="#" class="btn btn-dark ${btndislike}"><i class="bi bi-hand-thumbs-down-fill"></i></a>
        <a href="#" class="btn btn-danger ${btnsup}"><i class="bi bi-trash"></i></a>
        </div>          
      </div>`);
     
      const btnmodif = document.querySelector(`.${btnmod}`);
      btnmodif.addEventListener("click", function(e){
        e.preventDefault();
        prenom.value = newtab.prenom;
        nom.value = newtab.nom;
        adresse.value = newtab.adresse;
        telephone.value = newtab.telephone;
        message.value = newtab.message;
        carte.removeChild(btnmodif.parentElement.parentElement)
      });
 
      const btnsupp = document.querySelector(`.${btnsup}`);
      btnsupp.addEventListener("click", function(e){
        e.preventDefault();
        if(confirm("êtes vous sur de vouloir supprimer")) {
          carte.removeChild(btnsupp.parentElement.parentElement);
        }
      });
      
      let counter = 0;
      const paragraph = document.querySelector(`.${para}`);
      const btnJaime = document.querySelector(`.${btnlike}`);
      btnJaime.addEventListener("click", function(e){
        e.preventDefault();
        counter++;
        paragraph.textContent = counter;
      })

      let jaimePas = document.querySelector(`.${btndislike}`);
      jaimePas.addEventListener("click", function(e){
        e.preventDefault();
        if(counter > 0) {
          counter--;
        }
        paragraph.textContent = counter;
      })
      
      tab.push(newtab); 
      
      nom.value =""; 
      adresse.value ="";
      telephone.value ="";
      message.value ="";                                 
      prenom.value ="";
});