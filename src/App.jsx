import React from "react";
import RecipeCard from "./component/RecipeCard";
import foodImg from "./assets/images/image-omelette.jpeg";

// Main App component
export default function App() {
  const recipe = {
    title: "Simple Omelette Recipe",
    description: "An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.",
    image: foodImg,
    preparationTime: [
      { label: "Total", time: "Approximately 10 minutes" },
      { label: "Preparation", time: "5 minutes" },
      { label: "Cooking", time: "5 minutes" }
    ],
    ingredients: [
      "2-3 large eggs",
      "Salt, to taste",
      "Pepper, to taste",
      "1 tablespoon of butter or oil",
      "Optional fillings: cheese, diced vegetables, cooked meats, herbs"
    ],
    instructions: [
      {
        step: "Beat the eggs",
        description: "In a bowl, beat the eggs with a pinch of salt and pepper until well mixed. You can add a tablespoon of water or milk for a fluffier texture."
      },
      {
        step: "Heat the pan",
        description: "Place a non-stick frying pan over medium heat and add butter or oil."
      },
      {
        step: "Cook the omelette",
        description: "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface."
      },
      {
        step: "Add fillings (optional)",
        description: "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette."
      },
      {
        step: "Fold and serve",
        description: "Carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate."
      },
      {
        step: "Enjoy",
        description: "Serve hot, with additional salt and pepper if needed."
      }
    ],
    nutrition: {
      calories: "277kcal",
      carbs: "0g",
      protein: "20g",
      fat: "22g"
    }
  };

  return (
    <main className="min-h-screen flex justify-center bg-rose-200">
      <RecipeCard recipe={recipe} />
    </main>
  );
}
