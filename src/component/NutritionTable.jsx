import React from "react";

// Component to display nutrition facts using a table layout
export default function NutritionTable({ nutrition }) {
  return (
    <table className="w-72 table-auto">
      <tbody>
        <tr className="border-b">
          <td className="p-2">Calories</td>
          <td className="p-2 text-red-700 text-right">{nutrition.calories}</td>
        </tr>
        <tr className="border-b">
          <td className="p-2">Carbs</td>
          <td className="p-2 text-red-700 text-right">{nutrition.carbs}</td>
        </tr>
        <tr className="border-b">
          <td className="p-2">Protein</td>
          <td className="p-2 text-red-700 text-right">{nutrition.protein}</td>
        </tr>
        <tr className="border-b">
          <td className="p-2">Fat</td>
          <td className="p-2 text-red-700 text-right">{nutrition.fat}</td>
        </tr>
      </tbody>
    </table>
  );
}
