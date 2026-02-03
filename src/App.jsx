
import NavBar from './components/NavBar'
import './App.css'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Homepage from './components/Homepage'

function App() {
  

  return (
    <>
      <NavBar/>
      <div style={{display:'flex'}}>
        <Sidebar/>
        <Homepage/>
      </div>
      <Footer/>
    </>
  )
}

export default App
