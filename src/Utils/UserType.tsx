import type {userType} from "../Analytics/AnalyticsContext"
export const getUserType=():userType=>{
    const token=localStorage.getItem("auth_token");
    return token?"registered":"guest"
}