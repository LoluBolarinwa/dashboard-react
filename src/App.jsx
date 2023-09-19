import { useState } from 'react'
import { ColorModeContext, useMode,  } from './theme'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="app"></div>
    </>
  )
}

export default App
