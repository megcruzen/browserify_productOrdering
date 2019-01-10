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
    productArticle.setAttribute("class", "product_box"); // productArticle.setAttribute("id", productObj.id);       // set DOM ID = productObj.id
    // Create main product info (photo and details)

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

    productArticle.appendChild(mainProductInfo); // console.log("product ID:", productObj.id);

    /******* REVIEWS *****/
    // Create reviews section

    let reviewSection = document.createElement("section");
    reviewSection.setAttribute("class", "review_section");
    let reviewHeader = document.createElement("h3");
    reviewHeader.textContent = "Reviews";
    reviewSection.appendChild(reviewHeader); // Append reviews section to DOM, inside product article

    productArticle.appendChild(reviewSection); // Get review list from reviewList.js

    _reviewList.default.displayReviews(reviewSection, productObj.id); // Pass reviewSection so it gets filled inside displayReviews() and is passed back.
    // Pass productObj.id to be used inside review fetch call


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
    return fetch("http://localhost:8088/products").then(response => response.json()); // The second .then will go inside productList
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
      let singleProduct; // forEach product, call productBuilder, and append each product to the doc frag

      allProducts.forEach(productItem => {
        singleProduct = _product.default.productBuilder(productItem); // Imports productArticle from product.js

        productDocFrag.appendChild(singleProduct);
      }); // Append doc frag to productContainer

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
var _default = reviewHTML;
exports.default = _default;

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const reviewData = {
  getReviews(productID) {
    // productID is passed from reviewList
    return fetch(`http://localhost:8088/reviews?productId=${productID}`).then(response => response.json()); // The second .then will go inside reviewList
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
  displayReviews(reviewSection, productId) {
    // passing reviewSection from product.js & filling it with info
    // passing productId from product.js so it get inserted into fetch
    _reviewData.default.getReviews(productId).then(allReviews => {
      // Create doc frag
      let reviewDocFragment = document.createDocumentFragment();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL21haW4uanMiLCIuLi9zY3JpcHRzL25hdi5qcyIsIi4uL3NjcmlwdHMvcHJvZHVjdC5qcyIsIi4uL3NjcmlwdHMvcHJvZHVjdERhdGEuanMiLCIuLi9zY3JpcHRzL3Byb2R1Y3RMaXN0LmpzIiwiLi4vc2NyaXB0cy9yZXZpZXcuanMiLCIuLi9zY3JpcHRzL3Jldmlld0RhdGEuanMiLCIuLi9zY3JpcHRzL3Jldmlld0xpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOztBQUNBOzs7O0FBRUEsYUFBSSxTQUFKOztBQUNBLHFCQUFZLGVBQVo7Ozs7Ozs7OztBQ0pBLE1BQU0sR0FBRyxHQUFHO0FBQ1IsRUFBQSxTQUFTLEdBQUc7QUFDUixRQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixhQUF2QixDQUFuQjtBQUVBLFFBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEtBQXZCLENBQVg7QUFDQSxJQUFBLElBQUksQ0FBQyxZQUFMLENBQWtCLE9BQWxCLEVBQTJCLE1BQTNCO0FBQ0EsSUFBQSxJQUFJLENBQUMsU0FBTCxHQUFpQixrQ0FBakI7QUFFQSxRQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixLQUF2QixDQUFmO0FBQ0EsSUFBQSxRQUFRLENBQUMsWUFBVCxDQUFzQixPQUF0QixFQUErQixVQUEvQjtBQUNBLElBQUEsUUFBUSxDQUFDLFNBQVQsR0FBc0I7Ozs7a0JBQXRCO0FBTUEsSUFBQSxZQUFZLENBQUMsV0FBYixDQUF5QixJQUF6QjtBQUNBLElBQUEsWUFBWSxDQUFDLFdBQWIsQ0FBeUIsUUFBekI7QUFDSDs7QUFsQk8sQ0FBWjtlQXFCZSxHOzs7Ozs7Ozs7OztBQ3JCZjs7OztBQUVBLE1BQU0sV0FBVyxHQUFHO0FBQ2hCLEVBQUEsY0FBYyxDQUFDLFVBQUQsRUFBYTtBQUV2QjtBQUNB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LFFBQUEsaUJBQWlCLENBQUMsV0FBbEIsQ0FBOEIsWUFBOUI7QUFDSCxPQVBELEVBTGdCLENBY2hCOztBQUNBLE1BQUEsYUFBYSxDQUFDLFdBQWQsQ0FBMEIsaUJBQTFCLEVBZmdCLENBaUJoQjtBQUNILEtBbkJEO0FBb0JIOztBQXhCYyxDQUFuQjtlQTJCZSxVIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IG5hdiBmcm9tIFwiLi9uYXZcIlxuaW1wb3J0IHByb2R1Y3RMaXN0IGZyb20gXCIuL3Byb2R1Y3RMaXN0XCJcblxubmF2LmNyZWF0ZU5hdigpO1xucHJvZHVjdExpc3QuZGlzcGxheVByb2R1Y3RzKCk7XG5cbiIsImNvbnN0IG5hdiA9IHtcbiAgICBjcmVhdGVOYXYoKSB7XG4gICAgICAgIGxldCBuYXZDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdmlnYXRpb25cIik7XG5cbiAgICAgICAgbGV0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsb2dvLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibG9nb1wiKTtcbiAgICAgICAgbG9nby5pbm5lckhUTUwgPSBcIjxhIGhyZWY9JyMnPkJldHN5J3MgQm91dGlxdWU8L2E+XCI7XG5cbiAgICAgICAgbGV0IG5hdkxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbmF2TGlua3Muc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJuYXZsaW5rc1wiKTtcbiAgICAgICAgbmF2TGlua3MuaW5uZXJIVE1MID0gYDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5DYXRlZ29yaWVzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+T3JkZXJzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+TG9nIE91dDwvYT48L2xpPlxuICAgICAgICAgICAgPC91bD5gO1xuXG4gICAgICAgIG5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvKTtcbiAgICAgICAgbmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hdkxpbmtzKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5hdjsiLCJpbXBvcnQgcmV2aWV3TGlzdCBmcm9tIFwiLi9yZXZpZXdMaXN0XCJcblxuY29uc3QgcHJvZHVjdEhUTUwgPSB7XG4gICAgcHJvZHVjdEJ1aWxkZXIocHJvZHVjdE9iaikge1xuXG4gICAgICAgIC8vIENyZWF0ZSBlbnRpcmUgcHJvZHVjdCBhcnRpY2xlXG4gICAgICAgIGxldCBwcm9kdWN0QXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpO1xuICAgICAgICBwcm9kdWN0QXJ0aWNsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2R1Y3RfYm94XCIpO1xuICAgICAgICAvLyBwcm9kdWN0QXJ0aWNsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBwcm9kdWN0T2JqLmlkKTsgICAgICAgLy8gc2V0IERPTSBJRCA9IHByb2R1Y3RPYmouaWRcblxuICAgICAgICAvLyBDcmVhdGUgbWFpbiBwcm9kdWN0IGluZm8gKHBob3RvIGFuZCBkZXRhaWxzKVxuICAgICAgICBsZXQgbWFpblByb2R1Y3RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgICAgIG1haW5Qcm9kdWN0SW5mby5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImluZm9fYm94XCIpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBwaG90byBzZWN0aW9uXG4gICAgICAgIGxldCBwcm9kdWN0UGhvdG9Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcm9kdWN0UGhvdG9Cb3guc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpbWFnZV9ib3hcIik7XG4gICAgICAgIGxldCBwcm9kdWN0UGhvdG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBwcm9kdWN0UGhvdG8uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9kdWN0X2ltYWdlXCIpO1xuICAgICAgICBwcm9kdWN0UGhvdG8uc2V0QXR0cmlidXRlKFwic3JjXCIsIHByb2R1Y3RPYmouaW1hZ2UpO1xuICAgICAgICBwcm9kdWN0UGhvdG9Cb3guYXBwZW5kQ2hpbGQocHJvZHVjdFBob3RvKTtcblxuICAgICAgICBsZXQgc3BhY2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc3BhY2VyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic3BhY2VyXCIpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBwcm9kdWN0IGRldGFpbHMgYm94XG4gICAgICAgIGxldCBwcm9kdWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2R1Y3RJbmZvLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvZHVjdF9kZWV0c1wiKTtcblxuICAgICAgICAvLyBDcmVhdGUgcHJvZHVjdCBkZXRhaWxzIHRvIGFkZCB0byBkZXRhaWxzIGJveFxuICAgICAgICBsZXQgcHJvZHVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIHByb2R1Y3ROYW1lLnRleHRDb250ZW50ID0gcHJvZHVjdE9iai50aXRsZTtcbiAgICAgICAgbGV0IHByb2R1Y3REZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHByb2R1Y3REZXNjLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvZHVjdF9kZXNjXCIpO1xuICAgICAgICBwcm9kdWN0RGVzYy50ZXh0Q29udGVudCA9IHByb2R1Y3RPYmouZGVzY3JpcHRpb247XG4gICAgICAgIGxldCBwcm9kdWN0UHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgcHJvZHVjdFByaWNlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvZHVjdF9wcmljZVwiKTtcbiAgICAgICAgcHJvZHVjdFByaWNlLmlubmVySFRNTCA9IGAkJHtwcm9kdWN0T2JqLnByaWNlfWA7XG4gICAgICAgIGxldCBwcm9kdWN0UXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHByb2R1Y3RRdHkuaW5uZXJIVE1MID0gYEluIHN0b2NrOiAke3Byb2R1Y3RPYmoucXVhbnRpdHl9YDtcblxuICAgICAgICAvLyBBZGQgcHJvZHVjdCBkZWV0cyB0byBkZXRhaWxzIGJveFxuICAgICAgICBwcm9kdWN0SW5mby5hcHBlbmRDaGlsZChwcm9kdWN0TmFtZSk7XG4gICAgICAgIHByb2R1Y3RJbmZvLmFwcGVuZENoaWxkKHByb2R1Y3REZXNjKTtcbiAgICAgICAgcHJvZHVjdEluZm8uYXBwZW5kQ2hpbGQocHJvZHVjdFByaWNlKTtcbiAgICAgICAgcHJvZHVjdEluZm8uYXBwZW5kQ2hpbGQocHJvZHVjdFF0eSk7XG5cbiAgICAgICAgLy8gQWRkIGltYWdlIGJveCwgc3BhY2VyLCBhbmQgcHJvZHVjdCBkZXRhaWxzIHRvIG1haW4gaW5mbyBib3hcbiAgICAgICAgbWFpblByb2R1Y3RJbmZvLmFwcGVuZENoaWxkKHByb2R1Y3RQaG90b0JveCk7XG4gICAgICAgIG1haW5Qcm9kdWN0SW5mby5hcHBlbmRDaGlsZChzcGFjZXIpO1xuICAgICAgICBtYWluUHJvZHVjdEluZm8uYXBwZW5kQ2hpbGQocHJvZHVjdEluZm8pO1xuXG4gICAgICAgIC8vIEFkZCBpbmZvX2JveCB0byB0aGUgcHJvZHVjdF9ib3hcbiAgICAgICAgcHJvZHVjdEFydGljbGUuYXBwZW5kQ2hpbGQobWFpblByb2R1Y3RJbmZvKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInByb2R1Y3QgSUQ6XCIsIHByb2R1Y3RPYmouaWQpO1xuXG4gICAgICAgIC8qKioqKioqIFJFVklFV1MgKioqKiovXG5cbiAgICAgICAgLy8gQ3JlYXRlIHJldmlld3Mgc2VjdGlvblxuICAgICAgICBsZXQgcmV2aWV3U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgICAgICByZXZpZXdTZWN0aW9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicmV2aWV3X3NlY3Rpb25cIik7XG4gICAgICAgIGxldCByZXZpZXdIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIHJldmlld0hlYWRlci50ZXh0Q29udGVudCA9IFwiUmV2aWV3c1wiO1xuICAgICAgICByZXZpZXdTZWN0aW9uLmFwcGVuZENoaWxkKHJldmlld0hlYWRlcik7XG5cbiAgICAgICAgLy8gQXBwZW5kIHJldmlld3Mgc2VjdGlvbiB0byBET00sIGluc2lkZSBwcm9kdWN0IGFydGljbGVcbiAgICAgICAgcHJvZHVjdEFydGljbGUuYXBwZW5kQ2hpbGQocmV2aWV3U2VjdGlvbik7XG5cbiAgICAgICAgLy8gR2V0IHJldmlldyBsaXN0IGZyb20gcmV2aWV3TGlzdC5qc1xuICAgICAgICByZXZpZXdMaXN0LmRpc3BsYXlSZXZpZXdzKHJldmlld1NlY3Rpb24sIHByb2R1Y3RPYmouaWQpO1xuICAgICAgICAvLyBQYXNzIHJldmlld1NlY3Rpb24gc28gaXQgZ2V0cyBmaWxsZWQgaW5zaWRlIGRpc3BsYXlSZXZpZXdzKCkgYW5kIGlzIHBhc3NlZCBiYWNrLlxuICAgICAgICAvLyBQYXNzIHByb2R1Y3RPYmouaWQgdG8gYmUgdXNlZCBpbnNpZGUgcmV2aWV3IGZldGNoIGNhbGxcblxuICAgICAgICByZXR1cm4gcHJvZHVjdEFydGljbGU7IC8vIHNlbmQgdG8gcHJvZHVjdExpc3RcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3RIVE1MOyIsImNvbnN0IHByb2R1Y3REYXRhID0ge1xuICAgIGdldFByb2R1Y3RzKCkge1xuICAgICAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODgvcHJvZHVjdHNcIilcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAvLyBUaGUgc2Vjb25kIC50aGVuIHdpbGwgZ28gaW5zaWRlIHByb2R1Y3RMaXN0XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0RGF0YTsiLCJpbXBvcnQgcHJvZHVjdERhdGEgZnJvbSBcIi4vcHJvZHVjdERhdGFcIlxuaW1wb3J0IHByb2R1Y3RIVE1MIGZyb20gXCIuL3Byb2R1Y3RcIlxuXG4vLyBHZXQgYWxsIHByb2R1Y3RzIGZyb20gcHJvZHVjdERhdGEgYW5kIHRoZW4gdXNlIGZvckVhY2ggdG8gcnVuIHByb2R1Y3RIVE1MLnByb2R1Y3RCdWlsZGVyKClcblxuY29uc3QgcHJvZHVjdExpc3QgPSB7XG4gICAgZGlzcGxheVByb2R1Y3RzKCkge1xuICAgICAgICBsZXQgcHJvZHVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZHVjdHNcIik7XG4gICAgICAgIHByb2R1Y3RDb250YWluZXIuaW5uZXJIVE1MID0gXCI8aDI+UHJvZHVjdHM8L2gyPlwiO1xuXG4gICAgICAgIC8vIENyZWF0ZSBkb2MgZnJhZyB0byBob2xkIGVhY2ggcHJvZHVjdFxuICAgICAgICBsZXQgcHJvZHVjdERvY0ZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cbiAgICAgICAgLy8gZ2V0IGFsbCBwcm9kdWN0cyBmcm9tIHByb2R1Y3REYXRhXG4gICAgICAgIHByb2R1Y3REYXRhLmdldFByb2R1Y3RzKClcbiAgICAgICAgLnRoZW4oYWxsUHJvZHVjdHMgPT4ge1xuICAgICAgICAgICAgbGV0IHNpbmdsZVByb2R1Y3Q7XG5cbiAgICAgICAgICAgIC8vIGZvckVhY2ggcHJvZHVjdCwgY2FsbCBwcm9kdWN0QnVpbGRlciwgYW5kIGFwcGVuZCBlYWNoIHByb2R1Y3QgdG8gdGhlIGRvYyBmcmFnXG4gICAgICAgICAgICBhbGxQcm9kdWN0cy5mb3JFYWNoKHByb2R1Y3RJdGVtID0+IHtcbiAgICAgICAgICAgICAgICBzaW5nbGVQcm9kdWN0ID0gcHJvZHVjdEhUTUwucHJvZHVjdEJ1aWxkZXIocHJvZHVjdEl0ZW0pOyAvLyBJbXBvcnRzIHByb2R1Y3RBcnRpY2xlIGZyb20gcHJvZHVjdC5qc1xuICAgICAgICAgICAgICAgIHByb2R1Y3REb2NGcmFnLmFwcGVuZENoaWxkKHNpbmdsZVByb2R1Y3QpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgLy8gQXBwZW5kIGRvYyBmcmFnIHRvIHByb2R1Y3RDb250YWluZXJcbiAgICAgICAgICAgIHByb2R1Y3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvZHVjdERvY0ZyYWcpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3RMaXN0O1xuIiwiY29uc3QgcmV2aWV3SFRNTCA9IHtcbiAgICByZXZpZXdCdWlsZGVyKHJldmlld09iaikge1xuICAgICAgICBsZXQgcmV2aWV3Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcmV2aWV3Qm94LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicmV2aWV3X2JveFwiKTtcbiAgICAgICAgcmV2aWV3Qm94LmlubmVySFRNTCA9IGA8cCBjbGFzcz1cInJldmlld190ZXh0XCI+PHNwYW4gY2xhc3M9XCJyZXZpZXdfYXV0aG9yXCI+JHtyZXZpZXdPYmouYXV0aG9yfSB3cm90ZTo8L3NwYW4+PGJyIC8+JHtyZXZpZXdPYmoucmV2aWV3VGV4dH08L3A+YFxuXG4gICAgICAgIHJldHVybiByZXZpZXdCb3g7ICAgICAgLy8gVXNlZCBpbnNpZGUgcmV2aWV3TGlzdC5qc1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmV2aWV3SFRNTDtcbiIsImNvbnN0IHJldmlld0RhdGEgPSB7XG4gICAgZ2V0UmV2aWV3cyhwcm9kdWN0SUQpIHtcbiAgICAgICAgLy8gcHJvZHVjdElEIGlzIHBhc3NlZCBmcm9tIHJldmlld0xpc3RcbiAgICAgICAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODgvcmV2aWV3cz9wcm9kdWN0SWQ9JHtwcm9kdWN0SUR9YClcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAvLyBUaGUgc2Vjb25kIC50aGVuIHdpbGwgZ28gaW5zaWRlIHJldmlld0xpc3RcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJldmlld0RhdGE7IiwiaW1wb3J0IHJldmlld0RhdGEgZnJvbSBcIi4vcmV2aWV3RGF0YVwiXG5pbXBvcnQgcmV2aWV3SFRNTCBmcm9tIFwiLi9yZXZpZXdcIlxuXG4vLyBHZXQgYWxsIHJldmlld3MgZnJvbSByZXZpZXdEYXRhIGFuZCB0aGVuIHVzZSBmb3JFYWNoIHRvIHJ1biByZXZpZXdIVE1MLnJldmlld0J1aWxkZXIoKVxuXG5jb25zdCByZXZpZXdMaXN0ID0ge1xuICAgIGRpc3BsYXlSZXZpZXdzKHJldmlld1NlY3Rpb24sIHByb2R1Y3RJZCkge1xuICAgICAgICAvLyBwYXNzaW5nIHJldmlld1NlY3Rpb24gZnJvbSBwcm9kdWN0LmpzICYgZmlsbGluZyBpdCB3aXRoIGluZm9cbiAgICAgICAgLy8gcGFzc2luZyBwcm9kdWN0SWQgZnJvbSBwcm9kdWN0LmpzIHNvIGl0IGdldCBpbnNlcnRlZCBpbnRvIGZldGNoXG4gICAgICAgIHJldmlld0RhdGEuZ2V0UmV2aWV3cyhwcm9kdWN0SWQpXG4gICAgICAgIC50aGVuKGFsbFJldmlld3MgPT4ge1xuXG4gICAgICAgICAgICAvLyBDcmVhdGUgZG9jIGZyYWdcbiAgICAgICAgICAgIGxldCByZXZpZXdEb2NGcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICAgICAgICAgICAgYWxsUmV2aWV3cy5mb3JFYWNoKHJldmlld0l0ZW0gPT4ge1xuXG4gICAgICAgICAgICAgICAgLy8gR2V0IHJldmlldyBIVE1MIGJ5IGNhbGxpbmcgcmV2aWV3QnVpbGRlcigpXG4gICAgICAgICAgICAgICAgbGV0IHNpbmdsZVJldmlldyA9IHJldmlld0hUTUwucmV2aWV3QnVpbGRlcihyZXZpZXdJdGVtKTsgLy8gVGFrZXMgcmV2aWV3Qm94IGZyb20gcmV2aWV3LmpzXG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgSFRNTCByZXN1bHRzIHRvIGRvYyBmcmFnXG4gICAgICAgICAgICAgICAgcmV2aWV3RG9jRnJhZ21lbnQuYXBwZW5kQ2hpbGQoc2luZ2xlUmV2aWV3KTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIC8vIEFkZCBkb2MgZnJhZyB0byByZXZpZXdTZWN0aW9uIGNyZWF0ZWQgaW4gcHJvZHVjdC5qc1xuICAgICAgICAgICAgcmV2aWV3U2VjdGlvbi5hcHBlbmRDaGlsZChyZXZpZXdEb2NGcmFnbWVudCk7XG5cbiAgICAgICAgICAgIC8vIHJldmlld1NlY3Rpb24gaXMgcGFzc2VkIGJhY2sgdG8gcHJvZHVjdC5qcyB2aWEgdGhlIGZ1bmN0aW9uXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZXZpZXdMaXN0OyJdfQ==
