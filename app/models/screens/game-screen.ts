import { GameInterfaceController } from "../../controllers/game-interface-controller.js";
import { FlyingBirdProp, GenericScreenProp } from "../../helpers/types.js";

export class GameScreen {
    constructor() {        
    }
    inicializar() {}
    desenha(global: FlyingBirdProp) {
      const map = new GameInterfaceController;
      map.desenha();
      global.desenha();
    }
    // atualiza(global: FlyingBirdProp): GenericScreenProp | null {
    //   return global.atualiza();
    // }
}