import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import YoutubeContext from '../../context/YoutubeContext';
import SearchSuggestionList from './SearchSuggestionList';
import SearchVideos from './SearchVideos';


function Search() {
  
  const {setText, text, searchVideos, searching, showSuggestion, setSearchedText} = useContext(YoutubeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if( text !== '') {
      searchVideos(text);
      setText('');
      setSearchedText(prev => [text, ...prev])

    }else {
      alert('Please fill something')
    }
  }
  return (
    <div className='py-4 px-4'>
        <div className='flex justify-between items-center mx-auto fixed top-0 left-0 w-full z-10 bg-base-100 p-3'>
            <Link to='/' className='text-xl'><i className="fa-solid fa-arrow-left-long"></i></Link>
            <form className='w-[86%] flex justify-between' onSubmit={handleSubmit}>
              <input onChange={e => setText(e.target.value) } onClick={showSuggestion} value={text} className='rounded-sm px-2 py-1 outline-0 bg-base-300 w-[85%]' type='text' placeholder='Search Youtube' />
              <button type='submit' className='text-2xl'><i className="fa-solid fa-circle-check"></i></button>
            </form>
        </div>
        <div className='py-6'>
        {
          searching ? <SearchVideos /> : <SearchSuggestionList />
        }
        </div>
    </div>
  )
}

export default Search