import FormaPrototype from "./Forma";

class Circulo implements FormaPrototype {
    private lados: number[]

    constructor(source?: number | Circulo) {
        if (source instanceof Circulo) {
            this.lados = [...source.lados]
        } else {
            this.lados = [source || 0]
        }
    }

    clone(): Circulo {
        return new Circulo(this)
    }

    desenhar(): void {
        console.log(`Desenhando um círculo com raio ${this.lados[0]}`)
    }
}

export default Circulo