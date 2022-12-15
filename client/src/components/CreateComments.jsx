import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'

const CreateCommentForm = (props) => {
  const [formState, setFormState] = useState({
    name: '',
    body: ''
  })

  let navigate = useNavigate()

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let newComment = await axios.post(`${BASE_URL}/add/comment`, formState)

    setFormState({
      name: '',
      body: ''
    })

    navigate(`/comment/${newComment.data._id}`)
  }

  useEffect(() => {
    props.resetScrollPos()
  }, [])

  return (
    <div className="create-user">
      <h1>Submit A Comment Here!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          value={formState.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />

        <label htmlFor="body">Body: </label>
        <input
          id="body"
          value={formState.body}
          onChange={handleChange}
          placeholder="Body"
          required
        />
        <button className="btn" type="submit">
          Submit A Comment!
        </button>
      </form>
    </div>
  )
}

export default CreateCommentForm