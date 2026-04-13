import { useParams, useNavigate } from "react-router";
import { ArrowLeft, Clock, Star, ShoppingBag, Heart } from "lucide-react";
import { menuItems } from "../data/menuData";
import { useState } from "react";
import { BottomNavigation } from "../components/BottomNavigation";

export function FoodDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const item = menuItems.find((item) => item.id === id);
  
  if (!item) {
    return <div>Item not found</div>;
  }

  const recentlyViewed = menuItems
    .filter((i) => i.id !== item.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen pb-20" style={{ maxWidth: "428px", margin: "0 auto" }}>

      {/* Hero Image */}
      <div className="relative h-[340px] bg-muted">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
        
        {/* Top Navigation */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-5">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg"
          >
            <ArrowLeft className="w-5 h-5 text-primary-foreground" />
          </button>
          
          <button className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg">
            <ShoppingBag className="w-5 h-5 text-primary-foreground" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-5 mt-5">

        {/* Main Info */}
        <div className="mb-6">
          <h1 className="text-xl font-semibold text-foreground mb-3">
            {item.name}
          </h1>

          <div className="flex items-center gap-4 mb-3">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">{item.time}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="text-sm font-medium">{item.rating}</span>
            </div>
          </div>

          <div className="text-xl font-semibold mb-4">
            {item.price.toFixed(2)}$
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Recently Viewed */}
        <div className="mb-6">
          <h3 className="text-base font-semibold mb-3">Recently Viewed</h3>
          <div className="flex gap-3 overflow-x-auto scrollbar-hide -mx-5 px-5">
            {recentlyViewed.map((viewedItem) => (
              <button
                key={viewedItem.id}
                onClick={() => navigate(`/food/${viewedItem.id}`)}
                className="flex-shrink-0 w-24"
              >
                <div className="aspect-square rounded-xl overflow-hidden bg-muted mb-1.5">
                  <img
                    src={viewedItem.image}
                    alt={viewedItem.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* 🔥 ADD TO CART (INLINE, RED BUTTON) */}
        <div className="mb-6">
          <div className="flex items-center gap-3 bg-card p-3 rounded-xl shadow-matte">

            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className={`w-12 h-12 rounded-xl flex items-center justify-center border-2 ${
                isFavorite 
                  ? "border-primary bg-primary/10" 
                  : "border-border"
              }`}
            >
              <Heart 
                className={`w-6 h-6 ${isFavorite ? "fill-primary text-primary" : "text-muted-foreground"}`}
              />
            </button>

            <button className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3.5 rounded-xl font-semibold text-base">
              Add to cart
            </button>

          </div>
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