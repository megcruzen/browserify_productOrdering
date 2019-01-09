import reviewList from "./reviewList"

const productHTML = {
    productBuilder(productObj) {

        // Create entire product article
        let productArticle = document.createElement("article");
        productArticle.setAttribute("class", "product_box");
        // productArticle.setAttribute("id", productObj.id);       // set DOM ID = productObj.id

        // Create main product info (photo and details)
        let mainProductInfo = document.createElement("section");
        mainProductInfo.setAttribute("class", "info_box");

        // Create photo section
        let productPhotoBox = document.createElement("div");
        productPhotoBox.setAttribute("class", "image_box");
        let productPhoto = document.createElement("img");
        productPhoto.setAttribute("class", "product_image");
        productPhoto.setAttribute("src", productObj.image);
        productPhotoBox.appendChild(productPhoto);

        let spacer = document.createElement("div");
        spacer.setAttribute("class", "spacer");

        // Create product details box
        let productInfo = document.createElement("div");
        productInfo.setAttribute("class", "product_deets");

        // Create product details to add to details box
        let productName = document.createElement("h3");
        productName.textContent = productObj.title;
        let productDesc = document.createElement("p");
        productDesc.setAttribute("class", "product_desc");
        productDesc.textContent = productObj.description;
        let productPrice = document.createElement("p");
        productPrice.setAttribute("class", "product_price");
        productPrice.innerHTML = `$${productObj.price}`;
        let productQty = document.createElement("p");
        productQty.innerHTML = `In stock: ${productObj.quantity}`;

        // Add product deets to details box
        productInfo.appendChild(productName);
        productInfo.appendChild(productDesc);
        productInfo.appendChild(productPrice);
        productInfo.appendChild(productQty);

        // Add image box, spacer, and product details to main info box
        mainProductInfo.appendChild(productPhotoBox);
        mainProductInfo.appendChild(spacer);
        mainProductInfo.appendChild(productInfo);

        // Add info_box to the product_box
        productArticle.appendChild(mainProductInfo);

        console.log("product ID:", productObj.id);

        /******* REVIEWS *****/

        // Create reviews section
        let reviewSection = document.createElement("section");
        reviewSection.setAttribute("class", "review_section");
        let reviewHeader = document.createElement("h3");
        reviewHeader.textContent = "Reviews";
        reviewSection.appendChild(reviewHeader);

        // Append reviews section to DOM, inside product article
        productArticle.appendChild(reviewSection);

        // Get review list from reviewList.js
        reviewList.displayReviews(reviewSection, productObj.id); // Pass reviewSection so it gets filled inside displayReviews() and is passed back.

        return productArticle; // send to productList
    }
}

export default productHTML;