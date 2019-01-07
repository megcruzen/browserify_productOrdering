import reviewList from "./reviewList"

const productHTML = {
    productBuilder() {

        // Create entire product article
        let productArticle = document.createElement("article");
        productArticle.setAttribute("class", "product_box");


        // Create main product info (photo and details)
        let mainProductInfo = document.createElement("section");
        mainProductInfo.setAttribute("class", "info_box");

        let productPhotoBox = document.createElement("div");
        productPhotoBox.setAttribute("class", "image_box");
        let productPhoto = document.createElement("img");
        productPhoto.setAttribute("class", "product_image");
        productPhoto.setAttribute("src", "https://www.modcloth.com/dw/image/v2/ABAT_PRD/on/demandware.static/-/Sites-modcloth-master/default/dwecb230c2/images/10094914_fame_of_reference_velvet_block_heel_emerald_MAIN.jpg?sw=913");
        productPhotoBox.appendChild(productPhoto);

        let spacer = document.createElement("div");
        spacer.setAttribute("class", "spacer");

        // Create product details box
        let productInfo = document.createElement("div");
        productInfo.setAttribute("class", "product_deets");

        // Create product details to add to details box
        let productName = document.createElement("h3");
        productName.textContent = "Product Name";
        let productDesc = document.createElement("p");
        productDesc.setAttribute("class", "product_desc");
        productDesc.textContent = "Lorem ipsum dolor amet raclette forage live-edge pour-over everyday carry roof party irony microdosing waistcoat poke prism helvetica yr cold-pressed subway tile.";
        let productPrice = document.createElement("p");
        productPrice.setAttribute("class", "product_price");
        productPrice.textContent = "$35";
        let productQty = document.createElement("p");
        productQty.textContent = "In stock: 5";

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
        reviewList.displayReviews(reviewSection);
        // ^^ Pass reviewSection so it gets filled inside displayReviews() and is passed back.

        return productArticle; // return to productList
    }
}

export default productHTML;