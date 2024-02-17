import FormaPrototype from "./Forma";

class Quadrado implements FormaPrototype {
    private lado: number

    constructor(lado?: number | Quadrado) {
        if (lado instanceof Quadrado) {
            this.lado = lado.lado
        } else {
            this.lado = lado || 0
        }
    }
    
    clone(): Quadrado {
        return new Quadrado(this)
    }

    desenhar(): void {
        console.log(`Desenhando um quadrado com lado ${this.lado}`)
    }
}

export default Quadrado