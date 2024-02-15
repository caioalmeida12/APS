import VeiculoBuilder from "./VeiculoBuilder";

class Moto implements VeiculoBuilder {
    private modelo: "Básico" | "Luxo" | undefined;
    private motor: "Clássico" | "Esporte" | undefined;
    private cor: "Branco" | "Dourado" | undefined;
    
    setModelo(modelo: "Básico" | "Luxo" | undefined): Moto {
        this.modelo = modelo
        return this
    }

    setMotor(motor: "Clássico" | "Esporte" | undefined): Moto {
        this.motor = motor
        return this
    }

    setCor(cor: "Branco" | "Dourado" | undefined): Moto {
        this.cor = cor
        return this
    }

    getResult(): Moto {
        return this
    }

    reset(): Moto {
        this.modelo = undefined
        this.motor = undefined
        this.cor = undefined
        return this
    }
}

export default Moto