'use client'; // This tells Next.js that this file is a client-side component

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation'; // Get search params from URL
import { cardData } from '../data'; // Your recipe data
import Image from 'next/image';
import Link from 'next/link';
import ButtonWithTextEffect from '../components/Button';

export default function Recipe() {
  // Get the 'category' from URL search params
  const searchParams = useSearchParams();
  const category = searchParams.get('category'); // Get category (breakfast, lunch, etc.)

  // Filter recipes based on the category from URL
  const filteredRecipes = cardData.filter(recipe => recipe.category.includes(category));

  // If no recipes are found for the category, return early with nothing
  if (filteredRecipes.length === 0) return <div>No recipes found for this category.</div>;

  // Initialize the recipe state with the first recipe from the filtered list
  const [recipe, setRecipe] = useState(filteredRecipes[0]);

  // Function to get a random recipe from the filtered list
  const getRandomRecipe = () => {
    const randomIndex = Math.floor(Math.random() * filteredRecipes.length);
    setRecipe(filteredRecipes[randomIndex]);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-black px-4 py-20 relative">
      {/* Centered Back Arrow */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-10">
        <Link href="/menu">
          <Image
            src="/Frame.svg"
            alt="Back to menu"
            width={30}
            height={30}
            priority
          />
        </Link>
      </div>

      {/* Recipe Card */}
      <div className="w-full max-w-sm rounded-lg uppercase font-mono">
        <div className="px-5 pb-5 flex flex-col h-full">
          {/* Title */}
          <h5 className="text-5xl font-semibold tracking-tight text-white">
            {recipe.title.toUpperCase()}
          </h5>

          {/* Meta Info */}
          <p className="text-md text-white mt-1">
            TIME: {recipe.time ? recipe.time.toUpperCase() : 'N/A'}
          </p>

          {/* Allergens */}
          <div className="flex flex-wrap gap-2 mb-8 mt-4">
            {recipe.allergens?.length > 0 ? (
              recipe.allergens.map((item, index) => (
                <span
                  key={index}
                  className="bg-red-100 text-red-800 text-xs font-medium px-3 py-1 rounded-full"
                >
                  {item.toUpperCase()}
                </span>
              ))
            ) : (
              <span className="text-sm text-gray-400">NO ALLERGENS</span>
            )}
          </div>

          {/* Steps */}
          <ol className="list-none space-y-2 text-md text-white">
            {recipe.info?.length > 0 ? (
              recipe.info.map((step, index) => (
                <li
                  key={index}
                  className="bg-black/5 px-4 py-2 rounded-md shadow-md"
                >
                  {step.toUpperCase()}
                </li>
              ))
            ) : (
              <li className="shadow-md bg-black/10 px-4 py-2 rounded-md">
                NO STEPS PROVIDED
              </li>
            )}
          </ol>

          {/* Ingredients */}
          <div className="flex gap-1.5 mt-8 justify-center flex-wrap flex-grow overflow-auto max-h-[250px] sm:max-h-[200px]">
            {recipe.ingredients?.length > 0 ? (
              recipe.ingredients.map((ingredient, index) => (
                <span
                  key={index}
                  className="border border-white bg-white text-black text-xs font-semibold whitespace-nowrap px-3 py-2 sm:px-3 sm:py-2 rounded-md shadow-md"
                >
                  {ingredient.toUpperCase()}
                </span>
              ))
            ) : (
              <span className="text-sm text-gray-400">NO INGREDIENTS</span>
            )}
          </div>
        </div>
      </div>

      {/* Fixed Button at Bottom */}
      <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 z-20">
        <ButtonWithTextEffect
          onClick={getRandomRecipe} // Use the function to change recipe on click
          className="px-6 py-3 bg-black transition-all duration-500 rounded-xl text-white font-semibold shadow-md"
        />
      </div>
    </main>
  );
}
