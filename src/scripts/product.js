const productHTML = {
    productBuilder() {
        let productArticle = document.createElement("article");

        let productPhoto = document.createElement("img");
        productPhoto.setAttribute("class", "productImage");
        productPhoto.setAttribute("src", "https://www.modcloth.com/dw/image/v2/ABAT_PRD/on/demandware.static/-/Sites-modcloth-master/default/dwecb230c2/images/10094914_fame_of_reference_velvet_block_heel_emerald_MAIN.jpg?sw=913");

        let productName = document.createElement("h3");
        productName.textContent = "Product Name";

        let productDesc = document.createElement("p");
        productDesc.textContent = "Lorem ipsum dolor amet raclette forage live-edge pour-over everyday carry roof party irony microdosing waistcoat poke prism helvetica yr cold-pressed subway tile.";

        let productPrice = document.createElement("p");
        productPrice.textContent = "$35";

        let productQty = document.createElement("p");
        productQty.textContent = "In stock: 5";

        productArticle.appendChild(productPhoto);
        productArticle.appendChild(productDesc);
        productArticle.appendChild(productPrice);
        productArticle.appendChild(productQty);

        return productArticle;
    }
}

export default productHTML;