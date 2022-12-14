import axios from 'axios'
import { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import WorkCard from './WorkCard'
import { BASE_URL } from '../globals'

const Users = () => {
  const [users, setUser] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get(`${BASE_URL}/users`)

      setUser(res.data)
    }

    // props.resetScrollPos()
    getUsers()
  }, [])

  return (
    <div>
      <h1>All Users</h1>

      {users.map((user) => (
        <div
          key={user.id}
          className="bigspace">
          <h1>{user.firstName}</h1>
          <h1>{user.lastName}</h1>
          {/* <h2 onClick={() => getWorkoutDetails(user._id)}>View Workout</h2> */}
        </div>
      ))}
    </div>
  )
}


export default Users