import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import WorkCard from './WorkCard'
import { BASE_URL } from '../globals'

const Workouts = () => {
  const [workouts, setWorkouts] = useState([])
  const [deleteAWorkout, setDeletedWorkout] = useState(false)

  const deleteWorkout = async (id) => {
    let deleteCard = await axios.delete(`${BASE_URL}/work-out/${id}`)
    setDeletedWorkout(!deleteAWorkout)
  }

  useEffect(() => {
    const getWorkouts = async () => {
      const res = await axios.get(`${BASE_URL}/work-outs`)

      setWorkouts(res.data)
    }

    // props.resetScrollPos()
    getWorkouts()
  }, [deleteAWorkout])

  let navigate = useNavigate()

  const getWorkoutDetails = (id) => {
    navigate(`${id}`)
  }

  return (
    <div>
      <h1>Completed Workouts</h1>

      {workouts.map((work) => (
        <div
          key={work.id}
          className="bigspace">
          {/* <WorkCard deleteWork={deleteWorkout} /> */}
          <h1>{work.exercise}</h1>
          <h1>{work.numberOfSets}</h1>
          <h1>{work.numberOfReps}</h1>
          <h2 onClick={() => getWorkoutDetails(work._id)}>View Workout</h2>
        </div>
      ))}
    </div>
  )
}

export default Workouts
