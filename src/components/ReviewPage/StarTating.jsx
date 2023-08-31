import React, { useState, useEffect } from "react";

export default function StarRating({ star, onChange }) {
  const [rating, setRating] = useState(star);

  useEffect(() => {
    setRating(star);
  }, [star]);

  const handleRatingClick = (newRating) => {
    setRating(newRating);
    onChange(newRating); // 부모 컴포넌트로 변경된 별점 전달
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((index) => (
        <span
          key={index}
          onClick={() => handleRatingClick(index)}
          style={{
            cursor: "pointer",
            color: index <= rating ? "gold" : "gray",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}
