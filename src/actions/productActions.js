import axios from "axios";

export function fetchProducts() {
    return function (dispatch) {
        axios.get("http://localhost/PhpAPI/api/product/read.php")
            .then((response) => {
                dispatch({
                    type: "FETCH_PRODUCTS_FULFILLED",
                    payload: response.data.records
                })
            })
            .catch((err) => {
                dispatch({
                    type: "FETCH_PRODUCTS_REJECTED",
                    payload: err
                });
            })
    }
}