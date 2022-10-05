import React, { useContext} from 'react'
import YoutubeContext from '../context/YoutubeContext'
import SuggestionItem from './SuggestionItem'
import {v4 as uuidv4} from 'uuid'


function SuggestionVideos() {
  const {searchedText} = useContext(YoutubeContext);
  return (
    <div className="carousel carousel-center w-full px-4 pb-4 pt-1 space-x-4 bg-base-300">
       {
        searchedText.length <= 0 ? <p className="carousel-item bg-base-100 px-3 mt-16 rounded-md">No suggestion</p> : (
          searchedText.map( text => <SuggestionItem  key={uuidv4()}  data={text}/>)
        )
       }
    </div>
  )
}

export default SuggestionVideos