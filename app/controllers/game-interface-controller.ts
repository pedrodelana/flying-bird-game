import { FloorProp } from "../helpers/types.js";
import { Background } from "../models/background.js";
import { Floor } from "../models/floor.js";

export class GameInterfaceController {
    public background;
    public floor: FloorProp;
    
    constructor() {
        this.background = new Background;
        this.floor = new Floor;
    }
    desenha(){
        this.background.desenha();
        this.floor.desenha();
    }
}