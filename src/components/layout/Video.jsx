import React from 'react'
import {Link} from 'react-router-dom'

function Video({data,id}) {
  return (
    <Link to={`/video/${id}`} className="card card-compact w-full bg-base-100 shadow-xl rounded-none">
        <figure>
            <img src={data.thumbnails.high.url} alt="Shoes" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{data.title}</h2>
            <p>{data.channelTitle}</p>
        </div>
    </Link>
  )
}

export default Video