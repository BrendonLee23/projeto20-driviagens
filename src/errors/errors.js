export function badRequestError(resourse){
    return{
        type: "badRequest",
        message: `Todos os ${resourse} são obrigatórios`
    }
}