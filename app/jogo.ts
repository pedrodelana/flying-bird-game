import { VisualAudio } from "./models/visual-audio.js";
import { FlyingBirdProp, FloorProp, GenericScreenProp, StartScreenProp, GameScreenProp } from "./helpers/types.js";
import { gameScreenChange, startScreenChange } from "./helpers/change-screen.js";
import { StartScreen } from "./models/screens/start-screen.js";
import { FlyingBird } from "./models/flying-bird.js";

const source = new VisualAudio;

const canvas = document.querySelector("canvas");
const contexto: CanvasRenderingContext2D = canvas.getContext("2d");

// Plano de Fundo
// const planoDeFundo = new Background;
// //chao
// const chao = new Floor;

// // Mensagem GetReady
// const mensagemGetReady = new Message;

// function fazColisao(flyingBird: FlyingBirdProp, chao: FloorProp) {
//   const flyingBirdY = flyingBird.y + flyingBird.altura;
//   const chaoY = chao.y;

//   if(flyingBirdY >= chaoY) {
//     source.somDeHit.play();
//     return true;
//   }
//   return false;
// }

// function criaFlyingBird() {
//   const flyingBird = {
//     spriteX: 0,
//     spriteY: 0,
//     largura: 33,
//     altura: 24,
//     x: 10,
//     y: 50,
//     gravidade: 0.25,
//     velocidade: 0,
//     pulo: 4.6,
//     pula(){
//       flyingBird.velocidade = - flyingBird.pulo;
//     },
//     atualiza() {
//       const collision = fazColisao(flyingBird, chao);
//       if(collision) {
//         mudaParaTela(Telas.INICIO);
//       }
  
//       flyingBird.velocidade = flyingBird.velocidade + this.gravidade;
//       flyingBird.y = flyingBird.y + flyingBird.velocidade;
//     },
//     desenha() {
//       contexto.drawImage(
//         source.sprites,
//         flyingBird.spriteX, flyingBird.spriteY,
//         flyingBird.largura, flyingBird.altura,
//         flyingBird.x, flyingBird.y,
//         flyingBird.largura, flyingBird.altura
//       );
//     }
//   }  
//   return flyingBird;
// }




//
//Telas
//

let globais: FlyingBirdProp = new FlyingBird;
let telaAtiva: number = 1;

// function mudaParaTela(novaTela: TelasProp) {
//   telaAtiva = novaTela;
//   const startGame = telaAtiva.inicializar;
//   console.log("Lana", typeof (startGame));
  
//   if(telaAtiva.inicializar) {
//     telaAtiva.inicializar();
//   };
// }


// const Telas = {
//   INICIO: 
//   {
//     inicializar() {
//       globais = criaFlyingBird();
//     },
//     desenha() {
//       planoDeFundo.desenha();
//       chao.desenha();
//       mensagemGetReady.desenha();
//     },
//     click() {
//       mudaParaTela(Telas.JOGO);
//     },
//     atualiza()  {}
//   },
//   JOGO: {
//     inicializar() {},
//     desenha() {
//       planoDeFundo.desenha();
//       chao.desenha();
//       globais.desenha();
//     },
//     click() {
//       globais.pula();
//     },
//     atualiza() {
//       globais.atualiza();
//     }
//   }
// };

function loop() {
  telaAtiva.desenha(globais);
  if(telaAtiva.atualiza) {    
    globais.atualiza()
  }


  requestAnimationFrame(loop);
}

window.addEventListener("click", function() {  
	if(!(telaAtiva === 1)) {
		let resp = gameScreenChange();
    globais = resp.bird;
    telaAtiva = resp.screen;
	} else {
		globais.pula();
	}
})



// mudaParaTela(Telas.INICIO);


// if(telaAtiva.inicializar){
// 	const resp = gameScreenChange();
// 	telaAtiva = resp.screen;
// 	globais = resp.bird;
// }
// else {
// 	const resp = startScreenChange();
// 	telaAtiva = resp;
// };


loop();