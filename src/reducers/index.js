import { combineReducers } from "redux"
import products from "./productReducer"
import categories from "./categoryReducer"


export default combineReducers({
    products, categories
})