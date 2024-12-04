import React, { useState } from 'react'
import './App.css'
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment>
      <div id='wrapper'>
        {/* this is the main content */}
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default App
