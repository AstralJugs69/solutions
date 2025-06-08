import React from 'react';
import ProductCard from './ProductCard'; // Assuming ProductCard is in the same directory

// Placeholder data for product cards - expanded
const placeholderProducts = [
  { id: '1', imageUrl: 'https://via.placeholder.com/400x300/1a1a2e/e94560?text=Product+1', name: 'Sleek Wireless Headphones', price: 129.99, originalPrice: 179.99 },
  { id: '2', imageUrl: 'https://via.placeholder.com/400x300/16213e/e94560?text=Product+2', name: 'Minimalist Smart Watch', price: 199.50 },
  { id: '3', imageUrl: 'https://via.placeholder.com/400x300/0f3460/e94560?text=Product+3', name: 'Ergonomic Gaming Mouse', price: 79.00, originalPrice: 99.00 },
  { id: '4', imageUrl: 'https://via.placeholder.com/400x300/1a1a2e/f8f9fa?text=Product+4', name: 'Portable Power Bank 20K', price: 49.99 },
  { id: '5', imageUrl: 'https://via.placeholder.com/400x300/16213e/f8f9fa?text=Product+5', name: 'Smart Home Hub', price: 89.90 },
  { id: '6', imageUrl: 'https://via.placeholder.com/400x300/0f3460/f8f9fa?text=Product+6', name: 'Bluetooth Speaker X500', price: 149.00 },
  { id: '7', imageUrl: 'https://via.placeholder.com/400x300/1a1a2e/e94560?text=Product+7', name: 'Ultra-Thin Laptop Sleeve', price: 35.50, originalPrice: 45.00 },
  { id: '8', imageUrl: 'https://via.placeholder.com/400x300/16213e/e94560?text=Product+8', name: 'Mechanical Keyboard RGB', price: 119.75 },
];

const EcommerceShowcase: React.FC = () => {
  const FilterCheckbox: React.FC<{ label: string; id: string }> = ({ label, id }) => (
    <label htmlFor={id} className="flex items-center space-x-2 cursor-pointer hover:opacity-80">
      <input type="checkbox" id={id} className="form-checkbox h-4 w-4 rounded" style={{accentColor: '#e94560', backgroundColor: '#0f3460'}} />
      <span className="text-sm">{label}</span>
    </label>
  );

  const ColorSwatch: React.FC<{ color: string; name: string }> = ({ color, name }) => (
    <label htmlFor={`color-${name}`} className="flex items-center space-x-2 cursor-pointer hover:opacity-80">
      <input type="checkbox" id={`color-${name}`} name="color-filter" className="form-checkbox h-4 w-4 rounded" style={{accentColor: '#e94560', backgroundColor: '#0f3460'}} />
      <span className="w-4 h-4 rounded-full inline-block border border-white/20" style={{ backgroundColor: color }}></span>
      <span className="text-sm">{name}</span>
    </label>
  );


  return (
    <div style={{ backgroundColor: '#1a1a2e', color: '#f8f9fa' }} className="showcase-ecommerce"> {/* Main showcase theme application */}

      {/* Homepage Snippet Section */}
      <section
        className="relative py-20 md:py-32 lg:py-40 text-center overflow-hidden"
        // Using a placeholder image as background with overlay
        style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080/101020/e94560?text=Urban+Tech+Deals')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div> {/* Dark overlay for text contrast */}
        <div className="relative container mx-auto px-4 z-10">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight"
            style={{ color: '#f8f9fa' }} // Explicitly theme text color
          >
            Tech Deals of the Week
          </h1>
          <p
            className="text-lg md:text-xl lg:text-2xl mb-10 mx-auto max-w-2xl"
            style={{ color: '#f8f9fa', opacity: 0.85 }} // Explicitly theme text color
          >
            Discover exclusive offers on the latest gadgets and accessories. Limited time only!
          </p>
          <button
            type="button"
            className="text-base md:text-lg font-heading font-semibold py-3 px-8 md:py-4 md:px-10 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:opacity-90 hover:shadow-lg motion-reduce:transition-none"
            style={{ backgroundColor: '#e94560', color: '#f8f9fa' }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#c7304a'} // Darken on hover
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#e94560'}
          >
            Explore Deals
          </button>
        </div>
      </section>
      {/* END Homepage Snippet Section */}

      <div className="container mx-auto px-4 py-12 md:py-20"> {/* Added padding for subsequent sections */}
        {/* Original Showcase Intro Text - can be removed or kept if desired */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4" style={{ color: '#f8f9fa' }}>
            E-Commerce Platform Showcase
          </h1>
          <p className="text-lg md:text-xl mx-auto max-w-3xl" style={{ color: '#f8f9fa', opacity: 0.8 }}>
            Experience a modern, sleek, and user-friendly online shopping journey. Explore our product displays and intuitive interactions.
          </p>
        </div>

        {/* Removed the old "Featured Collection" placeholder as the new hero serves a similar purpose */}

        {/* Product Listing Page (PLP) Section */}
        <div className="my-16 md:my-24"> {/* Adjusted margin from mb-16 to my-16 for spacing */}
          <header className="mb-8 md:mb-12 text-center md:text-left">
            <nav aria-label="Breadcrumb" className="mb-2">
              <ol className="flex items-center space-x-2 text-sm" style={{ color: '#f8f9fa', opacity: 0.7}}>
                <li><a href="#" className="hover:underline" style={{color: '#93c5fd'}}>Home</a></li>
                <li><span className="mx-2">/</span></li>
                <li><a href="#" className="hover:underline" style={{color: '#93c5fd'}}>Shop</a></li>
                <li><span className="mx-2">/</span></li>
                <li aria-current="page">All Products</li>
              </ol>
            </nav>
            <h2 className="text-3xl md:text-4xl font-heading font-bold" style={{ color: '#f8f9fa' }}>
              Our Latest Collection
            </h2>
          </header>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Filter Sidebar */}
            <aside className="w-full md:w-1/4 lg:w-1/5 p-6 rounded-lg shadow-md" style={{ backgroundColor: '#16213e' }}>
              <h3 className="text-xl font-heading font-semibold mb-6" style={{ color: '#f8f9fa' }}>Filters</h3>

              {/* Categories Filter */}
              <div className="mb-6">
                <h4 className="text-md font-heading font-medium mb-3" style={{ color: '#e94560' }}>Categories</h4>
                <div className="space-y-2">
                  <FilterCheckbox id="cat-apparel" label="Apparel" />
                  <FilterCheckbox id="cat-electronics" label="Electronics" />
                  <FilterCheckbox id="cat-home" label="Home Goods" />
                  <FilterCheckbox id="cat-accessories" label="Accessories" />
                </div>
              </div>

              {/* Size Filter */}
              <div className="mb-6">
                <h4 className="text-md font-heading font-medium mb-3" style={{ color: '#e94560' }}>Size</h4>
                <div className="flex flex-wrap gap-2">
                  {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
                    <button key={size} type="button" className="px-3 py-1 text-sm border rounded-md hover:border-[#e94560] focus:border-[#e94560] focus:text-[#e94560]" style={{borderColor: '#0f3460', color: '#f8f9fa', opacity:0.8}}>{size}</button>
                  ))}
                </div>
              </div>

              {/* Color Filter */}
              <div className="mb-6">
                <h4 className="text-md font-heading font-medium mb-3" style={{ color: '#e94560' }}>Color</h4>
                <div className="space-y-2">
                  <ColorSwatch color="#FF0000" name="Red" />
                  <ColorSwatch color="#0000FF" name="Blue" />
                  <ColorSwatch color="#008000" name="Green" />
                  <ColorSwatch color="#222222" name="Black" />
                  <ColorSwatch color="#FFFFFF" name="White" />
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="mb-6">
                <h4 className="text-md font-heading font-medium mb-3" style={{ color: '#e94560' }}>Price Range</h4>
                <div className="h-2 rounded-full w-full" style={{backgroundColor: '#0f3460'}}>
                  <div className="h-2 rounded-full w-3/4" style={{backgroundColor: '#e94560'}}></div> {/* Mockup fill */}
                </div>
                <div className="flex justify-between text-xs mt-1">
                  <span>$0</span>
                  <span>$500+</span>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <button type="button" className="w-full btn py-2 px-4 rounded-md text-sm font-medium transition-colors" style={{backgroundColor: '#e94560', color: '#f8f9fa'}} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#c7304a'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#e94560'}>Apply Filters</button>
                <button type="button" className="w-full btn py-2 px-4 rounded-md text-sm font-medium border transition-colors" style={{borderColor: '#0f3460', color: '#f8f9fa', opacity: 0.8}} onMouseOver={(e) => e.currentTarget.style.borderColor = '#22d3ee'} onMouseOut={(e) => e.currentTarget.style.borderColor = '#0f3460'}>Reset Filters</button>
              </div>
            </aside>

            {/* Main Content Area: Sorting + Product Grid */}
            <main className="w-full md:w-3/4 lg:w-4/5">
              {/* Sorting Options Mockup */}
              <div className="mb-6 flex justify-end">
                <div className="relative inline-block text-left">
                  <button type="button" className="inline-flex justify-center w-full rounded-md border shadow-sm px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-[#e94560]" style={{backgroundColor: '#16213e', borderColor: '#0f3460', color: '#f8f9fa'}} aria-haspopup="true" aria-expanded="true">
                    Sort by: Latest
                    <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {/* Dropdown Panel (mockup - not interactive)
                  <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" style={{backgroundColor: '#16213e'}} role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <div className="py-1" role="none">
                      <a href="#" className="block px-4 py-2 text-sm hover:bg-[#0f3460]" role="menuitem">Latest</a>
                      <a href="#" className="block px-4 py-2 text-sm hover:bg-[#0f3460]" role="menuitem">Price: Low to High</a>
                      <a href="#" className="block px-4 py-2 text-sm hover:bg-[#0f3460]" role="menuitem">Price: High to Low</a>
                    </div>
                  </div> */}
                </div>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {placeholderProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    imageUrl={product.imageUrl}
                    name={product.name}
                    price={product.price}
                    originalPrice={product.originalPrice}
                    currency="$"
                  />
                ))}
              </div>
            </main>
          </div>
        </div>
        {/* END Product Listing Page (PLP) Section */}

        {/* Product Detail Page (PDP) Section - Mockup */}
        <div className="my-16 md:my-24 pt-12 border-t border-[#0f3460]">
          <header className="mb-8 md:mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold" style={{ color: '#f8f9fa' }}>
              Product In Focus
            </h2>
            <p className="text-lg text-[#f8f9fa]/80">This is how a detailed product view could look.</p>
          </header>

          {placeholderProducts.length > 0 && (() => {
            const product = placeholderProducts[0]; // Showcase the first product for PDP
            return (
              <div className="flex flex-col md:flex-row gap-8 lg:gap-12 p-4 md:p-8 rounded-lg" style={{ backgroundColor: '#16213e' }}>
                {/* Left Column: Image Gallery */}
                <div className="w-full md:w-1/2">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4">
                    <img src={product.imageUrl} alt={`Main image of ${product.name}`} className="w-full h-full object-cover" />
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {[product.imageUrl, 'https://via.placeholder.com/100x75/0f3460/e94560?text=Thumb+2', 'https://via.placeholder.com/100x75/1a1a2e/e94560?text=Thumb+3'].map((thumbUrl, idx) => (
                      <div key={idx} className={`aspect-[4/3] rounded overflow-hidden border-2 ${idx === 0 ? 'border-[#e94560]' : 'border-transparent'} hover:border-[#e94560] cursor-pointer`}>
                        <img src={thumbUrl} alt={`Thumbnail ${idx + 1} of ${product.name}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column: Product Info */}
                <div className="w-full md:w-1/2">
                  <h1 className="font-heading text-3xl lg:text-4xl font-bold mb-3" style={{ color: '#f8f9fa' }}>{product.name}</h1>
                  <div className="flex items-baseline mb-4">
                    <span className="font-sans text-2xl lg:text-3xl font-semibold" style={{ color: product.originalPrice ? '#e94560' : '#f8f9fa' }}>
                      ${product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <span className="ml-3 font-sans text-lg line-through" style={{ color: '#f8f9fa', opacity: 0.7 }}>
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <p className="font-sans text-base mb-6" style={{ color: '#f8f9fa', opacity: 0.85 }}>
                    A brief and engaging description of this fantastic product. Highlighting key features and benefits to entice the customer. Crafted with the finest materials and cutting-edge technology.
                  </p>

                  {/* Variant Selectors */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <label htmlFor="size-pdp" className="block text-sm font-medium mb-1" style={{ color: '#f8f9fa', opacity: 0.9 }}>Size:</label>
                      <select id="size-pdp" name="size" className="w-full md:w-1/2 p-2 rounded border text-sm" style={{backgroundColor: '#0f3460', borderColor: '#0f3460', color: '#f8f9fa'}}>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                      </select>
                    </div>
                    <div>
                      <span className="block text-sm font-medium mb-1" style={{ color: '#f8f9fa', opacity: 0.9 }}>Color:</span>
                      <div className="flex space-x-2">
                        {['#e94560', '#3b82f6', '#10b981', '#f59e0b'].map(color => (
                          <button key={color} type="button" aria-label={`Color ${color}`} className={`w-7 h-7 rounded-full border-2 hover:opacity-80 ${color === '#e94560' ? 'border-white' : 'border-transparent'}`} style={{backgroundColor: color}}></button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Quantity Selector */}
                  <div className="mb-6">
                    <span className="block text-sm font-medium mb-1" style={{ color: '#f8f9fa', opacity: 0.9 }}>Quantity:</span>
                    <div className="flex items-center w-fit rounded border" style={{borderColor: '#0f3460'}}>
                      <button type="button" className="p-2" aria-label="Decrease quantity" style={{color: '#f8f9fa', opacity:0.8}}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" /></svg></button>
                      <input type="text" readOnly value="1" className="w-10 text-center text-sm p-1 border-none" style={{backgroundColor: '#0f3460', color: '#f8f9fa'}} />
                      <button type="button" className="p-2" aria-label="Increase quantity" style={{color: '#f8f9fa', opacity:0.8}}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg></button>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-3 mb-6">
                    <button type="button" className="btn flex-1 py-3 px-6 rounded font-heading font-semibold text-base transition-opacity" style={{backgroundColor: '#e94560', color: '#f8f9fa'}} onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'} onMouseOut={(e) => e.currentTarget.style.opacity = '1'}>Add to Cart</button>
                    <button type="button" className="btn flex-1 py-3 px-6 rounded font-heading font-semibold text-base border transition-colors" style={{borderColor: '#0f3460', color: '#f8f9fa'}} onMouseOver={(e) => e.currentTarget.style.borderColor = '#22d3ee'} onMouseOut={(e) => e.currentTarget.style.borderColor = '#0f3460'}>Add to Wishlist</button>
                  </div>

                  {/* Tabs for Description, Specs, Reviews */}
                  <div>
                    <div className="border-b" style={{borderColor: '#0f3460'}}>
                      <nav className="-mb-px flex space-x-6" aria-label="Tabs">
                        <button className="py-3 px-1 border-b-2 text-sm font-medium" style={{borderColor: '#e94560', color: '#e94560'}}>Description</button>
                        <button className="py-3 px-1 border-b-2 border-transparent text-sm font-medium hover:border-[#22d3ee] hover:text-[#22d3ee]" style={{color: '#f8f9fa', opacity: 0.7}}>Specifications</button>
                        <button className="py-3 px-1 border-b-2 border-transparent text-sm font-medium hover:border-[#22d3ee] hover:text-[#22d3ee]" style={{color: '#f8f9fa', opacity: 0.7}}>Reviews (3)</button>
                      </nav>
                    </div>
                    <div className="pt-6">
                      <p className="text-sm" style={{color: '#f8f9fa', opacity: 0.85}}>Detailed product information goes here, covering all the features, benefits, and materials. This section can be quite long and provide valuable insights to the customer, helping them make an informed purchasing decision.</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })()}
        </div>
        {/* END Product Detail Page (PDP) Section */}

        {/* Mini Cart Section - Mockup */}
        <div className="my-16 md:my-24 pt-12 border-t border-[#0f3460]">
          <header className="mb-8 md:mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold" style={{ color: '#f8f9fa' }}>
              Mini Cart / Cart Preview
            </h2>
          </header>
          <div className="max-w-sm mx-auto p-6 rounded-lg shadow-xl" style={{ backgroundColor: '#16213e' }}>
            <h3 className="text-xl font-heading font-semibold mb-4" style={{ color: '#f8f9fa' }}>Your Cart (2 items)</h3>
            <ul className="space-y-4 mb-6">
              {placeholderProducts.slice(0,2).map(item => (
                <li key={`cart-${item.id}`} className="flex items-center space-x-3">
                  <img src={item.imageUrl} alt={item.name} className="w-16 h-16 rounded object-cover" />
                  <div className="flex-1">
                    <h4 className="text-sm font-medium" style={{ color: '#f8f9fa' }}>{item.name}</h4>
                    <p className="text-xs" style={{ color: '#f8f9fa', opacity: 0.7 }}>Qty: 1</p>
                  </div>
                  <span className="text-sm font-semibold" style={{ color: '#f8f9fa' }}>${item.price.toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="border-t pt-4 mb-6" style={{borderColor: '#0f3460'}}>
              <div className="flex justify-between text-lg font-semibold" style={{ color: '#f8f9fa' }}>
                <span>Subtotal:</span>
                <span>${(placeholderProducts[0].price + placeholderProducts[1].price).toFixed(2)}</span>
              </div>
            </div>
            <div className="space-y-3">
              <button type="button" className="w-full btn py-2.5 px-4 rounded-md text-sm font-medium border transition-colors" style={{borderColor: '#0f3460', color: '#f8f9fa'}} onMouseOver={(e) => e.currentTarget.style.borderColor = '#22d3ee'} onMouseOut={(e) => e.currentTarget.style.borderColor = '#0f3460'}>View Cart</button>
              <button type="button" className="w-full btn py-2.5 px-4 rounded-md text-sm font-medium transition-opacity" style={{backgroundColor: '#e94560', color: '#f8f9fa'}} onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'} onMouseOut={(e) => e.currentTarget.style.opacity = '1'}>Checkout</button>
            </div>
          </div>
        </div>
        {/* END Mini Cart Section */}
      </div>
    </div>
  );
};

export default EcommerceShowcase;
