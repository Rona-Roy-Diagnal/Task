/* eslint-disable @typescript-eslint/no-explicit-any */
import mixpanel from "mixpanel-browser";


const token=import.meta.env.VITE_MIXPANEL_TOKEN;
let initialized=false;
export const initanalytic=()=>{
    if(!token ||initialized) return;
    mixpanel.init(token,{
        debug:false,
        track_pageview:false,
        persistence:"localStorage"
    });
    initialized=true;
}
export const resetAnalytics=()=>{
    mixpanel.reset();
}

export const track=(event:string,props:Record<string,any>={})=>{
mixpanel.track(event,{
    app:".Flix app",
    ...props
});
}