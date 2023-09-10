export function conflictError(){
    return{
        type: "conflict",
        message: `Não é permtido adicinar cidades com nomes repetidos`
    }
}