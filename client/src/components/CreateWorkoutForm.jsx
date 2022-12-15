import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'

const CreateWorkoutForm = (props) => {
  const [formState, setFormState] = useState({
    exercise: '',
    numberOfSets: '',
    numberOfReps: ''
  })

  let navigate = useNavigate()

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let newWorkout = await axios.post(`${BASE_URL}/add/work-out`, formState)

    setFormState({
      exercise: '',
      numberOfSets: '',
      numberOfReps: ''
    })

    navigate(`/work-outs/${newWorkout.data._id}`)
  }

  useEffect(() => {
    props.resetScrollPos()
  }, [])

  return (
    <div className="create-workout">
      <h1>Submit A Workout Here!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="exercise">Exercise Type: </label>
        <input
          id="exercise"
          value={formState.exercise}
          onChange={handleChange}
          placeholder="Name"
          required
        />

        <label htmlFor="numberOfSets">Number Of Sets: </label>
        <input
          type="number"
          id="numberOfSets"
          value={formState.numberOfSets}
          onChange={handleChange}
          placeholder="Number of Sets"
          required
        />

        <label htmlFor="numberOfReps">Number Of Reps: </label>
        <input
          type="number"
          id="numberOfReps"
          value={formState.numberOfReps}
          onChange={handleChange}
          placeholder="Number of Reps"
          required
        />

        <button className="btn" type="submit">
          Submit New Workout!
        </button>
      </form>
    </div>
  )
}

export default CreateWorkoutForm