// Get the modal
let modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
let span = document.getElementById("close");

// Get the button that opens the modal
let addButton = document.getElementById("add");

// When the user clicks on the button, open the modal
addButton.onclick = function () {
  modal.style.display = "block";
};

// Get the button that opens the modal
let aleatorioBtn = document.getElementById("aleatorio");

// When the user clicks on the button, open the modal
aleatorioBtn.onclick = function () {
  let nome = document.getElementById("nome");
  let sequencia = document.getElementById("sequencia");
  sequencia.value = "";
  nome.value = "";
  let seq = [];
  let seq_aux = [];
  for (let i = 0; i < 5; i++) {
    seq_aux.push(
      (Math.random() > 0.5 ? 1 : 0).toString() +
        parseInt(Math.random() * 10).toString()
    );
    for (let i = 2; i < 7; i++) {
      seq_aux.push(i.toString() + parseInt(Math.random() * 10).toString());
    }
    seq.push(seq_aux);
    seq_aux = [];
  }

  for (let i = 0; i < 5; i++) {
    let txt = "";
    for (let j = 0; j < 6; j++) {
      txt += " " + seq[i][j];
    }
    sequencia.value += txt + "\n";
  }
  nome.value = "Cadastro Aleatório";
  modal.style.display = "block";
};

let confirmar = document.getElementById("confirmar");

confirmar.onclick = function () {
  let nome = document.getElementById("nome").value;
  let sequencia = document.getElementById("sequencia").value;
  let caractere = document.getElementById("caractere").value;
  add(criar(nome, sequencia.split("\n"), caractere));
  localStorage.setItem("jogos", arrayToJsDeclaration_3dOnly(jogosN));
  localStorage.setItem("nomes", arrayToString(jogosNomes));
  modal.style.display = "none";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
