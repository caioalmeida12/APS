import { Handler } from "./Handler"

export class IsPositivoHandler implements Handler {
    private next: Handler | undefined

    constructor(next: Handler){
        this.next = next
    }

    handle(request: number) {  
        if (request >= 0) {
            console.log(`${request} é positivo`, this.next?.handle(request))
        } else {
            console.log(`${request} é um input não-satisfatório (processamento cancelado)`)
        }
    }
}