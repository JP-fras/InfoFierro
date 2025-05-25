import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from "./components/layout/Layout"
import Inicio from "./pages/Inicio"
import Nosotros from "./pages/Nosotros"
import Contact from './pages/Contact';

function App() {

  return(
        <Router>
          <Routes>
            <Route path="/" element={<Layout><Inicio /></Layout>} />
            <Route path="/nosotros" element={<Layout><Nosotros /></Layout>} />
            <Route path="/contact" element={<Layout><Contact /></Layout>} />
          </Routes>
      </Router>
  )
}

export default App
