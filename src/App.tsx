import { useEffect, useState } from 'react'
import RHLogo2 from './assets/RHLogoNoWords.svg'
import './App.css'

function App() {
  const [startAnimation, setStartAnimation] = useState(false)

  useEffect(() => {
    if (startAnimation) {
      console.log('woohoo')
      setTimeout(() => {
        setStartAnimation(false)
      }, 1000)
    }
  }, [startAnimation])

  console.log('startAnimation', startAnimation)

  return (
    <>
      <div>
        <button onClick={() => setStartAnimation(true)}>
          <img src={RHLogo2} className='logo' alt='Vite logo' />
        </button>
      </div>
      <h1 className='text-3xl font-bold underline'>Ryan Hill</h1>
      <div className='card'>
        Senior Software Engineer
        <p>Crafting moments of digital delight</p>
      </div>
      <p className='read-the-docs'>Based in Colorado | USA</p>
    </>
  )
}

export default App
