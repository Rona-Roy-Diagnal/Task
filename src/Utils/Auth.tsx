import { getToken } from "./AuthStorage";

export function isAuthenticated():boolean{
    return !!getToken();
}