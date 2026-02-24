/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */

// import type { BannerItem, ContentItem } from "../Pages/Banner";
import { API } from "../Utils/apis"
import APIService from "./APIService"

export const fetchContentByGenre=async(genre:string)=>{
    const res=await APIService.get(API.contentByGenre(genre));
    
    return res.data.content;
}

export const fetchContentDetails=async(id:string)=>{
    const res=await APIService.get(API.contentDetails(id));
    return res.data;
}
// export const fetchBanner=async()=>{
//     const data=await fetchContentByGenre("DRAMA");
//     console.log(data)
   
//     return data.map((item):any=>({
//         id:item.id,
//         title:item.title,
//         overview:item.overview,
//         image:item.trailers[0].images[0].url
//     }))
// }