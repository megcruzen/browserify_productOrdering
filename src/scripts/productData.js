const productData = {
    getProducts() {
        return fetch("http://localhost:8088/products") // will need to change to {productObj.id}
        .then(response => response.json())
        // .then(productInfo => {
        // });
        // The second .then will go inside productList
    }
}

export default productData;