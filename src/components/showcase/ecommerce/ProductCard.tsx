import React from 'react';
import { FiEye, FiShoppingCart } from 'react-icons/fi';

interface ProductCardProps {
  imageUrl: string;
  name: string;
  price: number;
  originalPrice?: number;
  currency?: string; // e.g., "USD", "$"
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  name,
  price,
  originalPrice,
  currency = '$',
}) => {
  const isOnSale = typeof originalPrice === 'number' && originalPrice > price;

  return (
    <div className="group relative flex flex-col rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl motion-reduce:transition-none motion-reduce:hover:shadow-lg" style={{ backgroundColor: '#16213e' }}>
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={imageUrl}
          alt={`Image of ${name}`}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 motion-reduce:group-hover:scale-100"
          loading="lazy"
        />
        {/* Quick Actions - visible on hover */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 motion-reduce:opacity-0">
          <button
            type="button"
            className="p-2 rounded-full text-white hover:text-[#e94560] bg-black/40 hover:bg-black/60 transition-colors"
            aria-label="Quick view"
          >
            <FiEye className="w-5 h-5" />
          </button>
          <button
            type="button"
            className="p-2 rounded-full text-white hover:text-[#e94560] bg-black/40 hover:bg-black/60 transition-colors"
            aria-label="Add to cart"
          >
            <FiShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-heading text-lg font-medium truncate" style={{ color: '#f8f9fa' }} title={name}>
          {name}
        </h3>
        <div className="mt-2 flex items-baseline">
          <span className="font-sans text-xl font-semibold" style={{ color: isOnSale ? '#e94560' : '#f8f9fa' }}>
            {currency}{price.toFixed(2)}
          </span>
          {isOnSale && originalPrice && (
            <span className="ml-2 font-sans text-sm line-through" style={{ color: '#f8f9fa', opacity: 0.7 }}>
              {currency}{originalPrice.toFixed(2)}
            </span>
          )}
        </div>
         {/* Optional: Placeholder for ratings or short description */}
        <div className="mt-auto pt-3">
           <button
            type="button"
            className="w-full text-sm font-medium py-2 px-4 rounded-md transition-colors duration-300"
            style={{
              backgroundColor: '#e94560', // primary red
              color: '#f8f9fa', // light text
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#c7304a'} // Darken primary on hover
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#e94560'}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
