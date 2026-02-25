/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Suspense, useEffect, useState } from 'react';
import '../Styles/Home.css'
import { FocusContext, setFocus, useFocusable} from '@noriginmedia/norigin-spatial-navigation'
import Useanalytics from '../Hooks/Useanalytics';
import Navbar from './Navbar';

// import Banner, { type ContentItem } from './Banner';



 //import { useNavigate } from 'react-router-dom';
 const LazyComponent = React.lazy(() => import("./ListMovies"));

const Home = () => {


const {Pageview}=Useanalytics();
const [firstRowCardFocus,setFirstRowcardFocus]=useState<string|null>(null);
useEffect(()=>{
  if(firstRowCardFocus){
    setFocus(firstRowCardFocus);
  }
},[firstRowCardFocus])
const {ref,focusKey}=useFocusable({trackChildren:true})

useEffect(()=>{
  Pageview("Home")
},[])

 

  return (
   <div ref={ref}>
    <FocusContext.Provider value={focusKey}>
   <Navbar/>
 
    <div  className='outer-cont'>
        {/* <Banner contentList={bannerData}/> */}

     
         <Suspense fallback={<div  className='lazy-div'>Loading...</div>}>
         
         <LazyComponent title='TOP 10 MOVIES' genre='romance' isTop10={true} onFirstCardFocus={(key)=>{
          if(!firstRowCardFocus){
            setFirstRowcardFocus(key);
         }
         }}/>
      <LazyComponent title='DRAMA' genre='drama' onFirstCardFocus={(_key)=>{}}/>
       <LazyComponent title='TOP RATED' genre='comedy'  onFirstCardFocus={(_key)=>{}}/>
       <LazyComponent title='CHINESE' genre='fantasy' onFirstCardFocus={(_key)=>{}}/>
      </Suspense>
    
    </div>
    </FocusContext.Provider>
        </div>
    // </div>
  )

}
export default Home