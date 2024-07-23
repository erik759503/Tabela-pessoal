function Linha() {
    let tabela = document.getElementById("tabela").getElementsByTagName('tbody')[0];// Ira pegar  o documento com o ID tabela e dentro dela qual tiver o nome tbody 
    let novaLinha = tabela.insertRow(tabela.rows.length); //Ira Add uma nova linha com o ID tabela
    let celula1 = novaLinha.insertCell(0);
    let celula2 = novaLinha.insertCell(1);
    let celula3 = novaLinha.insertCell(2);
    let celula4 = novaLinha.insertCell(3);
    let celula5 = novaLinha.insertCell(4);
    celula1.innerHTML = "<input type='date'>";
    celula2.innerHTML = "<input type='time'>";
    celula3.innerHTML = "<input type='time'>";
    celula4.innerHTML = "<input type='number'>";
    celula5.innerHTML = "<input type='number'>";
}