import React, { Suspense } from 'react'
import Navbar from './Navbar'
const LazyComponent=React.lazy(()=>import('./ListMovies'))
const Kids = () => {
  return (
    <div>
      <Navbar/>
          <Suspense fallback={<div className='lazy-div'>Loading...</div>}>
                 
              
                <LazyComponent title='MARVEL : SPIDERMAN' genre='SPIDER-VERSE' isTop10={true}/>
                <LazyComponent title='TOP RATED' genre='KIDS-AND-FAMILY'/>
               </Suspense>
       </div>
  )
}
//call kids api
export default Kids