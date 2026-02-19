// This file handles the submission of reviews for past orders.
import React, { useState } from 'react';

const ReviewSubmission = ({ orderId }) => {
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async () => {
        if (isSubmitting) return; // Prevent multiple submissions
        setIsSubmitting(true);
        try {
            await submitReview(orderId, review, rating); // Assume this is a defined function
            // Handle successful submission (e.g., show a success message)
        } catch (error) {
            // Handle submission error (e.g., show an error message)
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Write your review here"
            />
            <div>
                {/* Assume there's a star rating component here */}
                <StarRating rating={rating} onChange={setRating} />
            </div>
            <button onClick={handleSubmit} disabled={isSubmitting}>
                Submit
            </button>
        </div>
    );
};

export default ReviewSubmission;