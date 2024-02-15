import Caminhao from "./Caminhao";
import Carro from "./Carro";
import Moto from "./Moto";

class Diretor {
    makeCarroSimples(): Carro {
        return new Carro().setCor("Branco").setModelo("Básico").setMotor("Clássico").getResult()
    }

    makeCarroLuxo(): Carro {
        return new Carro().setCor("Dourado").setModelo("Luxo").setMotor("Esporte").getResult()
    }

    makeCaminhaoSimples(): Caminhao {
        return new Caminhao().setCor("Branco").setModelo("Básico").setMotor("Clássico").getResult()
    }

    makeCaminhaoLuxo(): Caminhao {
        return new Caminhao().setCor("Dourado").setModelo("Luxo").setMotor("Esporte").getResult()
    }

    makeMotoSimples(): Moto {
        return new Moto().setCor("Branco").setModelo("Básico").setMotor("Clássico").getResult()
    }

    makeMotoLuxo(): Moto {
        return new Moto().setCor("Dourado").setModelo("Luxo").setMotor("Esporte").getResult()
    }
}

console.log(
    new Diretor().makeCarroLuxo(),
    new Diretor().makeCarroSimples(),
    new Diretor().makeCaminhaoLuxo(),
    new Diretor().makeCaminhaoSimples(),
    new Diretor().makeMotoLuxo(),
    new Diretor().makeMotoSimples(),
    new Diretor().makeCaminhaoLuxo().reset()
)

