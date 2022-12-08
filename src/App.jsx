import './App.css'
import Footer from './Pages/Footer'
import Header from './Pages/Header'
import Projects from './Pages/Projects'
import Skills from './Pages/Skills'

function App() {
  return (
    <div className="bg-slate-900 text-white">
      <div className='bannerBg pb-72'>
        <Header />
      </div>
      <Projects />
      <Skills />
      <Footer />
    </div>
  )
}

export default App
