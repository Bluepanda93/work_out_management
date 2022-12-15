import axios from 'axios'
import { useEffect, useState } from 'react'
import { BASE_URL } from '../globals'

const Comments = () => {
  const [comments, setComment] = useState([])

  useEffect(() => {
    const getComments = async () => {
      const res = await axios.get(`${BASE_URL}/comments`)

      setComment(res.data)
    }

    getComments()
  }, [])

  return (
    <div>
      <h1>All Comments</h1>

      {comments.map((comment) => (
        <div
          key={comment.id}
          className="bigspace">
          <h1>{comment.name}</h1>
          <h1>{comment.body}</h1>
        </div>
      ))}
    </div>
  )
}


export default Comments