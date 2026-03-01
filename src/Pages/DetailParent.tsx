import { FocusContext, useFocusable } from '@noriginmedia/norigin-spatial-navigation'

import Navbar from './Navbar'
import Details from './Details'



const DetailParent = () => {
    const {ref,focusKey}=useFocusable({trackChildren:true,isFocusBoundary:true})
  return (
    <div ref={ref}>
        <FocusContext.Provider value={focusKey}>
              <Navbar/>
        <Details/>
                </FocusContext.Provider>
      
         
    </div>
  )
}

export default DetailParent