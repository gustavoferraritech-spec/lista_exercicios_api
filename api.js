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







/*Buscar produto_id*/
async function produto_id() {
    const id = document.getElementById("input-id").value;

    const url = `https://dummyjson.com/products/${id}`;
    const resposta = await fetch(url);   // 1º await: espera a rede

    if(!resposta.ok) {
        window.alert("Erro na requisição!");    /*Tratamento de erro quando o ID não existir*/
        return
    };

    const dados = await resposta.json(); // 2º await: abre o JSON
    console.log(dados);                  // confira no F12

    document.getElementById("ex1-titulo").innerText = dados.title;
    document.getElementById("ex1-preco").innerText = `Preço: ${dados.price}`;
    document.getElementById("ex1-descricao").innerText = dados.description;
}
document.getElementById("btn-buscar-id").addEventListener("click", produto_id);







/* Consultar CEP */
async function consultar_cep() {
    const cep = document.getElementById("input-cep").value;
    
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const resposta = await fetch(url);   // 1º await: espera a rede
    const dados = await resposta.json(); // 2º await: abre o JSON

    if(dados.erro) {
        window.alert("CEP não encontrado!");
        return
    };

    console.log(dados);                  // confira no F12

    document.getElementById("cep-rua").innerText = `Rua: ${dados.logradouro}`;
    document.getElementById("cep-bairro").innerText = `Bairro: ${dados.bairro}`;
    document.getElementById("cep-cidade").innerText = `Cidade: ${dados.localidade} / UF: ${dados.uf}`;
}
document.getElementById("btn-buscar-cep").addEventListener("click", consultar_cep);









/* Categoria do produto*/
async function categoria_produto() {
    const id = document.getElementById("input-cat-id").value;

    const url = `https://dummyjson.com/products/${id}`;
    const resposta = await fetch(url);   // 1º await: espera a rede

    
    if(!resposta.ok){
        window.alert("Erro na requisição!");    /*Tratamento de erro quando o ID não existir*/
        return
    };

    const dados = await resposta.json(); // 2º await: abre o JSON
    console.log(dados);                  // confira no F12

    document.getElementById("cat-nome").innerText = dados.category;
}
document.getElementById("btn-buscar-cat").addEventListener("click", categoria_produto);







/* Usuário por ID */
async function usuario_id() {
    const id = document.getElementById("input-user-id").value;

    const url = `https://dummyjson.com/users/${id}`
    const resposta = await fetch(url);   // 1º await: espera a rede
    
    if(!resposta.ok){
        window.alert("Erro na requisição!");    /*Tratamento de erro quando o ID não existir*/
        return
    };

    const dados = await resposta.json(); // 2º await: abre o JSON
    console.log(dados);                  // confira no F12

    document.getElementById("user-nome").innerText = `Nome: ${dados.firstName}`
    document.getElementById("user-email").innerText = `E-mail: ${dados.email}`
    document.getElementById("user-perfil").innerText = `Perfil: ${dados.role}`
}
document.getElementById("btn-buscar-user").addEventListener("click", usuario_id);







/* Lista de 10 produtos */
async function lista_produtos() {

    const url = "https://fakestoreapi.com/products?limit=10";
    const resposta = await fetch(url);   // 1º await: espera a rede

    const dados = await resposta.json(); // 2º await: abre o JSON
    console.log(dados);                  // confira no F12

    document.getElementById("lista-quantidade").innerText = `Quantidade: ${dados.length}` /*Estamos vendo qual é a quantidade de dados*/
    document.getElementById("lista-primeiro").innerText = `Primeiro produto: ${dados[0].title}` /*Pegando o primeiro produto, e acessando a propriedade titile*/
}
document.getElementById("btn-lista").addEventListener("click", lista_produtos);








/* POST por Id */
async function post_id() {
    const id = document.getElementById("input-post-id").value;
    
    const url = `https://dummyjson.com/posts/${id}`;
    const resposta = await fetch(url);   // 1º await: espera a rede


    if(!resposta.ok){
        window.alert("Erro na requisição!");    /*Tratamento de erro quando o ID não existir*/
        return
    }

    const dados = await resposta.json(); // 2º await: abre o JSON
    console.log(dados);                  // confira no F12

    document.getElementById("post-titulo").innerText = dados.title;
    document.getElementById("post-corpo").innerText = dados.body;

}
document.getElementById("btn-buscar-post").addEventListener("click", post_id);








/* Tarefa por Id */
async function tarefa_por_id() {
    const id = document.getElementById("input-todo-id").value;

    const url = `https://dummyjson.com/todos/${id}`;
    const resposta = await fetch(url);   // 1º await: espera a rede

    
    if(!resposta.ok){
        window.alert("Erro na requisição!");    /*Tratamento de erro quando o ID não existir*/
        return
    }

    const dados = await resposta.json(); // 2º await: abre o JSON
    console.log(dados);                  // confira no F12

    document.getElementById("todo-texto").innerText = `Tarefa: ${dados.todo}`;
    document.getElementById("todo-status").innerText = `Concluída: ${dados.completed}`;

}
document.getElementById("btn-buscar-todo").addEventListener("click", tarefa_por_id);





/* Ordens da fabrica Senai */
async function fabrica_senai() {
    const url = "./api/ordens.json";
    const resposta = await fetch(url);   // 1º await: espera a rede
    const dados = await resposta.json(); // 2º await: abre o JSON
    console.log(dados);                  // confira no F12

    document.getElementById("ordem-numero").innerText = `Ordem: ${dados[0].numero}`;
    document.getElementById("ordem-cliente").innerText = `Cliente: ${dados[0].cliente}`;

}
document.getElementById("btn-ordens").addEventListener("click", fabrica_senai);



/* Desafio secreto */
async function desafio_secreto() {
    const url = "./api/desafio-bonus.json"
    const resposta = await fetch(url);   // 1º await: espera a rede
    const dados = await resposta.json(); // 2º await: abre o JSON

    console.log(dados);                  // confira no F12
}
document.getElementById("btn-buscar").addEventListener("click", desafio_secreto);


