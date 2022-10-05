import { createContext, useReducer, useState } from "react";
import youtubeReducer from "../reducer/YoutubeReducer";

const YoutubeContext = createContext();

export const YoutubeProvider = ({children}) => {


    const [text, setText] = useState('');

    const searchedTextLS = JSON.parse(localStorage.getItem('text')) || []

    const [searchedText, setSearchedText] = useState(searchedTextLS);

    const initialState = {videos : [], searchVideosList : [], loading: false, searching : false,}

    const [state, dispatch] = useReducer(youtubeReducer , initialState);


    //get videos
    const API_KEY = process.env.REACT_APP_YOUTUBE_KEY;
    const getVideos = async () => {
        const params = new URLSearchParams({
            key : API_KEY,
            part : 'snippet',
            chart : 'mostPopular',
            maxResults : '50',
            regionCode : 'IN',
        })
        setLoading();
        try {
            const res = await fetch(`https://www.googleapis.com/youtube/v3/videos?${params}`);
            const {items} = await res.json();
            dispatch({
                type: "GET_VIDEOS",
                payload: items
            })
        } catch (error) {
            console.log(error)
        }

    }

    //search videos
    const searchVideos = async (t) => {
        const params = new URLSearchParams({
            key : API_KEY,
            part : 'snippet',
            q : t,
            type : 'video',
            order : 'viewCount',
            maxResults : '50',
        })
        setLoading();
        try {
            const res = await fetch(`https://www.googleapis.com/youtube/v3/search?${params}`);
            const {items} = await res.json()
            dispatch({
                type : "SEARCH_VIDEOS",
                payload : items,
            })

        } catch (error) {
            console.log(error)
        }
    }

    //set loading
    const setLoading = () => {
        dispatch({type : "SET_LOADING"})
    }

    //show suggestion on focus

    const showSuggestion = () => {
        dispatch({
            type : "SHOW_SUGGESTION"
        })
    }




    return (
        <YoutubeContext.Provider
            value={
                {
                    ...state,
                    text,
                    searchedText,
                    setSearchedText,
                    setText,
                    getVideos,
                    searchVideos,
                    showSuggestion,
                    dispatch,

                }
            }
        >
            {children}
        </YoutubeContext.Provider>
    )
}

export default YoutubeContext;