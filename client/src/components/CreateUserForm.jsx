import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../globals'

const CreateUserForm = (props) => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: ''
  })

  let navigate = useNavigate()

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let newUser = await axios.post(`${BASE_URL}/add/user`, formState)

    setFormState({
      firstName: '',
      lastName: ''
    })

    navigate(`/user/${newUser.data._id}`)
  }

  useEffect(() => {
    props.resetScrollPos()
  }, [])

  return (
    <div className="create-user">
      <h1>Submit A User Here!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name: </label>
        <input
          id="firstName"
          value={formState.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
        />

        <label htmlFor="lastName">Last Name: </label>
        <input
          id="lastName"
          value={formState.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
        <button className="btn" type="submit">
          Submit New User!
        </button>
      </form>
    </div>
  )
}

export default CreateUserForm