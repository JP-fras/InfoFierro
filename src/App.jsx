import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from "./components/layout/Layout"
import Inicio from "./pages/Inicio"
import Nosotros from "./pages/Nosotros"
import Contact from './pages/Contact';
import Login from './pages/Login'

function App() {

  return(
        <Router>
          <Routes>
            <Route path="/" element={<Layout><Inicio /></Layout>} />
            <Route path="/nosotros" element={<Layout><Nosotros /></Layout>} />
            <Route path="/contact" element={<Layout><Contact /></Layout>} />
            <Route path="/login" element={<Layout><Login/></Layout>} />
          </Routes>
      </Router>
  )
}

export default App
