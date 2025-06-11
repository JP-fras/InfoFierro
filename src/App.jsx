import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from "./components/layout/Layout"
import Inicio from "./pages/Inicio"
import Nosotros from "./pages/Nosotros"
import Contact from './pages/Contact';
import Login from './pages/Login'
import Registro from './pages/Registro';
import Recuperar from './pages/Recuperar';
import Analizar from './pages/Analizar';
import RedirectLog from './pages/RedirectLog';

function App() {

  return(
        <Router>
          <Routes>
            <Route path="/" element={<Layout><Inicio /></Layout>} />
            <Route path="/nosotros" element={<Layout><Nosotros /></Layout>} />
            <Route path="/contact" element={<Layout><Contact /></Layout>} />
            <Route path="/login" element={<Layout><Login/></Layout>} />
            <Route path="/login/registro" element={<Layout><Registro/></Layout>} />
            <Route path="/reset-password" element={<Layout><Recuperar/></Layout>} />
            <Route path="/analizar" element={<Layout><Analizar/></Layout>}/>
            <Route path="/redirect-log" element={<RedirectLog/>}/>
          </Routes>
      </Router>
  )
}

export default App
