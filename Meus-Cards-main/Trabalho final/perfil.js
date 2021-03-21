const botaoCatrastar = document.querySelector("#cadastrar");
let nomeCatrasto = document.querySelector("#nome-catrasto");
let sobrenomeCatrasto = document.querySelector("#sobrenome-catrasto");
let dataCatrasto = document.querySelector("#data-catrasto");
let emailCatrasto = document.querySelector("#email-catrasto");
let paisCatrasto = document.querySelector("#pais-catrasto");

function carregar() {
    nomeCatrasto.value = localStorage.getItem('nomePerfil');
    sobrenomeCatrasto.value = localStorage.getItem('sobrenomePerfil');
    dataCatrasto.value = localStorage.getItem('dataPerfil');
    emailCatrasto.value = localStorage.getItem('emailPerfil');
    paisCatrasto.value = localStorage.getItem('paisPerfil');
    return null;
}

function salvar() {
    let nomeValorCadrasto = nomeCatrasto.value;
    let sobrenomeValorCadrasto = sobrenomeCatrasto.value;
    let dataValorCadrasto = dataCatrasto.value;
    let emailValorCadrasto = emailCatrasto.value;
    let paisValorCadrasto = paisCatrasto.value;
    localStorage.setItem('nomePerfil', nomeValorCadrasto);
    localStorage.setItem('sobrenomePerfil', sobrenomeValorCadrasto);
    localStorage.setItem('dataPerfil', dataValorCadrasto);
    localStorage.setItem('emailPerfil', emailValorCadrasto);
    localStorage.setItem('paisPerfil', paisValorCadrasto);
    carregar();
    return null
}

carregar();

botaoCatrastar.addEventListener('click', salvar);