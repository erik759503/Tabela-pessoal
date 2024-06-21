function Linha() {
    let tabela = document.getElementById("tabela").getElementsByTagName('tbody')[0];
    let novaLinha = tabela.insertRow(tabela.rows.length);
    let celula1 = novaLinha.insertCell(0);
    let celula2 = novaLinha.insertCell(1);
    let celula3 = novaLinha.insertCell(2);
    let celula4 = novaLinha.insertCell(3);
    let celula5 = novaLinha.insertCell(4);
    celula1.innerHTML = "<input type='date'>";
    celula2.innerHTML = "<input type='text'>";
    celula3.innerHTML = "<input type='text'>";
    celula4.innerHTML = "<input type='text'>";
    celula5.innerHTML = "<input type='text'>";
}


