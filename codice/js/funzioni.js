/*******************VARIABILI********************/

let puntiComputer = 0;
let puntiGiocatore = 0;
let viteDio = 3;
let viteGiocatore = 3;

/********************FUNZIONI********************/

function inizia () {
  sessionStorage.setItem('preseMedicine', false);
  sessionStorage.setItem('vintoBossPorta', false);
  sessionStorage.setItem('giocatoControPorta', false);
  sessionStorage.setItem('preseMedicine', false);
  apri('sdraiato.html');
}

//sessionStorage.setItem serve a memorizzre un dato fino a che nno viene chiusa la finestra di browser, quindi un dato rimane memorizzato per tutta la sessione di gioco
//ci serve per memorizzare cose come se sono state prese le medicine, se è stata vinta una battaglia



function disegnaVite(ViteId, numeroVite) {
  //ViteId sarebbe che tipo di vite sono, quindi se si parla di vite del giocatore o del Boss
  const contenitore = document.getElementById(ViteId); 
  contenitore.innerHTML = ""; // questo serve a svuotare il contenitore cosi si posso ridisegnare
  for (let i = 0; i < numeroVite; i++) {  // da 0 a quante vite si hanno
    const cuoricino = document.createElement("img");
    cuoricino.src = "../immagini/cuoricino.png";
    cuoricino.classList.add("vite")
    if(ViteId==="viteGiocatore"){
      cuoricino.classList.add("viteGiocatore");
    }
    else{
      cuoricino.classList.add("viteDio");
    }
    
    contenitore.appendChild(cuoricino);
  }
}

window.onload = function() {
  const pagina = window.location.pathname; // es: "/gioco/boss.html"

  if (pagina.includes("Dio.html")) {
    disegnaVite("viteGiocatore", viteGiocatore);
    disegnaVite("viteDio", viteDio);
  }
}

function saCaFoDio(input, urlSeVince, urlSePerde) {
  let computer = Math.floor(Math.random() * 3)
  console.log(computer);

  if (computer == input){
    alert('pari');
  }
  if (computer == 1 && input == 0 || computer == 0 && input == 1 || computer == 0 && input == 2){
    alert('computer');
    viteGiocatore--;
    disegnaVite("viteGiocatore", viteGiocatore);
  }
  if (computer == 2 && input == 0 || computer == 2 && input == 1 || computer == 1 && input == 2){
    alert('giocatore');
    viteDio--;
    disegnaVite("viteDio", viteDio);
  }

}



//funzione per creare bottone che ti fa andare avanti dopo che hai vinto contro la fucking porta

function CreaBottoneCorridoio(){
  let bottone = document.createElement("input");

  bottone.type="button";
  bottone.value="avanza nel corridoio";
  bottone.id="corridoio";
  bottone.classList.add("bottone");
  bottone.onclick = function(){
    apri('Corridoio.html');
  }
  document.getElementById("bottoneVittoriaPorta").appendChild(bottone);
}

function apri(pagina){
  let overlay = document.getElementById('overlay');
  overlay.classList.remove('visible');
  setTimeout(()=>{
    window.open(pagina, '_self');
  }, 500);
}

//

function prendiMedicine(){
  sessionStorage.removeItem('preseMedicine');
  sessionStorage.setItem('preseMedicine', true);
}

//

function creaBottoneBossCereali(){
  if(!preseMedicine){
    let bottone = document.createElement("input");

    bottone.type = "button";
    bottone.value = "Fai colazione";
    bottone.id = "bossCereali";
    bottone.classList.add("bottone"); 
    bottone.onclick = function(){
      apri('Boss_ScatolaDeiCereali.html')
    }
    document.getElementById("bottoneCattivo").appendChild(bottone);
    
  }
}



/*****************EVENT LISTENERS***************/

addEventListener('load', () => {
  let overlay = document.getElementById('overlay');
  overlay.classList.add('visible');
})

//

document.addEventListener("DOMContentLoaded", () => {
  switch (document.body.id) 
  {
    case "cucina":
      creaBottoneBossCereali();
      break;
  }

});
