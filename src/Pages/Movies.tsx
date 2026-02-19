// movies page

import React, { Suspense } from 'react'
 const LazyComponent = React.lazy(() => import("./ListMovies"));
const Movies = () => {
  return (
    <div>
       <Suspense fallback={<div className='lazy-div'>Loading...</div>}>
              
            <LazyComponent title='COMEDIES' genre='COMEDIES'/>
             <LazyComponent title='TOP 10 MOVIES' genre='TOP-10-MOVIES' isTop10={true}/>
             <LazyComponent title='TOP RATED' genre='KIDS-AND-FAMILY'/>
            </Suspense>
    </div>
  )
}

export default Movies