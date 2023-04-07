import React, { useState } from "react";
import "../styles/Review.css";

function Reviews() {
  const reviews = [
    {
      id: 1,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, magni. Expedita, neque officia amet atque illo ipsam temporibus delectus necessitatibus consectetur quod. Enim placeat quia aliquid nam, molestias veritatis voluptate?",
      author: "Max Mitchel",
    },
    {
      id: 2,
      review:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsam, unde ipsa quam dolorum ipsum eius ad enim architecto optio. Rem iste laboriosam aperiam similique quaerat laudantium repellat. Maiores, iste!",
      author: "John Doe",
    },
    {
      id: 3,
      review:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsam",
      author: "Jane Doe",
    },
    {
      id: 4,
      review:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam ipsam, unde ipsa quam dolorum ipsum eius ad",
      author: "Chri Long",
    },
  ];

  const [reviewData, setReviewData] = useState(reviews[0].review);
  const [reviewauthor, setReviewAuthor] = useState(reviews[0].author);
  const handleClick = (index) => {
    const rslider = reviews[index].review;
    setReviewData(rslider);
    const aslider = reviews[index].author;
    setReviewAuthor(aslider);
  };

  return (
    <div className="review-slider">
      <div className="rslider">" {reviewData} "</div>
      <div className="aslider">- {reviewauthor}</div>
      <div className="r-slides">
        {reviews.map((obj, index) => (
          <h1 key={index} onClick={() => handleClick(index)}>
            .
          </h1>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
