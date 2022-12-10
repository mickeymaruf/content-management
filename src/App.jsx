import './App.css'
import Contact from './Pages/Contact'
import Footer from './Pages/Footer'
import Header from './Pages/Header'
import Projects from './Pages/Projects'
import Skills from './Pages/Skills'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div className="bg-slate-900 text-white">
      <Header />
      <Projects />
      <div className='relative -top-32 ml-16'>
        <h1 className='text-5xl font-medium'>Skills</h1>
        <div className='w-20 h-1 bg-white mt-2 rounded-full'></div>
      </div>
      <Skills />
      <Contact />
      {/* <Footer /> */}
      <Toaster />
    </div>
  )
}

export default App
