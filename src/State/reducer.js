export const initialState = {
    stateMovies : []
};


export const reducer = (state, action) => {
    console.log(action)
    switch(action.type){
        case "FETCH_MOVIE_ID":
            return {
                ...state, 
                stateMovies:  [...state.stateMovies, action.stateMovies]
            }
        default:
            return state;
    }
}
