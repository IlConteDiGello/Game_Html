/*******************VARIABILI********************/

let puntiComputer = 0;
let puntiGiocatore = 0;

/********************FUNZIONI********************/

function inizia () {
  sessionStorage.setItem('preseMedicine', false);
  sessionStorage.setItem('vintoBossPorta', false);
  sessionStorage.setItem('giocatoControPorta', false);
  sessionStorage.setItem('preseMedicine', false);
  apri('sdraiato.html');
}

//

function saCaFo(input, urlSeVince, urlSePerde) {
  let computer = Math.floor(Math.random() * 3)
  console.log(computer);

  if (computer == input)
    alert('pari');

  if (computer == 1 && input == 0 || computer == 0 && input == 1 || computer == 0 && input == 2)
    alert('computer');

  if (computer == 2 && input == 0 || computer == 2 && input == 1 || computer == 1 && input == 2)
    alert('giocatore');

  if (puntiComputer > 2)
    apri(urlSePerde);

  if (puntiGiocatore > 2)
    apri(urlSeVince);

  //vhe pallleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
}

//

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
