import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import CreateWorkoutForm from './components/CreateWorkoutForm'
import './App.css'

function App() {
  const resetScrollPos = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/add/work-out"
            element={<CreateWorkoutForm resetScrollPos={resetScrollPos} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
