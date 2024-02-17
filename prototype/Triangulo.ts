import FormaPrototype from "./Forma";

class Triangulo implements FormaPrototype {
    private lados: number[]

    constructor(source?: number[] | Triangulo) {
        if (source instanceof Triangulo) {
            this.lados = [...source.lados]
        } else {
            this.lados = source || [0, 0, 0]
        }
    }

    clone(): Triangulo {
        return new Triangulo(this)
    }

    desenhar(): void {
        console.log(`Desenhando um triângulo com lados ${this.lados[0]}, ${this.lados[1]} e ${this.lados[2]}`)
    }
}

export default Triangulo