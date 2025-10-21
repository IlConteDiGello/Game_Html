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
  window.open(pagina, '_self');
}
