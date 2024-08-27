import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import History from './pages/History/History'
import Contact from './pages/Contact/Contact'
import Nav from './components/Nav/Nav'


function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/contact" element={Contact} />
        <Route path="/history" element={History} />
      </Routes>
    </>
  )
}

export default App;
