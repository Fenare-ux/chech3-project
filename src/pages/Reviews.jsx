import React, { useState, useRef } from 'react';
import './Reviews.css';

const initialReviews = [
  { id: 1, name: 'Emily', text: 'These makeup products are absolutely amazing!' },
  { id: 2, name: 'Michael', text: 'Bought a gift for my sister — she loved it! Fast shipping and great packaging.' },
  { id: 3, name: 'Sophia', text: 'I always shop here for my makeup essentials.' },
  { id: 4, name: 'Daniel', text: 'High-quality products at affordable prices.' },
  { id: 5, name: 'Olivia', text: 'Huge variety of shades and top-notch customer service. Highly recommend!' },
];


const Reviews = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const scrollRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '' || text.trim() === '') return;

    const newReview = {
      id: reviews.length + 1,
      name,
      text,
    };

    setReviews([newReview, ...reviews]);
    setName('');
    setText('');
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="reviews-container">
      <h2>Customer Reviews</h2>

      {/* Şəkilli ox düymələri */}
      <button className="scroll-button scroll-left" onClick={scrollLeft}>
        <img src="/arrow.png" alt="Scroll left" />
      </button>

      <div className="reviews-grid-wrapper">
        <div className="reviews-grid" ref={scrollRef}>
          {reviews.map((r) => (
            <div key={r.id} className="review-item">
              <strong>{r.name}</strong>
              <p>{r.text}</p>
            </div>
          ))}
        </div>
      </div>

      <button className="scroll-button scroll-right" onClick={scrollRight}>
        <img src="/right-arrow.png" alt="Scroll right" />
      </button>

      <form className="review-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Write your review..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Reviews;
