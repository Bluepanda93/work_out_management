import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const WorkCard = (props) => {
   return (
    <div>
      <h2>{props.workout.exercise}</h2>

        <div className="info">
          <p className="desc">{props.workout.numberOfSets}</p>
          <div>
            <Link className="btn" to={`/work-out/${props.workout._id}`}>
              View
            </Link>

            {/* <button
              className="btn danger"
              onClick={() => props.deletePark(props.park._id)}
            >
              Delete
            </button> */}
          </div>
        </div>
      </div>
  )
}

export default WorkCard
