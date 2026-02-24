/* eslint-disable @typescript-eslint/no-explicit-any */
import  { track  } from "./Analytics"
import { CommonAttributes } from "./AnalyticsContext";

//app launch
export const trackAppLaunch=()=>{
   track("_app.launched");
}
//login
export const trackLogin=({entryPoint}:{entryPoint:string})=>{
track("_user.login",{
    ...CommonAttributes(entryPoint)
})
}
//logout
export const trackLogout=({entryPoint}:{entryPoint:string})=>{
track("_user.logout",{
    ...CommonAttributes(entryPoint)
})
}
//page view
export const trackPageView=({entryPoint,pageName}:{entryPoint:string,pageName:string})=>{
track("_page.view",{...CommonAttributes(entryPoint),pageName})
}
//content select
export const trackContentSelect=({entryPoint,contentId,contentTitle,contentGenre}:any)=>{
    track("_content.select",{
        ...CommonAttributes(entryPoint),
        contentId,contentTitle,contentGenre

    })
}
//playback
export const trackPlayback=({entryPoint,contentId,contentTitle,contentGenre}:any)=>{
    track("_content.playback",{
        ...CommonAttributes(entryPoint),
        contentId,contentTitle,contentGenre
    })
}
//video pause
export const trackVideoPause=({entryPoint,contentId,contentTitle,contentGenre}:any)=>{
         track("_content.playback.paused",{
        ...CommonAttributes(entryPoint),
        contentId,contentTitle,contentGenre
    })
}

//playback end
export const trackPlaybackEnd=({entryPoint,contentId,contentTitle,contentGenre}:any)=>{
         track("_content.playback.end",{
        ...CommonAttributes(entryPoint),
        contentId,contentTitle,contentGenre
    })
}

//playback error

export const trackPlaybackError=({contentId,contentTitle,errorMsg}:any)=>{
         track("_content.playback.end",{
      
      contentId,contentTitle,errorMsg,eventAction:"error"
    })
}
