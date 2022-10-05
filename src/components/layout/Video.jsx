import React from 'react'
import {Link} from 'react-router-dom'

function Video({data,id}) {
  const title = data.title.toString().replaceAll("#", " ");
  const channelTitle = data.channelTitle.toString().replaceAll("#", " ")
  return (
    <Link to={`/video/${id}/${title}/${channelTitle}`} className="card card-compact w-full bg-base-100 shadow-xl rounded-none">
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