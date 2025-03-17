let listaDeAmigos = [];

function adicionarAmigo(){
    const adicionarNome = document.getElementById('amigo')
    const nomeAdicionado = adicionarNome.value.trim() 

    if(nomeAdicionado === ''){
        alert('Campo vazio! Por favor, insira um nome.')
        return
    }

    listaDeAmigos.push(nomeAdicionado)

    atualizarLista()
    adicionarNome.value = ''
}

function atualizarLista(){
    const listaAmigos = document.getElementById('listaAmigos')
    listaAmigos.innerHTML = ''
    
    for (let i = 0; i < listaDeAmigos.length; i++) {
        listaAmigos.innerHTML += "<li>" + listaDeAmigos[i] + "</li>";
    }
}

function sortearAmigo(){
    if(listaDeAmigos.length === 0){
        alert("Insira pelo menos um nome antes de sortear.")
        return
    }

    let posicaoSorteada = Math.floor(Math.random() * listaDeAmigos.length)
    let amigoSorteado = listaDeAmigos[posicaoSorteada]

    document.getElementById('resultado').innerHTML = '<li>Amigo Sorteado: ' + amigoSorteado + '</li>'
}