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

    productArticle.appendChild(mainProductInfo);
    console.log("product ID:", productObj.id);
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
    return fetch("http://localhost:8088/products") // will need to change to {productObj.id}
    .then(response => response.json()); // The second .then will go inside productList
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
      let singleProduct; // forEach product, call productBuilder

      allProducts.forEach(productItem => {
        singleProduct = _product.default.productBuilder(productItem); // Imports productArticle from product.js
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
  getReviews(productID) {
    console.log(productID);
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
  // setFetch(productItem.id) {
  //     reviewData.getReviews()
  // },
  displayReviews(reviewSection, productId) {
    // passing reviewSection from product.js & filling it with info
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL21haW4uanMiLCIuLi9zY3JpcHRzL25hdi5qcyIsIi4uL3NjcmlwdHMvcHJvZHVjdC5qcyIsIi4uL3NjcmlwdHMvcHJvZHVjdERhdGEuanMiLCIuLi9zY3JpcHRzL3Byb2R1Y3RMaXN0LmpzIiwiLi4vc2NyaXB0cy9yZXZpZXcuanMiLCIuLi9zY3JpcHRzL3Jldmlld0RhdGEuanMiLCIuLi9zY3JpcHRzL3Jldmlld0xpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOztBQUNBOzs7O0FBRUEsYUFBSSxTQUFKOztBQUVBLHFCQUFZLGVBQVo7Ozs7Ozs7OztBQ0xBLE1BQU0sR0FBRyxHQUFHO0FBQ1IsRUFBQSxTQUFTLEdBQUc7QUFDUixRQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixhQUF2QixDQUFuQjtBQUVBLFFBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEtBQXZCLENBQVg7QUFDQSxJQUFBLElBQUksQ0FBQyxZQUFMLENBQWtCLE9BQWxCLEVBQTJCLE1BQTNCO0FBQ0EsSUFBQSxJQUFJLENBQUMsU0FBTCxHQUFpQixrQ0FBakI7QUFFQSxRQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixLQUF2QixDQUFmO0FBQ0EsSUFBQSxRQUFRLENBQUMsWUFBVCxDQUFzQixPQUF0QixFQUErQixVQUEvQjtBQUNBLElBQUEsUUFBUSxDQUFDLFNBQVQsR0FBc0I7Ozs7a0JBQXRCO0FBTUEsSUFBQSxZQUFZLENBQUMsV0FBYixDQUF5QixJQUF6QjtBQUNBLElBQUEsWUFBWSxDQUFDLFdBQWIsQ0FBeUIsUUFBekI7QUFFSDs7QUFuQk8sQ0FBWjtlQXNCZSxHOzs7Ozs7Ozs7OztBQ3RCZjs7OztBQUVBLE1BQU0sV0FBVyxHQUFHO0FBQ2hCLEVBQUEsY0FBYyxDQUFDLFVBQUQsRUFBYTtBQUV2QjtBQUNB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QUFzQixTQUF0QixFQUNDLElBREQsQ0FDTSxVQUFVLElBQUk7QUFFaEI7QUFDQSxVQUFJLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxzQkFBVCxFQUF4QjtBQUVBLE1BQUEsVUFBVSxDQUFDLE9BQVgsQ0FBbUIsVUFBVSxJQUFJO0FBRTdCO0FBQ0EsWUFBSSxZQUFZLEdBQUcsZ0JBQVcsYUFBWCxDQUF5QixVQUF6QixDQUFuQixDQUg2QixDQUc0QjtBQUV6RDs7O0FBQ0EsUUFBQSxpQkFBaUIsQ0FBQyxXQUFsQixDQUE4QixZQUE5QjtBQUNILE9BUEQsRUFMZ0IsQ0FjaEI7O0FBQ0EsTUFBQSxhQUFhLENBQUMsV0FBZCxDQUEwQixpQkFBMUIsRUFmZ0IsQ0FpQmhCO0FBQ0gsS0FuQkQ7QUFvQkg7O0FBekJjLENBQW5CO2VBNEJlLFUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgbmF2IGZyb20gXCIuL25hdlwiXG5pbXBvcnQgcHJvZHVjdExpc3QgZnJvbSBcIi4vcHJvZHVjdExpc3RcIlxuXG5uYXYuY3JlYXRlTmF2KCk7XG5cbnByb2R1Y3RMaXN0LmRpc3BsYXlQcm9kdWN0cygpO1xuXG4iLCJjb25zdCBuYXYgPSB7XG4gICAgY3JlYXRlTmF2KCkge1xuICAgICAgICBsZXQgbmF2Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYXZpZ2F0aW9uXCIpO1xuXG4gICAgICAgIGxldCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbG9nby5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxvZ29cIik7XG4gICAgICAgIGxvZ28uaW5uZXJIVE1MID0gXCI8YSBocmVmPScjJz5CZXRzeSdzIEJvdXRpcXVlPC9hPlwiO1xuXG4gICAgICAgIGxldCBuYXZMaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG5hdkxpbmtzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibmF2bGlua3NcIik7XG4gICAgICAgIG5hdkxpbmtzLmlubmVySFRNTCA9IGA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+Q2F0ZWdvcmllczwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPk9yZGVyczwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkxvZyBPdXQ8L2E+PC9saT5cbiAgICAgICAgICAgIDwvdWw+YDtcblxuICAgICAgICBuYXZDb250YWluZXIuYXBwZW5kQ2hpbGQobG9nbyk7XG4gICAgICAgIG5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZMaW5rcyk7XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5hdjsiLCJpbXBvcnQgcmV2aWV3TGlzdCBmcm9tIFwiLi9yZXZpZXdMaXN0XCJcblxuY29uc3QgcHJvZHVjdEhUTUwgPSB7XG4gICAgcHJvZHVjdEJ1aWxkZXIocHJvZHVjdE9iaikge1xuXG4gICAgICAgIC8vIENyZWF0ZSBlbnRpcmUgcHJvZHVjdCBhcnRpY2xlXG4gICAgICAgIGxldCBwcm9kdWN0QXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpO1xuICAgICAgICBwcm9kdWN0QXJ0aWNsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2R1Y3RfYm94XCIpO1xuICAgICAgICAvLyBwcm9kdWN0QXJ0aWNsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBwcm9kdWN0T2JqLmlkKTsgICAgICAgLy8gc2V0IERPTSBJRCA9IHByb2R1Y3RPYmouaWRcblxuICAgICAgICAvLyBDcmVhdGUgbWFpbiBwcm9kdWN0IGluZm8gKHBob3RvIGFuZCBkZXRhaWxzKVxuICAgICAgICBsZXQgbWFpblByb2R1Y3RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgICAgIG1haW5Qcm9kdWN0SW5mby5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImluZm9fYm94XCIpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBwaG90byBzZWN0aW9uXG4gICAgICAgIGxldCBwcm9kdWN0UGhvdG9Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcm9kdWN0UGhvdG9Cb3guc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpbWFnZV9ib3hcIik7XG4gICAgICAgIGxldCBwcm9kdWN0UGhvdG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBwcm9kdWN0UGhvdG8uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9kdWN0X2ltYWdlXCIpO1xuICAgICAgICBwcm9kdWN0UGhvdG8uc2V0QXR0cmlidXRlKFwic3JjXCIsIHByb2R1Y3RPYmouaW1hZ2UpO1xuICAgICAgICBwcm9kdWN0UGhvdG9Cb3guYXBwZW5kQ2hpbGQocHJvZHVjdFBob3RvKTtcblxuICAgICAgICBsZXQgc3BhY2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc3BhY2VyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic3BhY2VyXCIpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBwcm9kdWN0IGRldGFpbHMgYm94XG4gICAgICAgIGxldCBwcm9kdWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2R1Y3RJbmZvLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvZHVjdF9kZWV0c1wiKTtcblxuICAgICAgICAvLyBDcmVhdGUgcHJvZHVjdCBkZXRhaWxzIHRvIGFkZCB0byBkZXRhaWxzIGJveFxuICAgICAgICBsZXQgcHJvZHVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIHByb2R1Y3ROYW1lLnRleHRDb250ZW50ID0gcHJvZHVjdE9iai50aXRsZTtcbiAgICAgICAgbGV0IHByb2R1Y3REZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHByb2R1Y3REZXNjLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvZHVjdF9kZXNjXCIpO1xuICAgICAgICBwcm9kdWN0RGVzYy50ZXh0Q29udGVudCA9IHByb2R1Y3RPYmouZGVzY3JpcHRpb247XG4gICAgICAgIGxldCBwcm9kdWN0UHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgcHJvZHVjdFByaWNlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvZHVjdF9wcmljZVwiKTtcbiAgICAgICAgcHJvZHVjdFByaWNlLmlubmVySFRNTCA9IGAkJHtwcm9kdWN0T2JqLnByaWNlfWA7XG4gICAgICAgIGxldCBwcm9kdWN0UXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHByb2R1Y3RRdHkuaW5uZXJIVE1MID0gYEluIHN0b2NrOiAke3Byb2R1Y3RPYmoucXVhbnRpdHl9YDtcblxuICAgICAgICAvLyBBZGQgcHJvZHVjdCBkZWV0cyB0byBkZXRhaWxzIGJveFxuICAgICAgICBwcm9kdWN0SW5mby5hcHBlbmRDaGlsZChwcm9kdWN0TmFtZSk7XG4gICAgICAgIHByb2R1Y3RJbmZvLmFwcGVuZENoaWxkKHByb2R1Y3REZXNjKTtcbiAgICAgICAgcHJvZHVjdEluZm8uYXBwZW5kQ2hpbGQocHJvZHVjdFByaWNlKTtcbiAgICAgICAgcHJvZHVjdEluZm8uYXBwZW5kQ2hpbGQocHJvZHVjdFF0eSk7XG5cbiAgICAgICAgLy8gQWRkIGltYWdlIGJveCwgc3BhY2VyLCBhbmQgcHJvZHVjdCBkZXRhaWxzIHRvIG1haW4gaW5mbyBib3hcbiAgICAgICAgbWFpblByb2R1Y3RJbmZvLmFwcGVuZENoaWxkKHByb2R1Y3RQaG90b0JveCk7XG4gICAgICAgIG1haW5Qcm9kdWN0SW5mby5hcHBlbmRDaGlsZChzcGFjZXIpO1xuICAgICAgICBtYWluUHJvZHVjdEluZm8uYXBwZW5kQ2hpbGQocHJvZHVjdEluZm8pO1xuXG4gICAgICAgIC8vIEFkZCBpbmZvX2JveCB0byB0aGUgcHJvZHVjdF9ib3hcbiAgICAgICAgcHJvZHVjdEFydGljbGUuYXBwZW5kQ2hpbGQobWFpblByb2R1Y3RJbmZvKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcInByb2R1Y3QgSUQ6XCIsIHByb2R1Y3RPYmouaWQpO1xuXG4gICAgICAgIC8qKioqKioqIFJFVklFV1MgKioqKiovXG5cbiAgICAgICAgLy8gQ3JlYXRlIHJldmlld3Mgc2VjdGlvblxuICAgICAgICBsZXQgcmV2aWV3U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgICAgICByZXZpZXdTZWN0aW9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicmV2aWV3X3NlY3Rpb25cIik7XG4gICAgICAgIGxldCByZXZpZXdIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIHJldmlld0hlYWRlci50ZXh0Q29udGVudCA9IFwiUmV2aWV3c1wiO1xuICAgICAgICByZXZpZXdTZWN0aW9uLmFwcGVuZENoaWxkKHJldmlld0hlYWRlcik7XG5cbiAgICAgICAgLy8gQXBwZW5kIHJldmlld3Mgc2VjdGlvbiB0byBET00sIGluc2lkZSBwcm9kdWN0IGFydGljbGVcbiAgICAgICAgcHJvZHVjdEFydGljbGUuYXBwZW5kQ2hpbGQocmV2aWV3U2VjdGlvbik7XG5cbiAgICAgICAgLy8gR2V0IHJldmlldyBsaXN0IGZyb20gcmV2aWV3TGlzdC5qc1xuICAgICAgICByZXZpZXdMaXN0LmRpc3BsYXlSZXZpZXdzKHJldmlld1NlY3Rpb24sIHByb2R1Y3RPYmouaWQpOyAvLyBQYXNzIHJldmlld1NlY3Rpb24gc28gaXQgZ2V0cyBmaWxsZWQgaW5zaWRlIGRpc3BsYXlSZXZpZXdzKCkgYW5kIGlzIHBhc3NlZCBiYWNrLlxuXG4gICAgICAgIHJldHVybiBwcm9kdWN0QXJ0aWNsZTsgLy8gc2VuZCB0byBwcm9kdWN0TGlzdFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdEhUTUw7IiwiY29uc3QgcHJvZHVjdERhdGEgPSB7XG4gICAgZ2V0UHJvZHVjdHMoKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9wcm9kdWN0c1wiKSAvLyB3aWxsIG5lZWQgdG8gY2hhbmdlIHRvIHtwcm9kdWN0T2JqLmlkfVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC8vIFRoZSBzZWNvbmQgLnRoZW4gd2lsbCBnbyBpbnNpZGUgcHJvZHVjdExpc3RcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3REYXRhOyIsImltcG9ydCBwcm9kdWN0RGF0YSBmcm9tIFwiLi9wcm9kdWN0RGF0YVwiXG5pbXBvcnQgcHJvZHVjdEhUTUwgZnJvbSBcIi4vcHJvZHVjdFwiXG5cbi8vIEdldCBhbGwgcHJvZHVjdHMgZnJvbSBwcm9kdWN0RGF0YSBhbmQgdGhlbiB1c2UgZm9yRWFjaCB0byBydW4gcHJvZHVjdEhUTUwucHJvZHVjdEJ1aWxkZXIoKVxuXG5jb25zdCBwcm9kdWN0TGlzdCA9IHtcbiAgICBkaXNwbGF5UHJvZHVjdHMoKSB7XG4gICAgICAgIGxldCBwcm9kdWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9kdWN0c1wiKTtcbiAgICAgICAgcHJvZHVjdENvbnRhaW5lci5pbm5lckhUTUwgPSBcIjxoMj5Qcm9kdWN0czwvaDI+XCI7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGRvYyBmcmFnIHRvIGhvbGQgZWFjaCBwcm9kdWN0XG4gICAgICAgIGxldCBwcm9kdWN0RG9jRnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICAgICAgICAvLyBnZXQgYWxsIHByb2R1Y3RzIGZyb20gcHJvZHVjdERhdGFcbiAgICAgICAgcHJvZHVjdERhdGEuZ2V0UHJvZHVjdHMoKVxuICAgICAgICAudGhlbihhbGxQcm9kdWN0cyA9PiB7XG4gICAgICAgICAgICBsZXQgc2luZ2xlUHJvZHVjdDtcblxuICAgICAgICAgICAgLy8gZm9yRWFjaCBwcm9kdWN0LCBjYWxsIHByb2R1Y3RCdWlsZGVyXG4gICAgICAgICAgICBhbGxQcm9kdWN0cy5mb3JFYWNoKHByb2R1Y3RJdGVtID0+IHtcbiAgICAgICAgICAgICAgICBzaW5nbGVQcm9kdWN0ID0gcHJvZHVjdEhUTUwucHJvZHVjdEJ1aWxkZXIocHJvZHVjdEl0ZW0pOyAvLyBJbXBvcnRzIHByb2R1Y3RBcnRpY2xlIGZyb20gcHJvZHVjdC5qc1xuXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJwcm9kdWN0IElEOlwiLCBwcm9kdWN0SXRlbS5pZCk7XG4gICAgICAgICAgICAgICAgLy8gcmV2aWV3TGlzdC5zZXRGZXRjaChwcm9kdWN0SXRlbS5pZCk7XG5cbiAgICAgICAgICAgICAgICAvLyBjYWxsIHJldmlld0xpc3RcbiAgICAgICAgICAgICAgICAvLyBmZXRjaCB3aWxsIGhhcHBlbiBpbnNpZGUgcmV2aWV3TGlzdCB2aWEgcmV2aWV3RGF0YSAtIG5lZWQgdG8gcGFzcyAncHJvZHVjdEl0ZW0uaWQnIHRocm91Z2hcblxuICAgICAgICAgICAgICAgIC8vIHlvdSB3aWxsIG5lZWQgdG8gbG9vcCBvdmVyIHRoZSByZXZpZXdzIGNvbWluZyBiYWNrIGFuZCBidWlsZCBvdXQgdGhlIGh0bWwganVzdCBsaWtlIHlvdSBhcmUgZG9pbmcgd2l0aCBwcm9kdWN0c1xuICAgICAgICAgICAgICAgIC8vIHlvdSBjYW4gcHV0IHRoZSBhcGkgY2FsbCB0byBnZXQgcmV2aWV3cyBhbmQgdGhhdCBsb29wIHRoYXQgYnVpbGRzIG91dCB0aGUgcmV2aWV3cyBpbnNpZGUgcmV2aWV3TGlzdCBhbmQgdGhlbiBqdXN0IGNhbGwgcmV2aWV3TGlzdCBmcm9tIHByb2R1Y3RMaXN0IHNvIGl0cyBtb3JlIG1vZHVsYXJpemVkXG5cbiAgICAgICAgICAgICAgICAvLyByZXZpZXdEYXRhLmdldFJldmlld3MoKVxuICAgICAgICAgICAgICAgIC8vIC50aGVuKGFsbFJldmlld3MgPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhhbGxSZXZpZXdzKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgYWxsUmV2aWV3cy5mb3JFYWNoKHJldmlld0l0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJwcm9kdWN0IElEOlwiLCBwcm9kdWN0SXRlbS5pZCk7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICByZXZpZXdEYXRhLmdldFJldmlld3MocHJvZHVjdEl0ZW0uaWQpO1xuICAgICAgICAgICAgICAgIC8vICAgICB9KVxuICAgICAgICAgICAgICAgIC8vIH0pXG5cbiAgICAgICAgICAgICAgICBwcm9kdWN0RG9jRnJhZy5hcHBlbmRDaGlsZChzaW5nbGVQcm9kdWN0KTtcblxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgLy8gQXBwZW5kIGRvYyBmcmFnIHRvIHByb2R1Y3RDb250YWluZXIgKHdoaWNoIGFscmVhZHkgZXhpc3RzIGluIGluZGV4Lmh0bWwpXG4gICAgICAgICAgICBwcm9kdWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2R1Y3REb2NGcmFnKTtcblxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3RMaXN0O1xuIiwiY29uc3QgcmV2aWV3SFRNTCA9IHtcbiAgICByZXZpZXdCdWlsZGVyKHJldmlld09iaikge1xuICAgICAgICBsZXQgcmV2aWV3Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcmV2aWV3Qm94LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicmV2aWV3X2JveFwiKTtcblxuICAgICAgICByZXZpZXdCb3guaW5uZXJIVE1MID0gYDxwIGNsYXNzPVwicmV2aWV3X3RleHRcIj48c3BhbiBjbGFzcz1cInJldmlld19hdXRob3JcIj4ke3Jldmlld09iai5hdXRob3J9IHdyb3RlOjwvc3Bhbj48YnIgLz4ke3Jldmlld09iai5yZXZpZXdUZXh0fTwvcD5gXG5cbiAgICAgICAgcmV0dXJuIHJldmlld0JveDsgICAgICAvLyBVc2VkIGluc2lkZSByZXZpZXdMaXN0LmpzXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZXZpZXdIVE1MO1xuXG5cblxuLy8gbGV0IHJldmlld0F1dGhvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuLy8gcmV2aWV3QXV0aG9yLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicmV2aWV3X2F1dGhvclwiKTtcbi8vIHJldmlld0F1dGhvci50ZXh0Q29udGVudCA9IHJldmlld09iai5hdXRob3I7XG5cbi8vIGxldCByZXZpZXdDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4vLyByZXZpZXdDb250ZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicmV2aWV3X3RleHRcIik7XG4vLyByZXZpZXdDb250ZW50LnRleHRDb250ZW50ID0gcmV2aWV3T2JqLnJldmlld1RleHQ7XG5cbi8vIHJldmlld0JveC5hcHBlbmRDaGlsZChyZXZpZXdBdXRob3IpO1xuLy8gcmV2aWV3Qm94LmFwcGVuZENoaWxkKHJldmlld0NvbnRlbnQpOyIsImNvbnN0IHJldmlld0RhdGEgPSB7XG4gICAgZ2V0UmV2aWV3cyhwcm9kdWN0SUQpIHtcblxuICAgICAgICBjb25zb2xlLmxvZyhwcm9kdWN0SUQpO1xuXG4gICAgICAgIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDg4L3Jldmlld3M/cHJvZHVjdElkPSR7cHJvZHVjdElEfWApXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLy8gVGhlIHNlY29uZCAudGhlbiB3aWxsIGdvIGluc2lkZSByZXZpZXdMaXN0XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZXZpZXdEYXRhOyIsImltcG9ydCByZXZpZXdEYXRhIGZyb20gXCIuL3Jldmlld0RhdGFcIlxuaW1wb3J0IHJldmlld0hUTUwgZnJvbSBcIi4vcmV2aWV3XCJcblxuLy8gR2V0IGFsbCByZXZpZXdzIGZyb20gcmV2aWV3RGF0YSBhbmQgdGhlbiB1c2UgZm9yRWFjaCB0byBydW4gcmV2aWV3SFRNTC5yZXZpZXdCdWlsZGVyKClcblxuY29uc3QgcmV2aWV3TGlzdCA9IHtcbiAgICAvLyBzZXRGZXRjaChwcm9kdWN0SXRlbS5pZCkge1xuICAgIC8vICAgICByZXZpZXdEYXRhLmdldFJldmlld3MoKVxuICAgIC8vIH0sXG4gICAgZGlzcGxheVJldmlld3MocmV2aWV3U2VjdGlvbiwgcHJvZHVjdElkKSB7ICAgICAgICAgLy8gcGFzc2luZyByZXZpZXdTZWN0aW9uIGZyb20gcHJvZHVjdC5qcyAmIGZpbGxpbmcgaXQgd2l0aCBpbmZvXG4gICAgICAgIHJldmlld0RhdGEuZ2V0UmV2aWV3cyhwcm9kdWN0SWQpXG4gICAgICAgIC50aGVuKGFsbFJldmlld3MgPT4ge1xuXG4gICAgICAgICAgICAvLyBDcmVhdGUgZG9jIGZyYWdcbiAgICAgICAgICAgIGxldCByZXZpZXdEb2NGcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICAgICAgICAgICAgYWxsUmV2aWV3cy5mb3JFYWNoKHJldmlld0l0ZW0gPT4ge1xuXG4gICAgICAgICAgICAgICAgLy8gR2V0IHJldmlldyBIVE1MIGJ5IGNhbGxpbmcgcmV2aWV3QnVpbGRlcigpXG4gICAgICAgICAgICAgICAgbGV0IHNpbmdsZVJldmlldyA9IHJldmlld0hUTUwucmV2aWV3QnVpbGRlcihyZXZpZXdJdGVtKTsgLy8gVGFrZXMgcmV2aWV3Qm94IGZyb20gcmV2aWV3LmpzXG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgSFRNTCByZXN1bHRzIHRvIGRvYyBmcmFnXG4gICAgICAgICAgICAgICAgcmV2aWV3RG9jRnJhZ21lbnQuYXBwZW5kQ2hpbGQoc2luZ2xlUmV2aWV3KTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIC8vIEFkZCBkb2MgZnJhZyB0byByZXZpZXdTZWN0aW9uIGNyZWF0ZWQgaW4gcHJvZHVjdC5qc1xuICAgICAgICAgICAgcmV2aWV3U2VjdGlvbi5hcHBlbmRDaGlsZChyZXZpZXdEb2NGcmFnbWVudCk7XG5cbiAgICAgICAgICAgIC8vIHJldmlld1NlY3Rpb24gaXMgcGFzc2VkIGJhY2sgdG8gcHJvZHVjdC5qcyB2aWEgdGhlIGZ1bmN0aW9uXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZXZpZXdMaXN0OyJdfQ==
