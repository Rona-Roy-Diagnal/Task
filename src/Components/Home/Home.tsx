

import type React from 'react';
import { Popular, Top_rated, Upcoming } from '../../Constant/Url';

import ListMovies from '../ListMovies/ListMovies';
import './Home.css'


const Home:React.FC= () => {
 
  return(
<div className='home-div'>
 
<ListMovies title='POPULAR' url={Popular}/>
<ListMovies title='TOP RATED' url={Top_rated}/>
<ListMovies title='UPCOMING' url={Upcoming}/>
</div>
  )
 
}
export default Home