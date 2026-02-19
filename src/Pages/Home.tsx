/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Suspense, useEffect, useState } from 'react';
import '../Styles/Home.css'
import { setFocus} from '@noriginmedia/norigin-spatial-navigation'
 //import { useNavigate } from 'react-router-dom';
 const LazyComponent = React.lazy(() => import("./ListMovies"));

const Home: React.FC = () => {
//   const navigate=useNavigate()
//    console.log("home.tsx");
// const handleshaka=()=>{
// navigate('/genre')
// }
const [firstRowCardFocus,setFirstRowcardFocus]=useState<string|null>(null);
useEffect(()=>{
  if(firstRowCardFocus){
    setFocus(firstRowCardFocus);
  }
},[firstRowCardFocus])

  return (
   
    <div  className='outer-cont'>
        
      {/* <div className='home-div'>
      <div className='content'>
     <h1></h1>
         <div className='btns'>
           <button onClick={handleshaka}>play</button>
         </div>
         <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ea cum commodi eligendi quasi recusandae maiores, vel quia illum doloremque non laborum! Obcaecati alias eveniet similique velit atque dolorem accusamus.</h2>
       </div> */}
         
         <Suspense fallback={<div  className='lazy-div'>Loading...</div>}>
         <LazyComponent title='TOP 10 MOVIES' genre='TOP-10-MOVIES' isTop10={true} onFirstCardFocus={(key)=>{
          if(!firstRowCardFocus){
            setFirstRowcardFocus(key);
          }
         }}/>
      <LazyComponent title='DRAMA' genre='DRAMA' onFirstCardFocus={(_key)=>{}}/>
       <LazyComponent title='TOP RATED' genre='KIDS-AND-FAMILY'  onFirstCardFocus={(_key)=>{}}/>
       
      </Suspense>
    
    </div>
      
    // </div>
  )

}
export default Home