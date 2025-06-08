import React from 'react';
import { FiClock, FiStar, FiHeart } from 'react-icons/fi'; // FiHeart for save icon

interface RecipeCardProps {
  id: string;
  imageUrl: string;
  name: string;
  cookTime: string; // e.g., "30 mins"
  rating: number; // e.g., 4.5
  servings?: number; // Optional
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  imageUrl,
  name,
  cookTime,
  rating,
  servings,
}) => {
  return (
    <div
      className="group relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
      style={{ backgroundColor: '#3f6212' /* secondary */, color: '#f7fee7' /* text */ }}
    >
      <div className="relative aspect-[4/3]">
        <img
          src={imageUrl}
          alt={`Image of ${name}`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <button
          type="button"
          aria-label="Save to favorites"
          className="absolute top-3 right-3 p-1.5 rounded-full transition-colors duration-200 opacity-80 group-hover:opacity-100"
          style={{ backgroundColor: 'rgba(30, 62, 27, 0.7)', color: '#f7fee7' }} // Darker semi-transparent green
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(132, 204, 22, 0.7)'} // primary on hover
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(30, 62, 27, 0.7)'}
        >
          <FiHeart className="w-4 h-4" />
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-heading text-lg font-semibold mb-1 truncate" title={name}>
          {name}
        </h3>
        <div className="flex items-center justify-between text-xs opacity-80 font-sans">
          <span className="flex items-center">
            <FiClock className="w-3.5 h-3.5 mr-1" style={{color: '#a3e635' /* accent */}} />
            {cookTime}
          </span>
          <span className="flex items-center">
            <FiStar className="w-3.5 h-3.5 mr-0.5" style={{color: '#FFC107' /* Using a gold color for stars */}} />
            {rating.toFixed(1)}
          </span>
        </div>
        {servings && (
          <p className="text-xs opacity-70 mt-1 font-sans">Serves: {servings}</p>
        )}
      </div>
    </div>
  );
};

export default RecipeCard;
