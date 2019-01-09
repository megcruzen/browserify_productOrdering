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

            // forEach product, call productBuilder
            allProducts.forEach(productItem => {
                singleProduct = productHTML.productBuilder(productItem); // Imports productArticle from product.js

                // console.log("product ID:", productItem.id);
                // reviewList.setFetch(productItem.id);

                // call reviewList
                // fetch will happen inside reviewList via reviewData - need to pass 'productItem.id' through

                // you will need to loop over the reviews coming back and build out the html just like you are doing with products
                // you can put the api call to get reviews and that loop that builds out the reviews inside reviewList and then just call reviewList from productList so its more modularized

                // reviewData.getReviews()
                // .then(allReviews => {
                //     // console.log(allReviews);
                //     allReviews.forEach(reviewItem => {
                //         console.log("product ID:", productItem.id);
                //         reviewData.getReviews(productItem.id);
                //     })
                // })

                productDocFrag.appendChild(singleProduct);

            })

            // Append doc frag to productContainer (which already exists in index.html)
            productContainer.appendChild(productDocFrag);

        });
    }
}

export default productList;
