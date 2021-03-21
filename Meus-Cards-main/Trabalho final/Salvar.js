const foto = document.querySelector("#foto");
const categoria1 = document.querySelector("#categoria");

let informacoesPokemon = [];
let informacoesEnergia = [];
let informacoesTreinador = [];

function apagar() {
    paragravo.innerHTML = "";
    botao.classList.remove("oculto");
    botao2.classList.add("oculto");
}

function salvar() {
    let categoriaValor = categoria1.value;
    let contadorEnrgia = -1;
    let contadorPokemon = -1;
    let contadorTreinador = -1; 
    localStorage.setItem('contadorTreinador', contadorTreinador);
    localStorage.setItem('contadorPokemon', contadorPokemon);
    localStorage.setItem('contadorEnergia', contadorEnrgia);
    if (categoriaValor == "Treinador")
    {
        contadorTreinador++;
        salvarTreinador();
        localStorage.setItem('contadorTreinador', contadorTreinador);
    }
    if (categoriaValor == "Pokemon")
    {
        contadorPokemon++;
        salvarPokemon();
        localStorage.setItem('contadorPokemon', contadorPokemon);
    }
    if (categoriaValor == "Energia")
    {
        contadorEnrgia++;
        salvarEnergia();
        localStorage.setItem('contadorEnergia', contadorEnrgia);
    }
    return null;
}

function salvarTreinador() {
    const data = document.querySelectorAll(".data");
    const local = document.querySelectorAll(".local");
    const nome = document.querySelectorAll(".nome");
    const raridade = document.querySelectorAll(".raridade");
    const colecao = document.querySelectorAll(".colecao");
    const apoiador = document.querySelectorAll(".apoiador");
    let fotoValor = foto.value;
    let nomeValor = nome[0].value;
    let dataValor = data[0].value;
    let localValor = local[0].value;
    let raridadeValor = raridade[0].value;
    let colecaoValor = colecao[0].value;
    let apoiadorValor = apoiador[0].value;
    informacoesTreinador.push( {
                                    foto: fotoValor,
                                    nome: nomeValor,
                                    raridade: raridadeValor,
                                    apoiador: apoiadorValor,
                                    local: localValor,
                                    data: dataValor,
                                    colecao: colecaoValor
                                }
                            );
    localStorage.setItem('informacoesTreinador', JSON.stringify(informacoesTreinador));
    apagar();
    return null;
}

function salvarPokemon() {
    const data = document.querySelectorAll(".data");
    const local = document.querySelectorAll(".local");
    const nome = document.querySelectorAll(".nome");
    const raridade = document.querySelectorAll(".raridade");
    const colecao = document.querySelectorAll(".colecao");
    const elemento = document.querySelectorAll(".elemento");
    const shiny = document.querySelectorAll(".shiny");
    let fotoValor = foto.value;
    let dataValor = data[0].value;
    let localValor = local[0].value;
    let nomeValor = nome[0].value;
    let raridadeValor = raridade[0].value;
    let colecaoValor = colecao[0].value;
    let elementoValor = elemento[0].value;
    let shinyValor = shiny.value;
    informacoesPokemon.push( {
                                foto: fotoValor,
                                nome: nomeValor,
                                colecao: colecaoValor,
                                local:  localValor,
                                data: dataValor,
                                raridade: raridadeValor,
                                elemento: elementoValor,
                                shiny: shinyValor
                                }
                            );
    localStorage.setItem('informacoesPokemon', JSON.stringify(informacoesPokemon));
    apagar();
    return null;
}

function salvarEnergia() {
    const data = document.querySelectorAll(".data");
    const local = document.querySelectorAll(".local");
    const raridade = document.querySelectorAll(".raridade");
    const elemento = document.querySelectorAll(".elemento");
    let fotoValor = foto.value;
    let dataValor = data[0].value;
    let localValor = local[0].value;
    let raridadeValor = raridade[0].value;
    let elementoValor = elemento[0].value;
    informacoesEnergia.push( {
                                    foto: fotoValor,
                                    elemento: elementoValor,
                                    local: localValor,
                                    data: dataValor,
                                    raridade: raridadeValor
                                }
                            );
    localStorage.setItem('informacoesEnergia', JSON.stringify(informacoesEnergia));
    apagar();
    return null;
}
botao2.addEventListener("click", salvar);