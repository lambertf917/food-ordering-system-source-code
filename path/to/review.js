// review.js
document.addEventListener('DOMContentLoaded', () => {
    const submitButtons = document.querySelectorAll('.submit-review');

    submitButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default form submission
            const reviewText = event.target.previousElementSibling.value; // Assuming a text field before the button
            const orderId = event.target.dataset.orderId; // Assuming the button has a data attribute with order ID

            if (reviewText) {
                submitReview(orderId, reviewText);
            } else {
                alert('Please enter a review before submitting.');
            }
        });
    });
});

function submitReview(orderId, reviewText) {
    // AJAX request to submit the review
    fetch(`/api/orders/${orderId}/review`, {
        method: 'POST',
        body: JSON.stringify({ review: reviewText }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Review submitted successfully!');
        } else {
            alert('Failed to submit review. Please try again.');
        }
    })
    .catch(error => console.error('Error:', error));
}