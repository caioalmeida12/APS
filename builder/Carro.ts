import VeiculoBuilder from "./VeiculoBuilder";

class Carro implements VeiculoBuilder {
    private modelo: "Básico" | "Luxo" | undefined;
    private motor: "Clássico" | "Esporte" | undefined;
    private cor: "Branco" | "Dourado" | undefined;
    
    setModelo(modelo: "Básico" | "Luxo" | undefined): Carro {
        this.modelo = modelo
        return this
    }

    setMotor(motor: "Clássico" | "Esporte" | undefined): Carro {
        this.motor = motor
        return this
    }

    setCor(cor: "Branco" | "Dourado" | undefined): Carro {
        this.cor = cor
        return this
    }

    getResult(): Carro {
        return this
    }

    reset(): Carro {
        this.modelo = undefined
        this.motor = undefined
        this.cor = undefined
        return this
    }
}

export default Carro