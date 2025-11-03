/*******************VARIABILI********************/

let viteComputer = 3;
let viteGiocatore = 3;
let preseMedicine = sessionStorage.getItem('preseMedicine') === 'false';


/********************FUNZIONI********************/

function inizia () {
  sessionStorage.setItem('preseMedicine', false);
  sessionStorage.setItem('vintoBossPorta', false);
  sessionStorage.setItem('giocatoControPorta', false);
  sessionStorage.setItem('preseMedicine', false);
  apri('sdraiato.html');
}


//////////////////////////////////////////////


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


///////////////////////////////////////////////


function saCaFo(input, urlSeVince, urlSePerde) {
  let computer = Math.floor(Math.random() * 3)
  console.log(computer);

  if (computer == input){
    alert('è un pareggio!');
  }

  //se vince il computer
  if (computer == 1 && input == 0 || computer == 0 && input == 1 || computer == 0 && input == 2){
    alert('Hai perso il turno!');
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
    alert('Hai vinto il turno!');
    viteComputer--;
    if (viteComputer === 0){
      if (document.body.id === 'porta')
        sessionStorage.setItem("vintoBossPorta", true);
      apri(urlSeVince);
    }
    disegnaVite("viteComputer", viteComputer);
  }

}


///////////////////////////////////////////////////////////////////////////


//apre la nuova pagina applicando un effetto di transizione (fade-out)
function apri(pagina){
  let overlay = document.getElementById('overlay');
  overlay.classList.remove('visible');
  setTimeout(()=>{
    window.open(pagina, '_self');
  }, 500);
}

//



//

function creaBottoneBossCereali(){

  let preseMedicine = sessionStorage.getItem('preseMedicine') === 'false';

  if(preseMedicine){
    let bottone = document.createElement("input");

    bottone.type = "button";
    bottone.value = "Fai colazione?";
    bottone.id = "bossCereali";
    bottone.classList.add("bottone"); 
    bottone.onclick = function(){
      apri('Boss_ScatolaDeiCereali.html')
    }
    document.getElementById("bottoneCattivo").appendChild(bottone);
    
  }
  else{
    let bottone = document.createElement("input");

    bottone.type = "button";
    bottone.value = "Fai colazione";
    bottone.id = "colazione";
    bottone.classList.add("bottone"); 
    bottone.onclick = function(){
      apri('colazione.html')
    }
    document.getElementById("bottoneCattivo").appendChild(bottone);
  }
}

function guidare(){
  if(!preseMedicine){
    let bottone = document.createElement("input");

    bottone.type = "button";
    bottone.value = "Vai nel bosco";
    bottone.id = "guidaNelBosco";
    bottone.classList.add("bottone"); 
    bottone.onclick = function(){
      apri('Bosco.html')
    }
    document.getElementById("bottonePerGuidareNelBoscoConUnNomeMoltoLungoNeancheIoSoPerchè").appendChild(bottone);
  }
}

/*
function controlloPortaBattuta(){
  let bottoneFinestra = document.getElementById("finestra");
  if(giocatoControPorta){
  bottoneFinestra.classList.add("visibile");
  bottoneFinestra.value="Buttati dalla finestra";}
}*/



/*****************EVENT LISTENERS***************/

addEventListener('load', () => {
  let overlay = document.getElementById('overlay');
  overlay.classList.add('visible');
})


function cambiaSfondoColazione(){
  const bottonecolazione = document.getElementById("bottoneColazione");
  const sfondo = document.getElementById("sfondoColazione");

  sfondo.src = "../immagini/colazioneFatta.png";
}
//


//      AUDIO

function Passi(){
  const audio = new Audio("../audio/passi_legno.mp3");
  audio.currentTime = 0;
  audio.volume = 0.5;
  audio.play();
}


