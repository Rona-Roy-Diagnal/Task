/* eslint-disable @typescript-eslint/no-explicit-any */
// const _Ltracker:any[]=(window as any)._Ltracker||[];
// _Ltracker.push({
//     logglyKey:"2b674e01-291c-4e4b-a5e8-549cf7d2575c",
//     sendConsoleErrors:false,
//     tag:"react-tv-app"
// });
// _Ltracker.push({
//     level:"info",
//     event:"confir",
//     message:"success"
// });
// (window as any)._Ltracker=_Ltracker;

import logger from "./Logger";

export type LogLevel="INFO"|"ERROR";
export const logEvent=(level:LogLevel,
    eventName:string,
    data:Record<string,any>
)=>{
    logger.push({level,event:eventName,...data,timestamp:new Date().toISOString()})
}

export const logAppLaunch=()=>{
    logEvent("INFO","_app.launch",{
        module:"General"
    })
}


export const logLogin=()=>{
    logEvent("INFO","_login.success",{
        module:"Authetication",
        errorShown:false
    })
}

export const logLoginFail=( errorType:string,errorInfo:string)=>{
   logEvent("ERROR","_login.failed",{
        module:"Authentication",
        errorShown:true,
        errorType,errorInfo
    })
}
//check
export const logUserNotExist=(props:{errorInfo?:any})=>{
    logEvent("ERROR","_login.failed",{
        module:"Authentication",
        
        errorShow:true,
        errorType:"userDoesNotExist",
        errorInfo:props.errorInfo
})
}

export const logPlaybackSuccess=(contentTitle:string,playerEvent:"play"|"pause"|"stop"|"restart")=>{
     logEvent("INFO","_playback.success",{
        module:"Player",
       contentTitle,playerEvent
    })
}

export const logPlaybackError=(contentTitle:string,playerEvent:"play"|"pause"|"stop"|"restart",errorInfo?:any)=>{
   logEvent("ERROR","_playback.error",{
        module:"Player",
        contentTitle,playerEvent,errorInfo
        
    })
}


export const logApiError=(module:string,requestBody?:any,responseCode?:number,responseBody?:any)=>{
    logEvent("ERROR","_api.error",{
        module,requestBody,responseCode,responseBody
    })
}
