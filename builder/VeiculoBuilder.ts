interface VeiculoBuilder {
    setModelo(modelo: string | undefined): VeiculoBuilder;
    setMotor(motor: string | undefined): VeiculoBuilder;
    setCor(cor: string | undefined): VeiculoBuilder;

    getResult(): VeiculoBuilder
    reset(): VeiculoBuilder
}

export default VeiculoBuilder