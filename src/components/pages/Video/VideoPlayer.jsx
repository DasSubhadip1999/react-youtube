import React from 'react'
import {useParams} from 'react-router-dom'

function VideoPlayer() {
    const params = useParams();
  return (
    <div className='w-full'>
        <iframe className='w-full h-[280px]' allowFullScreen={true} src={`https://www.youtube.com/embed/${params.id}?autoplay=1&mute=1`} title='videoplayer'></iframe>
    </div>
  )
}

export default VideoPlayer