

import type React from 'react';
import { Popular, Top_rated, Upcoming } from '../../Constant/Url';

import ListMovies from '../ListMovies/ListMovies';
import './Home.css'
// import { useNavigate } from 'react-router-dom';


const Home: React.FC = () => {
  // const navigate=useNavigate()
  //  console.log("home.tsx");
// const handleshaka=()=>{
// navigate('/genre')
// }

  return (
    <div className='outer-cont'>
    {/* //   <div className='home-div'>
    //   <div className='content'>
    //     <h1></h1>
    //     <div className='btns'>
    //       <button onClick={handleshaka}>play</button>
    //     </div>
    //     <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ea cum commodi eligendi quasi recusandae maiores, vel quia illum doloremque non laborum! Obcaecati alias eveniet similique velit atque dolorem accusamus.</h2>
    //   </div>
      // </div> */}
      <ListMovies title='POPULAR' url={Popular} />
      <ListMovies title='TOP RATED' url={Top_rated} />
      <ListMovies title='UPCOMING' url={Upcoming} />
    </div>
  )

}
export default Home