// /* eslint-disable react-refresh/only-export-components */
// import { useEffect, useState } from "react";
// // import "./Banner.css";
// import '../Styles/Banner.css'
// interface ImageItem {
//   url: string;
//   type: string;
// }

// interface Trailer {
//   images: ImageItem[];
// }

// export interface ContentItem {
//   id: string;
//   title: string;
//   overview: string;
//   trailers: Trailer[];
// }

// export interface BannerItem {
//   id: string;
//   title: string;
//   overview: string;
//   image: string;
// }

// export const mapContentToBanner = (contentList: ContentItem[]): BannerItem[] => {
//   return contentList
//     .filter((c) => c.trailers?.length > 0 && c.trailers[0].images?.length > 0)
//     .map((c) => ({
//       id: c.id,
//       title: c.title,
//       overview: c.overview,
//       image: c.trailers[0].images[0].url,
//     }));
// };

// interface BannerProps {
//   contentList: ContentItem[];
// }

// const AUTO_SCROLL_TIME = 5000;

// const Banner = ({ contentList }: BannerProps) => {
//   const [banners, setBanners] = useState<BannerItem[]>([]);
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     setBanners(mapContentToBanner(contentList));
//   }, [contentList]);
// console.log(contentList)
//   useEffect(() => {
//     if (!banners.length) return;
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % banners.length);
//     }, AUTO_SCROLL_TIME);
//     return () => clearInterval(timer);
//   }, [banners]);

//   if (!banners.length) return null;

//   const current = banners[index];

//   return (
//     <div
//       className="banner"
//       style={{ backgroundImage: `url(${current.image})` }}
//     >
//       <div className="banner__content">
//         <h1>{current.title}</h1>
//         <p>{current.overview?.slice(0, 150)}...</p>
//       </div>
//     </div>
//   );
// };

// export default Banner;