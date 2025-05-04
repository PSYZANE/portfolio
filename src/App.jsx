import Navbar from './components/navbar'
import Hero from './components/hero'

const App = () => {
  return (
    <div className='container mx-auto px-0.5 sm:px-3 md:px-5'>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App