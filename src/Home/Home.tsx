
import { action, originals } from '../apis';

import ListMovies from '../ListMovies/ListMovies';
import './Home.css'


const Home= () => {
  return(
<>
<ListMovies title='Originals' url={originals}/>
<ListMovies title='action' url={action}/>
</>
  )
 
}
export default Home