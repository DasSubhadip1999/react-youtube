const youtubeReducer = (state, action) => {
    switch (action.type) {
        case "GET_VIDEOS" : 
        return {
            ...state,
            videos : action.payload,
            loading : false,
        }
        case "SEARCH_VIDEOS" : 
        return {
            ...state,
            searchVideosList : action.payload,
            loading : false,
            searching : true,
        }
        case "SET_LOADING" : 
        return {
            ...state,
            loading : true,
        }
        case "SHOW_SUGGESTION" : 
        return {
            ...state, 
            searching : false,
        }
        default :
            return state
    }
}

export default youtubeReducer