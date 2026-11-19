// api.js - Digite seu código aqui junto com o professor durante a aula!
async function exercicio_com_professor() {
    const url = "https://dummyjson.com/products/1"
    const resposta = await fetch(url);   // 1º await: espera a rede
    const dados = await resposta.json(); // 2º await: abre o JSON

    console.log(dados);                  // confira no F12

    document.getElementById("titulo").innerText = dados.title;
    document.getElementById("preco").innerText = `Preço: ${dados.price}`;
    document.getElementById("descricao").innerText = dados.description
}
document.getElementById("btn-buscar").addEventListener("click", exercicio_com_professor);
