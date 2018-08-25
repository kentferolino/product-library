import axios from "axios";

// Fetching list of categories
export function fetchCategories() {
    return function (dispatch) {
        axios.get("http://localhost/PhpAPI/api/category/read.php")
            .then((response) => {
                dispatch({
                    type: "FETCH_CATEGORIES_FULFILLED",
                    // The int from API is string. Parse it to int to make the sorting work
                    payload: response.data.records.map(cat=> ({...cat, id:parseInt(cat.id)}))
                })
            })
            .catch((err) => {
                dispatch({
                    type: "FETCH_CATEGORIES_REJECTED",
                    payload: err
                });
            })
    }
}