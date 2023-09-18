//Declaração de interfaces
export interface FlyingBirdProp {
    spriteX: number,
    spriteY: number,
    largura: number,
    altura: number,
    x: number,
    y: number,
    gravidade: number,
    velocidade: number,
    pulo: number,
    pula(): void,
    atualiza(): void,
    // atualiza(currentScreen:TelasProp): void,
    desenha():void
}

export interface TelasProp{
    inicializar(): void,
    desenha(): void,
    click(): void,
    atualiza?(): void
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