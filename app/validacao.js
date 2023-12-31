const numeros = {
  'zero zero': 0,
  '00': 0,
  '01': 1,
  'um': 1,
  'dois': 2,
  'três': 3,
  'quatro': 4,
  'cinco': 5,
  'seis': 6,
  'sete': 7,
  'oito': 8,
  'nove': 9,
  'dez': 10
}

function verificaSeOChutePossuiUmValorValido(chute) {
  chute = corrigeNumeros(chute);
  const numero = +chute;

  if (chuteForInvalido(numero)) {
    if (chute.toUpperCase() === "GAME OVER") {
      document.body.innerHTML = `
            <h2>Game Over!!!</h2>
            <h3>Pressione o botão para jogar novamente</h3>
            <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
            `;
      document.body.style.backgroundColor = "black";
    } else {
      elementoChute.innerHTML += "<div>Valor Inválido</div>";
    }
  }

  if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
    elementoChute.innerHTML += `
      <div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>
      `;
    return;
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `
          <h2>Você acertou!</h2>
          <h3>O número secreto era ${numeroSecreto}</h3>

          <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
      `;
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `
      <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
      `;
  } else {
    elementoChute.innerHTML += `
      <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
      `;
  }
}

function chuteForInvalido(numero) {
  return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
  return numero > maiorValor || numero < menorValor;
}

const jogarNovamente = document.body.addEventListener("click", (e) => {
  if (e.target.id == "jogar-novamente") {
    window.location.reload();
  }
});

const corrigeNumeros = (palavra) => {
  for (let numero in numeros) {
    if (palavra === numero) {
      palavra = numeros[numero].toString();
    }
  }
  return palavra;
};

