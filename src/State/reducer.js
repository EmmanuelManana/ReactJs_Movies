export const initialState = {
    movieId: 0
};


export const reducer = (state, action) => {
    console.log(action)
    switch(action.type){
        case "FETCH_MOVIE_ID":
            return {
                ...state, 
                movieId: action.movieId
            }
        default:
            return state;
    }
}
