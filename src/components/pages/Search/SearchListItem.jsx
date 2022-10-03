import React, { useContext, useEffect } from 'react'
import YoutubeContext from '../../context/YoutubeContext'

function SearchListItem({data}) {
  const {searchVideos, searchedText} = useContext(YoutubeContext)
  useEffect( () => {
    localStorage.setItem("text", JSON.stringify(searchedText));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div className='flex justify-between items-center my-1 px-3 bg-base-200 py-1' onClick={() => searchVideos(data)}>
        <i className="fa-solid fa-clock-rotate-left"></i>
        <p className='capitalize'>{data}</p>
        <i className="fa-solid fa-arrow-up rotate-[315deg]"></i>
    </div>
  )
}

export default SearchListItem