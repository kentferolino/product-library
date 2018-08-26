export default function reducer(
    state = { 
        products: [],
        fetching: false, 
        fetched: false, 
        deleting: false,
        deleted: false,
        error: null
    }, action){

    // See all action types in product actions
    switch(action.type){
        case "FETCH_PRODUCTS": {
            return {...state, fetching: true}
        }
        case "FETCH_PRODUCTS_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }
        case "FETCH_PRODUCTS_FULFILLED": {
            return {...state, fetching: false, fetched: true, products: action.payload}
        }
        case "FETCH_ONE_PRODUCT": {
            return {...state, fetching: true}
        }
        case "FETCH_ONE_PRODUCT_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }
        case "FETCH_ONE_PRODUCT_FULFILLED": {
            return {...state, fetching: false, fetched: true, product: action.payload}
        }
        case "DELETE_PRODUCT": {
            return {...state, deleting: true}
        }
        case "DELETE_PRODUCT_FULFILLED": {
            return {...state, deleting: false, deleted: true}
        }
        case "DELETE_PRODUCT_REJECTED": {
            return {...state, deleting: false, deleted: false, error: action.payload}
        }
        default:
    }
    return state;
}