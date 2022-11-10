const somDeHit = new Audio();
somDeHit.src = './efeitos/hit.wav';

const sprites = new Image();
sprites.src = "./sprites.png";

const canvas = document.querySelector("canvas");
const contexto = canvas.getContext("2d");

// Plano de Fundo
const planoDeFundo = {
  spriteX: 390,
  spriteY: 0,
  largura: 275,
  altura: 204,
  x: 0,
  y: canvas.height - 204,
  desenha() {
    contexto.fillStyle = '#70c5ce';
    contexto.fillRect(0,0, canvas.width, canvas.height);

    contexto.drawImage(
      sprites,
      planoDeFundo.spriteX, planoDeFundo.spriteY,
      planoDeFundo.largura, planoDeFundo.altura,
      planoDeFundo.x, planoDeFundo.y,
      planoDeFundo.largura, planoDeFundo.altura
    );

    contexto.drawImage(
      sprites,
      planoDeFundo.spriteX, planoDeFundo.spriteY,
      planoDeFundo.largura, planoDeFundo.altura,
      (planoDeFundo.x + planoDeFundo.largura), planoDeFundo.y,
      planoDeFundo.largura, planoDeFundo.altura
    );
  }
}

// Chao
const chao = {
  spriteX: 0,
  spriteY: 610,
  largura: 224,
  altura: 112,
  x: 0,
  y: canvas.height - 112,
  desenha() {
    contexto.drawImage(
      sprites,
      chao.spriteX, chao.spriteY,
      chao.largura, chao.altura,
      chao.x, chao.y,
      chao.largura, chao.altura
    );

    contexto.drawImage(
      sprites,
      chao.spriteX, chao.spriteY,
      chao.largura, chao.altura,
      (chao.x + chao.largura), chao.y,
      chao.largura, chao.altura
    );
  }
}

function fazColisao(flyingBird, chao) {
  const flyingBirdY = flyingBird.y + flyingBird.altura;
  const chaoY = chao.y;

  if(flyingBirdY >= chaoY) {
    somDeHit.play();
    return true;
  }
  return false;
}

function criaFlyingBird() {
  const flyingBird = {
    spriteX: 0,
    spriteY: 0,
    largura: 33,
    altura: 24,
    x: 10,
    y: 50,
    gravidade: 0.25,
    velocidade: 0,
    pulo: 4.6,
    pula(){
      flyingBird.velocidade = - flyingBird.pulo;
    },
    atualiza() {
      console.log(fazColisao(flyingBird, chao));
      if(fazColisao(flyingBird, chao)) {
        mudaParaTela(Telas.INICIO);
      }
  
      flyingBird.velocidade = flyingBird.velocidade + this.gravidade;
      flyingBird.y = flyingBird.y + flyingBird.velocidade;
    },
    desenha() {
      contexto.drawImage(
        sprites,
        flyingBird.spriteX, flyingBird.spriteY,
        flyingBird.largura, flyingBird.altura,
        flyingBird.x, flyingBird.y,
        flyingBird.largura, flyingBird.altura
      );
    }
  }  
  return flyingBird;
}


// Mensagem GetReady
const mensagemGetReady = {
  sX: 134,
  sY: 0,
  w: 174,
  h: 152,
  x: (canvas.width / 2) - 174 / 2,
  y: 50,
  desenha() {
    contexto.drawImage(
      sprites,
      mensagemGetReady.sX, mensagemGetReady.sY,
      mensagemGetReady.w, mensagemGetReady.h,
      mensagemGetReady.x, mensagemGetReady.y,
      mensagemGetReady.w, mensagemGetReady.h
    );
  }
}

//
//Telas
//
const globais = {};
let telaAtiva = {};
function mudaParaTela(novaTela) {
  telaAtiva = novaTela;

  if(telaAtiva.inicializar) {
    telaAtiva.inicializar();
  };
}

const Telas = {
  INICIO: {
    inicializar() {
      globais.flyingBird = criaFlyingBird();
    },
    desenha() {
      planoDeFundo.desenha();
      chao.desenha();
      mensagemGetReady.desenha();
    },
    click() {
      mudaParaTela(Telas.JOGO);
    },
    atualiza() {

    }
  }
};

Telas.JOGO = {
  desenha() {
    planoDeFundo.desenha();
    chao.desenha();
    globais.flyingBird.desenha();
  },
  click() {
    globais.flyingBird.pula();
  },
  atualiza() {
    globais.flyingBird.atualiza();
  }
}

function loop() {
  telaAtiva.desenha();
  telaAtiva.atualiza();

  requestAnimationFrame(loop);
}

window.addEventListener("click", function() {
  if(telaAtiva.click()) {
    telaAtiva.click();
  }
})

mudaParaTela(Telas.INICIO);
loop();