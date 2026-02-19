import React, { Suspense } from 'react'
const LazyComponent=React.lazy(()=>import('./ListMovies'))
const Kids = () => {
  return (
    <div>
          <Suspense fallback={<div className='lazy-div'>Loading...</div>}>
                 
               <LazyComponent title='COMEDIES' genre='COMEDIES'/>
                <LazyComponent title='MARVEL : SPIDERMAN' genre='SPIDER-VERSE'isTop10={true}/>
                <LazyComponent title='TOP RATED' genre='KIDS-AND-FAMILY'/>
               </Suspense>
       </div>
  )
}
//call kids api
export default Kids