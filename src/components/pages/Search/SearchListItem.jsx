import React, { useContext } from 'react'
import YoutubeContext from '../../context/YoutubeContext'

function SearchListItem({data}) {
  const {searchVideos} = useContext(YoutubeContext)
  return (
    <div className='flex justify-between items-center my-1 px-3 bg-base-200 py-1'>
        <i className="fa-solid fa-clock-rotate-left"></i>
        <p onClick={() => searchVideos(data)}  className='capitalize'>{data}</p>
        <i className="fa-solid fa-arrow-up rotate-[315deg]"></i>
    </div>
  )
}

export default SearchListItem