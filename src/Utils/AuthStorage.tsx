let memoryToken:string|null=null;
export function saveToken(token:string){
    try{
        localStorage.setItem("auth_token",token)
        if(localStorage.getItem("auth_token")!==token){
            throw new Error("localstorage error")
        }
    }catch{
        console.warn("ls blocked so using memory token")
        memoryToken=token;
    }
}
export function getToken():string|null{
    try{
        return localStorage.getItem("auth_token")||memoryToken;
    }
    catch{
        return memoryToken;
    }
}
export function clearToken(){
    try{
        localStorage.removeItem("auth_token")
    }catch{
        memoryToken=null;
    }
}