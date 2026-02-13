import { useState, useEffect } from 'react'
import Header from './header.jsx'
import Loader from './Loader.jsx'

function App() {
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading ? <Loader onFinished={() => setLoading(false)} /> : <Header />}
    </>
  )
}

export default App