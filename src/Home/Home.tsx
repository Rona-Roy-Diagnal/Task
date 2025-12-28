
import { action, comedy, originals } from '../apis';

import ListMovies from '../ListMovies/ListMovies';
import './Home.css'


const Home= () => {
  return(
<>
<ListMovies title='Originals' url={originals}/>
<ListMovies title='action' url={action}/>
<ListMovies title='Comedy' url={comedy}/>
</>
  )
 
}
export default Home