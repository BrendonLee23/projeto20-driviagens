export function conflictError(resource){
    return{
        type: "conflict",
        message: `${resource}.`
    }
}
export function notFoundError(resource){
    return{
        type: "notFound",
        message: `${resource}.`
    }
}
export function unprocessableEntityError(resource){
    return{
        type: "unprocessableEntity",
        message: `${resource}.`
    }
}
export function badRequestError(resource){
    return{
        type: "badRequest",
        message: `${resource}.`
    }
}
export function internalServerError(resource){
    return{
        type: "internalServerError",
        message: `${resource}.`
    }
}
