import axios from 'axios'
import { useEffect, useState } from 'react'
import WorkCard from './WorkCard'
import { BASE_URL } from '../globals'

const Workouts = (props) => {
  const [workouts, setWorkouts] = useState([])
  const [deleteAWorkout, setDeletedWorkout] = useState(false)

  const deleteWorkout = async (id) => {
    let deleteCard = await axios.delete(`${BASE_URL}/work-outs/${id}`)
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

  return (
    <div>
      <h1>Completed Workouts</h1>

      {workouts.map((work) => (
        <div>
          <h1>
            {work.exercise}
          </h1>
          <h1>
            {work.numberOfSets}
          </h1>
          <h1>
            Number of Reps {work.numberOfReps}
          </h1>
        </div>
        // <WorkCard key={work._id} work={work} deleteWork={deleteWorkout} />
      ))}
    </div>
  )
}

export default Workouts
