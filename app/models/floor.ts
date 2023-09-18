import { VisualAudio } from "./visual-audio.js";

export class Floor {
    public spriteX: number;
    public spriteY: number;
    public largura: number;
    public altura: number;
    public x: number;
    public y: number;
    public source;

    constructor() {
        this.source = new VisualAudio;
        this.spriteX = 0;
        this.spriteY = 610;
        this.largura = 224;
        this.altura = 112;
        this.x = 0;
        this.y = this.source.canvas.height - 112;
    }
    desenha() {
        this.source.contexto.drawImage(
        this.source.sprites,
        this.spriteX, this.spriteY,
        this.largura, this.altura,
        this.x, this.y,
        this.largura, this.altura
      );
  
      this.source.contexto.drawImage(
        this.source.sprites,
        this.spriteX, this.spriteY,
        this.largura, this.altura,
        (this.x + this.largura), this.y,
        this.largura, this.altura
      );
    }
}