import React from "react";
import Section from "./Section";
import TimeList from "./TimeList";
import NutritionTable from "./NutritionTable";

// Recipe Card component
export default function RecipeCard({ recipe }) {
  return (
    <section className="flex flex-col sm:w-1/3 bg-white rounded-lg sm:mt-10 shadow-md">
      <div className="p-4">
        <img src={recipe.image} alt={recipe.title} className="rounded-lg" />
      </div>

      <article className="flex flex-col gap-4 p-4">
        <h1 className="text-4xl font-bold">{recipe.title}</h1>
        <p>{recipe.description}</p>

        {/* Preparation Time */}
        <Section title="Preparation Time">
          <TimeList times={recipe.preparationTime} />
        </Section>

        <hr />

        {/* Ingredients */}
        <Section title="Ingredients">
          <ul className="list-disc p-4">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </Section>

        <hr />

        {/* Instructions */}
        <Section title="Instructions">
          <ol className="list-decimal p-4">
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>
                <strong>{instruction.step}:</strong> {instruction.description}
              </li>
            ))}
          </ol>
        </Section>

        <hr />

        {/* Nutrition */}
        <Section title="Nutrition">
          <p>The table below shows nutritional values per serving without the additional fillings.</p>
          <NutritionTable nutrition={recipe.nutrition} />
        </Section>
      </article>
    </section>
  );
}
