export const API={
    // contentByGenre:(genre:string)=>`/content/filters/${genre}?origin=enhance&origin=vcms&source=enhance&region=IN&maxParentalRatings=UA&language=en-US&platform=web`,
    contentByGenre:(genre:string)=>`/content/items?language=en-US&size=20&filter=${genre}&filterBy=genre&type=movie&origin=vcms&page=1&platform=web&region=IN&maxParentalRatings=UA`,
        contentDetails:(id:string)=>`/content/${id}?type=movie&platform=web&schema=1.0.2&region=IN&maxParentalRatings=UA&language=en-US`
}