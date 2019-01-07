(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _nav = _interopRequireDefault(require("./nav"));

var _productList = _interopRequireDefault(require("./productList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_nav.default.createNav();

_productList.default.displayProducts();

},{"./nav":2,"./productList":4}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const nav = {
  createNav() {
    let navContainer = document.querySelector("#navigation");
    let logo = document.createElement("div");
    logo.setAttribute("class", "logo");
    logo.innerHTML = "<a href='#'>Betsy's Boutique</a>";
    let navLinks = document.createElement("div");
    navLinks.setAttribute("class", "navlinks");
    navLinks.innerHTML = `<ul>
                <li><a href="#">Categories</a></li>
                <li><a href="#">Orders</a></li>
                <li><a href="#">Log Out</a></li>
            </ul>`;
    navContainer.appendChild(logo);
    navContainer.appendChild(navLinks);
  }

};
var _default = nav;
exports.default = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reviewList = _interopRequireDefault(require("./reviewList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const productHTML = {
  productBuilder() {
    // Create entire product article
    let productArticle = document.createElement("article");
    productArticle.setAttribute("class", "product_box"); // Create main product info (photo and details)

    let mainProductInfo = document.createElement("section");
    mainProductInfo.setAttribute("class", "info_box");
    let productPhotoBox = document.createElement("div");
    productPhotoBox.setAttribute("class", "image_box");
    let productPhoto = document.createElement("img");
    productPhoto.setAttribute("class", "product_image");
    productPhoto.setAttribute("src", "https://www.modcloth.com/dw/image/v2/ABAT_PRD/on/demandware.static/-/Sites-modcloth-master/default/dwecb230c2/images/10094914_fame_of_reference_velvet_block_heel_emerald_MAIN.jpg?sw=913");
    productPhotoBox.appendChild(productPhoto);
    let spacer = document.createElement("div");
    spacer.setAttribute("class", "spacer"); // Create product details box

    let productInfo = document.createElement("div");
    productInfo.setAttribute("class", "product_deets"); // Create product details to add to details box

    let productName = document.createElement("h3");
    productName.textContent = "Product Name";
    let productDesc = document.createElement("p");
    productDesc.setAttribute("class", "product_desc");
    productDesc.textContent = "Lorem ipsum dolor amet raclette forage live-edge pour-over everyday carry roof party irony microdosing waistcoat poke prism helvetica yr cold-pressed subway tile.";
    let productPrice = document.createElement("p");
    productPrice.setAttribute("class", "product_price");
    productPrice.textContent = "$35";
    let productQty = document.createElement("p");
    productQty.textContent = "In stock: 5"; // Add product deets to details box

    productInfo.appendChild(productName);
    productInfo.appendChild(productDesc);
    productInfo.appendChild(productPrice);
    productInfo.appendChild(productQty); // Add image box, spacer, and product details to main info box

    mainProductInfo.appendChild(productPhotoBox);
    mainProductInfo.appendChild(spacer);
    mainProductInfo.appendChild(productInfo); // Add info_box to the product_box

    productArticle.appendChild(mainProductInfo);
    /******* REVIEWS *****/
    // Create reviews section

    let reviewSection = document.createElement("section");
    reviewSection.setAttribute("class", "review_section");
    let reviewHeader = document.createElement("h3");
    reviewHeader.textContent = "Reviews";
    reviewSection.appendChild(reviewHeader); // Append reviews section to DOM, inside product article

    productArticle.appendChild(reviewSection); // Get review list from reviewList.js

    _reviewList.default.displayReviews(reviewSection); // ^^ Pass reviewSection so it gets filled inside displayReviews() and is passed back.


    return productArticle; // return to productList
  }

};
var _default = productHTML;
exports.default = _default;

},{"./reviewList":7}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _product = _interopRequireDefault(require("./product"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  import productData from "./productData"
// Get all products from productData and then use forEach to run productHTML.productBuilder()
const productList = {
  displayProducts() {
    let productContainer = document.querySelector(".products");
    productContainer.innerHTML = "<h2>Products</h2>"; // productContainer.innerHTML = "<p>This is a test</p>"
    // get all products from productData
    // forEach product, call productBuilder

    let product = _product.default.productBuilder();

    productContainer.appendChild(product);
  }

};
var _default = productList;
exports.default = _default;

},{"./product":3}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const reviewHTML = {
  reviewBuilder(reviewObj) {
    let reviewBox = document.createElement("div");
    reviewBox.setAttribute("class", "review_box");
    reviewBox.innerHTML = `<p class="review_text"><span class="review_author">${reviewObj.author} wrote:</span><br />${reviewObj.reviewText}</p>`;
    return reviewBox; // Used inside reviewList.js
  }

};
var _default = reviewHTML; // let reviewAuthor = document.createElement("p");
// reviewAuthor.setAttribute("class", "review_author");
// reviewAuthor.textContent = reviewObj.author;
// let reviewContent = document.createElement("p");
// reviewContent.setAttribute("class", "review_text");
// reviewContent.textContent = reviewObj.reviewText;
// reviewBox.appendChild(reviewAuthor);
// reviewBox.appendChild(reviewContent);

exports.default = _default;

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const reviewData = {
  getReviews() {
    return fetch("http://localhost:8088/reviews?productId=1") // will need to change to {productObj.id}
    .then(response => response.json()); // .then(reviewInfo => {
    // });
    // The second .then will go inside reviewList
  }

};
var _default = reviewData;
exports.default = _default;

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reviewData = _interopRequireDefault(require("./reviewData"));

var _review = _interopRequireDefault(require("./review"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Get all reviews from reviewData and then use forEach to run reviewHTML.reviewBuilder()
const reviewList = {
  displayReviews(reviewSection) {
    // passing reviewSection from product.js & filling it with info
    _reviewData.default.getReviews().then(allReviews => {
      // Create doc frag
      let reviewDocFragment = document.createDocumentFragment(); // console.log(allReviews);

      allReviews.forEach(reviewItem => {
        // Get review HTML by calling reviewBuilder()
        let singleReview = _review.default.reviewBuilder(reviewItem); // Takes reviewBox from review.js
        // Add HTML results to doc frag


        reviewDocFragment.appendChild(singleReview);
      }); // Add doc frag to reviewSection created in product.js

      reviewSection.appendChild(reviewDocFragment); // reviewSection is passed back to product.js via the function
    });
  }

};
var _default = reviewList;
exports.default = _default;

},{"./review":5,"./reviewData":6}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL21haW4uanMiLCIuLi9zY3JpcHRzL25hdi5qcyIsIi4uL3NjcmlwdHMvcHJvZHVjdC5qcyIsIi4uL3NjcmlwdHMvcHJvZHVjdExpc3QuanMiLCIuLi9zY3JpcHRzL3Jldmlldy5qcyIsIi4uL3NjcmlwdHMvcmV2aWV3RGF0YS5qcyIsIi4uL3NjcmlwdHMvcmV2aWV3TGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7O0FBQ0E7Ozs7QUFFQSxhQUFJLFNBQUo7O0FBRUEscUJBQVksZUFBWjs7Ozs7Ozs7O0FDTEEsTUFBTSxHQUFHLEdBQUc7QUFDUixFQUFBLFNBQVMsR0FBRztBQUNSLFFBQUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLGFBQXZCLENBQW5CO0FBRUEsUUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWDtBQUNBLElBQUEsSUFBSSxDQUFDLFlBQUwsQ0FBa0IsT0FBbEIsRUFBMkIsTUFBM0I7QUFDQSxJQUFBLElBQUksQ0FBQyxTQUFMLEdBQWlCLGtDQUFqQjtBQUVBLFFBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEtBQXZCLENBQWY7QUFDQSxJQUFBLFFBQVEsQ0FBQyxZQUFULENBQXNCLE9BQXRCLEVBQStCLFVBQS9CO0FBQ0EsSUFBQSxRQUFRLENBQUMsU0FBVCxHQUFzQjs7OztrQkFBdEI7QUFNQSxJQUFBLFlBQVksQ0FBQyxXQUFiLENBQXlCLElBQXpCO0FBQ0EsSUFBQSxZQUFZLENBQUMsV0FBYixDQUF5QixRQUF6QjtBQUVIOztBQW5CTyxDQUFaO2VBc0JlLEc7Ozs7Ozs7Ozs7O0FDdEJmOzs7O0FBRUEsTUFBTSxXQUFXLEdBQUc7QUFDaEIsRUFBQSxjQUFjLEdBQUc7QUFFYjtBQUNBLFFBQUksY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNB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LFU7Ozs7Ozs7Ozs7O0FDVmY7O0FBQ0E7Ozs7QUFFQTtBQUVBLE1BQU0sVUFBVSxHQUFHO0FBQ2YsRUFBQSxjQUFjLENBQUMsYUFBRCxFQUFnQjtBQUFVO0FBQ3BDLHdCQUFXLFVBQVgsR0FDQyxJQURELENBQ00sVUFBVSxJQUFJO0FBRWhCO0FBQ0EsVUFBSSxpQkFBaUIsR0FBRyxRQUFRLENBQUMsc0JBQVQsRUFBeEIsQ0FIZ0IsQ0FLaEI7O0FBRUEsTUFBQSxVQUFVLENBQUMsT0FBWCxDQUFtQixVQUFVLElBQUk7QUFFN0I7QUFDQSxZQUFJLFlBQVksR0FBRyxnQkFBVyxhQUFYLENBQXlCLFVBQXpCLENBQW5CLENBSDZCLENBRzRCO0FBRXpEOzs7QUFDQSxRQUFBLGlCQUFpQixDQUFDLFdBQWxCLENBQThCLFlBQTlCO0FBQ0gsT0FQRCxFQVBnQixDQWdCaEI7O0FBQ0EsTUFBQSxhQUFhLENBQUMsV0FBZCxDQUEwQixpQkFBMUIsRUFqQmdCLENBbUJoQjtBQUNILEtBckJEO0FBc0JIOztBQXhCYyxDQUFuQjtlQTJCZSxVIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IG5hdiBmcm9tIFwiLi9uYXZcIlxuaW1wb3J0IHByb2R1Y3RMaXN0IGZyb20gXCIuL3Byb2R1Y3RMaXN0XCJcblxubmF2LmNyZWF0ZU5hdigpO1xuXG5wcm9kdWN0TGlzdC5kaXNwbGF5UHJvZHVjdHMoKTtcblxuIiwiY29uc3QgbmF2ID0ge1xuICAgIGNyZWF0ZU5hdigpIHtcbiAgICAgICAgbGV0IG5hdkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2aWdhdGlvblwiKTtcblxuICAgICAgICBsZXQgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxvZ28uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsb2dvXCIpO1xuICAgICAgICBsb2dvLmlubmVySFRNTCA9IFwiPGEgaHJlZj0nIyc+QmV0c3kncyBCb3V0aXF1ZTwvYT5cIjtcblxuICAgICAgICBsZXQgbmF2TGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBuYXZMaW5rcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5hdmxpbmtzXCIpO1xuICAgICAgICBuYXZMaW5rcy5pbm5lckhUTUwgPSBgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkNhdGVnb3JpZXM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5PcmRlcnM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Mb2cgT3V0PC9hPjwvbGk+XG4gICAgICAgICAgICA8L3VsPmA7XG5cbiAgICAgICAgbmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ28pO1xuICAgICAgICBuYXZDb250YWluZXIuYXBwZW5kQ2hpbGQobmF2TGlua3MpO1xuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuYXY7IiwiaW1wb3J0IHJldmlld0xpc3QgZnJvbSBcIi4vcmV2aWV3TGlzdFwiXG5cbmNvbnN0IHByb2R1Y3RIVE1MID0ge1xuICAgIHByb2R1Y3RCdWlsZGVyKCkge1xuXG4gICAgICAgIC8vIENyZWF0ZSBlbnRpcmUgcHJvZHVjdCBhcnRpY2xlXG4gICAgICAgIGxldCBwcm9kdWN0QXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpO1xuICAgICAgICBwcm9kdWN0QXJ0aWNsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2R1Y3RfYm94XCIpO1xuXG5cbiAgICAgICAgLy8gQ3JlYXRlIG1haW4gcHJvZHVjdCBpbmZvIChwaG90byBhbmQgZGV0YWlscylcbiAgICAgICAgbGV0IG1haW5Qcm9kdWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgICAgICBtYWluUHJvZHVjdEluZm8uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpbmZvX2JveFwiKTtcblxuICAgICAgICBsZXQgcHJvZHVjdFBob3RvQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcHJvZHVjdFBob3RvQm94LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW1hZ2VfYm94XCIpO1xuICAgICAgICBsZXQgcHJvZHVjdFBob3RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgcHJvZHVjdFBob3RvLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvZHVjdF9pbWFnZVwiKTtcbiAgICAgICAgcHJvZHVjdFBob3RvLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcImh0dHBzOi8vd3d3Lm1vZGNsb3RoLmNvbS9kdy9pbWFnZS92Mi9BQkFUX1BSRC9vbi9kZW1hbmR3YXJlLnN0YXRpYy8tL1NpdGVzLW1vZGNsb3RoLW1hc3Rlci9kZWZhdWx0L2R3ZWNiMjMwYzIvaW1hZ2VzLzEwMDk0OTE0X2ZhbWVfb2ZfcmVmZXJlbmNlX3ZlbHZldF9ibG9ja19oZWVsX2VtZXJhbGRfTUFJTi5qcGc/c3c9OTEzXCIpO1xuICAgICAgICBwcm9kdWN0UGhvdG9Cb3guYXBwZW5kQ2hpbGQocHJvZHVjdFBob3RvKTtcblxuICAgICAgICBsZXQgc3BhY2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc3BhY2VyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic3BhY2VyXCIpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBwcm9kdWN0IGRldGFpbHMgYm94XG4gICAgICAgIGxldCBwcm9kdWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2R1Y3RJbmZvLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvZHVjdF9kZWV0c1wiKTtcblxuICAgICAgICAvLyBDcmVhdGUgcHJvZHVjdCBkZXRhaWxzIHRvIGFkZCB0byBkZXRhaWxzIGJveFxuICAgICAgICBsZXQgcHJvZHVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIHByb2R1Y3ROYW1lLnRleHRDb250ZW50ID0gXCJQcm9kdWN0IE5hbWVcIjtcbiAgICAgICAgbGV0IHByb2R1Y3REZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHByb2R1Y3REZXNjLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvZHVjdF9kZXNjXCIpO1xuICAgICAgICBwcm9kdWN0RGVzYy50ZXh0Q29udGVudCA9IFwiTG9yZW0gaXBzdW0gZG9sb3IgYW1ldCByYWNsZXR0ZSBmb3JhZ2UgbGl2ZS1lZGdlIHBvdXItb3ZlciBldmVyeWRheSBjYXJyeSByb29mIHBhcnR5IGlyb255IG1pY3JvZG9zaW5nIHdhaXN0Y29hdCBwb2tlIHByaXNtIGhlbHZldGljYSB5ciBjb2xkLXByZXNzZWQgc3Vid2F5IHRpbGUuXCI7XG4gICAgICAgIGxldCBwcm9kdWN0UHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgcHJvZHVjdFByaWNlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvZHVjdF9wcmljZVwiKTtcbiAgICAgICAgcHJvZHVjdFByaWNlLnRleHRDb250ZW50ID0gXCIkMzVcIjtcbiAgICAgICAgbGV0IHByb2R1Y3RRdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgcHJvZHVjdFF0eS50ZXh0Q29udGVudCA9IFwiSW4gc3RvY2s6IDVcIjtcblxuICAgICAgICAvLyBBZGQgcHJvZHVjdCBkZWV0cyB0byBkZXRhaWxzIGJveFxuICAgICAgICBwcm9kdWN0SW5mby5hcHBlbmRDaGlsZChwcm9kdWN0TmFtZSk7XG4gICAgICAgIHByb2R1Y3RJbmZvLmFwcGVuZENoaWxkKHByb2R1Y3REZXNjKTtcbiAgICAgICAgcHJvZHVjdEluZm8uYXBwZW5kQ2hpbGQocHJvZHVjdFByaWNlKTtcbiAgICAgICAgcHJvZHVjdEluZm8uYXBwZW5kQ2hpbGQocHJvZHVjdFF0eSk7XG5cbiAgICAgICAgLy8gQWRkIGltYWdlIGJveCwgc3BhY2VyLCBhbmQgcHJvZHVjdCBkZXRhaWxzIHRvIG1haW4gaW5mbyBib3hcbiAgICAgICAgbWFpblByb2R1Y3RJbmZvLmFwcGVuZENoaWxkKHByb2R1Y3RQaG90b0JveCk7XG4gICAgICAgIG1haW5Qcm9kdWN0SW5mby5hcHBlbmRDaGlsZChzcGFjZXIpO1xuICAgICAgICBtYWluUHJvZHVjdEluZm8uYXBwZW5kQ2hpbGQocHJvZHVjdEluZm8pO1xuXG4gICAgICAgIC8vIEFkZCBpbmZvX2JveCB0byB0aGUgcHJvZHVjdF9ib3hcbiAgICAgICAgcHJvZHVjdEFydGljbGUuYXBwZW5kQ2hpbGQobWFpblByb2R1Y3RJbmZvKTtcblxuXG4gICAgICAgIC8qKioqKioqIFJFVklFV1MgKioqKiovXG5cbiAgICAgICAgLy8gQ3JlYXRlIHJldmlld3Mgc2VjdGlvblxuICAgICAgICBsZXQgcmV2aWV3U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgICAgICByZXZpZXdTZWN0aW9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicmV2aWV3X3NlY3Rpb25cIik7XG4gICAgICAgIGxldCByZXZpZXdIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIHJldmlld0hlYWRlci50ZXh0Q29udGVudCA9IFwiUmV2aWV3c1wiO1xuICAgICAgICByZXZpZXdTZWN0aW9uLmFwcGVuZENoaWxkKHJldmlld0hlYWRlcik7XG5cbiAgICAgICAgLy8gQXBwZW5kIHJldmlld3Mgc2VjdGlvbiB0byBET00sIGluc2lkZSBwcm9kdWN0IGFydGljbGVcbiAgICAgICAgcHJvZHVjdEFydGljbGUuYXBwZW5kQ2hpbGQocmV2aWV3U2VjdGlvbik7XG5cbiAgICAgICAgLy8gR2V0IHJldmlldyBsaXN0IGZyb20gcmV2aWV3TGlzdC5qc1xuICAgICAgICByZXZpZXdMaXN0LmRpc3BsYXlSZXZpZXdzKHJldmlld1NlY3Rpb24pO1xuICAgICAgICAvLyBeXiBQYXNzIHJldmlld1NlY3Rpb24gc28gaXQgZ2V0cyBmaWxsZWQgaW5zaWRlIGRpc3BsYXlSZXZpZXdzKCkgYW5kIGlzIHBhc3NlZCBiYWNrLlxuXG4gICAgICAgIHJldHVybiBwcm9kdWN0QXJ0aWNsZTsgLy8gcmV0dXJuIHRvIHByb2R1Y3RMaXN0XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0SFRNTDsiLCIvLyAgaW1wb3J0IHByb2R1Y3REYXRhIGZyb20gXCIuL3Byb2R1Y3REYXRhXCJcbmltcG9ydCBwcm9kdWN0SFRNTCBmcm9tIFwiLi9wcm9kdWN0XCJcblxuLy8gR2V0IGFsbCBwcm9kdWN0cyBmcm9tIHByb2R1Y3REYXRhIGFuZCB0aGVuIHVzZSBmb3JFYWNoIHRvIHJ1biBwcm9kdWN0SFRNTC5wcm9kdWN0QnVpbGRlcigpXG5cbmNvbnN0IHByb2R1Y3RMaXN0ID0ge1xuICAgIGRpc3BsYXlQcm9kdWN0cygpIHtcbiAgICAgICAgbGV0IHByb2R1Y3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2R1Y3RzXCIpO1xuICAgICAgICBwcm9kdWN0Q29udGFpbmVyLmlubmVySFRNTCA9IFwiPGgyPlByb2R1Y3RzPC9oMj5cIlxuICAgICAgICAvLyBwcm9kdWN0Q29udGFpbmVyLmlubmVySFRNTCA9IFwiPHA+VGhpcyBpcyBhIHRlc3Q8L3A+XCJcbiAgICAgICAgLy8gZ2V0IGFsbCBwcm9kdWN0cyBmcm9tIHByb2R1Y3REYXRhXG4gICAgICAgIC8vIGZvckVhY2ggcHJvZHVjdCwgY2FsbCBwcm9kdWN0QnVpbGRlclxuICAgICAgICBsZXQgcHJvZHVjdCA9IHByb2R1Y3RIVE1MLnByb2R1Y3RCdWlsZGVyKCk7XG4gICAgICAgIHByb2R1Y3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvZHVjdCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0TGlzdDtcbiIsImNvbnN0IHJldmlld0hUTUwgPSB7XG4gICAgcmV2aWV3QnVpbGRlcihyZXZpZXdPYmopIHtcbiAgICAgICAgbGV0IHJldmlld0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHJldmlld0JveC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInJldmlld19ib3hcIik7XG5cbiAgICAgICAgcmV2aWV3Qm94LmlubmVySFRNTCA9IGA8cCBjbGFzcz1cInJldmlld190ZXh0XCI+PHNwYW4gY2xhc3M9XCJyZXZpZXdfYXV0aG9yXCI+JHtyZXZpZXdPYmouYXV0aG9yfSB3cm90ZTo8L3NwYW4+PGJyIC8+JHtyZXZpZXdPYmoucmV2aWV3VGV4dH08L3A+YFxuXG4gICAgICAgIHJldHVybiByZXZpZXdCb3g7ICAgICAgLy8gVXNlZCBpbnNpZGUgcmV2aWV3TGlzdC5qc1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmV2aWV3SFRNTDtcblxuXG5cbi8vIGxldCByZXZpZXdBdXRob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbi8vIHJldmlld0F1dGhvci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInJldmlld19hdXRob3JcIik7XG4vLyByZXZpZXdBdXRob3IudGV4dENvbnRlbnQgPSByZXZpZXdPYmouYXV0aG9yO1xuXG4vLyBsZXQgcmV2aWV3Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuLy8gcmV2aWV3Q29udGVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInJldmlld190ZXh0XCIpO1xuLy8gcmV2aWV3Q29udGVudC50ZXh0Q29udGVudCA9IHJldmlld09iai5yZXZpZXdUZXh0O1xuXG4vLyByZXZpZXdCb3guYXBwZW5kQ2hpbGQocmV2aWV3QXV0aG9yKTtcbi8vIHJldmlld0JveC5hcHBlbmRDaGlsZChyZXZpZXdDb250ZW50KTsiLCJjb25zdCByZXZpZXdEYXRhID0ge1xuICAgIGdldFJldmlld3MoKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9yZXZpZXdzP3Byb2R1Y3RJZD0xXCIpIC8vIHdpbGwgbmVlZCB0byBjaGFuZ2UgdG8ge3Byb2R1Y3RPYmouaWR9XG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLy8gLnRoZW4ocmV2aWV3SW5mbyA9PiB7XG4gICAgICAgIC8vIH0pO1xuICAgICAgICAvLyBUaGUgc2Vjb25kIC50aGVuIHdpbGwgZ28gaW5zaWRlIHJldmlld0xpc3RcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJldmlld0RhdGE7IiwiaW1wb3J0IHJldmlld0RhdGEgZnJvbSBcIi4vcmV2aWV3RGF0YVwiXG5pbXBvcnQgcmV2aWV3SFRNTCBmcm9tIFwiLi9yZXZpZXdcIlxuXG4vLyBHZXQgYWxsIHJldmlld3MgZnJvbSByZXZpZXdEYXRhIGFuZCB0aGVuIHVzZSBmb3JFYWNoIHRvIHJ1biByZXZpZXdIVE1MLnJldmlld0J1aWxkZXIoKVxuXG5jb25zdCByZXZpZXdMaXN0ID0ge1xuICAgIGRpc3BsYXlSZXZpZXdzKHJldmlld1NlY3Rpb24pIHsgICAgICAgICAvLyBwYXNzaW5nIHJldmlld1NlY3Rpb24gZnJvbSBwcm9kdWN0LmpzICYgZmlsbGluZyBpdCB3aXRoIGluZm9cbiAgICAgICAgcmV2aWV3RGF0YS5nZXRSZXZpZXdzKClcbiAgICAgICAgLnRoZW4oYWxsUmV2aWV3cyA9PiB7XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBkb2MgZnJhZ1xuICAgICAgICAgICAgbGV0IHJldmlld0RvY0ZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhhbGxSZXZpZXdzKTtcblxuICAgICAgICAgICAgYWxsUmV2aWV3cy5mb3JFYWNoKHJldmlld0l0ZW0gPT4ge1xuXG4gICAgICAgICAgICAgICAgLy8gR2V0IHJldmlldyBIVE1MIGJ5IGNhbGxpbmcgcmV2aWV3QnVpbGRlcigpXG4gICAgICAgICAgICAgICAgbGV0IHNpbmdsZVJldmlldyA9IHJldmlld0hUTUwucmV2aWV3QnVpbGRlcihyZXZpZXdJdGVtKTsgLy8gVGFrZXMgcmV2aWV3Qm94IGZyb20gcmV2aWV3LmpzXG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgSFRNTCByZXN1bHRzIHRvIGRvYyBmcmFnXG4gICAgICAgICAgICAgICAgcmV2aWV3RG9jRnJhZ21lbnQuYXBwZW5kQ2hpbGQoc2luZ2xlUmV2aWV3KTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIC8vIEFkZCBkb2MgZnJhZyB0byByZXZpZXdTZWN0aW9uIGNyZWF0ZWQgaW4gcHJvZHVjdC5qc1xuICAgICAgICAgICAgcmV2aWV3U2VjdGlvbi5hcHBlbmRDaGlsZChyZXZpZXdEb2NGcmFnbWVudCk7XG5cbiAgICAgICAgICAgIC8vIHJldmlld1NlY3Rpb24gaXMgcGFzc2VkIGJhY2sgdG8gcHJvZHVjdC5qcyB2aWEgdGhlIGZ1bmN0aW9uXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZXZpZXdMaXN0OyJdfQ==
