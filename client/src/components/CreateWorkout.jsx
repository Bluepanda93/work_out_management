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


export default CreateWorkoutForm