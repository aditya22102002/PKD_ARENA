import React, { useEffect, useState } from "react";

function Rating({ initialRating, onRate }) {
  const [rating, setRating] = useState(initialRating || 0);
  const [hover, setHover] = useState(0);
  const [ripple, setRipple] = useState(null);

  const handleRating = (value, e) => {
    setRating(value);
    if (onRate) {
      onRate(value);
    }

    const rect = e.target.getBoundingClientRect();
    setRipple({
      starIndex: value,
      size: rect.width, 
      show: true,
    });

    setTimeout(() => setRipple(null), 500); 
  };

  useEffect(() => {
    if (initialRating) {
      setRating(initialRating);
    }
  }, [initialRating]);

  return (
    <div className="flex space-x-1">
      {Array.from({ length: 5 }, (_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={index}
            className="relative text-xl sm:text-2xl cursor-pointer transition-all"
            style={{
              color: starValue <= (hover || rating) ? "#f97316" : "#9ca3af",
              transform: starValue === rating ? "scale(0.9)" : "scale(1)", 
              transition: "transform 0.2s ease, color 0.2s ease",
            }}
            onClick={(e) => handleRating(starValue, e)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
          >
            &#9733;
            {ripple && ripple.starIndex === starValue && (
              <span
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: `${ripple.size}px`,
                  height: `${ripple.size}px`,
                  backgroundColor: "rgba(255, 165, 0, 0.5)", // Semi-transparent Orange
                  borderRadius: "50%",
                  transform: "translate(-50%, -50%) scale(1)",
                  animation: "rippleEffect 0.5s ease-out forwards",
                }}
              />
            )}
          </span>
        );
      })}

      <style>
        {`
          @keyframes rippleEffect {
            0% {
              transform: translate(-50%, -50%) scale(1);
              opacity: 1;
            }
            100% {
              transform: translate(-50%, -50%) scale(4);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Rating;
