import { RouterProvider } from "react-router";
import { router } from "./routes";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function App() {
  const [entered, setEntered] = useState(false);

  return (
    <div className="app-bg">
      <div className="app-container">
<div className="food-card shadow-matte"></div>
        <AnimatePresence mode="wait">

          {/* 🔴 FOOD INTRO SCREEN */}
          {!entered && (
            <motion.div
              key="intro"
              className="relative w-full h-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* 🍕 Background food images */}
              <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1">
  <img
    src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=500&q=80"
    className="w-full h-full object-cover"
  />
  <img
    src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=500&q=80"
    className="w-full h-full object-cover"
  />
  <img
    src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=500&q=80"
    className="w-full h-full object-cover"
  />
  <img
    src="https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=500&q=80"
    className="w-full h-full object-cover"
  />
</div>

              {/* 🔴 Dark overlay */}
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white">

                <h1 className="text-3xl font-bold mb-4">
                  Welcome Foodie 🍽️
                </h1>

                <p className="mb-6 text-sm opacity-80">
                  Discover delicious meals
                </p>

                {/* 🔥 DIG IN BUTTON */}
                <button
                  onClick={() => setEntered(true)}
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-red-700 to-red-500 text-white text-lg font-semibold shadow-lg hover:scale-105 transition"
                >
                  🍴 DIG IN
                </button>

              </div>
            </motion.div>
          )}

          {/* 🟢 MAIN APP */}
          {entered && (
            <motion.div
              key="app"
              className="app-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <RouterProvider router={router} />
            </motion.div>
          )}

        </AnimatePresence>

        {/* Bottom Navbar */}

      </div>
    </div>
  );
}