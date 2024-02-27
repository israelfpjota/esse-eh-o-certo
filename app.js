let listaDeNumeroSorteados = [];
let limiteDeNumero = 10;
let numeroSecreto = numeroAleatorio ();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagagemInicial() {
    exibirTextoNaTela('h1', 'Jogo da sorte');
    exibirTextoNaTela('p', 'Faça sua aposta');
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela ('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela ('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor')
        } else {
            exibirTextoNaTela ('p', 'O número secreto é maior')
        }
        tentativas++; 
        LimparCampo();

    }
} 

function numeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * limiteDeNumero + 1 );
   let quantideDeElementosNaLista = listaDeNumeroSorteados.length;
   if (quantideDeElementosNaLista == limiteDeNumero) {
    listaDeNumeroSorteados = [];
   }
   if (listaDeNumeroSorteados.includes(numeroEscolhido)) {
       return numeroAleatorio(); 
   } else {
    listaDeNumeroSorteados.push(numeroEscolhido);
    return numeroEscolhido;
   }
} 

function LimparCampo () {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo () {
    numeroSecreto = numeroAleatorio ();
    LimparCampo ();
    tentativas = 1;
    exibirMensagagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}