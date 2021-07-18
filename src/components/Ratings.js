import React, { useState } from "react";
import "./Ratings.css";

const Ratings = () => {
  const [ratings] = useState([
    {
      id: 1,
      name: "Jan van der Vliet",
      content: "Geweldige koffie en smaakt heerlijk!",
    },
    {
      id: 2,
      name: "Mark van der Vliet",
      content: "Toffe koffie en smaakt heerlijk!",
    },
    {
      id: 3,
      name: "John van der Vliet",
      content: "Heerlijke koffie en smaakt heerlijk!",
    },
  ]);

  return (
    <div className="ratings-wrapper">
      {ratings.map((rating) => (
          <div key={rating.id} className="rating-wrapper">
          <p className="rating-text">{rating.content}</p>
          <p className="rating-name">{rating.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Ratings;
