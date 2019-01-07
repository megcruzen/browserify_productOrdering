const reviewHTML = {
    reviewBuilder(reviewObj) {
        let reviewBox = document.createElement("div");
        reviewBox.setAttribute("class", "review_box");

        reviewBox.innerHTML = `<p class="review_text"><span class="review_author">${reviewObj.author} wrote:</span><br />${reviewObj.reviewText}</p>`

        return reviewBox;      // Used inside reviewList.js
    }
}

export default reviewHTML;



// let reviewAuthor = document.createElement("p");
// reviewAuthor.setAttribute("class", "review_author");
// reviewAuthor.textContent = reviewObj.author;

// let reviewContent = document.createElement("p");
// reviewContent.setAttribute("class", "review_text");
// reviewContent.textContent = reviewObj.reviewText;

// reviewBox.appendChild(reviewAuthor);
// reviewBox.appendChild(reviewContent);