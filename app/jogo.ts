const somDeHit = new Audio();
somDeHit.src = './effects/hit.wav';

const sprites = new Image();
sprites.src = "./../images/sprites.png";

const canvas = document.querySelector("canvas");
const contexto: CanvasRenderingContext2D = canvas.getContext("2d");

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

function fazColisao(flyingBird: FlyingBirdProp, chao: any) {
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
let character: FlyingBirdProp;
let telaAtiva: TelasProp;

function mudaParaTela(novaTela: TelasProp) {
  telaAtiva = novaTela;
  
  if(telaAtiva.inicializar) {
    telaAtiva.inicializar();
  };
}


interface FlyingBirdProp {
  spriteX: number,
  spriteY: number,
  largura: number,
  altura: number,
  x: number,
  y: number,
  gravidade: number,
  velocidade: number,
  pulo: number,
  pula(): void,
  atualiza(): void,
  desenha():void
}

interface TelasProp{
  inicializar(): void,
  desenha(): void,
  click(): void,
  atualiza(): void
}

const Telas = {
  INICIO: 
  {
    inicializar() {
      character = criaFlyingBird();
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
  },
  JOGO: {
    inicializar() {},
    desenha() {
      planoDeFundo.desenha();
      chao.desenha();
      character.desenha();
    },
    click() {
      character.pula();
    },
    atualiza() {
      character.atualiza();
    }
  }
};

function loop() {
  telaAtiva.desenha();
  telaAtiva.atualiza();

  requestAnimationFrame(loop);
}

window.addEventListener("click", function() {
  if(telaAtiva.click) {
    telaAtiva.click();
  }
})

mudaParaTela(Telas.INICIO);
loop();