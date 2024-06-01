import { VisualAudio } from "../models/visual-audio.js";
import { FlyingBirdProp, FloorProp, GenericScreenProp } from "./types.js";

export function Collision(flyingBird: FlyingBirdProp, floor: FloorProp) {
    const flyingBirdY = flyingBird.y + flyingBird.altura;
    const source = new VisualAudio;
  
    if(flyingBirdY >= floor.y) {
      source.somDeHit.play();
      return true;
    }
    return false;
}

// export function Loop(telaAtiva: GenericScreenProp, global: FlyingBirdProp) {
//   if(telaAtiva.atualiza) {
//     telaAtiva.desenha(global);
//     telaAtiva.atualiza(global);
//   }
//   telaAtiva.desenha(global);
  
  
//   // requestAnimationFrame(this.Loop(telaAtiva, global));
// }