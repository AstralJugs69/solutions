import React from 'react';
import RecipeCard from './RecipeCard';
import { FiSearch, FiFilter, FiChevronDown, FiCheck, FiClock, FiStar, FiUsers, FiHeart, FiShare2, FiPrinter } from 'react-icons/fi'; // Added FiClock, FiStar, FiUsers, FiHeart, FiShare2, FiPrinter

// Placeholder data
const popularRecipes = [
  { id: 'r1', name: 'Classic Tomato Pasta', imageUrl: 'https://via.placeholder.com/300x200/84cc16/1e3e1b?text=Tomato+Pasta', cookTime: '25 mins', rating: 4.5, servings: 4 },
  { id: 'r2', name: 'Spicy Chicken Stir-fry', imageUrl: 'https://via.placeholder.com/300x200/a3e635/1e3e1b?text=Chicken+Stir-fry', cookTime: '30 mins', rating: 4.7, servings: 3 },
  { id: 'r3', name: 'Avocado & Egg Toast', imageUrl: 'https://via.placeholder.com/300x200/3f6212/f7fee7?text=Avocado+Toast', cookTime: '10 mins', rating: 4.3, servings: 1 },
  { id: 'r4', name: 'Berry Smoothie Bowl', imageUrl: 'https://via.placeholder.com/300x200/1e3e1b/f7fee7?text=Smoothie+Bowl', cookTime: '5 mins', rating: 4.8, servings: 1 },
];

const quickDinners = [
  { id: 'r5', name: 'One-Pan Lemon Herb Chicken', imageUrl: 'https://via.placeholder.com/300x200/84cc16/3f6212?text=Lemon+Chicken', cookTime: '35 mins', rating: 4.6, servings: 4 },
  { id: 'r6', name: 'Quick Shrimp Scampi', imageUrl: 'https://via.placeholder.com/300x200/a3e635/3f6212?text=Shrimp+Scampi', cookTime: '20 mins', rating: 4.4, servings: 2 },
  { id: 'r7', name: 'Veggie Quesadillas', imageUrl: 'https://via.placeholder.com/300x200/3f6212/f0f9ff?text=Quesadillas', cookTime: '15 mins', rating: 4.2, servings: 2 },
  { id: 'r8', name: 'Speedy Beef Tacos', imageUrl: 'https://via.placeholder.com/300x200/1e3e1b/f0f9ff?text=Beef+Tacos', cookTime: '25 mins', rating: 4.5, servings: 4 },
];

const searchResultRecipes = [ ...popularRecipes, ...quickDinners ].slice(0,8); // Use a mix for search results

const FilterCheckbox: React.FC<{ label: string; id: string; checked?: boolean }> = ({ label, id, checked }) => (
  <label htmlFor={id} className="flex items-center space-x-2 cursor-pointer hover:opacity-80 text-sm">
    <input type="checkbox" id={id} defaultChecked={checked} className="form-checkbox h-4 w-4 rounded" style={{accentColor: '#84cc16', backgroundColor: '#3f6212'}} />
    <span>{label}</span>
  </label>
);


const RecipeFinderShowcase: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#1e3e1b', color: '#f7fee7' }} className="py-12 md:py-16 showcase-recipe-finder font-sans">
      {/* Main Showcase Header - Centered within the component itself */}
      <header className="text-center pt-4 pb-12 md:pb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 leading-tight">
          RecipeRoam
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto opacity-90">
          Your Culinary Adventure Starts Here. Discover, Cook, Enjoy!
        </p>
      </header>

      {/* Homepage/Discovery Feed Section */}
      <section id="rf-discovery" className="container mx-auto px-4 mb-16 md:mb-24">
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="relative">
            <input
              type="search"
              placeholder="Search for recipes, ingredients, cuisines..."
              className="w-full p-4 pr-12 text-base rounded-lg border-none shadow-lg focus:ring-2 focus:outline-none"
              style={{ backgroundColor: '#f7fee7', color: '#1e3e1b', ringColor: '#84cc16' }}
            />
            <FiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{color: '#3f6212'}}/>
          </div>
        </div>

        {/* Categorized Shelves */}
        <div>
          {/* Popular This Week */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6" style={{color: '#f7fee7'}}>Popular This Week</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {popularRecipes.map(recipe => <RecipeCard key={recipe.id} {...recipe} />)}
            </div>
          </div>

          {/* Quick & Easy Dinners */}
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-6" style={{color: '#f7fee7'}}>Quick & Easy Dinners</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {quickDinners.map(recipe => <RecipeCard key={recipe.id} {...recipe} />)}
            </div>
          </div>
        </div>
      </section>
      {/* END Homepage/Discovery Feed Section */}

      {/* Recipe Listing/Search Results Page Section */}
      <section id="rf-listing" className="container mx-auto px-4 py-12 md:py-16 border-t border-dashed" style={{borderColor: '#3f6212'}}>
         <header className="mb-8 md:mb-12 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-heading font-bold" style={{ color: '#f7fee7' }}>
              Search Results for "Chicken"
            </h2>
          </header>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Filter Sidebar Mockup */}
            <aside className="w-full md:w-1/4 lg:w-1/5 p-6 rounded-xl shadow-lg" style={{backgroundColor: '#3f6212'}}>
              <h3 className="text-xl font-heading font-semibold mb-6" style={{color: '#f7fee7'}}>Filters</h3>
              {/* Cuisine Filter */}
              <div className="mb-6">
                <h4 className="text-md font-heading font-medium mb-3" style={{color: '#a3e635'}}>Cuisine</h4>
                <div className="space-y-2">
                  <FilterCheckbox id="cuisine-italian" label="Italian" />
                  <FilterCheckbox id="cuisine-mexican" label="Mexican" checked />
                  <FilterCheckbox id="cuisine-indian" label="Indian" />
                  <FilterCheckbox id="cuisine-chinese" label="Chinese" />
                </div>
              </div>
              {/* Dietary Restrictions Filter */}
              <div className="mb-6">
                <h4 className="text-md font-heading font-medium mb-3" style={{color: '#a3e635'}}>Dietary Needs</h4>
                <div className="space-y-2">
                  <FilterCheckbox id="diet-vegetarian" label="Vegetarian" />
                  <FilterCheckbox id="diet-glutenfree" label="Gluten-Free" checked/>
                  <FilterCheckbox id="diet-vegan" label="Vegan" />
                </div>
              </div>
              {/* Cook Time Filter */}
              <div className="mb-6">
                <h4 className="text-md font-heading font-medium mb-3" style={{color: '#a3e635'}}>Cook Time</h4>
                <div className="space-y-2">
                  <FilterCheckbox id="time-under15" label="Under 15 min" />
                  <FilterCheckbox id="time-under30" label="Under 30 min" checked/>
                  <FilterCheckbox id="time-under60" label="Under 1 hour" />
                </div>
              </div>
               <div className="mt-8 space-y-3">
                <button type="button" className="w-full btn text-sm py-2 px-4 rounded-md transition-opacity" style={{backgroundColor: '#84cc16', color: '#1e3e1b'}} onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'} onMouseOut={(e) => e.currentTarget.style.opacity = '1'}>Apply Filters</button>
              </div>
            </aside>

            {/* Main Content Area: Sorting + Recipe Grid */}
            <main className="w-full md:w-3/4 lg:w-4/5">
              {/* Sorting Options Mockup */}
              <div className="mb-6 flex justify-end">
                <div className="relative inline-block text-left">
                  <button type="button" className="inline-flex justify-center w-full rounded-md border shadow-sm px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2" style={{backgroundColor: '#3f6212', borderColor: '#1e3e1b', color: '#f7fee7', ringColor: '#84cc16', ringOffsetColor: '#1e3e1b'}} aria-haspopup="true" aria-expanded="true">
                    Sort by: Relevance <FiChevronDown className="ml-2 -mr-1 h-5 w-5"/>
                  </button>
                </div>
              </div>
              {/* Recipe Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {searchResultRecipes.map(recipe => <RecipeCard key={recipe.id} {...recipe} />)}
              </div>
            </main>
          </div>
      </section>
      {/* END Recipe Listing Section */}

      {/* END Recipe Listing Section */}

      {/* Recipe Detail Page (PDP) Section - Mockup */}
      <section id="rf-detail" className="container mx-auto px-4 py-12 md:py-16 border-t border-dashed" style={{borderColor: '#3f6212'}}>
        <header className="mb-8 md:mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold" style={{ color: '#f7fee7' }}>
            Delicious Classic Tomato Pasta
          </h2>
          <p className="text-lg text-[#f7fee7]/80">A closer look at this amazing recipe.</p>
        </header>

        <div className="max-w-4xl mx-auto" style={{backgroundColor: '#3f6212', color: '#f7fee7'}} class="rounded-xl shadow-2xl overflow-hidden">
          {/* Large Image */}
          <div className="aspect-[16/9] md:aspect-[2/1]">
            <img
              src="https://via.placeholder.com/800x450/84cc16/1e3e1b?text=Delicious+Tomato+Pasta"
              alt="Classic Tomato Pasta"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6 md:p-8 lg:p-10">
            {/* Quick Info Bar */}
            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3 mb-6 text-sm font-sans opacity-90">
              <span className="flex items-center"><FiClock className="w-4 h-4 mr-1.5" style={{color: '#a3e635'}}/> Prep: 10 mins</span>
              <span className="flex items-center"><FiClock className="w-4 h-4 mr-1.5" style={{color: '#a3e635'}}/> Cook: 25 mins</span>
              <span className="flex items-center"><FiUsers className="w-4 h-4 mr-1.5" style={{color: '#a3e635'}}/> Serves: 4</span>
              <span className="flex items-center"><FiStar className="w-4 h-4 mr-1.5" style={{color: '#FFC107'}}/> Rating: 4.5 (120 reviews)</span>
            </div>

            <p className="font-sans text-base leading-relaxed mb-8 opacity-90">
              A timeless classic, this tomato pasta is simple to make yet bursting with flavor. Perfect for a weeknight dinner or a comforting meal. Made with fresh ingredients for an authentic Italian taste.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Ingredients List */}
              <div className="md:col-span-1">
                <h3 className="text-xl font-heading font-semibold mb-4" style={{color: '#a3e635'}}>Ingredients</h3>
                <ul className="space-y-2 text-sm">
                  {['400g Spaghetti', '1 can (400g) Chopped Tomatoes', '2 cloves Garlic, minced', '1 Onion, chopped', '2 tbsp Olive Oil', '1 tsp Dried Oregano', 'Salt and Pepper to taste', 'Fresh Basil leaves', 'Parmesan Cheese (optional)'].map((ing, i) => (
                    <li key={i} className="flex items-center">
                      <input type="checkbox" id={`ing-${i}`} className="form-checkbox h-4 w-4 mr-2 rounded" style={{accentColor: '#84cc16', backgroundColor: '#1e3e1b'}} />
                      <label htmlFor={`ing-${i}`}>{ing}</label>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Instructions */}
              <div className="md:col-span-2">
                <h3 className="text-xl font-heading font-semibold mb-4" style={{color: '#a3e635'}}>Instructions</h3>
                <ol className="list-decimal list-inside space-y-3 text-sm leading-relaxed">
                  <li>Heat olive oil in a large pan over medium heat. Add chopped onion and cook until softened, about 5 minutes.</li>
                  <li>Add minced garlic and dried oregano, cook for another minute until fragrant.</li>
                  <li>Pour in the chopped tomatoes. Season with salt and pepper. Bring to a simmer and cook for 15 minutes, stirring occasionally.</li>
                  <li>Meanwhile, cook spaghetti according to package directions until al dente. Drain.</li>
                  <li>Add cooked spaghetti to the tomato sauce. Toss to combine.</li>
                  <li>Serve immediately, garnished with fresh basil leaves and a sprinkle of Parmesan cheese, if desired.</li>
                </ol>
              </div>
            </div>

            {/* Nutritional Info (Mockup) */}
            <div className="mb-8 p-4 rounded-lg" style={{backgroundColor: '#1e3e1b', opacity:0.8}}>
              <h4 className="text-lg font-heading font-semibold mb-2" style={{color: '#a3e635'}}>Nutritional Information (per serving - approx.)</h4>
              <ul className="text-xs grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-1">
                <li>Calories: 450</li>
                <li>Protein: 15g</li>
                <li>Fat: 12g</li>
                <li>Carbs: 70g</li>
                <li>Fiber: 8g</li>
                <li>Sugar: 10g</li>
              </ul>
            </div>

            {/* User Reviews Snippet */}
            <div className="mb-8">
              <h4 className="text-lg font-heading font-semibold mb-3" style={{color: '#a3e635'}}>What Others Are Saying</h4>
              <div className="space-y-3">
                {[
                  {name: 'FoodieFan123', rating: 5, comment: "Absolutely delicious and so easy to make!"},
                  {name: 'WeeknightChef', rating: 4, comment: "My go-to pasta recipe. A family favorite."},
                ].map((review, i) => (
                  <div key={i} className="p-3 rounded" style={{backgroundColor: '#1e3e1b', opacity:0.8}}>
                    <div className="flex items-center mb-1">
                      {[...Array(5)].map((_, starIdx) => <FiStar key={starIdx} className={`w-3.5 h-3.5 ${starIdx < review.rating ? 'text-yellow-400' : 'text-gray-400'}`} />)}
                      <p className="ml-2 text-sm font-semibold">{review.name}</p>
                    </div>
                    <p className="text-xs">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <button type="button" className="btn text-sm py-2 px-4 rounded-md flex items-center" style={{backgroundColor: '#84cc16', color: '#1e3e1b'}}><FiHeart className="mr-2 w-4 h-4"/> Save Recipe</button>
              <button type="button" className="btn text-sm py-2 px-4 rounded-md flex items-center" style={{backgroundColor: '#a3e635', color: '#1e3e1b'}}><FiShare2 className="mr-2 w-4 h-4"/> Share</button>
              <button type="button" className="btn text-sm py-2 px-4 rounded-md flex items-center" style={{backgroundColor: '#a3e635', color: '#1e3e1b'}}><FiPrinter className="mr-2 w-4 h-4"/> Print</button>
            </div>
          </div>
        </div>
      </section>
      {/* END Recipe Detail Page Section */}

      {/* Meal Planner/Saved Recipes Snippet Section */}
      <section id="rf-meal-planner" className="container mx-auto px-4 py-12 md:py-16 border-t border-dashed" style={{borderColor: '#3f6212'}}>
        <header className="mb-8 md:mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold" style={{ color: '#f7fee7' }}>
            My Meal Plan & Favorites
          </h2>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Meal Planner Mockup */}
          <div className="lg:col-span-2 p-6 rounded-xl shadow-xl" style={{backgroundColor: '#3f6212'}}>
            <h3 className="text-xl font-heading font-semibold mb-4" style={{color: '#a3e635'}}>This Week's Plan</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2 text-center text-xs font-sans">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                <div key={day} className="p-1.5 rounded-lg" style={{backgroundColor: '#1e3e1b'}}>
                  <p className="font-semibold mb-1.5 text-sm" style={{color: '#f7fee7'}}>{day}</p>
                  <div className="space-y-1 min-h-[60px]">
                    {day === 'Mon' && <div className="p-1 text-xs rounded bg-[#84cc16] text-[#1e3e1b] truncate">Tomato Pasta</div>}
                    {day === 'Wed' && <div className="p-1 text-xs rounded bg-[#84cc16] text-[#1e3e1b] truncate">Chicken Stir-fry</div>}
                    {day === 'Fri' && <div className="p-1 text-xs rounded bg-[#84cc16] text-[#1e3e1b] truncate">Shrimp Scampi</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Saved Recipes Snippet */}
          <div className="p-6 rounded-xl shadow-xl" style={{backgroundColor: '#3f6212'}}>
            <h3 className="text-xl font-heading font-semibold mb-4" style={{color: '#a3e635'}}>Saved Favorites</h3>
            <div className="space-y-3">
              {popularRecipes.slice(0,2).map(recipe => (
                 <div key={`fav-${recipe.id}`} className="flex items-center space-x-3 p-2 rounded-md hover:opacity-80 cursor-pointer" style={{backgroundColor: '#1e3e1b'}}>
                    <img src={recipe.imageUrl} alt={recipe.name} className="w-12 h-12 object-cover rounded"/>
                    <div>
                      <h4 className="text-sm font-medium leading-tight">{recipe.name}</h4>
                      <p className="text-xs opacity-70">{recipe.cookTime}</p>
                    </div>
                 </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* END Meal Planner/Saved Recipes Snippet Section */}
    </div>
  );
};

export default RecipeFinderShowcase;
