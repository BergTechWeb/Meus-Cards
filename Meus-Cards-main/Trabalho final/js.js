let botao = document.querySelector("#salvar");
let data = document.querySelector("#data");
let local = document.querySelector("#local");
let nome = document.querySelector("#nome");
let raridade = document.querySelector("#raridade");
let colecao = document.querySelector("#colecao");
let carta = document.querySelector("#todas-cartas");

let informacoes = [
    {
        nome: 'teste',
        data: '0112',
        local: 'casa',
        raridade: 'comum',
        colecao: '9'
    }
];

function salvarCarta() {
    let dataValor = data.value;
    let localValor = local.value;
    let nomeValor = nome.value;
    let raridadeValor = raridade.value;
    let colecaoValor = colecao.value;
    informacoes.push( {
                        nome: nomeValor,
                        data: dataValor,
                        local:localValor,
                        raridade: raridadeValor,
                        colecao: colecaoValor
                       }
                    );
    informacoes.forEach(adicionar);

    return null;
}

function adicionar(dados) {
    let inserir = document.createElement('div');
    inserir.classList.add("carta");
    carta.appendChild(inserir);
    let inserirCarta = document.createElement('ul');
    inserirCarta.classList.add("quadrado");
    inserir.appendChild(inserirCarta);
    let inserirNome = document.createElement('li');
    let inserirData = document.createElement('li');
    let inserirLocal = document.createElement('li');
    let inserirColecao = document.createElement('li');
    let inserirRaridade = document.createElement('li');
    inserirNome.innerHTML = dados.nome;
    inserirData.innerHTML = dados.data;
    inserirLocal.innerHTML = dados.local;
    inserirColecao.innerHTML = dados.colecao;
    inserirRaridade.innerHTML = dados.raridade;
    inserirCarta.appendChild(inserirNome);
    inserirCarta.appendChild(inserirData);
    inserirCarta.appendChild(inserirLocal);
    inserirCarta.appendChild(inserirColecao);
    inserirCarta.appendChild(inserirRaridade);
    return null;
}

informacoes.forEach(adicionar);

botao.addEventListener("click", salvarCarta);