rowsCount = 4;
jogosN = [];
jogosNomes = [];

criarRow = () => {
  row = document.createElement("div");
  row.classList = "row";
  return row;
};

add = (jogo) => {
  if (rowsCount >= 3) {
    row = criarRow();
    row.appendChild(jogo.div);
    document.body.appendChild(row);
    rowsCount = 0;
  } else {
    rows = document.getElementsByClassName("row");
    rows[rows.length - 1].appendChild(jogo.div);
    rowsCount++;
  }
};

row = document.createElement("div");

criar = (nome, sequencia, caractere) => {
  let aux_jogo = new jogo(nome, sequencia, caractere);
  console.table(aux_jogo.numeros);
  aux_jogo.criarElemento();
  return aux_jogo;
};
