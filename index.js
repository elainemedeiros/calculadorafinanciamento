import {Financiamento} from "./js/financiamento.js";
import {FinanciamentoCarencia} from "./js/financiamentocarencia.js";


const comCarencia = document.querySelector("#comCarencia");
const listaSuspensa = document.querySelector("#listaSuspensa");
const botaoCalcular = document.querySelector("#botaoCalcular");
const textoValor = document.querySelector("#textoValor");
const textoEntrada = document.querySelector("#textoEntrada");
const textoTaxaJuros = document.querySelector("#textoTaxaJuros");
const textoPrazo = document.querySelector("#textoPrazo");
const botaoNovaSimulacao = document.querySelector("#botaoNovaSimulacao");

function limpaCorpoDaTabela() {
    while(corpoTabela.firstChild) {
        corpoTabela.removeChild(corpoTabela.firstChild);
    }
}

comCarencia.addEventListener("change", function() {
    if (this.checked) {
        listaSuspensa.removeAttribute("hidden");
    } else {
        listaSuspensa.setAttribute("hidden", "hidden");
    }
});

botaoCalcular.addEventListener('click', function(){
    limpaCorpoDaTabela();
    const valor = parseFloat(textoValor.value);
    const entrada = parseFloat(textoEntrada.value);
    const taxaJuros = parseFloat(textoTaxaJuros.value);
    const prazo = parseFloat(textoPrazo.value);
    let simulacao;
    if (comCarencia.checked){
        const carencia = parseInt(listaSuspensa.value);
        simulacao = new FinanciamentoCarencia(valor, entrada, taxaJuros, prazo, carencia);
    } else {
        simulacao = new Financiamento(valor, entrada, taxaJuros, prazo);
    }
    simulacao.calcParcelasMensais();
    simulacao.exibeParcelas();
});

botaoCalcular.addEventListener("click", function() {
    botaoNovaSimulacao.removeAttribute("hidden");
});

//botaoNovaSimulacao.addEventListener("click", limpaCorpoDaTabela);

botaoNovaSimulacao.addEventListener("click", function(){
    limpaCorpoDaTabela();
    botaoNovaSimulacao.setAttribute("hidden", "hidden")
    document.getElementById('textoValor').value='';
    document.getElementById('textoEntrada').value='';
    document.getElementById('textoTaxaJuros').value='';
    document.getElementById('textoPrazo').value='';
});