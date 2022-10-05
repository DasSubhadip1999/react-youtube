import React, { useContext } from 'react'
import YoutubeContext from '../../context/YoutubeContext'
import Video from '../../layout/Video'
import {v4 as uuidv4} from 'uuid'
function SearchVideos() {
    const {searchVideosList} = useContext(YoutubeContext)
  return (
    <div className='w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-5 xl:grid-cols-4 xl:gap-5'>
        {
            searchVideosList.map( (video) => <Video data={video.snippet} id={video.id.videoId} key={uuidv4()} />)
        }
    </div>
  )
}

export default SearchVideos