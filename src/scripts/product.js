import reviewHTML from "./review"

const productHTML = {
    productBuilder() {
        let productArticle = document.createElement("article");
        productArticle.setAttribute("class", "product_box");

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

        let productInfo = document.createElement("div");
        productInfo.setAttribute("class", "product_deets");

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

        // Add product deets to product_deets
        productInfo.appendChild(productName);
        productInfo.appendChild(productDesc);
        productInfo.appendChild(productPrice);
        productInfo.appendChild(productQty);

        // Add image_box, spacer, and product_deets to info_box
        mainProductInfo.appendChild(productPhotoBox);
        mainProductInfo.appendChild(spacer);
        mainProductInfo.appendChild(productInfo);

        // Add info_box to the product_box
        productArticle.appendChild(mainProductInfo);

        // if reviews
        let review = reviewHTML.reviewBuilder();
        productArticle.appendChild(review);

        return productArticle;
    }
}

export default productHTML;