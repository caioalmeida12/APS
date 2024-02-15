import VeiculoBuilder from "./VeiculoBuilder";

class Caminhao implements VeiculoBuilder {
    private modelo: "Básico" | "Luxo" | undefined;
    private motor: "Clássico" | "Esporte" | undefined;
    private cor: "Branco" | "Dourado" | undefined;
    
    setModelo(modelo: "Básico" | "Luxo" | undefined): Caminhao {
        this.modelo = modelo
        return this
    }

    setMotor(motor: "Clássico" | "Esporte" | undefined): Caminhao {
        this.motor = motor
        return this
    }

    setCor(cor: "Branco" | "Dourado" | undefined): Caminhao {
        this.cor = cor
        return this
    }

    getResult(): Caminhao {
        return this
    }

    reset(): Caminhao {
        this.modelo = undefined
        this.motor = undefined
        this.cor = undefined
        return this
    }
}

export default Caminhao