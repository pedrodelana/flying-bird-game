import { VisualAudio } from "./visual-audio.js";

export class Background {
    public spriteX: number;
    public spriteY: number;
    public largura: number;
    public altura: number;
    public x: number;
    public y: number;
    public source;

    constructor() {
        this.source = new VisualAudio();
        this.spriteX = 390;
        this.spriteY = 0;
        this.largura = 275;
        this.altura = 204;
        this.x = 0;
        this.y = this.source.canvas.height - 204;
    }

    desenha() {
        this.source.contexto.fillStyle = "#70c5ce";
        this.source.contexto.fillRect(0, 0, this.source.canvas.width, this.source.canvas.height);

        this.source.contexto.drawImage(
          this.source.sprites,
          this.spriteX,
          this.spriteY,
          this.largura,
          this.altura,
          this.x,
          this.y,
          this.largura,
          this.altura
        );

        this.source.contexto.drawImage(
          this.source.sprites,
          this.spriteX,
          this.spriteY,
          this.largura,
          this.altura,
          this.x + this.largura,
          this.y,
          this.largura,
          this.altura
        );
    }
}
