import React, { useContext} from 'react'
import SearchListItem from './SearchListItem'
import {v4 as uuidv4} from 'uuid'
import YoutubeContext from '../../context/YoutubeContext'

function SearchSuggestionList() {
  const {searchedText} = useContext(YoutubeContext);
  return (
    <div className='search-suggestion my-4'>
        {
          searchedText.map( e => <SearchListItem data={e} key={uuidv4()} />)
        }
    </div>
  )
}

export default SearchSuggestionList