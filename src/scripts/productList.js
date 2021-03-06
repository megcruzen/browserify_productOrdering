import productData from "./productData"
import productHTML from "./product"

// Get all products from productData and then use forEach to run productHTML.productBuilder()

const productList = {
    displayProducts() {
        let productContainer = document.querySelector(".products");
        productContainer.innerHTML = "<h2>Products</h2>";

        // Create doc frag to hold each product
        let productDocFrag = document.createDocumentFragment();

        // get all products from productData
        productData.getProducts()
        .then(allProducts => {
            let singleProduct;

            // forEach product, call productBuilder, and append each product to the doc frag
            allProducts.forEach(productItem => {
                singleProduct = productHTML.productBuilder(productItem); // Imports productArticle from product.js
                productDocFrag.appendChild(singleProduct);
            })

            // Append doc frag to productContainer
            productContainer.appendChild(productDocFrag);
        });
    }
}

export default productList;
