import { useState } from "react";
import "./coments.css";

export const Testimonials = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Michael Webb",
      role: "Customer",
      avatar: "../src/components/images/png/IMAGE.png",
      rating: 5,
      comment:
        "Aliquam erat volutpat. Nulla pretium nec urna et convallis. Ut varius mi lacus, nec molestie libero ultricies nec.",
    },
    {
      id: 2,
      name: "Amber Keene",
      role: "Customer",
      avatar: "../src/components/images/png/IMAGE (1).png",
      rating: 4,
      comment:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },
    {
      id: 3,
      name: "Sarah Tarleton",
      role: "Customer",
      avatar: "../src/components/images/png/IMAGE (2).png",
      rating: 5,
      comment:
        "Condimentum viverra orci. Pellentesque suscipit odio nisl, non ultricies purus mattis eget.",
    },
  ]);

  const [newComment, setNewComment] = useState("");
  const [newRating, setNewRating] = useState(5);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleAddComment = () => {
    if (newComment.trim() === "") return;

    const newEntry = {
      id: comments.length + 1,
      name: "New User",
      role: "Customer",
      avatar: "../src/images/png/IMAGE.png",
      rating: newRating,
      comment: newComment,
    };

    setComments([...comments, newEntry]);
    setNewComment("");
    setNewRating(5);
    setHoveredRating(0);
  };

  return (
    <div className="testimonials">
      <h2>What customers say</h2>
      <p>Facibus orci luctus et ultrices posuere cubilia curae.</p>
      <div className="testimonials-grid">
        {comments.map((comment) => (
          <div className="testimonial-card" key={comment.id}>
            <div className="testimonial-rating">
              {"★".repeat(comment.rating)}{" "}
              {"☆".repeat(5 - comment.rating)}
            </div>
            <p className="testimonial-comment">{comment.comment}</p>
            <div className="testimonial-header">
              <img
                src={comment.avatar}
                alt={comment.name}
                className="testimonial-avatar"
              />
              <div>
                <h4>{comment.name}</h4>
                <span>{comment.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="add-comment">
        <h3>Add your comment</h3>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write your comment here..."
        ></textarea>
        <div className="rating-input">
          <label>Rating: </label>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${
                  (hoveredRating || newRating) >= star ? "active" : ""
                }`}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                onClick={() => setNewRating(star)}
              >
                ★
              </span>
            ))}
          </div>
        </div>
        <button onClick={handleAddComment}>Submit</button>
      </div>
    </div>
  );
};

export default Testimonials;
