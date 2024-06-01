import { Floor } from "./floor.js";
import { VisualAudio } from "./visual-audio.js";
import { Collision } from "../helpers/helper.js";
import { startScreenChange } from "../helpers/change-screen.js";
import { FlyingBirdProp, GenericScreenProp, StartScreenProp } from "../helpers/types.js";
import { StartScreen } from "./screens/start-screen.js";

export class FlyingBird {
    public spriteX:number;
    public spriteY:number;
    public largura:number;
    public altura:number;
    public x:number;
    public y:number;
    public gravidade:number;
    public velocidade:number;
    public pulo:number;
    public source;

    constructor() {
        this.source = new VisualAudio;
        this.spriteX = 0;
        this.spriteY = 0;
        this.largura = 33;
        this.altura = 24;
        this.x = 10;
        this.y = 50;
        this.gravidade = 0.25;
        this.velocidade = 0;
        this.pulo = 4.6;
    }
    pula(){
        this.velocidade = - this.pulo;
    }
    atualiza(): GenericScreenProp | null {
        const floor = new Floor;
        const collision = Collision(this, floor);   
        this.velocidade = this.velocidade + this.gravidade;
        this.y = this.y + this.velocidade;

        if(collision) {
          return startScreenChange();
        }
        
    }
    desenha() {
      this.source.contexto.drawImage(
        this.source.sprites,
        this.spriteX, this.spriteY,
        this.largura, this.altura,
        this.x, this.y,
        this.largura, this.altura
      );
    }
}
