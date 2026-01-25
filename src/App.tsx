import React from 'react'
import './App.css'

import RouterPage from './Components/RouterPage/RouterPage'


const App :React.FC= () => {
  console.log("app.tsx")
  return (
    <div>
      
      <RouterPage/>
    </div>
  )
}

export default App