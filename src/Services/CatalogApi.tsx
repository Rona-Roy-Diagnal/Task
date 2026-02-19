
const BASE_URL=import.meta.env.VITE_BASE_URL;
const dyn="?origin=enhance&origin=vcms&source=enhance&region=IN&maxParentalRatings=UA&language=en-US&platform=web"
const CatalogApi =async (genre:string) => {
    const url=`${BASE_URL}/${genre}/${dyn}`;
    const res=await fetch(url)
    if(!res.ok){
        throw new Error(`${res.status}`)
    }
    const data=await res.json();
  return data.content||[];
}

export default CatalogApi