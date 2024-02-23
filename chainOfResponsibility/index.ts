import { IsParHandler } from "./IsParHandler"
import { IsPositivoHandler } from "./isPositivoHandler"

const isPar = new IsParHandler()
const isPositivo = new IsPositivoHandler(isPar)

// Testa se um número é positivo e par
isPositivo.handle(-1)
isPositivo.handle(3)
isPositivo.handle(4)