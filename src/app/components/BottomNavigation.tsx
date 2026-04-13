import { Home, Heart, Grid3x3, User } from "lucide-react";
import { useLocation } from "react-router";

export function BottomNavigation() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50" style={{ maxWidth: "428px", margin: "0 auto" }}>
      <div className="flex items-center justify-around py-3 px-6">
        <button
          className={`flex flex-col items-center gap-1 transition-colors ${
            isHome ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <div className="relative">
            <Home className="w-6 h-6" fill={isHome ? "currentColor" : "none"} strokeWidth={2} />
            {isHome && (
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
            )}
          </div>
          <span className="text-xs font-medium">Menu</span>
        </button>

        <button className="flex flex-col items-center gap-1 text-muted-foreground transition-colors hover:text-foreground">
          <Heart className="w-6 h-6" strokeWidth={2} />
          <span className="text-xs font-medium">Favorite</span>
        </button>

        <button className="flex flex-col items-center gap-1 text-muted-foreground transition-colors hover:text-foreground">
          <Grid3x3 className="w-6 h-6" strokeWidth={2} />
          <span className="text-xs font-medium">Orders</span>
        </button>

        <button className="flex flex-col items-center gap-1 text-muted-foreground transition-colors hover:text-foreground">
          <User className="w-6 h-6" strokeWidth={2} />
          <span className="text-xs font-medium">Profile</span>
        </button>
      </div>
    </nav>
  );
}
