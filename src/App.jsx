import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import Home from './pages/Home'
import Perros from './pages/Perros'
import Gatos from './pages/Gatos'
import Adopcion from './pages/Adopcion'
import Trabaja from './pages/Trabaja'
import Aves from './pages/Aves'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perros" element={<Perros />} />
        <Route path="/gatos" element={<Gatos />} />
        <Route path="/aves" element={<Aves />} />
        <Route path="/adopcion" element={<Adopcion />} />
        <Route path="/trabaja" element={<Trabaja />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
