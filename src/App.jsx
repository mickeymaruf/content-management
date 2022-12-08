import './App.css'
import Footer from './Pages/Footer'
import Header from './Pages/Header'
import Projects from './Pages/Projects'
import Skills from './Pages/Skills'

function App() {
  return (
    <div className="bg-slate-900 text-white">
      <Header />
      <Projects />
      <div className='relative -top-32 ml-16'>
        <h1 className='text-5xl font-medium'>Skills</h1>
        <p className='text-2xl'>I've worked with a range of technologies in the web development <br />
          world. From design to backend.</p>
      </div>
      <Skills />
      <Footer />
    </div>
  )
}

export default App
