import { Handler } from "./Handler"

export class IsParHandler implements Handler {
    private next: Handler | undefined

    constructor(next?: Handler){
        this.next = next
    }

    handle(request: number): string | void {
        return !(request % 2) ? "e par (processamento concluído)" : "e porém impar (processamento cancelado)"
    }
}
