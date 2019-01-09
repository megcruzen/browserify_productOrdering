const reviewData = {
    getReviews(productID) {
        // productID is passed from reviewList
        return fetch(`http://localhost:8088/reviews?productId=${productID}`)
        .then(response => response.json())
        // The second .then will go inside reviewList
    }
}

export default reviewData;