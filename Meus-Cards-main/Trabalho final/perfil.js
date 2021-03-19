const botaoCatrastar = document.querySelector("#cadastrar");
let nomeCatrasto = document.querySelector("#nome-catrasto");
let sobrenomeCatrasto = document.querySelector("#sobrenome-catrasto");
let dataCatrasto = document.querySelector("#data-catrasto");
let emailCatrasto = document.querySelector("#email-catrasto");
let paisCatrasto = document.querySelector("#pais-catrasto");

function carregar() {
    nomeCatrasto.value = localStorage.getItem('nome');
    sobrenomeCatrasto.value = localStorage.getItem('sobrenome');
    dataCatrasto.value = localStorage.getItem('data');
    emailCatrasto.value = localStorage.getItem('email');
    paisCatrasto.value = localStorage.getItem('pais');
    return null;
}

function salvar() {
    let nomeValorCadrasto = nomeCatrasto.value;
    let sobrenomeValorCadrasto = sobrenomeCatrasto.value;
    let dataValorCadrasto = dataCatrasto.value;
    let emailValorCadrasto = emailCatrasto.value;
    let paisValorCadrasto = paisCatrasto.value;
    localStorage.setItem('nome', nomeValorCadrasto);
    localStorage.setItem('sobrenome', sobrenomeValorCadrasto);
    localStorage.setItem('data', dataValorCadrasto);
    localStorage.setItem('email', emailValorCadrasto);
    localStorage.setItem('pais', paisValorCadrasto);
    carregar();
    return null
}

carregar();

botaoCatrastar.addEventListener('click', salvar);