import reviewData from "./reviewData"
import reviewHTML from "./review"

// Get all reviews from reviewData and then use forEach to run reviewHTML.reviewBuilder()

const reviewList = {
    displayReviews(reviewSection, productId) {
        // passing reviewSection from product.js & filling it with info
        // passing productId from product.js so it get inserted into fetch
        reviewData.getReviews(productId)
        .then(allReviews => {

            // Create doc frag
            let reviewDocFragment = document.createDocumentFragment();

            allReviews.forEach(reviewItem => {

                // Get review HTML by calling reviewBuilder()
                let singleReview = reviewHTML.reviewBuilder(reviewItem); // Takes reviewBox from review.js

                // Add HTML results to doc frag
                reviewDocFragment.appendChild(singleReview);
            })

            // Add doc frag to reviewSection created in product.js
            reviewSection.appendChild(reviewDocFragment);

            // reviewSection is passed back to product.js via the function
        })
    }
}

export default reviewList;