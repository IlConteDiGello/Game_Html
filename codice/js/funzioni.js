function saCaFo(input) {
  let computer = Math.floor(Math.random() * 3)
  console.log(computer);

  if (computer == input)
    alert('pari');

  if (computer == 1 && input == 0 || computer == 0 && input == 1 || computer == 0 && input == 2)
    alert('computer');

  if (computer == 2 && input == 0 || computer == 2 && input == 1 || computer == 1 && input == 2)
    alert('giocatore');
}

function apri(pagina){
  let overlay = document.getElementById('overlay');
  overlay.classList.remove('visible');
  setTimeout(()=>{
    window.open(pagina, '_self');
  }, 500);
}


addEventListener('load', () => {
  let overlay = document.getElementById('overlay');
  overlay.classList.add('visible');
})

let presemedicine =false;

function prendiMedicine(){
  presemedicine=true;
}

function creaBottoneBossCereali(){
  if(!presemedicine){
    let bottone = document.createElement("button");

    bottone.textContent = "Combatti contro la scatola di cereali";
    bottone.id="bottonebosscereale"
    bottone.onclick = function(){
      apri('Boss_ScatolaDeiCereali.html')
    }
    document.getElementById("bottoneCattivo").appendChild(bottone);
    
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.body.id === "cucina") {
    creaBottoneBossCereali();
  }
});
