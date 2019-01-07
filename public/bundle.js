(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _nav = _interopRequireDefault(require("./nav"));

var _productList = _interopRequireDefault(require("./productList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_nav.default.createNav();

_productList.default.displayProducts();

},{"./nav":2,"./productList":5}],2:[function(require,module,exports){
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
  productBuilder(productObj) {
    // Create entire product article
    let productArticle = document.createElement("article");
    productArticle.setAttribute("class", "product_box"); // Create main product info (photo and details)

    let mainProductInfo = document.createElement("section");
    mainProductInfo.setAttribute("class", "info_box"); // Create photo section

    let productPhotoBox = document.createElement("div");
    productPhotoBox.setAttribute("class", "image_box");
    let productPhoto = document.createElement("img");
    productPhoto.setAttribute("class", "product_image");
    productPhoto.setAttribute("src", productObj.image);
    productPhotoBox.appendChild(productPhoto);
    let spacer = document.createElement("div");
    spacer.setAttribute("class", "spacer"); // Create product details box

    let productInfo = document.createElement("div");
    productInfo.setAttribute("class", "product_deets"); // Create product details to add to details box

    let productName = document.createElement("h3");
    productName.textContent = productObj.title;
    let productDesc = document.createElement("p");
    productDesc.setAttribute("class", "product_desc");
    productDesc.textContent = productObj.description;
    let productPrice = document.createElement("p");
    productPrice.setAttribute("class", "product_price");
    productPrice.innerHTML = `$${productObj.price}`;
    let productQty = document.createElement("p");
    productQty.innerHTML = `In stock: ${productObj.quantity}`; // Add product deets to details box

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


    return productArticle; // send to productList
  }

};
var _default = productHTML;
exports.default = _default;

},{"./reviewList":8}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const productData = {
  getProducts() {
    return fetch("http://localhost:8088/products") // will need to change to {productObj.id}
    .then(response => response.json()); // .then(productInfo => {
    // });
    // The second .then will go inside productList
  }

};
var _default = productData;
exports.default = _default;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _productData = _interopRequireDefault(require("./productData"));

var _product = _interopRequireDefault(require("./product"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Get all products from productData and then use forEach to run productHTML.productBuilder()
const productList = {
  displayProducts() {
    let productContainer = document.querySelector(".products");
    productContainer.innerHTML = "<h2>Products</h2>"; // Create doc frag to hold each product

    let productDocFrag = document.createDocumentFragment(); // get all products from productData

    _productData.default.getProducts().then(allProducts => {
      let singleProduct; // console.log(allProducts);
      // forEach product, call productBuilder

      allProducts.forEach(productItem => {
        singleProduct = _product.default.productBuilder(productItem); // Imports productArticle from product.js

        productDocFrag.appendChild(singleProduct);
      }); // Append doc frag to productContainer (which already exists in index.html)

      productContainer.appendChild(productDocFrag);
    });
  }

};
var _default = productList;
exports.default = _default;

},{"./product":3,"./productData":4}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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

},{"./review":6,"./reviewData":7}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL21haW4uanMiLCIuLi9zY3JpcHRzL25hdi5qcyIsIi4uL3NjcmlwdHMvcHJvZHVjdC5qcyIsIi4uL3NjcmlwdHMvcHJvZHVjdERhdGEuanMiLCIuLi9zY3JpcHRzL3Byb2R1Y3RMaXN0LmpzIiwiLi4vc2NyaXB0cy9yZXZpZXcuanMiLCIuLi9zY3JpcHRzL3Jldmlld0RhdGEuanMiLCIuLi9zY3JpcHRzL3Jldmlld0xpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOztBQUNBOzs7O0FBRUEsYUFBSSxTQUFKOztBQUVBLHFCQUFZLGVBQVo7Ozs7Ozs7OztBQ0xBLE1BQU0sR0FBRyxHQUFHO0FBQ1IsRUFBQSxTQUFTLEdBQUc7QUFDUixRQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixhQUF2QixDQUFuQjtBQUVBLFFBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEtBQXZCLENBQVg7QUFDQSxJQUFBLElBQUksQ0FBQyxZQUFMLENBQWtCLE9BQWxCLEVBQTJCLE1BQTNCO0FBQ0EsSUFBQSxJQUFJLENBQUMsU0FBTCxHQUFpQixrQ0FBakI7QUFFQSxRQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixLQUF2QixDQUFmO0FBQ0EsSUFBQSxRQUFRLENBQUMsWUFBVCxDQUFzQixPQUF0QixFQUErQixVQUEvQjtBQUNBLElBQUEsUUFBUSxDQUFDLFNBQVQsR0FBc0I7Ozs7a0JBQXRCO0FBTUEsSUFBQSxZQUFZLENBQUMsV0FBYixDQUF5QixJQUF6QjtBQUNBLElBQUEsWUFBWSxDQUFDLFdBQWIsQ0FBeUIsUUFBekI7QUFFSDs7QUFuQk8sQ0FBWjtlQXNCZSxHOzs7Ozs7Ozs7OztBQ3RCZjs7OztBQUVBLE1BQU0sV0FBVyxHQUFHO0FBQ2hCLEVBQUEsY0FBYyxDQUFDLFVBQUQsRUFBYTtBQUV2QjtBQUNB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QUFBLGlCQUFpQixDQUFDLFdBQWxCLENBQThCLFlBQTlCO0FBQ0gsT0FQRCxFQVBnQixDQWdCaEI7O0FBQ0EsTUFBQSxhQUFhLENBQUMsV0FBZCxDQUEwQixpQkFBMUIsRUFqQmdCLENBbUJoQjtBQUNILEtBckJEO0FBc0JIOztBQXhCYyxDQUFuQjtlQTJCZSxVIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IG5hdiBmcm9tIFwiLi9uYXZcIlxuaW1wb3J0IHByb2R1Y3RMaXN0IGZyb20gXCIuL3Byb2R1Y3RMaXN0XCJcblxubmF2LmNyZWF0ZU5hdigpO1xuXG5wcm9kdWN0TGlzdC5kaXNwbGF5UHJvZHVjdHMoKTtcblxuIiwiY29uc3QgbmF2ID0ge1xuICAgIGNyZWF0ZU5hdigpIHtcbiAgICAgICAgbGV0IG5hdkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2aWdhdGlvblwiKTtcblxuICAgICAgICBsZXQgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxvZ28uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsb2dvXCIpO1xuICAgICAgICBsb2dvLmlubmVySFRNTCA9IFwiPGEgaHJlZj0nIyc+QmV0c3kncyBCb3V0aXF1ZTwvYT5cIjtcblxuICAgICAgICBsZXQgbmF2TGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBuYXZMaW5rcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5hdmxpbmtzXCIpO1xuICAgICAgICBuYXZMaW5rcy5pbm5lckhUTUwgPSBgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkNhdGVnb3JpZXM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5PcmRlcnM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Mb2cgT3V0PC9hPjwvbGk+XG4gICAgICAgICAgICA8L3VsPmA7XG5cbiAgICAgICAgbmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ28pO1xuICAgICAgICBuYXZDb250YWluZXIuYXBwZW5kQ2hpbGQobmF2TGlua3MpO1xuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuYXY7IiwiaW1wb3J0IHJldmlld0xpc3QgZnJvbSBcIi4vcmV2aWV3TGlzdFwiXG5cbmNvbnN0IHByb2R1Y3RIVE1MID0ge1xuICAgIHByb2R1Y3RCdWlsZGVyKHByb2R1Y3RPYmopIHtcblxuICAgICAgICAvLyBDcmVhdGUgZW50aXJlIHByb2R1Y3QgYXJ0aWNsZVxuICAgICAgICBsZXQgcHJvZHVjdEFydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcbiAgICAgICAgcHJvZHVjdEFydGljbGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9kdWN0X2JveFwiKTtcblxuICAgICAgICAvLyBDcmVhdGUgbWFpbiBwcm9kdWN0IGluZm8gKHBob3RvIGFuZCBkZXRhaWxzKVxuICAgICAgICBsZXQgbWFpblByb2R1Y3RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgICAgIG1haW5Qcm9kdWN0SW5mby5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImluZm9fYm94XCIpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBwaG90byBzZWN0aW9uXG4gICAgICAgIGxldCBwcm9kdWN0UGhvdG9Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcm9kdWN0UGhvdG9Cb3guc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpbWFnZV9ib3hcIik7XG4gICAgICAgIGxldCBwcm9kdWN0UGhvdG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBwcm9kdWN0UGhvdG8uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9kdWN0X2ltYWdlXCIpO1xuICAgICAgICBwcm9kdWN0UGhvdG8uc2V0QXR0cmlidXRlKFwic3JjXCIsIHByb2R1Y3RPYmouaW1hZ2UpO1xuICAgICAgICBwcm9kdWN0UGhvdG9Cb3guYXBwZW5kQ2hpbGQocHJvZHVjdFBob3RvKTtcblxuICAgICAgICBsZXQgc3BhY2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc3BhY2VyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic3BhY2VyXCIpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBwcm9kdWN0IGRldGFpbHMgYm94XG4gICAgICAgIGxldCBwcm9kdWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2R1Y3RJbmZvLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvZHVjdF9kZWV0c1wiKTtcblxuICAgICAgICAvLyBDcmVhdGUgcHJvZHVjdCBkZXRhaWxzIHRvIGFkZCB0byBkZXRhaWxzIGJveFxuICAgICAgICBsZXQgcHJvZHVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIHByb2R1Y3ROYW1lLnRleHRDb250ZW50ID0gcHJvZHVjdE9iai50aXRsZTtcbiAgICAgICAgbGV0IHByb2R1Y3REZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHByb2R1Y3REZXNjLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvZHVjdF9kZXNjXCIpO1xuICAgICAgICBwcm9kdWN0RGVzYy50ZXh0Q29udGVudCA9IHByb2R1Y3RPYmouZGVzY3JpcHRpb247XG4gICAgICAgIGxldCBwcm9kdWN0UHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgcHJvZHVjdFByaWNlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvZHVjdF9wcmljZVwiKTtcbiAgICAgICAgcHJvZHVjdFByaWNlLmlubmVySFRNTCA9IGAkJHtwcm9kdWN0T2JqLnByaWNlfWA7XG4gICAgICAgIGxldCBwcm9kdWN0UXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHByb2R1Y3RRdHkuaW5uZXJIVE1MID0gYEluIHN0b2NrOiAke3Byb2R1Y3RPYmoucXVhbnRpdHl9YDtcblxuICAgICAgICAvLyBBZGQgcHJvZHVjdCBkZWV0cyB0byBkZXRhaWxzIGJveFxuICAgICAgICBwcm9kdWN0SW5mby5hcHBlbmRDaGlsZChwcm9kdWN0TmFtZSk7XG4gICAgICAgIHByb2R1Y3RJbmZvLmFwcGVuZENoaWxkKHByb2R1Y3REZXNjKTtcbiAgICAgICAgcHJvZHVjdEluZm8uYXBwZW5kQ2hpbGQocHJvZHVjdFByaWNlKTtcbiAgICAgICAgcHJvZHVjdEluZm8uYXBwZW5kQ2hpbGQocHJvZHVjdFF0eSk7XG5cbiAgICAgICAgLy8gQWRkIGltYWdlIGJveCwgc3BhY2VyLCBhbmQgcHJvZHVjdCBkZXRhaWxzIHRvIG1haW4gaW5mbyBib3hcbiAgICAgICAgbWFpblByb2R1Y3RJbmZvLmFwcGVuZENoaWxkKHByb2R1Y3RQaG90b0JveCk7XG4gICAgICAgIG1haW5Qcm9kdWN0SW5mby5hcHBlbmRDaGlsZChzcGFjZXIpO1xuICAgICAgICBtYWluUHJvZHVjdEluZm8uYXBwZW5kQ2hpbGQocHJvZHVjdEluZm8pO1xuXG4gICAgICAgIC8vIEFkZCBpbmZvX2JveCB0byB0aGUgcHJvZHVjdF9ib3hcbiAgICAgICAgcHJvZHVjdEFydGljbGUuYXBwZW5kQ2hpbGQobWFpblByb2R1Y3RJbmZvKTtcblxuXG4gICAgICAgIC8qKioqKioqIFJFVklFV1MgKioqKiovXG5cbiAgICAgICAgLy8gQ3JlYXRlIHJldmlld3Mgc2VjdGlvblxuICAgICAgICBsZXQgcmV2aWV3U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgICAgICByZXZpZXdTZWN0aW9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicmV2aWV3X3NlY3Rpb25cIik7XG4gICAgICAgIGxldCByZXZpZXdIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIHJldmlld0hlYWRlci50ZXh0Q29udGVudCA9IFwiUmV2aWV3c1wiO1xuICAgICAgICByZXZpZXdTZWN0aW9uLmFwcGVuZENoaWxkKHJldmlld0hlYWRlcik7XG5cbiAgICAgICAgLy8gQXBwZW5kIHJldmlld3Mgc2VjdGlvbiB0byBET00sIGluc2lkZSBwcm9kdWN0IGFydGljbGVcbiAgICAgICAgcHJvZHVjdEFydGljbGUuYXBwZW5kQ2hpbGQocmV2aWV3U2VjdGlvbik7XG5cbiAgICAgICAgLy8gR2V0IHJldmlldyBsaXN0IGZyb20gcmV2aWV3TGlzdC5qc1xuICAgICAgICByZXZpZXdMaXN0LmRpc3BsYXlSZXZpZXdzKHJldmlld1NlY3Rpb24pO1xuICAgICAgICAvLyBeXiBQYXNzIHJldmlld1NlY3Rpb24gc28gaXQgZ2V0cyBmaWxsZWQgaW5zaWRlIGRpc3BsYXlSZXZpZXdzKCkgYW5kIGlzIHBhc3NlZCBiYWNrLlxuXG4gICAgICAgIHJldHVybiBwcm9kdWN0QXJ0aWNsZTsgLy8gc2VuZCB0byBwcm9kdWN0TGlzdFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdEhUTUw7IiwiY29uc3QgcHJvZHVjdERhdGEgPSB7XG4gICAgZ2V0UHJvZHVjdHMoKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9wcm9kdWN0c1wiKSAvLyB3aWxsIG5lZWQgdG8gY2hhbmdlIHRvIHtwcm9kdWN0T2JqLmlkfVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC8vIC50aGVuKHByb2R1Y3RJbmZvID0+IHtcbiAgICAgICAgLy8gfSk7XG4gICAgICAgIC8vIFRoZSBzZWNvbmQgLnRoZW4gd2lsbCBnbyBpbnNpZGUgcHJvZHVjdExpc3RcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3REYXRhOyIsImltcG9ydCBwcm9kdWN0RGF0YSBmcm9tIFwiLi9wcm9kdWN0RGF0YVwiXG5pbXBvcnQgcHJvZHVjdEhUTUwgZnJvbSBcIi4vcHJvZHVjdFwiXG5cbi8vIEdldCBhbGwgcHJvZHVjdHMgZnJvbSBwcm9kdWN0RGF0YSBhbmQgdGhlbiB1c2UgZm9yRWFjaCB0byBydW4gcHJvZHVjdEhUTUwucHJvZHVjdEJ1aWxkZXIoKVxuXG5jb25zdCBwcm9kdWN0TGlzdCA9IHtcbiAgICBkaXNwbGF5UHJvZHVjdHMoKSB7XG4gICAgICAgIGxldCBwcm9kdWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9kdWN0c1wiKTtcbiAgICAgICAgcHJvZHVjdENvbnRhaW5lci5pbm5lckhUTUwgPSBcIjxoMj5Qcm9kdWN0czwvaDI+XCI7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGRvYyBmcmFnIHRvIGhvbGQgZWFjaCBwcm9kdWN0XG4gICAgICAgIGxldCBwcm9kdWN0RG9jRnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICAgICAgICAvLyBnZXQgYWxsIHByb2R1Y3RzIGZyb20gcHJvZHVjdERhdGFcbiAgICAgICAgcHJvZHVjdERhdGEuZ2V0UHJvZHVjdHMoKVxuICAgICAgICAudGhlbihhbGxQcm9kdWN0cyA9PiB7XG4gICAgICAgICAgICBsZXQgc2luZ2xlUHJvZHVjdDtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGFsbFByb2R1Y3RzKTtcblxuICAgICAgICAgICAgLy8gZm9yRWFjaCBwcm9kdWN0LCBjYWxsIHByb2R1Y3RCdWlsZGVyXG4gICAgICAgICAgICBhbGxQcm9kdWN0cy5mb3JFYWNoKHByb2R1Y3RJdGVtID0+IHtcbiAgICAgICAgICAgICAgICBzaW5nbGVQcm9kdWN0ID0gcHJvZHVjdEhUTUwucHJvZHVjdEJ1aWxkZXIocHJvZHVjdEl0ZW0pOyAvLyBJbXBvcnRzIHByb2R1Y3RBcnRpY2xlIGZyb20gcHJvZHVjdC5qc1xuICAgICAgICAgICAgICAgIHByb2R1Y3REb2NGcmFnLmFwcGVuZENoaWxkKHNpbmdsZVByb2R1Y3QpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgLy8gQXBwZW5kIGRvYyBmcmFnIHRvIHByb2R1Y3RDb250YWluZXIgKHdoaWNoIGFscmVhZHkgZXhpc3RzIGluIGluZGV4Lmh0bWwpXG4gICAgICAgICAgICBwcm9kdWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2R1Y3REb2NGcmFnKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0TGlzdDtcbiIsImNvbnN0IHJldmlld0hUTUwgPSB7XG4gICAgcmV2aWV3QnVpbGRlcihyZXZpZXdPYmopIHtcbiAgICAgICAgbGV0IHJldmlld0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHJldmlld0JveC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInJldmlld19ib3hcIik7XG5cbiAgICAgICAgcmV2aWV3Qm94LmlubmVySFRNTCA9IGA8cCBjbGFzcz1cInJldmlld190ZXh0XCI+PHNwYW4gY2xhc3M9XCJyZXZpZXdfYXV0aG9yXCI+JHtyZXZpZXdPYmouYXV0aG9yfSB3cm90ZTo8L3NwYW4+PGJyIC8+JHtyZXZpZXdPYmoucmV2aWV3VGV4dH08L3A+YFxuXG4gICAgICAgIHJldHVybiByZXZpZXdCb3g7ICAgICAgLy8gVXNlZCBpbnNpZGUgcmV2aWV3TGlzdC5qc1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmV2aWV3SFRNTDtcblxuXG5cbi8vIGxldCByZXZpZXdBdXRob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbi8vIHJldmlld0F1dGhvci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInJldmlld19hdXRob3JcIik7XG4vLyByZXZpZXdBdXRob3IudGV4dENvbnRlbnQgPSByZXZpZXdPYmouYXV0aG9yO1xuXG4vLyBsZXQgcmV2aWV3Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuLy8gcmV2aWV3Q29udGVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInJldmlld190ZXh0XCIpO1xuLy8gcmV2aWV3Q29udGVudC50ZXh0Q29udGVudCA9IHJldmlld09iai5yZXZpZXdUZXh0O1xuXG4vLyByZXZpZXdCb3guYXBwZW5kQ2hpbGQocmV2aWV3QXV0aG9yKTtcbi8vIHJldmlld0JveC5hcHBlbmRDaGlsZChyZXZpZXdDb250ZW50KTsiLCJjb25zdCByZXZpZXdEYXRhID0ge1xuICAgIGdldFJldmlld3MoKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9yZXZpZXdzP3Byb2R1Y3RJZD0xXCIpIC8vIHdpbGwgbmVlZCB0byBjaGFuZ2UgdG8ge3Byb2R1Y3RPYmouaWR9XG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLy8gLnRoZW4ocmV2aWV3SW5mbyA9PiB7XG4gICAgICAgIC8vIH0pO1xuICAgICAgICAvLyBUaGUgc2Vjb25kIC50aGVuIHdpbGwgZ28gaW5zaWRlIHJldmlld0xpc3RcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJldmlld0RhdGE7IiwiaW1wb3J0IHJldmlld0RhdGEgZnJvbSBcIi4vcmV2aWV3RGF0YVwiXG5pbXBvcnQgcmV2aWV3SFRNTCBmcm9tIFwiLi9yZXZpZXdcIlxuXG4vLyBHZXQgYWxsIHJldmlld3MgZnJvbSByZXZpZXdEYXRhIGFuZCB0aGVuIHVzZSBmb3JFYWNoIHRvIHJ1biByZXZpZXdIVE1MLnJldmlld0J1aWxkZXIoKVxuXG5jb25zdCByZXZpZXdMaXN0ID0ge1xuICAgIGRpc3BsYXlSZXZpZXdzKHJldmlld1NlY3Rpb24pIHsgICAgICAgICAvLyBwYXNzaW5nIHJldmlld1NlY3Rpb24gZnJvbSBwcm9kdWN0LmpzICYgZmlsbGluZyBpdCB3aXRoIGluZm9cbiAgICAgICAgcmV2aWV3RGF0YS5nZXRSZXZpZXdzKClcbiAgICAgICAgLnRoZW4oYWxsUmV2aWV3cyA9PiB7XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBkb2MgZnJhZ1xuICAgICAgICAgICAgbGV0IHJldmlld0RvY0ZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhhbGxSZXZpZXdzKTtcblxuICAgICAgICAgICAgYWxsUmV2aWV3cy5mb3JFYWNoKHJldmlld0l0ZW0gPT4ge1xuXG4gICAgICAgICAgICAgICAgLy8gR2V0IHJldmlldyBIVE1MIGJ5IGNhbGxpbmcgcmV2aWV3QnVpbGRlcigpXG4gICAgICAgICAgICAgICAgbGV0IHNpbmdsZVJldmlldyA9IHJldmlld0hUTUwucmV2aWV3QnVpbGRlcihyZXZpZXdJdGVtKTsgLy8gVGFrZXMgcmV2aWV3Qm94IGZyb20gcmV2aWV3LmpzXG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgSFRNTCByZXN1bHRzIHRvIGRvYyBmcmFnXG4gICAgICAgICAgICAgICAgcmV2aWV3RG9jRnJhZ21lbnQuYXBwZW5kQ2hpbGQoc2luZ2xlUmV2aWV3KTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIC8vIEFkZCBkb2MgZnJhZyB0byByZXZpZXdTZWN0aW9uIGNyZWF0ZWQgaW4gcHJvZHVjdC5qc1xuICAgICAgICAgICAgcmV2aWV3U2VjdGlvbi5hcHBlbmRDaGlsZChyZXZpZXdEb2NGcmFnbWVudCk7XG5cbiAgICAgICAgICAgIC8vIHJldmlld1NlY3Rpb24gaXMgcGFzc2VkIGJhY2sgdG8gcHJvZHVjdC5qcyB2aWEgdGhlIGZ1bmN0aW9uXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZXZpZXdMaXN0OyJdfQ==
