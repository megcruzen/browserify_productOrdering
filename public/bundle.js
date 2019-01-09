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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL21haW4uanMiLCIuLi9zY3JpcHRzL25hdi5qcyIsIi4uL3NjcmlwdHMvcHJvZHVjdC5qcyIsIi4uL3NjcmlwdHMvcHJvZHVjdERhdGEuanMiLCIuLi9zY3JpcHRzL3Byb2R1Y3RMaXN0LmpzIiwiLi4vc2NyaXB0cy9yZXZpZXcuanMiLCIuLi9zY3JpcHRzL3Jldmlld0RhdGEuanMiLCIuLi9zY3JpcHRzL3Jldmlld0xpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOztBQUNBOzs7O0FBRUEsYUFBSSxTQUFKOztBQUNBLHFCQUFZLGVBQVo7Ozs7Ozs7OztBQ0pBLE1BQU0sR0FBRyxHQUFHO0FBQ1IsRUFBQSxTQUFTLEdBQUc7QUFDUixRQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixhQUF2QixDQUFuQjtBQUVBLFFBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEtBQXZCLENBQVg7QUFDQSxJQUFBLElBQUksQ0FBQyxZQUFMLENBQWtCLE9BQWxCLEVBQTJCLE1BQTNCO0FBQ0EsSUFBQSxJQUFJLENBQUMsU0FBTCxHQUFpQixrQ0FBakI7QUFFQSxRQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixLQUF2QixDQUFmO0FBQ0EsSUFBQSxRQUFRLENBQUMsWUFBVCxDQUFzQixPQUF0QixFQUErQixVQUEvQjtBQUNBLElBQUEsUUFBUSxDQUFDLFNBQVQsR0FBc0I7Ozs7a0JBQXRCO0FBTUEsSUFBQSxZQUFZLENBQUMsV0FBYixDQUF5QixJQUF6QjtBQUNBLElBQUEsWUFBWSxDQUFDLFdBQWIsQ0FBeUIsUUFBekI7QUFDSDs7QUFsQk8sQ0FBWjtlQXFCZSxHOzs7Ozs7Ozs7OztBQ3JCZjs7OztBQUVBLE1BQU0sV0FBVyxHQUFHO0FBQ2hCLEVBQUEsY0FBYyxDQUFDLFVBQUQsRUFBYTtBQUV2QjtBQUNB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QSxpQkFBaUIsQ0FBQyxXQUFsQixDQUE4QixZQUE5QjtBQUNILE9BUEQsRUFMZ0IsQ0FjaEI7O0FBQ0EsTUFBQSxhQUFhLENBQUMsV0FBZCxDQUEwQixpQkFBMUIsRUFmZ0IsQ0FpQmhCO0FBQ0gsS0FuQkQ7QUFvQkg7O0FBeEJjLENBQW5CO2VBMkJlLFUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgbmF2IGZyb20gXCIuL25hdlwiXG5pbXBvcnQgcHJvZHVjdExpc3QgZnJvbSBcIi4vcHJvZHVjdExpc3RcIlxuXG5uYXYuY3JlYXRlTmF2KCk7XG5wcm9kdWN0TGlzdC5kaXNwbGF5UHJvZHVjdHMoKTtcblxuIiwiY29uc3QgbmF2ID0ge1xuICAgIGNyZWF0ZU5hdigpIHtcbiAgICAgICAgbGV0IG5hdkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2aWdhdGlvblwiKTtcblxuICAgICAgICBsZXQgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxvZ28uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsb2dvXCIpO1xuICAgICAgICBsb2dvLmlubmVySFRNTCA9IFwiPGEgaHJlZj0nIyc+QmV0c3kncyBCb3V0aXF1ZTwvYT5cIjtcblxuICAgICAgICBsZXQgbmF2TGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBuYXZMaW5rcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5hdmxpbmtzXCIpO1xuICAgICAgICBuYXZMaW5rcy5pbm5lckhUTUwgPSBgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkNhdGVnb3JpZXM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5PcmRlcnM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Mb2cgT3V0PC9hPjwvbGk+XG4gICAgICAgICAgICA8L3VsPmA7XG5cbiAgICAgICAgbmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ28pO1xuICAgICAgICBuYXZDb250YWluZXIuYXBwZW5kQ2hpbGQobmF2TGlua3MpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmF2OyIsImltcG9ydCByZXZpZXdMaXN0IGZyb20gXCIuL3Jldmlld0xpc3RcIlxuXG5jb25zdCBwcm9kdWN0SFRNTCA9IHtcbiAgICBwcm9kdWN0QnVpbGRlcihwcm9kdWN0T2JqKSB7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGVudGlyZSBwcm9kdWN0IGFydGljbGVcbiAgICAgICAgbGV0IHByb2R1Y3RBcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XG4gICAgICAgIHByb2R1Y3RBcnRpY2xlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvZHVjdF9ib3hcIik7XG4gICAgICAgIC8vIHByb2R1Y3RBcnRpY2xlLnNldEF0dHJpYnV0ZShcImlkXCIsIHByb2R1Y3RPYmouaWQpOyAgICAgICAvLyBzZXQgRE9NIElEID0gcHJvZHVjdE9iai5pZFxuXG4gICAgICAgIC8vIENyZWF0ZSBtYWluIHByb2R1Y3QgaW5mbyAocGhvdG8gYW5kIGRldGFpbHMpXG4gICAgICAgIGxldCBtYWluUHJvZHVjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICAgICAgbWFpblByb2R1Y3RJbmZvLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW5mb19ib3hcIik7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHBob3RvIHNlY3Rpb25cbiAgICAgICAgbGV0IHByb2R1Y3RQaG90b0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2R1Y3RQaG90b0JveC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImltYWdlX2JveFwiKTtcbiAgICAgICAgbGV0IHByb2R1Y3RQaG90byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIHByb2R1Y3RQaG90by5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2R1Y3RfaW1hZ2VcIik7XG4gICAgICAgIHByb2R1Y3RQaG90by5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgcHJvZHVjdE9iai5pbWFnZSk7XG4gICAgICAgIHByb2R1Y3RQaG90b0JveC5hcHBlbmRDaGlsZChwcm9kdWN0UGhvdG8pO1xuXG4gICAgICAgIGxldCBzcGFjZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzcGFjZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzcGFjZXJcIik7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHByb2R1Y3QgZGV0YWlscyBib3hcbiAgICAgICAgbGV0IHByb2R1Y3RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcHJvZHVjdEluZm8uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9kdWN0X2RlZXRzXCIpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBwcm9kdWN0IGRldGFpbHMgdG8gYWRkIHRvIGRldGFpbHMgYm94XG4gICAgICAgIGxldCBwcm9kdWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgICAgcHJvZHVjdE5hbWUudGV4dENvbnRlbnQgPSBwcm9kdWN0T2JqLnRpdGxlO1xuICAgICAgICBsZXQgcHJvZHVjdERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgcHJvZHVjdERlc2Muc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9kdWN0X2Rlc2NcIik7XG4gICAgICAgIHByb2R1Y3REZXNjLnRleHRDb250ZW50ID0gcHJvZHVjdE9iai5kZXNjcmlwdGlvbjtcbiAgICAgICAgbGV0IHByb2R1Y3RQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBwcm9kdWN0UHJpY2Uuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9kdWN0X3ByaWNlXCIpO1xuICAgICAgICBwcm9kdWN0UHJpY2UuaW5uZXJIVE1MID0gYCQke3Byb2R1Y3RPYmoucHJpY2V9YDtcbiAgICAgICAgbGV0IHByb2R1Y3RRdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgcHJvZHVjdFF0eS5pbm5lckhUTUwgPSBgSW4gc3RvY2s6ICR7cHJvZHVjdE9iai5xdWFudGl0eX1gO1xuXG4gICAgICAgIC8vIEFkZCBwcm9kdWN0IGRlZXRzIHRvIGRldGFpbHMgYm94XG4gICAgICAgIHByb2R1Y3RJbmZvLmFwcGVuZENoaWxkKHByb2R1Y3ROYW1lKTtcbiAgICAgICAgcHJvZHVjdEluZm8uYXBwZW5kQ2hpbGQocHJvZHVjdERlc2MpO1xuICAgICAgICBwcm9kdWN0SW5mby5hcHBlbmRDaGlsZChwcm9kdWN0UHJpY2UpO1xuICAgICAgICBwcm9kdWN0SW5mby5hcHBlbmRDaGlsZChwcm9kdWN0UXR5KTtcblxuICAgICAgICAvLyBBZGQgaW1hZ2UgYm94LCBzcGFjZXIsIGFuZCBwcm9kdWN0IGRldGFpbHMgdG8gbWFpbiBpbmZvIGJveFxuICAgICAgICBtYWluUHJvZHVjdEluZm8uYXBwZW5kQ2hpbGQocHJvZHVjdFBob3RvQm94KTtcbiAgICAgICAgbWFpblByb2R1Y3RJbmZvLmFwcGVuZENoaWxkKHNwYWNlcik7XG4gICAgICAgIG1haW5Qcm9kdWN0SW5mby5hcHBlbmRDaGlsZChwcm9kdWN0SW5mbyk7XG5cbiAgICAgICAgLy8gQWRkIGluZm9fYm94IHRvIHRoZSBwcm9kdWN0X2JveFxuICAgICAgICBwcm9kdWN0QXJ0aWNsZS5hcHBlbmRDaGlsZChtYWluUHJvZHVjdEluZm8pO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicHJvZHVjdCBJRDpcIiwgcHJvZHVjdE9iai5pZCk7XG5cbiAgICAgICAgLyoqKioqKiogUkVWSUVXUyAqKioqKi9cblxuICAgICAgICAvLyBDcmVhdGUgcmV2aWV3cyBzZWN0aW9uXG4gICAgICAgIGxldCByZXZpZXdTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgICAgIHJldmlld1NlY3Rpb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJyZXZpZXdfc2VjdGlvblwiKTtcbiAgICAgICAgbGV0IHJldmlld0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgICAgcmV2aWV3SGVhZGVyLnRleHRDb250ZW50ID0gXCJSZXZpZXdzXCI7XG4gICAgICAgIHJldmlld1NlY3Rpb24uYXBwZW5kQ2hpbGQocmV2aWV3SGVhZGVyKTtcblxuICAgICAgICAvLyBBcHBlbmQgcmV2aWV3cyBzZWN0aW9uIHRvIERPTSwgaW5zaWRlIHByb2R1Y3QgYXJ0aWNsZVxuICAgICAgICBwcm9kdWN0QXJ0aWNsZS5hcHBlbmRDaGlsZChyZXZpZXdTZWN0aW9uKTtcblxuICAgICAgICAvLyBHZXQgcmV2aWV3IGxpc3QgZnJvbSByZXZpZXdMaXN0LmpzXG4gICAgICAgIHJldmlld0xpc3QuZGlzcGxheVJldmlld3MocmV2aWV3U2VjdGlvbiwgcHJvZHVjdE9iai5pZCk7IC8vIFBhc3MgcmV2aWV3U2VjdGlvbiBzbyBpdCBnZXRzIGZpbGxlZCBpbnNpZGUgZGlzcGxheVJldmlld3MoKSBhbmQgaXMgcGFzc2VkIGJhY2suXG5cbiAgICAgICAgcmV0dXJuIHByb2R1Y3RBcnRpY2xlOyAvLyBzZW5kIHRvIHByb2R1Y3RMaXN0XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0SFRNTDsiLCJjb25zdCBwcm9kdWN0RGF0YSA9IHtcbiAgICBnZXRQcm9kdWN0cygpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L3Byb2R1Y3RzXCIpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLy8gVGhlIHNlY29uZCAudGhlbiB3aWxsIGdvIGluc2lkZSBwcm9kdWN0TGlzdFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdERhdGE7IiwiaW1wb3J0IHByb2R1Y3REYXRhIGZyb20gXCIuL3Byb2R1Y3REYXRhXCJcbmltcG9ydCBwcm9kdWN0SFRNTCBmcm9tIFwiLi9wcm9kdWN0XCJcblxuLy8gR2V0IGFsbCBwcm9kdWN0cyBmcm9tIHByb2R1Y3REYXRhIGFuZCB0aGVuIHVzZSBmb3JFYWNoIHRvIHJ1biBwcm9kdWN0SFRNTC5wcm9kdWN0QnVpbGRlcigpXG5cbmNvbnN0IHByb2R1Y3RMaXN0ID0ge1xuICAgIGRpc3BsYXlQcm9kdWN0cygpIHtcbiAgICAgICAgbGV0IHByb2R1Y3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2R1Y3RzXCIpO1xuICAgICAgICBwcm9kdWN0Q29udGFpbmVyLmlubmVySFRNTCA9IFwiPGgyPlByb2R1Y3RzPC9oMj5cIjtcblxuICAgICAgICAvLyBDcmVhdGUgZG9jIGZyYWcgdG8gaG9sZCBlYWNoIHByb2R1Y3RcbiAgICAgICAgbGV0IHByb2R1Y3REb2NGcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gICAgICAgIC8vIGdldCBhbGwgcHJvZHVjdHMgZnJvbSBwcm9kdWN0RGF0YVxuICAgICAgICBwcm9kdWN0RGF0YS5nZXRQcm9kdWN0cygpXG4gICAgICAgIC50aGVuKGFsbFByb2R1Y3RzID0+IHtcbiAgICAgICAgICAgIGxldCBzaW5nbGVQcm9kdWN0O1xuXG4gICAgICAgICAgICAvLyBmb3JFYWNoIHByb2R1Y3QsIGNhbGwgcHJvZHVjdEJ1aWxkZXIsIGFuZCBhcHBlbmQgZWFjaCBwcm9kdWN0IHRvIHRoZSBkb2MgZnJhZ1xuICAgICAgICAgICAgYWxsUHJvZHVjdHMuZm9yRWFjaChwcm9kdWN0SXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgc2luZ2xlUHJvZHVjdCA9IHByb2R1Y3RIVE1MLnByb2R1Y3RCdWlsZGVyKHByb2R1Y3RJdGVtKTsgLy8gSW1wb3J0cyBwcm9kdWN0QXJ0aWNsZSBmcm9tIHByb2R1Y3QuanNcbiAgICAgICAgICAgICAgICBwcm9kdWN0RG9jRnJhZy5hcHBlbmRDaGlsZChzaW5nbGVQcm9kdWN0KTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIC8vIEFwcGVuZCBkb2MgZnJhZyB0byBwcm9kdWN0Q29udGFpbmVyXG4gICAgICAgICAgICBwcm9kdWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2R1Y3REb2NGcmFnKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0TGlzdDtcbiIsImNvbnN0IHJldmlld0hUTUwgPSB7XG4gICAgcmV2aWV3QnVpbGRlcihyZXZpZXdPYmopIHtcbiAgICAgICAgbGV0IHJldmlld0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHJldmlld0JveC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInJldmlld19ib3hcIik7XG4gICAgICAgIHJldmlld0JveC5pbm5lckhUTUwgPSBgPHAgY2xhc3M9XCJyZXZpZXdfdGV4dFwiPjxzcGFuIGNsYXNzPVwicmV2aWV3X2F1dGhvclwiPiR7cmV2aWV3T2JqLmF1dGhvcn0gd3JvdGU6PC9zcGFuPjxiciAvPiR7cmV2aWV3T2JqLnJldmlld1RleHR9PC9wPmBcblxuICAgICAgICByZXR1cm4gcmV2aWV3Qm94OyAgICAgIC8vIFVzZWQgaW5zaWRlIHJldmlld0xpc3QuanNcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJldmlld0hUTUw7XG4iLCJjb25zdCByZXZpZXdEYXRhID0ge1xuICAgIGdldFJldmlld3MocHJvZHVjdElEKSB7XG4gICAgICAgIC8vIHByb2R1Y3RJRCBpcyBwYXNzZWQgZnJvbSByZXZpZXdMaXN0XG4gICAgICAgIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDg4L3Jldmlld3M/cHJvZHVjdElkPSR7cHJvZHVjdElEfWApXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLy8gVGhlIHNlY29uZCAudGhlbiB3aWxsIGdvIGluc2lkZSByZXZpZXdMaXN0XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZXZpZXdEYXRhOyIsImltcG9ydCByZXZpZXdEYXRhIGZyb20gXCIuL3Jldmlld0RhdGFcIlxuaW1wb3J0IHJldmlld0hUTUwgZnJvbSBcIi4vcmV2aWV3XCJcblxuLy8gR2V0IGFsbCByZXZpZXdzIGZyb20gcmV2aWV3RGF0YSBhbmQgdGhlbiB1c2UgZm9yRWFjaCB0byBydW4gcmV2aWV3SFRNTC5yZXZpZXdCdWlsZGVyKClcblxuY29uc3QgcmV2aWV3TGlzdCA9IHtcbiAgICBkaXNwbGF5UmV2aWV3cyhyZXZpZXdTZWN0aW9uLCBwcm9kdWN0SWQpIHtcbiAgICAgICAgLy8gcGFzc2luZyByZXZpZXdTZWN0aW9uIGZyb20gcHJvZHVjdC5qcyAmIGZpbGxpbmcgaXQgd2l0aCBpbmZvXG4gICAgICAgIC8vIHBhc3NpbmcgcHJvZHVjdElkIGZyb20gcHJvZHVjdC5qcyBzbyBpdCBnZXQgaW5zZXJ0ZWQgaW50byBmZXRjaFxuICAgICAgICByZXZpZXdEYXRhLmdldFJldmlld3MocHJvZHVjdElkKVxuICAgICAgICAudGhlbihhbGxSZXZpZXdzID0+IHtcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIGRvYyBmcmFnXG4gICAgICAgICAgICBsZXQgcmV2aWV3RG9jRnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cbiAgICAgICAgICAgIGFsbFJldmlld3MuZm9yRWFjaChyZXZpZXdJdGVtID0+IHtcblxuICAgICAgICAgICAgICAgIC8vIEdldCByZXZpZXcgSFRNTCBieSBjYWxsaW5nIHJldmlld0J1aWxkZXIoKVxuICAgICAgICAgICAgICAgIGxldCBzaW5nbGVSZXZpZXcgPSByZXZpZXdIVE1MLnJldmlld0J1aWxkZXIocmV2aWV3SXRlbSk7IC8vIFRha2VzIHJldmlld0JveCBmcm9tIHJldmlldy5qc1xuXG4gICAgICAgICAgICAgICAgLy8gQWRkIEhUTUwgcmVzdWx0cyB0byBkb2MgZnJhZ1xuICAgICAgICAgICAgICAgIHJldmlld0RvY0ZyYWdtZW50LmFwcGVuZENoaWxkKHNpbmdsZVJldmlldyk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAvLyBBZGQgZG9jIGZyYWcgdG8gcmV2aWV3U2VjdGlvbiBjcmVhdGVkIGluIHByb2R1Y3QuanNcbiAgICAgICAgICAgIHJldmlld1NlY3Rpb24uYXBwZW5kQ2hpbGQocmV2aWV3RG9jRnJhZ21lbnQpO1xuXG4gICAgICAgICAgICAvLyByZXZpZXdTZWN0aW9uIGlzIHBhc3NlZCBiYWNrIHRvIHByb2R1Y3QuanMgdmlhIHRoZSBmdW5jdGlvblxuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmV2aWV3TGlzdDsiXX0=
