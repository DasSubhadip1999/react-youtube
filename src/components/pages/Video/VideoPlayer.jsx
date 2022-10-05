import React from 'react'
import {useParams} from 'react-router-dom'

function VideoPlayer() {
    const params = useParams();

    const logo = params.channelTitle[0]
  return (
    <div className='w-full'>
        <iframe className='w-full h-[280px] md:h-[70vh]' allowFullScreen={true} src={`https://www.youtube.com/embed/${params.id}?autoplay=1&mute=0`} title='videoplayer'></iframe>
        <div className='py-2'>
            <h3 className='text-xl font-semibold px-2'>{params.title}</h3>
            <ul className='flex justify-between mx-6 my-4 text-2xl'>
                <li><i className="fa-solid fa-thumbs-up"></i></li>
                <li><i className="fa-solid fa-thumbs-down"></i></li>
                <li><i className="fa-solid fa-share"></i></li>
                <li><i className="fa-solid fa-fire-flame-curved"></i></li>   
            </ul>
            <div className='flex justify-between py-2 px-3 border-y-[1px] border-gray-600'>
                <div className='flex items-center'>
                    <p className='text-lg w-8 h-8 rounded-full bg-base-300 flex justify-center items-center uppercase font-bold'>{logo}</p>
                    <p className='mx-2 text-lg'>{params.channelTitle}</p>
                </div>
                <h3 className='text-lg font-semibold text-red-700'>Subscribe</h3>
            </div>
        </div>
    </div>
  )
}

export default VideoPlayer