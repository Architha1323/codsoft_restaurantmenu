import { useState } from "react";
import { Search, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router";
import { menuItems } from "../data/menuData";
import { FoodCard } from "../components/FoodCard";
import { BottomNavigation } from "../components/BottomNavigation";

const categories = ["All", "Breakfast", "Lunch", "Treats", "Dessert", "Drinks"];

export function MenuListing() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cartCount] = useState(3);
  const navigate = useNavigate();

  const filteredItems = selectedCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => {
        if (selectedCategory === "Treats") return item.category === "Desserts";
        if (selectedCategory === "Dessert") return item.category === "Desserts";
        return item.category === selectedCategory;
      });

  return (
    <div className="min-h-screen pb-20" style={{ maxWidth: "428px", margin: "0 auto" }}>
      {/* Header */}
      <header className="bg-card px-5 pt-6 pb-4">
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-2xl font-semibold text-foreground">Menu</h1>
          <button 
            className="relative p-2.5 rounded-xl bg-primary hover:bg-primary/90 transition-colors"
            aria-label="Shopping cart"
          >
            <ShoppingBag className="w-5 h-5 text-primary-foreground" strokeWidth={2.5} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-5">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-muted-foreground" strokeWidth={2} />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-11 pr-4 py-3 bg-input-background rounded-xl border-0 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hide border-b border-border">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`pb-3 px-1 whitespace-nowrap text-sm font-medium transition-all relative ${
                selectedCategory === category
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
              {selectedCategory === category && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"></div>
              )}
            </button>
          ))}
        </div>
      </header>

      {/* Food Grid */}
      <div className="px-5 mt-5">
        <div className="grid grid-cols-2 gap-4">
          {filteredItems.map((item) => (
  <div className="food-card shadow-matte rounded-xl overflow-hidden">
    <FoodCard
      key={item.id}
      item={item}
      onClick={() => navigate(`/food/${item.id}`)}
    />
  </div>
))}
        </div>
      </div>

      <BottomNavigation />

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}