const reviewData = {
    getReviews() {
        return fetch("http://localhost:8088/reviews?productId=1") // will need to change to {productObj.id}
        .then(response => response.json())
        // .then(reviewInfo => {
        // });
        // The second .then will go inside reviewList
    }
}

export default reviewData;