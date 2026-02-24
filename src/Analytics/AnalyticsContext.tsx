
import { getUserType } from "../Utils/UserType"

export type userType="guest"|"registered"

export const CommonAttributes=(
    entryPoint?:string)=>({
    userType:getUserType(),entryPoint
})
