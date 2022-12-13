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
        <h1>
          {work.exercise}
        </h1>
        <h1>{work.numberOfSets}</h1>
        <h1>{work.numberOfReps}</h1>
      </section>
      <button onClick={deleteWorkout}>Delete</button>
      <button onClick={() => navigate('/work-outs')}>Back</button>
      </div>
  )
}

export default WorkCard
