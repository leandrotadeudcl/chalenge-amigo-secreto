let listaDeAmigos = []; // array para armazenar os amigos

function adicionarAmigo() { // essa função captura o valor do campo de entrada
    let amigo = document.getElementById('amigo');
    let amigoAdicionado = amigo.value.trim();
//    console.log(amigoAdicionado);

    if (amigoAdicionado === '') {
        alert('Por favor, insira um nome!!!');
        return;
    }
        listaDeAmigos.push(amigoAdicionado);
        atualizarListaDeAmigos();
        amigo.value = ""; // limpa o campo de entrada de nomes
        amigo.focus(); // move o cursor para o campo de texto
}

function atualizarListaDeAmigos() { // função para exibir os amigos na lista HTML
    let listaDeAmigosAtual = document.getElementById('listaAmigos');
    listaDeAmigosAtual.innerHTML = '';
    for (let cadaAmigo of listaDeAmigos) {
        let li = document.createElement('li');
        li.textContent = cadaAmigo;
        listaDeAmigosAtual.appendChild(li);
        }
}

function sortearAmigo() {
    let resultadoE1 = document.getElementById('resultado');
    if (listaDeAmigos.length === 0) {
        resultadoE1.innerHTML = 'A lista de amigos está vazia. Adicione amigos para realizar o sorteio!!!';
        return;    
    }

    let amigoAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[amigoAleatorio];
    resultadoE1.innerHTML = `Amigo (a) sorteado foi ${amigoSorteado}`;
}           