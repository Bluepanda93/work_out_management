import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import CreateWorkoutForm from './components/CreateWorkoutForm'
// import CreateUserForm from './components/CreateUserForm'
import Workouts from './components/Workouts'
// import Users from './components/user'
import WorkCard from './components/WorkCard'

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
          {/* <Route
            path="/add/user"
            element={<CreateUserForm resetScrollPos={resetScrollPos} />}
          /> */}
          <Route path="/work-outs" element={<Workouts />} />
          {/* <Route path="/users" element={<Users />} /> */}
          <Route path="/work-outs/:id" element={<WorkCard />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
