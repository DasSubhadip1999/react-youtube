import React, { useContext } from 'react'
import YoutubeContext from '../context/YoutubeContext'

function SuggestionItem({data}) {
  const {searchVideos} = useContext(YoutubeContext)
  
  return (
    <div onClick={() => searchVideos(data)} className="carousel-item bg-base-100 px-3 mt-16 py-1 rounded-md cursor-pointer hover:bg-white hover:text-black">
        {data}
    </div>
  )
}

export default SuggestionItem