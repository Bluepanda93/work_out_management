import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const WorkCard = () => {
  const [work, setWork] = useState([])
  const [form, setForm] = useState({
    exercise: "",
    numberOfSets: "",
    numberOfReps: ""
  })
  let {id} = useParams()

  
  useEffect(()=>{
    const apiCall = async () => {
      let response = await axios.get(`http://localhost:3001/work-out/${id}`)
      setWork(response.data)
    }
    apiCall()
  }, [])
  
  const handleChange = (event) => {
    setForm({...form, [event.target.id]: event.target.value})
  }

  const updateWorkout = async () => {
    let updateCard = await axios.put(`http://localhost:3001/work-out/${id}`, form)
    setWork([work, updateCard.data])
    setForm({
      exercise: "",
      numberOfSets: "",
      numberOfReps: ""
    })
  }

  const deleteWorkout = async () => {
    let deleteCard = await axios.delete(`http://localhost:3001/work-out/${id}`)
    setWork([work, deleteCard.data])
    setForm({
      exercise: "",
      numberOfSets: "",
      numberOfReps: ""
    })
  }

  let navigate = useNavigate()

  return (
    <div>
      <section>
        <h1>{work.exercise}</h1>
        <h1>{work.numberOfSets}</h1>
        <h1>{work.numberOfReps}</h1>
      </section>
      <form onSubmit={updateWorkout}>
        <label>Exercise</label>
        <input id="exercise" value={form.exercise} onChange={handleChange} />
        <label>Number Of Sets</label>
        <input id="numberOfSets" value={form.numberOfSets} onChange={handleChange} />
        <label>Number Of Reps</label>
        <input id="numberOfReps" value={form.numberOfReps} onChange={handleChange} />
        <button className="btn" type="submit">Update Workout</button>
      </form>
      <button onClick={deleteWorkout} className="btn">Delete</button>
      <button onClick={() => navigate('/work-outs')} className="btn">Back</button>
      </div>
  )
}

export default WorkCard
