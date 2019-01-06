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

var _review = _interopRequireDefault(require("./review"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    productQty.textContent = "In stock: 5"; // Add product deets to product_deets

    productInfo.appendChild(productName);
    productInfo.appendChild(productDesc);
    productInfo.appendChild(productPrice);
    productInfo.appendChild(productQty); // Add image_box, spacer, and product_deets to info_box

    mainProductInfo.appendChild(productPhotoBox);
    mainProductInfo.appendChild(spacer);
    mainProductInfo.appendChild(productInfo); // Add info_box to the product_box

    productArticle.appendChild(mainProductInfo); // if reviews

    let review = _review.default.reviewBuilder();

    productArticle.appendChild(review);
    return productArticle;
  }

};
var _default = productHTML;
exports.default = _default;

},{"./review":6}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const productData = {};
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

// Get all products from productData and then use forEach to run productHTML.buildProduct()
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

},{"./product":3,"./productData":4}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const reviewHTML = {
  reviewBuilder() {
    let reviewBox = document.createElement("div");
    reviewBox.setAttribute("class", "review_box");
    reviewBox.innerHTML = "<h4>Reviews</h4>";
    reviewBox.innerHTML += "<p class='review_text'><span class='review_name'>Review from [reviewer name]</span><br />Taiyaki pug occupy blue bottle selfies ullamco enamel pin ennui. Aute pug williamsburg adaptogen before they sold out disrupt consequat franzen scenester fugiat cred brooklyn distillery celiac id. Iceland artisan fashion axe fixie, tilde crucifix butcher incididunt bicycle rights shabby chic fingerstache pabst.</p>";
    return reviewBox;
  }

};
var _default = reviewHTML;
exports.default = _default;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL21haW4uanMiLCIuLi9zY3JpcHRzL25hdi5qcyIsIi4uL3NjcmlwdHMvcHJvZHVjdC5qcyIsIi4uL3NjcmlwdHMvcHJvZHVjdERhdGEuanMiLCIuLi9zY3JpcHRzL3Byb2R1Y3RMaXN0LmpzIiwiLi4vc2NyaXB0cy9yZXZpZXcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOztBQUNBOzs7O0FBRUEsYUFBSSxTQUFKOztBQUVBLHFCQUFZLGVBQVo7Ozs7Ozs7OztBQ0xBLE1BQU0sR0FBRyxHQUFHO0FBQ1IsRUFBQSxTQUFTLEdBQUc7QUFDUixRQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixhQUF2QixDQUFuQjtBQUVBLFFBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEtBQXZCLENBQVg7QUFDQSxJQUFBLElBQUksQ0FBQyxZQUFMLENBQWtCLE9BQWxCLEVBQTJCLE1BQTNCO0FBQ0EsSUFBQSxJQUFJLENBQUMsU0FBTCxHQUFpQixrQ0FBakI7QUFFQSxRQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixLQUF2QixDQUFmO0FBQ0EsSUFBQSxRQUFRLENBQUMsWUFBVCxDQUFzQixPQUF0QixFQUErQixVQUEvQjtBQUNBLElBQUEsUUFBUSxDQUFDLFNBQVQsR0FBc0I7Ozs7a0JBQXRCO0FBTUEsSUFBQSxZQUFZLENBQUMsV0FBYixDQUF5QixJQUF6QjtBQUNBLElBQUEsWUFBWSxDQUFDLFdBQWIsQ0FBeUIsUUFBekI7QUFFSDs7QUFuQk8sQ0FBWjtlQXNCZSxHOzs7Ozs7Ozs7OztBQ3RCZjs7OztBQUVBLE1BQU0sV0FBVyxHQUFHO0FBQ2hCLEVBQUEsY0FBYyxHQUFHO0FBQ2IsUUFBSSxjQUFjLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBckI7QUFDQSxJQUFBLGNBQWMsQ0FBQyxZQUFmLENBQTRCLE9BQTVCLEVBQXFDLGFBQXJDO0FBRUEsUUFBSSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBdEI7QUFDQSxJQUFBLGVBQWUsQ0FBQyxZQUFoQixDQUE2QixPQUE3QixFQUFzQyxVQUF0QztBQUVBLFFBQUksZUFBZSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEtBQXZCLENBQXRCO0FBQ0EsSUFBQSxlQUFlLENBQUMsWUFBaEIsQ0FBNkIsT0FBN0IsRUFBc0MsV0FBdEM7QUFDQSxRQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixLQUF2QixDQUFuQjtBQUNBLElBQUEsWUFBWSxDQUFDLFlBQWIsQ0FBMEIsT0FBMUIsRUFBbUMsZUFBbkM7QUFDQSxJQUFBLFlBQVksQ0FBQyxZQUFiLENBQTBCLEtBQTFCLEVBQWlDLDJMQUFqQztBQUNBLElBQUEsZUFBZSxDQUFDLFdBQWhCLENBQTRCLFlBQTVCO0FBRUEsUUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBYjtBQUNBLElBQUEsTUFBTSxDQUFDLFlBQVAsQ0FBb0IsT0FBcEIsRUFBNkIsUUFBN0I7QUFFQSxRQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixLQUF2QixDQUFsQjtBQUNBLElBQUEsV0FBVyxDQUFDLFlBQVosQ0FBeUIsT0FBekIsRUFBa0MsZUFBbEM7QUFFQSxRQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixJQUF2QixDQUFsQjtBQUNBLElBQUEsV0FBVyxDQUFDLFdBQVosR0FBMEIsY0FBMUI7QUFDQSxRQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixHQUF2QixDQUFsQjtBQUNBLElBQUEsV0FBVyxDQUFDLFlBQVosQ0FBeUIsT0FBekIsRUFBa0MsY0FBbEM7QUFDQSxJQUFBLFdBQVcsQ0FBQyxXQUFaLEdBQTBCLG9LQUExQjtBQUNBLFFBQUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEdBQXZCLENBQW5CO0FBQ0EsSUFBQSxZQUFZLENBQUMsWUFBYixDQUEwQixPQUExQixFQUFtQyxlQUFuQztBQUNBLElBQUEsWUFBWSxDQUFDLFdBQWIsR0FBMkIsS0FBM0I7QUFDQSxRQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixHQUF2QixDQUFqQjtBQUNBLElBQUEsVUFBVSxDQUFDLFdBQVgsR0FBeUIsYUFBekIsQ0E3QmEsQ0ErQmI7O0FBQ0EsSUFBQSxXQUFXLENBQUMsV0FBWixDQUF3QixXQUF4QjtBQUNBLElBQUEsV0FBVyxDQUFDLFdBQVosQ0FBd0IsV0FBeEI7QUFDQSxJQUFBLFdBQVcsQ0FBQyxXQUFaLENBQXdCLFlBQXhCO0FBQ0EsSUFBQSxXQUFXLENBQUMsV0FBWixDQUF3QixVQUF4QixFQW5DYSxDQXFDYjs7QUFDQSxJQUFBLGVBQWUsQ0FBQyxXQUFoQixDQUE0QixlQUE1QjtBQUNBLElBQUEsZUFBZSxDQUFDLFdBQWhCLENBQTRCLE1BQTVCO0FBQ0EsSUFBQSxlQUFlLENBQUMsV0FBaEIsQ0FBNEIsV0FBNUIsRUF4Q2EsQ0EwQ2I7O0FBQ0EsSUFBQSxjQUFjLENBQUMsV0FBZixDQUEyQixlQUEzQixFQTNDYSxDQTZDYjs7QUFDQSxRQUFJLE1BQU0sR0FBRyxnQkFBVyxhQUFYLEVBQWI7O0FBQ0EsSUFBQSxjQUFjLENBQUMsV0FBZixDQUEyQixNQUEzQjtBQUVBLFdBQU8sY0FBUDtBQUNIOztBQW5EZSxDQUFwQjtlQXNEZSxXOzs7Ozs7Ozs7O0FDeERmLE1BQU0sV0FBVyxHQUFHLEVBQXBCO2VBSWUsVzs7Ozs7Ozs7Ozs7QUNKZjs7QUFDQTs7OztBQUVBO0FBRUEsTUFBTSxXQUFXLEdBQUc7QUFDaEIsRUFBQSxlQUFlLEdBQUc7QUFDZCxRQUFJLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFdBQXZCLENBQXZCO0FBQ0EsSUFBQSxnQkFBZ0IsQ0FBQyxTQUFqQixHQUE2QixtQkFBN0IsQ0FGYyxDQUdkO0FBQ0E7QUFDQTs7QUFDQSxRQUFJLE9BQU8sR0FBRyxpQkFBWSxjQUFaLEVBQWQ7O0FBQ0EsSUFBQSxnQkFBZ0IsQ0FBQyxXQUFqQixDQUE2QixPQUE3QjtBQUNIOztBQVRlLENBQXBCO2VBWWUsVzs7Ozs7Ozs7OztBQ2pCZixNQUFNLFVBQVUsR0FBRztBQUNmLEVBQUEsYUFBYSxHQUFHO0FBQ1osUUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBaEI7QUFDQSxJQUFBLFNBQVMsQ0FBQyxZQUFWLENBQXVCLE9BQXZCLEVBQWdDLFlBQWhDO0FBQ0EsSUFBQSxTQUFTLENBQUMsU0FBVixHQUFzQixrQkFBdEI7QUFDQSxJQUFBLFNBQVMsQ0FBQyxTQUFWLElBQXVCLHVaQUF2QjtBQUVBLFdBQU8sU0FBUDtBQUVIOztBQVRjLENBQW5CO2VBWWUsVSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCBuYXYgZnJvbSBcIi4vbmF2XCJcbmltcG9ydCBwcm9kdWN0TGlzdCBmcm9tIFwiLi9wcm9kdWN0TGlzdFwiXG5cbm5hdi5jcmVhdGVOYXYoKTtcblxucHJvZHVjdExpc3QuZGlzcGxheVByb2R1Y3RzKCk7XG5cbiIsImNvbnN0IG5hdiA9IHtcbiAgICBjcmVhdGVOYXYoKSB7XG4gICAgICAgIGxldCBuYXZDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdmlnYXRpb25cIik7XG5cbiAgICAgICAgbGV0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsb2dvLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibG9nb1wiKTtcbiAgICAgICAgbG9nby5pbm5lckhUTUwgPSBcIjxhIGhyZWY9JyMnPkJldHN5J3MgQm91dGlxdWU8L2E+XCI7XG5cbiAgICAgICAgbGV0IG5hdkxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbmF2TGlua3Muc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJuYXZsaW5rc1wiKTtcbiAgICAgICAgbmF2TGlua3MuaW5uZXJIVE1MID0gYDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5DYXRlZ29yaWVzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+T3JkZXJzPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+TG9nIE91dDwvYT48L2xpPlxuICAgICAgICAgICAgPC91bD5gO1xuXG4gICAgICAgIG5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvKTtcbiAgICAgICAgbmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hdkxpbmtzKTtcblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmF2OyIsImltcG9ydCByZXZpZXdIVE1MIGZyb20gXCIuL3Jldmlld1wiXG5cbmNvbnN0IHByb2R1Y3RIVE1MID0ge1xuICAgIHByb2R1Y3RCdWlsZGVyKCkge1xuICAgICAgICBsZXQgcHJvZHVjdEFydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcbiAgICAgICAgcHJvZHVjdEFydGljbGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9kdWN0X2JveFwiKTtcblxuICAgICAgICBsZXQgbWFpblByb2R1Y3RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgICAgIG1haW5Qcm9kdWN0SW5mby5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImluZm9fYm94XCIpO1xuXG4gICAgICAgIGxldCBwcm9kdWN0UGhvdG9Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcm9kdWN0UGhvdG9Cb3guc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpbWFnZV9ib3hcIik7XG4gICAgICAgIGxldCBwcm9kdWN0UGhvdG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBwcm9kdWN0UGhvdG8uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9kdWN0X2ltYWdlXCIpO1xuICAgICAgICBwcm9kdWN0UGhvdG8uc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiaHR0cHM6Ly93d3cubW9kY2xvdGguY29tL2R3L2ltYWdlL3YyL0FCQVRfUFJEL29uL2RlbWFuZHdhcmUuc3RhdGljLy0vU2l0ZXMtbW9kY2xvdGgtbWFzdGVyL2RlZmF1bHQvZHdlY2IyMzBjMi9pbWFnZXMvMTAwOTQ5MTRfZmFtZV9vZl9yZWZlcmVuY2VfdmVsdmV0X2Jsb2NrX2hlZWxfZW1lcmFsZF9NQUlOLmpwZz9zdz05MTNcIik7XG4gICAgICAgIHByb2R1Y3RQaG90b0JveC5hcHBlbmRDaGlsZChwcm9kdWN0UGhvdG8pO1xuXG4gICAgICAgIGxldCBzcGFjZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzcGFjZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzcGFjZXJcIik7XG5cbiAgICAgICAgbGV0IHByb2R1Y3RJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcHJvZHVjdEluZm8uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9kdWN0X2RlZXRzXCIpO1xuXG4gICAgICAgIGxldCBwcm9kdWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgICAgcHJvZHVjdE5hbWUudGV4dENvbnRlbnQgPSBcIlByb2R1Y3QgTmFtZVwiO1xuICAgICAgICBsZXQgcHJvZHVjdERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgcHJvZHVjdERlc2Muc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9kdWN0X2Rlc2NcIik7XG4gICAgICAgIHByb2R1Y3REZXNjLnRleHRDb250ZW50ID0gXCJMb3JlbSBpcHN1bSBkb2xvciBhbWV0IHJhY2xldHRlIGZvcmFnZSBsaXZlLWVkZ2UgcG91ci1vdmVyIGV2ZXJ5ZGF5IGNhcnJ5IHJvb2YgcGFydHkgaXJvbnkgbWljcm9kb3Npbmcgd2Fpc3Rjb2F0IHBva2UgcHJpc20gaGVsdmV0aWNhIHlyIGNvbGQtcHJlc3NlZCBzdWJ3YXkgdGlsZS5cIjtcbiAgICAgICAgbGV0IHByb2R1Y3RQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBwcm9kdWN0UHJpY2Uuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9kdWN0X3ByaWNlXCIpO1xuICAgICAgICBwcm9kdWN0UHJpY2UudGV4dENvbnRlbnQgPSBcIiQzNVwiO1xuICAgICAgICBsZXQgcHJvZHVjdFF0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBwcm9kdWN0UXR5LnRleHRDb250ZW50ID0gXCJJbiBzdG9jazogNVwiO1xuXG4gICAgICAgIC8vIEFkZCBwcm9kdWN0IGRlZXRzIHRvIHByb2R1Y3RfZGVldHNcbiAgICAgICAgcHJvZHVjdEluZm8uYXBwZW5kQ2hpbGQocHJvZHVjdE5hbWUpO1xuICAgICAgICBwcm9kdWN0SW5mby5hcHBlbmRDaGlsZChwcm9kdWN0RGVzYyk7XG4gICAgICAgIHByb2R1Y3RJbmZvLmFwcGVuZENoaWxkKHByb2R1Y3RQcmljZSk7XG4gICAgICAgIHByb2R1Y3RJbmZvLmFwcGVuZENoaWxkKHByb2R1Y3RRdHkpO1xuXG4gICAgICAgIC8vIEFkZCBpbWFnZV9ib3gsIHNwYWNlciwgYW5kIHByb2R1Y3RfZGVldHMgdG8gaW5mb19ib3hcbiAgICAgICAgbWFpblByb2R1Y3RJbmZvLmFwcGVuZENoaWxkKHByb2R1Y3RQaG90b0JveCk7XG4gICAgICAgIG1haW5Qcm9kdWN0SW5mby5hcHBlbmRDaGlsZChzcGFjZXIpO1xuICAgICAgICBtYWluUHJvZHVjdEluZm8uYXBwZW5kQ2hpbGQocHJvZHVjdEluZm8pO1xuXG4gICAgICAgIC8vIEFkZCBpbmZvX2JveCB0byB0aGUgcHJvZHVjdF9ib3hcbiAgICAgICAgcHJvZHVjdEFydGljbGUuYXBwZW5kQ2hpbGQobWFpblByb2R1Y3RJbmZvKTtcblxuICAgICAgICAvLyBpZiByZXZpZXdzXG4gICAgICAgIGxldCByZXZpZXcgPSByZXZpZXdIVE1MLnJldmlld0J1aWxkZXIoKTtcbiAgICAgICAgcHJvZHVjdEFydGljbGUuYXBwZW5kQ2hpbGQocmV2aWV3KTtcblxuICAgICAgICByZXR1cm4gcHJvZHVjdEFydGljbGU7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0SFRNTDsiLCJjb25zdCBwcm9kdWN0RGF0YSA9IHtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0RGF0YTsiLCJpbXBvcnQgcHJvZHVjdERhdGEgZnJvbSBcIi4vcHJvZHVjdERhdGFcIlxuaW1wb3J0IHByb2R1Y3RIVE1MIGZyb20gXCIuL3Byb2R1Y3RcIlxuXG4vLyBHZXQgYWxsIHByb2R1Y3RzIGZyb20gcHJvZHVjdERhdGEgYW5kIHRoZW4gdXNlIGZvckVhY2ggdG8gcnVuIHByb2R1Y3RIVE1MLmJ1aWxkUHJvZHVjdCgpXG5cbmNvbnN0IHByb2R1Y3RMaXN0ID0ge1xuICAgIGRpc3BsYXlQcm9kdWN0cygpIHtcbiAgICAgICAgbGV0IHByb2R1Y3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2R1Y3RzXCIpO1xuICAgICAgICBwcm9kdWN0Q29udGFpbmVyLmlubmVySFRNTCA9IFwiPGgyPlByb2R1Y3RzPC9oMj5cIlxuICAgICAgICAvLyBwcm9kdWN0Q29udGFpbmVyLmlubmVySFRNTCA9IFwiPHA+VGhpcyBpcyBhIHRlc3Q8L3A+XCJcbiAgICAgICAgLy8gZ2V0IGFsbCBwcm9kdWN0cyBmcm9tIHByb2R1Y3REYXRhXG4gICAgICAgIC8vIGZvckVhY2ggcHJvZHVjdCwgY2FsbCBwcm9kdWN0QnVpbGRlclxuICAgICAgICBsZXQgcHJvZHVjdCA9IHByb2R1Y3RIVE1MLnByb2R1Y3RCdWlsZGVyKCk7XG4gICAgICAgIHByb2R1Y3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvZHVjdCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0TGlzdDtcbiIsImNvbnN0IHJldmlld0hUTUwgPSB7XG4gICAgcmV2aWV3QnVpbGRlcigpIHtcbiAgICAgICAgbGV0IHJldmlld0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHJldmlld0JveC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInJldmlld19ib3hcIik7XG4gICAgICAgIHJldmlld0JveC5pbm5lckhUTUwgPSBcIjxoND5SZXZpZXdzPC9oND5cIlxuICAgICAgICByZXZpZXdCb3guaW5uZXJIVE1MICs9IFwiPHAgY2xhc3M9J3Jldmlld190ZXh0Jz48c3BhbiBjbGFzcz0ncmV2aWV3X25hbWUnPlJldmlldyBmcm9tIFtyZXZpZXdlciBuYW1lXTwvc3Bhbj48YnIgLz5UYWl5YWtpIHB1ZyBvY2N1cHkgYmx1ZSBib3R0bGUgc2VsZmllcyB1bGxhbWNvIGVuYW1lbCBwaW4gZW5udWkuIEF1dGUgcHVnIHdpbGxpYW1zYnVyZyBhZGFwdG9nZW4gYmVmb3JlIHRoZXkgc29sZCBvdXQgZGlzcnVwdCBjb25zZXF1YXQgZnJhbnplbiBzY2VuZXN0ZXIgZnVnaWF0IGNyZWQgYnJvb2tseW4gZGlzdGlsbGVyeSBjZWxpYWMgaWQuIEljZWxhbmQgYXJ0aXNhbiBmYXNoaW9uIGF4ZSBmaXhpZSwgdGlsZGUgY3J1Y2lmaXggYnV0Y2hlciBpbmNpZGlkdW50IGJpY3ljbGUgcmlnaHRzIHNoYWJieSBjaGljIGZpbmdlcnN0YWNoZSBwYWJzdC48L3A+XCI7XG5cbiAgICAgICAgcmV0dXJuIHJldmlld0JveDtcblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmV2aWV3SFRNTDsiXX0=
