import React from 'react'

function Video({data}) {
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl rounded-none">
        <figure>
            <img src={data.thumbnails.high.url} alt="Shoes" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{data.title}</h2>
            <p>{data.channelTitle}</p>
        </div>
    </div>
  )
}

export default Video