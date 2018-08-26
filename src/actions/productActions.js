import axios from "axios";

// Fetching all products
export function fetchProducts() {
    return function (dispatch) {
        axios.get("http://localhost/PhpAPI/api/product/read.php")
            .then((response) => {
                dispatch({
                    type: "FETCH_PRODUCTS_FULFILLED",
                    // The int from API is string. Parse it to int to make the sorting work
                    payload: response.data.records.map(product => ({ ...product, id: parseInt(product.id) }))
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

// Fetching one product
export function fetchOneProduct(productId) {
    return function (dispatch) {
        axios.get("http://localhost/PhpAPI/api/product/read_one.php?id=" + productId)
            .then((response) => {
                dispatch({
                    type: "FETCH_ONE_PRODUCT_FULFILLED",
                    // The int from API is string. Parse it to int to make the sorting work
                    payload: response.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: "FETCH_ONE_PRODUCT_REJECTED",
                    payload: err
                });
            })
    }
}

// Deleting a product
export function createProduct(product) {
    var data = {
        'name': product.name,
        'description': product.description,
        'price': product.price,
        'category_id': parseInt(product.category_id)
    };
    var headers = {
        'Content-Type': 'application/json',
    }
    return function (dispatch) {
        axios.post("http://localhost/PhpAPI/api/product/create.php", data, headers)
            .then((response) => {
                dispatch({ type: "CREATE_PRODUCT_FULFILLED", })
            })
            .catch((err) => {
                dispatch({
                    type: "CREATE_PRODUCT_REJECTED",
                    payload: err
                });
            })
    }
}

// Deleting a product
export function deleteProduct(productID) {
    var data = { 'id': productID };;
    var headers = {
        'Content-Type': 'application/json',
    }
    return function (dispatch) {
        axios.post("http://localhost/PhpAPI/api/product/delete.php", data, headers)
            .then((response) => {
                dispatch(fetchProducts())
                dispatch({ type: "DELETE_PRODUCT_FULFILLED", })
            })
            .catch((err) => {
                dispatch({
                    type: "DELETE_PRODUCT_REJECTED",
                    payload: err
                });
            })
    }
}