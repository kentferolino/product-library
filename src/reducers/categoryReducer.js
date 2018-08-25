export default function reducer(
    state = { 
        categories: [],
        fetching: false, 
        fetched: false, 
        error: null
    }, action){

    // See all action type in category actions
    switch(action.type){
        case "FETCH_CATEGORIES": {
            return {...state, fetching: true}
        }
        case "FETCH_CATEGORIES_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }
        case "FETCH_CATEGORIES_FULFILLED": {
            return {...state, fetching: false, fetched: true, categories: action.payload}
        }
        default:
    }
    return state;
}