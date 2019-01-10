const reviewHTML = {
    reviewBuilder(reviewObj) {
        let reviewBox = document.createElement("div");
        reviewBox.setAttribute("class", "review_box");
        reviewBox.innerHTML = `<p class="review_text"><span class="review_author">${reviewObj.author} wrote:</span><br />${reviewObj.reviewText}</p>`

        return reviewBox;      // Used inside reviewList.js
    }
}

export default reviewHTML;
