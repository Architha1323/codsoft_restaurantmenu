import { Clock, Star } from "lucide-react";
import { MenuItem } from "../data/menuData";

interface FoodCardProps {
  item: MenuItem;
  onClick: () => void;
}

export function FoodCard({ item, onClick }: FoodCardProps) {
  return (
    <button
      onClick={onClick}
      className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 text-left"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-3.5">
        <h3 className="text-sm font-semibold text-foreground mb-2 line-clamp-1">
          {item.name}
        </h3>
        
        {/* Time & Rating */}
        <div className="flex items-center gap-3 mb-3">
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-muted-foreground" strokeWidth={2} />
            <span className="text-xs text-muted-foreground">{item.time}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" strokeWidth={0} />
            <span className="text-xs text-foreground font-medium">{item.rating}</span>
          </div>
        </div>

        {/* Price */}
        <div className="text-base font-semibold text-foreground">
          {item.price.toFixed(2)}$
        </div>
      </div>
    </button>
  );
}