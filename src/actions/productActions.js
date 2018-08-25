import axios from "axios";

// Fetching all products
export function fetchProducts() {
    return function (dispatch) {
        axios.get("http://localhost/PhpAPI/api/product/read.php")
            .then((response) => {
                dispatch({
                    type: "FETCH_PRODUCTS_FULFILLED",
                    // The int from API is string. Parse it to int to make the sorting work
                    payload: response.data.records.map(product=> ({...product, id:parseInt(product.id)}))
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

// Deleting a product
export function deleteProduct(productID) {
    console.log("Product id is");
    console.log(productID);
    var data = {'id': productID};;
    var headers = {
        'Content-Type': 'application/json',
    }
    return function (dispatch) {
        axios.post("http://localhost/PhpAPI/api/product/delete.php",data,headers)
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