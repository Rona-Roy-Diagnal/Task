// movies page

import React, { Suspense } from 'react'
import Navbar from './Navbar';
 const LazyComponent = React.lazy(() => import("./ListMovies"));
const Movies = () => {
  return (
    <div>
      <Navbar/>
       <Suspense fallback={<div className='lazy-div'>Loading...</div>}>
             <LazyComponent title='TOP 10 MOVIES' genre='TOP-10-MOVIES' isTop10={true}/>
             <LazyComponent title='TOP RATED' genre='KIDS-AND-FAMILY'/>
            </Suspense>
    </div>
  )
}

export default Movies