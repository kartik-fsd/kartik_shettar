import './App.css'
import Footer from './Components/Footer/footer'
import HeaderNavbar from './Components/Header/navbar'
import Home from './pages/Home'


function App() {
  return (
    <div className="bg-slate-50 sh-full flex flex-col min-h-screen justify-between">
    <HeaderNavbar />
    <Home />
    <Footer/>
    </div>

  )
}

export default App
