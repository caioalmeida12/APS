import Circulo from "./Circulo";
import Quadrado from "./Quadrado";
import Triangulo from "./Triangulo";

const quadrado = new Quadrado(10)
quadrado.desenhar()

const quadradoClone = quadrado.clone()
quadradoClone.desenhar()

console.log("Quadrados são iguais: ")
console.log(quadrado === quadradoClone) // false

const triangulo = new Triangulo([3, 4, 5])
triangulo.desenhar()

const trianguloClone = triangulo.clone()
trianguloClone.desenhar()

console.log("Triângulos são iguais: ")
console.log(triangulo === trianguloClone) // false

const circulo = new Circulo(5)
circulo.desenhar()

console.log("Círculos são iguais: ")
const circuloClone = circulo.clone()
circuloClone.desenhar()

console.log(circulo === circuloClone) // false
