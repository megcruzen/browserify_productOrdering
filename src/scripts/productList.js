import productData from "./productData"
import productHTML from "./product"

// Get all products from productData and then use forEach to run productHTML.buildProduct()

const productList = {
    displayProducts() {
        let productContainer = document.querySelector(".products");
        productContainer.innerHTML = "<h2>Products</h2>"
        // productContainer.innerHTML = "<p>This is a test</p>"
        // get all products from productData
        // forEach product, call productBuilder
        let product = productHTML.productBuilder();
        productContainer.appendChild(product);
    }
}

export default productList;
