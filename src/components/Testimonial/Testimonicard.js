import React from 'react';
import './TestimoniCard.scss';

const TestimoniCard = ({ testimonial }) => {
    return (
        <div className="testimoni-card">
            <img src={testimonial.img} alt={testimonial.name} className="testimoni-img" />
            <h3>{testimonial.name}</h3>
            <p>{testimonial.description}</p>
            <div className="ratings">{testimonial.ratings}</div>
        </div>
    );
};

export default TestimoniCard;
