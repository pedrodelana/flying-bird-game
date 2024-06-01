//Declaração de interfaces
export interface FlyingBirdProp {
    spriteX: number;
    spriteY: number;
    largura: number;
    altura: number;
    x: number;
    y: number;
    gravidade: number;
    velocidade: number;
    pulo: number;
    pula(): void;
    atualiza(): GenericScreenProp | null;
    desenha():void;
}

// export interface TelasProp{
//     inicializar(): void;
//     desenha(FlyingBird?: FlyingBirdProp): void;
//     click(FlyingBird?: FlyingBirdProp): void;
//     atualiza?(FlyingBird?: FlyingBirdProp, currentScreen?: TelasProp): void
// }

export type StartScreenProp = {
    inicializar(): FlyingBirdProp;
    desenha(): void;
    atualiza?(): void;
}

export type GameScreenProp = {
    inicializar?(): void;
    desenha(FlyingBird: FlyingBirdProp): void;
    atualiza?(global: FlyingBirdProp): GenericScreenProp |null
}

export type GenericScreenProp = StartScreenProp | GameScreenProp;

export type InitStartProp = {
    screen: GenericScreenProp;
    bird: FlyingBirdProp;
}
export interface FloorProp {
    spriteX: number,
    spriteY: number,
    largura: number,
    altura: number,
    x: number,
    y: number,
    desenha(): void
}



export type GenericObject = { [key: string]: any };