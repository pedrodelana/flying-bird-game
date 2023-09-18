export class VisualAudio {
    public somDeHit;
    public sprites;
    public canvas;
    public contexto: CanvasRenderingContext2D;

    constructor() {
        this.somDeHit = new Audio();
        this.sprites = new Image();

        this.somDeHit.src = './effects/hit.wav';
        this.sprites.src = "./../../images/sprites.png";

        this.canvas = document.querySelector("canvas");
        this.contexto = this.canvas.getContext("2d");
    }
}