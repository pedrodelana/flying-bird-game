import { GameInterfaceController } from "../../controllers/game-interface-controller.js";
import { gameScreenChange } from "../../helpers/change-screen.js";
import { FlyingBirdProp, GenericObject, GenericScreenProp, InitStartProp } from "../../helpers/types.js";
import { FlyingBird } from "../flying-bird.js";
import { Message } from "../message.js";
import { GameScreen } from "./game-screen.js";

export class StartScreen {

    constructor() {
    }
    inicializar(): FlyingBirdProp {
      return new FlyingBird();
    }
    desenha() {
        const map = new GameInterfaceController;
        const message = new Message;

        map.desenha();
        message.desenha();
    }
    atualiza()  {}
}