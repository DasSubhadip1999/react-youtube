import React, { useContext, useEffect } from 'react'
import Video from './Video'
import YoutubeContext from '../context/YoutubeContext';
import Loading from '../assets/Loading';


function VideoContainer() {
    const {getVideos, videos, loading} = useContext(YoutubeContext);

    useEffect( () => {
        getVideos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
 
  return loading ? <Loading className='' /> : (
    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-5 xl:grid-cols-4 xl:gap-5'>
        {
            videos.map( video => <Video key={video.id} id={video.id} data={video.snippet} />)
        }
    </div>
  )
}

export default VideoContainer