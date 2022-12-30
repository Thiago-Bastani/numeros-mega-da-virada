class jogo {
  numeros = [];
  nome = "";
  tabela = document.createElement("table");
  div = document.createElement("div");
  constructor(_nome, sequencia, caractere) {
    for (let i = 0; i < 5; i++) {
      try {
        this.numeros.push(
          sequencia[i].trim().split(caractere ? caractere : " ")
        );
      } catch (e) {
        console.log("Formato de input errado! (" + e + ")");
      }
    }
    this.nome = _nome;
  }

  criarElemento() {
    let titulo = document.createElement("h2"); // criar H2 com nome
    let texto = document.createTextNode(this.nome);
    titulo.appendChild(texto);
    this.div.appendChild(titulo);
    for (let i = 0; i < 5; i++) {
      let tr = document.createElement("tr"); // criar 5 tr
      this.numeros[i].forEach((numero) => {
        let tdText = document.createTextNode(numero);
        let td = document.createElement("td");
        td.appendChild(tdText);
        tr.appendChild(td); // cada uma com um td
      });
      this.tabela.appendChild(tr); // colocar na tabela
    }
    this.div.appendChild(this.tabela);
    this.div.classList = "jogo";
  }
}
