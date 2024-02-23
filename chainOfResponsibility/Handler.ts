export interface Handler {
    handle: (request: number) => string | void
}