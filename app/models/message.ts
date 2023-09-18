import { VisualAudio } from "./visual-audio.js";

export class Message {
    public sX: number;
    public sY: number;
    public w: number;
    public h: number;
    public x: number;
    public y: number;
    public source;

    constructor() {
        this.source = new VisualAudio;
        this.sX = 134;
        this.sY = 0;
        this.w = 174;
        this.h = 152;
        this.x = (this.source.canvas.width / 2) - 174 / 2;
        this.y = 50;
    }
    desenha() {
        this.source.contexto.drawImage(
          this.source.sprites,
          this.sX, this.sY,
          this.w, this.h,
          this.x, this.y,
          this.w, this.h
        );
      }
}