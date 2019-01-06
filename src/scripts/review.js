const reviewHTML = {
    reviewBuilder() {
        let reviewBox = document.createElement("div");
        reviewBox.setAttribute("class", "review_box");
        reviewBox.innerHTML = "<h4>Reviews</h4>"
        reviewBox.innerHTML += "<p class='review_text'><span class='review_name'>Review from [reviewer name]</span><br />Taiyaki pug occupy blue bottle selfies ullamco enamel pin ennui. Aute pug williamsburg adaptogen before they sold out disrupt consequat franzen scenester fugiat cred brooklyn distillery celiac id. Iceland artisan fashion axe fixie, tilde crucifix butcher incididunt bicycle rights shabby chic fingerstache pabst.</p>";

        return reviewBox;

    }
}

export default reviewHTML;