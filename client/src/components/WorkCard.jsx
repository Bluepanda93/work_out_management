import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const WorkCard = () => {
  const [work, setWork] = useState([])
  let {id} = useParams()

  useEffect(()=>{
    const apiCall = async () => {
      let response = await axios.get(`http://localhost:3001/work-out/${id}`)
      setWork(response.data)
    }
    apiCall()
  }, [])
  return (
    <div>
      <section>
        <h1>
          {work.exercise}
        </h1>
      </section>
      {/* <h2>{workout?.exercise}</h2>

        <div className="info">
          <p className="desc">{workout?.numberOfSets}</p>
          <div>

            <button
              className="btn danger"
              onClick={() => .deletePark(.park._id)}
            >
              Delete
            </button>
          </div>
        </div> */}
      </div>
  )
}

export default WorkCard
