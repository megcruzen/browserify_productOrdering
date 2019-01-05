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

    let reviewBox = document.createElement("div");
    reviewBox.setAttribute("class", "review_box");
    reviewBox.innerHTML = "<h4>Reviews</h4>";
    productArticle.appendChild(reviewBox);
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
    productContainer.innerHTML = "<h2>Products</h2>"; // productContainer.innerHTML = "<p>This is a test</p>"
    // get all products from productData
    // forEach product, call productBuilder

    let product = _product.default.productBuilder();

    productContainer.appendChild(product);
  }

};
var _default = productList;
exports.default = _default;

},{"./product":3,"./productData":4}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL21haW4uanMiLCIuLi9zY3JpcHRzL25hdi5qcyIsIi4uL3NjcmlwdHMvcHJvZHVjdC5qcyIsIi4uL3NjcmlwdHMvcHJvZHVjdERhdGEuanMiLCIuLi9zY3JpcHRzL3Byb2R1Y3RMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7QUFDQTs7OztBQUVBLGFBQUksU0FBSjs7QUFFQSxxQkFBWSxlQUFaOzs7Ozs7Ozs7QUNMQSxNQUFNLEdBQUcsR0FBRztBQUNSLEVBQUEsU0FBUyxHQUFHO0FBQ1IsUUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBbkI7QUFFQSxRQUFJLElBQUksR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixLQUF2QixDQUFYO0FBQ0EsSUFBQSxJQUFJLENBQUMsWUFBTCxDQUFrQixPQUFsQixFQUEyQixNQUEzQjtBQUNBLElBQUEsSUFBSSxDQUFDLFNBQUwsR0FBaUIsa0NBQWpCO0FBRUEsUUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBZjtBQUNBLElBQUEsUUFBUSxDQUFDLFlBQVQsQ0FBc0IsT0FBdEIsRUFBK0IsVUFBL0I7QUFDQSxJQUFBLFFBQVEsQ0FBQyxTQUFULEdBQXNCOzs7O2tCQUF0QjtBQU1BLElBQUEsWUFBWSxDQUFDLFdBQWIsQ0FBeUIsSUFBekI7QUFDQSxJQUFBLFlBQVksQ0FBQyxXQUFiLENBQXlCLFFBQXpCO0FBRUg7O0FBbkJPLENBQVo7ZUFzQmUsRzs7Ozs7Ozs7OztBQ3RCZixNQUFNLFdBQVcsR0FBRztBQUNoQixFQUFBLGNBQWMsR0FBRztBQUNiLFFBQUksY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNBQXZCLENBQXJCO0FBQ0EsSUFBQSxjQUFjLENBQUMsWUFBZixDQUE0QixPQUE1QixFQUFxQyxhQUFyQztBQUVBLFFBQUksZUFBZSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNBQXZCLENBQXRCO0FBQ0EsSUFBQSxlQUFlLENBQUMsWUFBaEIsQ0FBNkIsT0FBN0IsRUFBc0MsVUFBdEM7QUFFQSxRQUFJLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixLQUF2QixDQUF0QjtBQUNBLElBQUEsZUFBZSxDQUFDLFlBQWhCLENBQTZCLE9BQTdCLEVBQXNDLFdBQXRDO0FBQ0EsUUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbkI7QUFDQSxJQUFBLFlBQVksQ0FBQyxZQUFiLENBQTBCLE9BQTFCLEVBQW1DLGVBQW5DO0FBQ0EsSUFBQSxZQUFZLENBQUMsWUFBYixDQUEwQixLQUExQixFQUFpQywyTEFBakM7QUFDQSxJQUFBLGVBQWUsQ0FBQyxXQUFoQixDQUE0QixZQUE1QjtBQUVBLFFBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEtBQXZCLENBQWI7QUFDQSxJQUFBLE1BQU0sQ0FBQyxZQUFQLENBQW9CLE9BQXBCLEVBQTZCLFFBQTdCO0FBRUEsUUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbEI7QUFDQSxJQUFBLFdBQVcsQ0FBQyxZQUFaLENBQXlCLE9BQXpCLEVBQWtDLGVBQWxDO0FBRUEsUUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBbEI7QUFDQSxJQUFBLFdBQVcsQ0FBQyxXQUFaLEdBQTBCLGNBQTFCO0FBQ0EsUUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBbEI7QUFDQSxJQUFBLFdBQVcsQ0FBQyxZQUFaLENBQXlCLE9BQXpCLEVBQWtDLGNBQWxDO0FBQ0EsSUFBQSxXQUFXLENBQUMsV0FBWixHQUEwQixvS0FBMUI7QUFDQSxRQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixHQUF2QixDQUFuQjtBQUNBLElBQUEsWUFBWSxDQUFDLFlBQWIsQ0FBMEIsT0FBMUIsRUFBbUMsZUFBbkM7QUFDQSxJQUFBLFlBQVksQ0FBQyxXQUFiLEdBQTJCLEtBQTNCO0FBQ0EsUUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBakI7QUFDQSxJQUFBLFVBQVUsQ0FBQyxXQUFYLEdBQXlCLGFBQXpCLENBN0JhLENBK0JiOztBQUNBLElBQUEsV0FBVyxDQUFDLFdBQVosQ0FBd0IsV0FBeEI7QUFDQSxJQUFBLFdBQVcsQ0FBQyxXQUFaLENBQXdCLFdBQXhCO0FBQ0EsSUFBQSxXQUFXLENBQUMsV0FBWixDQUF3QixZQUF4QjtBQUNBLElBQUEsV0FBVyxDQUFDLFdBQVosQ0FBd0IsVUFBeEIsRUFuQ2EsQ0FxQ2I7O0FBQ0EsSUFBQSxlQUFlLENBQUMsV0FBaEIsQ0FBNEIsZUFBNUI7QUFDQSxJQUFBLGVBQWUsQ0FBQyxXQUFoQixDQUE0QixNQUE1QjtBQUNBLElBQUEsZUFBZSxDQUFDLFdBQWhCLENBQTRCLFdBQTVCLEVBeENhLENBMENiOztBQUNBLElBQUEsY0FBYyxDQUFDLFdBQWYsQ0FBMkIsZUFBM0IsRUEzQ2EsQ0E2Q2I7O0FBQ0EsUUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBaEI7QUFDQSxJQUFBLFNBQVMsQ0FBQyxZQUFWLENBQXVCLE9BQXZCLEVBQWdDLFlBQWhDO0FBQ0EsSUFBQSxTQUFTLENBQUMsU0FBVixHQUFzQixrQkFBdEI7QUFFQSxJQUFBLGNBQWMsQ0FBQyxXQUFmLENBQTJCLFNBQTNCO0FBRUEsV0FBTyxjQUFQO0FBQ0g7O0FBdERlLENBQXBCO2VBeURlLFc7Ozs7Ozs7Ozs7QUN6RGYsTUFBTSxXQUFXLEdBQUcsRUFBcEI7ZUFJZSxXOzs7Ozs7Ozs7OztBQ0pmOztBQUNBOzs7O0FBRUE7QUFFQSxNQUFNLFdBQVcsR0FBRztBQUNoQixFQUFBLGVBQWUsR0FBRztBQUNkLFFBQUksZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBdkI7QUFDQSxJQUFBLGdCQUFnQixDQUFDLFNBQWpCLEdBQTZCLG1CQUE3QixDQUZjLENBR2Q7QUFDQTtBQUNBOztBQUNBLFFBQUksT0FBTyxHQUFHLGlCQUFZLGNBQVosRUFBZDs7QUFDQSxJQUFBLGdCQUFnQixDQUFDLFdBQWpCLENBQTZCLE9BQTdCO0FBQ0g7O0FBVGUsQ0FBcEI7ZUFZZSxXIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IG5hdiBmcm9tIFwiLi9uYXZcIlxuaW1wb3J0IHByb2R1Y3RMaXN0IGZyb20gXCIuL3Byb2R1Y3RMaXN0XCJcblxubmF2LmNyZWF0ZU5hdigpO1xuXG5wcm9kdWN0TGlzdC5kaXNwbGF5UHJvZHVjdHMoKTtcblxuIiwiY29uc3QgbmF2ID0ge1xuICAgIGNyZWF0ZU5hdigpIHtcbiAgICAgICAgbGV0IG5hdkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2aWdhdGlvblwiKTtcblxuICAgICAgICBsZXQgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxvZ28uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsb2dvXCIpO1xuICAgICAgICBsb2dvLmlubmVySFRNTCA9IFwiPGEgaHJlZj0nIyc+QmV0c3kncyBCb3V0aXF1ZTwvYT5cIjtcblxuICAgICAgICBsZXQgbmF2TGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBuYXZMaW5rcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5hdmxpbmtzXCIpO1xuICAgICAgICBuYXZMaW5rcy5pbm5lckhUTUwgPSBgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkNhdGVnb3JpZXM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5PcmRlcnM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Mb2cgT3V0PC9hPjwvbGk+XG4gICAgICAgICAgICA8L3VsPmA7XG5cbiAgICAgICAgbmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ28pO1xuICAgICAgICBuYXZDb250YWluZXIuYXBwZW5kQ2hpbGQobmF2TGlua3MpO1xuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuYXY7IiwiY29uc3QgcHJvZHVjdEhUTUwgPSB7XG4gICAgcHJvZHVjdEJ1aWxkZXIoKSB7XG4gICAgICAgIGxldCBwcm9kdWN0QXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpO1xuICAgICAgICBwcm9kdWN0QXJ0aWNsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2R1Y3RfYm94XCIpO1xuXG4gICAgICAgIGxldCBtYWluUHJvZHVjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICAgICAgbWFpblByb2R1Y3RJbmZvLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW5mb19ib3hcIik7XG5cbiAgICAgICAgbGV0IHByb2R1Y3RQaG90b0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2R1Y3RQaG90b0JveC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImltYWdlX2JveFwiKTtcbiAgICAgICAgbGV0IHByb2R1Y3RQaG90byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIHByb2R1Y3RQaG90by5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2R1Y3RfaW1hZ2VcIik7XG4gICAgICAgIHByb2R1Y3RQaG90by5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCJodHRwczovL3d3dy5tb2RjbG90aC5jb20vZHcvaW1hZ2UvdjIvQUJBVF9QUkQvb24vZGVtYW5kd2FyZS5zdGF0aWMvLS9TaXRlcy1tb2RjbG90aC1tYXN0ZXIvZGVmYXVsdC9kd2VjYjIzMGMyL2ltYWdlcy8xMDA5NDkxNF9mYW1lX29mX3JlZmVyZW5jZV92ZWx2ZXRfYmxvY2tfaGVlbF9lbWVyYWxkX01BSU4uanBnP3N3PTkxM1wiKTtcbiAgICAgICAgcHJvZHVjdFBob3RvQm94LmFwcGVuZENoaWxkKHByb2R1Y3RQaG90byk7XG5cbiAgICAgICAgbGV0IHNwYWNlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHNwYWNlci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNwYWNlclwiKTtcblxuICAgICAgICBsZXQgcHJvZHVjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcm9kdWN0SW5mby5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2R1Y3RfZGVldHNcIik7XG5cbiAgICAgICAgbGV0IHByb2R1Y3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICBwcm9kdWN0TmFtZS50ZXh0Q29udGVudCA9IFwiUHJvZHVjdCBOYW1lXCI7XG4gICAgICAgIGxldCBwcm9kdWN0RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBwcm9kdWN0RGVzYy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2R1Y3RfZGVzY1wiKTtcbiAgICAgICAgcHJvZHVjdERlc2MudGV4dENvbnRlbnQgPSBcIkxvcmVtIGlwc3VtIGRvbG9yIGFtZXQgcmFjbGV0dGUgZm9yYWdlIGxpdmUtZWRnZSBwb3VyLW92ZXIgZXZlcnlkYXkgY2Fycnkgcm9vZiBwYXJ0eSBpcm9ueSBtaWNyb2Rvc2luZyB3YWlzdGNvYXQgcG9rZSBwcmlzbSBoZWx2ZXRpY2EgeXIgY29sZC1wcmVzc2VkIHN1YndheSB0aWxlLlwiO1xuICAgICAgICBsZXQgcHJvZHVjdFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHByb2R1Y3RQcmljZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2R1Y3RfcHJpY2VcIik7XG4gICAgICAgIHByb2R1Y3RQcmljZS50ZXh0Q29udGVudCA9IFwiJDM1XCI7XG4gICAgICAgIGxldCBwcm9kdWN0UXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHByb2R1Y3RRdHkudGV4dENvbnRlbnQgPSBcIkluIHN0b2NrOiA1XCI7XG5cbiAgICAgICAgLy8gQWRkIHByb2R1Y3QgZGVldHMgdG8gcHJvZHVjdF9kZWV0c1xuICAgICAgICBwcm9kdWN0SW5mby5hcHBlbmRDaGlsZChwcm9kdWN0TmFtZSk7XG4gICAgICAgIHByb2R1Y3RJbmZvLmFwcGVuZENoaWxkKHByb2R1Y3REZXNjKTtcbiAgICAgICAgcHJvZHVjdEluZm8uYXBwZW5kQ2hpbGQocHJvZHVjdFByaWNlKTtcbiAgICAgICAgcHJvZHVjdEluZm8uYXBwZW5kQ2hpbGQocHJvZHVjdFF0eSk7XG5cbiAgICAgICAgLy8gQWRkIGltYWdlX2JveCwgc3BhY2VyLCBhbmQgcHJvZHVjdF9kZWV0cyB0byBpbmZvX2JveFxuICAgICAgICBtYWluUHJvZHVjdEluZm8uYXBwZW5kQ2hpbGQocHJvZHVjdFBob3RvQm94KTtcbiAgICAgICAgbWFpblByb2R1Y3RJbmZvLmFwcGVuZENoaWxkKHNwYWNlcik7XG4gICAgICAgIG1haW5Qcm9kdWN0SW5mby5hcHBlbmRDaGlsZChwcm9kdWN0SW5mbyk7XG5cbiAgICAgICAgLy8gQWRkIGluZm9fYm94IHRvIHRoZSBwcm9kdWN0X2JveFxuICAgICAgICBwcm9kdWN0QXJ0aWNsZS5hcHBlbmRDaGlsZChtYWluUHJvZHVjdEluZm8pO1xuXG4gICAgICAgIC8vIGlmIHJldmlld3NcbiAgICAgICAgbGV0IHJldmlld0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHJldmlld0JveC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInJldmlld19ib3hcIik7XG4gICAgICAgIHJldmlld0JveC5pbm5lckhUTUwgPSBcIjxoND5SZXZpZXdzPC9oND5cIlxuXG4gICAgICAgIHByb2R1Y3RBcnRpY2xlLmFwcGVuZENoaWxkKHJldmlld0JveCk7XG5cbiAgICAgICAgcmV0dXJuIHByb2R1Y3RBcnRpY2xlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdEhUTUw7IiwiY29uc3QgcHJvZHVjdERhdGEgPSB7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdERhdGE7IiwiaW1wb3J0IHByb2R1Y3REYXRhIGZyb20gXCIuL3Byb2R1Y3REYXRhXCJcbmltcG9ydCBwcm9kdWN0SFRNTCBmcm9tIFwiLi9wcm9kdWN0XCJcblxuLy8gR2V0IGFsbCBwcm9kdWN0cyBmcm9tIHByb2R1Y3REYXRhIGFuZCB0aGVuIHVzZSBmb3JFYWNoIHRvIHJ1biBwcm9kdWN0SFRNTC5idWlsZFByb2R1Y3QoKVxuXG5jb25zdCBwcm9kdWN0TGlzdCA9IHtcbiAgICBkaXNwbGF5UHJvZHVjdHMoKSB7XG4gICAgICAgIGxldCBwcm9kdWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9kdWN0c1wiKTtcbiAgICAgICAgcHJvZHVjdENvbnRhaW5lci5pbm5lckhUTUwgPSBcIjxoMj5Qcm9kdWN0czwvaDI+XCJcbiAgICAgICAgLy8gcHJvZHVjdENvbnRhaW5lci5pbm5lckhUTUwgPSBcIjxwPlRoaXMgaXMgYSB0ZXN0PC9wPlwiXG4gICAgICAgIC8vIGdldCBhbGwgcHJvZHVjdHMgZnJvbSBwcm9kdWN0RGF0YVxuICAgICAgICAvLyBmb3JFYWNoIHByb2R1Y3QsIGNhbGwgcHJvZHVjdEJ1aWxkZXJcbiAgICAgICAgbGV0IHByb2R1Y3QgPSBwcm9kdWN0SFRNTC5wcm9kdWN0QnVpbGRlcigpO1xuICAgICAgICBwcm9kdWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2R1Y3QpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdExpc3Q7XG4iXX0=
