import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
