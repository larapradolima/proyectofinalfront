import { useState } from 'react'
import './App.css'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import Home from './pages/Home'
import Perros from './pages/Perros'
import Gatos from './pages/Gatos'
import Adopcion from './pages/Adopcion'
import Trabaja from './pages/Trabaja' 
import Aves from './pages/Aves' 

function App() {
 const [currentPage, setCurrentPage] = useState('home')

 const renderPage = () => {
 switch(currentPage) {
 case 'home': return <Home />
 case 'perros': return <Perros />
 case 'gatos': return <Gatos />
case 'adopcion': return <Adopcion />
 case 'trabaja': return <Trabaja />
 case 'aves': return <Aves /> 
 default: return <Home />
}
 }

 return (
  <div className="App">
 <Header onNavigate={setCurrentPage} />
 {renderPage()}
 <Footer />
 </div> )
}

export default App