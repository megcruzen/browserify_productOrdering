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
    let spacer = document.createElement("div");
    let navLinks = document.createElement("div");
    navLinks.setAttribute("class", "navlinks");
    navLinks.innerHTML = `<ul>
                <li><a href="#">Categories</a></li>
                <li><a href="#">Orders</a></li>
                <li><a href="#">Log Out</a></li>
            </ul>`;
    navContainer.appendChild(logo);
    navContainer.appendChild(spacer);
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

};
var _default = productHTML;
exports.default = _default;

},{}],4:[function(require,module,exports){
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
    productContainer.innerHTML = "<p>This is a test</p>"; // get all products from productData
    // forEach product, call productBuilder

    let product = _product.default.productBuilder();

    productContainer.appendChild(product);
  }

};
var _default = productList;
exports.default = _default;

},{"./product":3,"./productData":4}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL21haW4uanMiLCIuLi9zY3JpcHRzL25hdi5qcyIsIi4uL3NjcmlwdHMvcHJvZHVjdC5qcyIsIi4uL3NjcmlwdHMvcHJvZHVjdERhdGEuanMiLCIuLi9zY3JpcHRzL3Byb2R1Y3RMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7QUFDQTs7OztBQUVBLGFBQUksU0FBSjs7QUFFQSxxQkFBWSxlQUFaOzs7Ozs7Ozs7QUNMQSxNQUFNLEdBQUcsR0FBRztBQUNSLEVBQUEsU0FBUyxHQUFHO0FBQ1IsUUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBbkI7QUFFQSxRQUFJLElBQUksR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixLQUF2QixDQUFYO0FBQ0EsSUFBQSxJQUFJLENBQUMsWUFBTCxDQUFrQixPQUFsQixFQUEyQixNQUEzQjtBQUNBLElBQUEsSUFBSSxDQUFDLFNBQUwsR0FBaUIsa0NBQWpCO0FBRUEsUUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBYjtBQUVBLFFBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEtBQXZCLENBQWY7QUFDQSxJQUFBLFFBQVEsQ0FBQyxZQUFULENBQXNCLE9BQXRCLEVBQStCLFVBQS9CO0FBQ0EsSUFBQSxRQUFRLENBQUMsU0FBVCxHQUFzQjs7OztrQkFBdEI7QUFNQSxJQUFBLFlBQVksQ0FBQyxXQUFiLENBQXlCLElBQXpCO0FBQ0EsSUFBQSxZQUFZLENBQUMsV0FBYixDQUF5QixNQUF6QjtBQUNBLElBQUEsWUFBWSxDQUFDLFdBQWIsQ0FBeUIsUUFBekI7QUFFSDs7QUF0Qk8sQ0FBWjtlQXlCZSxHOzs7Ozs7Ozs7O0FDekJmLE1BQU0sV0FBVyxHQUFHO0FBQ2hCLEVBQUEsY0FBYyxHQUFHO0FBQ2IsUUFBSSxjQUFjLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBckI7QUFFQSxRQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixLQUF2QixDQUFuQjtBQUNBLElBQUEsWUFBWSxDQUFDLFlBQWIsQ0FBMEIsT0FBMUIsRUFBbUMsY0FBbkM7QUFDQSxJQUFBLFlBQVksQ0FBQyxZQUFiLENBQTBCLEtBQTFCLEVBQWlDLDJMQUFqQztBQUVBLFFBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLElBQXZCLENBQWxCO0FBQ0EsSUFBQSxXQUFXLENBQUMsV0FBWixHQUEwQixjQUExQjtBQUVBLFFBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEdBQXZCLENBQWxCO0FBQ0EsSUFBQSxXQUFXLENBQUMsV0FBWixHQUEwQixvS0FBMUI7QUFFQSxRQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixHQUF2QixDQUFuQjtBQUNBLElBQUEsWUFBWSxDQUFDLFdBQWIsR0FBMkIsS0FBM0I7QUFFQSxRQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixHQUF2QixDQUFqQjtBQUNBLElBQUEsVUFBVSxDQUFDLFdBQVgsR0FBeUIsYUFBekI7QUFFQSxJQUFBLGNBQWMsQ0FBQyxXQUFmLENBQTJCLFlBQTNCO0FBQ0EsSUFBQSxjQUFjLENBQUMsV0FBZixDQUEyQixXQUEzQjtBQUNBLElBQUEsY0FBYyxDQUFDLFdBQWYsQ0FBMkIsWUFBM0I7QUFDQSxJQUFBLGNBQWMsQ0FBQyxXQUFmLENBQTJCLFVBQTNCO0FBRUEsV0FBTyxjQUFQO0FBQ0g7O0FBMUJlLENBQXBCO2VBNkJlLFc7Ozs7Ozs7Ozs7QUM3QmYsTUFBTSxXQUFXLEdBQUcsRUFBcEI7ZUFJZSxXOzs7Ozs7Ozs7OztBQ0pmOztBQUNBOzs7O0FBRUE7QUFFQSxNQUFNLFdBQVcsR0FBRztBQUNoQixFQUFBLGVBQWUsR0FBRztBQUNkLFFBQUksZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBdkI7QUFDQSxJQUFBLGdCQUFnQixDQUFDLFNBQWpCLEdBQTZCLHVCQUE3QixDQUZjLENBR2Q7QUFDQTs7QUFDQSxRQUFJLE9BQU8sR0FBRyxpQkFBWSxjQUFaLEVBQWQ7O0FBQ0EsSUFBQSxnQkFBZ0IsQ0FBQyxXQUFqQixDQUE2QixPQUE3QjtBQUNIOztBQVJlLENBQXBCO2VBV2UsVyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCBuYXYgZnJvbSBcIi4vbmF2XCJcbmltcG9ydCBwcm9kdWN0TGlzdCBmcm9tIFwiLi9wcm9kdWN0TGlzdFwiXG5cbm5hdi5jcmVhdGVOYXYoKTtcblxucHJvZHVjdExpc3QuZGlzcGxheVByb2R1Y3RzKCk7XG5cbiIsImNvbnN0IG5hdiA9IHtcbiAgICBjcmVhdGVOYXYoKSB7XG4gICAgICAgIGxldCBuYXZDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdmlnYXRpb25cIik7XG5cbiAgICAgICAgbGV0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsb2dvLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibG9nb1wiKTtcbiAgICAgICAgbG9nby5pbm5lckhUTUwgPSBcIjxhIGhyZWY9JyMnPkJldHN5J3MgQm91dGlxdWU8L2E+XCJcblxuICAgICAgICBsZXQgc3BhY2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgICBsZXQgbmF2TGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBuYXZMaW5rcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5hdmxpbmtzXCIpO1xuICAgICAgICBuYXZMaW5rcy5pbm5lckhUTUwgPSBgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkNhdGVnb3JpZXM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5PcmRlcnM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Mb2cgT3V0PC9hPjwvbGk+XG4gICAgICAgICAgICA8L3VsPmA7XG5cbiAgICAgICAgbmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ28pO1xuICAgICAgICBuYXZDb250YWluZXIuYXBwZW5kQ2hpbGQoc3BhY2VyKTtcbiAgICAgICAgbmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hdkxpbmtzKTtcblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmF2OyIsImNvbnN0IHByb2R1Y3RIVE1MID0ge1xuICAgIHByb2R1Y3RCdWlsZGVyKCkge1xuICAgICAgICBsZXQgcHJvZHVjdEFydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcblxuICAgICAgICBsZXQgcHJvZHVjdFBob3RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgcHJvZHVjdFBob3RvLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvZHVjdEltYWdlXCIpO1xuICAgICAgICBwcm9kdWN0UGhvdG8uc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiaHR0cHM6Ly93d3cubW9kY2xvdGguY29tL2R3L2ltYWdlL3YyL0FCQVRfUFJEL29uL2RlbWFuZHdhcmUuc3RhdGljLy0vU2l0ZXMtbW9kY2xvdGgtbWFzdGVyL2RlZmF1bHQvZHdlY2IyMzBjMi9pbWFnZXMvMTAwOTQ5MTRfZmFtZV9vZl9yZWZlcmVuY2VfdmVsdmV0X2Jsb2NrX2hlZWxfZW1lcmFsZF9NQUlOLmpwZz9zdz05MTNcIik7XG5cbiAgICAgICAgbGV0IHByb2R1Y3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICBwcm9kdWN0TmFtZS50ZXh0Q29udGVudCA9IFwiUHJvZHVjdCBOYW1lXCI7XG5cbiAgICAgICAgbGV0IHByb2R1Y3REZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHByb2R1Y3REZXNjLnRleHRDb250ZW50ID0gXCJMb3JlbSBpcHN1bSBkb2xvciBhbWV0IHJhY2xldHRlIGZvcmFnZSBsaXZlLWVkZ2UgcG91ci1vdmVyIGV2ZXJ5ZGF5IGNhcnJ5IHJvb2YgcGFydHkgaXJvbnkgbWljcm9kb3Npbmcgd2Fpc3Rjb2F0IHBva2UgcHJpc20gaGVsdmV0aWNhIHlyIGNvbGQtcHJlc3NlZCBzdWJ3YXkgdGlsZS5cIjtcblxuICAgICAgICBsZXQgcHJvZHVjdFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHByb2R1Y3RQcmljZS50ZXh0Q29udGVudCA9IFwiJDM1XCI7XG5cbiAgICAgICAgbGV0IHByb2R1Y3RRdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgcHJvZHVjdFF0eS50ZXh0Q29udGVudCA9IFwiSW4gc3RvY2s6IDVcIjtcblxuICAgICAgICBwcm9kdWN0QXJ0aWNsZS5hcHBlbmRDaGlsZChwcm9kdWN0UGhvdG8pO1xuICAgICAgICBwcm9kdWN0QXJ0aWNsZS5hcHBlbmRDaGlsZChwcm9kdWN0RGVzYyk7XG4gICAgICAgIHByb2R1Y3RBcnRpY2xlLmFwcGVuZENoaWxkKHByb2R1Y3RQcmljZSk7XG4gICAgICAgIHByb2R1Y3RBcnRpY2xlLmFwcGVuZENoaWxkKHByb2R1Y3RRdHkpO1xuXG4gICAgICAgIHJldHVybiBwcm9kdWN0QXJ0aWNsZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3RIVE1MOyIsImNvbnN0IHByb2R1Y3REYXRhID0ge1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3REYXRhOyIsImltcG9ydCBwcm9kdWN0RGF0YSBmcm9tIFwiLi9wcm9kdWN0RGF0YVwiXG5pbXBvcnQgcHJvZHVjdEhUTUwgZnJvbSBcIi4vcHJvZHVjdFwiXG5cbi8vIEdldCBhbGwgcHJvZHVjdHMgZnJvbSBwcm9kdWN0RGF0YSBhbmQgdGhlbiB1c2UgZm9yRWFjaCB0byBydW4gcHJvZHVjdEhUTUwuYnVpbGRQcm9kdWN0KClcblxuY29uc3QgcHJvZHVjdExpc3QgPSB7XG4gICAgZGlzcGxheVByb2R1Y3RzKCkge1xuICAgICAgICBsZXQgcHJvZHVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZHVjdHNcIik7XG4gICAgICAgIHByb2R1Y3RDb250YWluZXIuaW5uZXJIVE1MID0gXCI8cD5UaGlzIGlzIGEgdGVzdDwvcD5cIlxuICAgICAgICAvLyBnZXQgYWxsIHByb2R1Y3RzIGZyb20gcHJvZHVjdERhdGFcbiAgICAgICAgLy8gZm9yRWFjaCBwcm9kdWN0LCBjYWxsIHByb2R1Y3RCdWlsZGVyXG4gICAgICAgIGxldCBwcm9kdWN0ID0gcHJvZHVjdEhUTUwucHJvZHVjdEJ1aWxkZXIoKTtcbiAgICAgICAgcHJvZHVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9kdWN0KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3RMaXN0O1xuIl19
