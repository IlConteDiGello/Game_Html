/*******************VARIABILI********************/

let viteComputer = 3;
let viteGiocatore = 3;

/********************FUNZIONI********************/

function inizia () {
  sessionStorage.setItem('preseMedicine', false);
  sessionStorage.setItem('vintoBossPorta', false);
  sessionStorage.setItem('giocatoControPorta', false);
  sessionStorage.setItem('preseMedicine', false);
  apri('sdraiato.html');
}

//sessionStorage.setItem serve a memorizzre un dato fino a che non viene chiusa la finestra di browser, quindi un dato rimane memorizzato per tutta la sessione di gioco
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
      cuoricino.classList.add("viteComputer");
    }
    
    contenitore.appendChild(cuoricino);
  }
}

/*window.onload = function() {
  const pagina = window.location.pathname; // es: "/gioco/boss.html"

  if (pagina.includes("Boss")) {
    disegnaVite("viteGiocatore", viteGiocatore);
    disegnaVite("viteComputer", viteComputer);
  }
}*/


function saCaFo(input, urlSeVince, urlSePerde) {
  let computer = Math.floor(Math.random() * 3)
  console.log(computer);

  if (computer == input){
    alert('pari');
  }

  //se vince il computer
  if (computer == 1 && input == 0 || computer == 0 && input == 1 || computer == 0 && input == 2){
    alert('computer');
    viteGiocatore--;
    if (viteGiocatore === 0){
      if (document.body.id === 'porta')
        sessionStorage.setItem("vintoBossPorta", false);
      apri(urlSePerde);
    }
    disegnaVite("viteGiocatore", viteGiocatore);
  }

  //se vince il giocatore
  if (computer == 2 && input == 0 || computer == 2 && input == 1 || computer == 1 && input == 2){
    alert('giocatore');
    viteComputer--;
    if (viteComputer === 0){
      if (document.body.id === 'porta')
        sessionStorage.setItem("vintoBossPorta", true);
      apri(urlSeVince);
    }
    disegnaVite("viteComputer", viteComputer);
  }

}



//funzione per creare bottone che ti fa andare avanti dopo che hai vinto contro la fucking porta

function creaBottoneCorridoio(){
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


//apre la nuova pagina applicando un effetto di transizione (fade-out)
function apri(pagina){
  let overlay = document.getElementById('overlay');
  overlay.classList.remove('visible');
  setTimeout(()=>{
    window.open(pagina, '_self');
  }, 500);
}

//

function prendiMedicine(){
  sessionStorage.setItem('preseMedicine', true);
}

//

function creaBottoneBossCereali(){
  if(!preseMedicine){
    let bottone = document.createElement("button");

    bottone.innerHTML = "Fai colazione";
    bottone.id = "bossCereali";
    bottone.classList.add("bottone"); 
    bottone.onclick = function(){
      apri('Boss_ScatolaDeiCereali.html')
    }
    document.getElementById("bottoneCattivo").appendChild(bottone);
    
  }
}

function loadCamera(){

  //se non si ha ancora giocato contro la porta carica il bottone 'porta'
  if(!sessionStorage.getItem('giocatoControPorta')){
    let bottone = document.createElement("button");
    bottone.innerHTML = "Porta";
    bottone.id = "portaCamera";
    bottone.classList.add("bottone"); 
    bottone.onclick = "apri('Boss_Porta.html')";
    document.body.appendChild(bottone);
  }

  //se si ha giocato contro la porta e si ha vinto
  if(sessionStorage.getItem('giocatoControPorta') && sessionStorage.getItem('vintoBossPorta')){
    let bottone = document.createElement("button");
    bottone.innerHTML = "Porta";
    bottone.id = "portaCamera";
    bottone.classList.add("bottone"); 
    bottone.onclick = "apri('Corridoio.html')";
    document.body.appendChild(bottone);
  }

}

function loadPorta(){
  disegnaVite("viteGiocatore", viteGiocatore);
  disegnaVite("viteComputer", viteComputer);
  sessionStorage.setItem("giocatoControPorta", true);
}



/*****************EVENT LISTENERS***************/

addEventListener('load', () => {
  
  //identifica la carica e ne carica dinamicamente alcuni elementi
  switch (document.body.id) 
  {
    /*case "cucina":
      loadCucina();
      break;*/

    case "porta":
      loadPorta();
      break;

    /*case "dio":
      loadDio();
      disegnaVite("viteGiocatore", viteGiocatore);
      disegnaVite("viteComputer", viteComputer);
      break;*/
    
    case "camera":
      loadCamera();
      break;

  }


  //transizione tra le pagine (fade-in)
  let overlay = document.getElementById('overlay');
  overlay.classList.add('visible');

})

//
/*
document.addEventListener("DOMContentLoaded", () => {
  switch (document.body.id) 
  {
    case "cucina":
      creaBottoneBossCereali();
      break;

    case "porta":
      if (!localStorage.getItem("giocatoControPorta")) {
        disegnaVite("viteGiocatore", viteGiocatore);
        disegnaVite("viteComputer", viteComputer);
        localStorage.setItem("giocatoControPorta", true);
      }
      else
        creaBottoneCorridoio();
      break;

    case "dio":
      disegnaVite("viteGiocatore", viteGiocatore);
      disegnaVite("viteComputer", viteComputer);
      break;

  }

});

*/


//      AUDIO

function Passi(){
  const audio = new Audio("../audio/passi_legno.mp3");
  audio.currentTime = 0;
  audio.volume = 0.5;
  audio.play();
}
