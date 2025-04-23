'use client';

import { useState, Suspense, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { cardData } from '../data';
import Image from 'next/image';
import Link from 'next/link';
import ButtonWithTextEffect from '../components/Button';

function RecipeContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const vegetarianQuery = searchParams.get('vegetarian');
  const isVegetarian = vegetarianQuery === 'true';

  const filteredRecipes = cardData.filter(recipe => {
    const isMatchingCategory = recipe.category.includes(category?.replace('vegetarian_', ''));
    const isVegetarianCategory = isVegetarian ? recipe.category.includes('vegetarian') : true;
    return isMatchingCategory && isVegetarianCategory;
  });

  const [recipe, setRecipe] = useState(filteredRecipes[0]);

  const getRandomRecipe = () => {
    const randomIndex = Math.floor(Math.random() * filteredRecipes.length);
    setRecipe(filteredRecipes[randomIndex]);
  };

  if (filteredRecipes.length === 0) return <div className="text-sm text-white">No recipes found for this category.</div>;

  return (
    <main className={`min-h-screen flex flex-col items-center justify-center text-black px-4 py-20 relative ${isVegetarian ? 'bg-green-700' : ''}`}>
      
      {/* Back Arrow */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
        <Link href="/menu">
          <Image src="/Frame.svg" alt="Back to menu" width={24} height={24} priority />
        </Link>
      </div>

      <div className="w-full max-w-sm rounded-lg uppercase font-mono">
        <div className="px-4 pb-4 flex flex-col h-full">
          <h5 className="text-2xl font-semibold tracking-tight text-white mb-1 text-center">
            {recipe.title.toUpperCase()}
          </h5>
          <p className="text-xs text-white mb-2 text-center">
            TIME: {recipe.time ? recipe.time.toUpperCase() : 'N/A'}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-6 mt-2 justify-center">
            {recipe.allergens?.length > 0 ? (
              recipe.allergens.map((item, index) => (
                <span
                  key={index}
                  className="bg-red-100 text-red-800 text-[10px] font-medium px-2 py-0.5 rounded-full"
                >
                  {item.toUpperCase()}
                </span>
              ))
            ) : (
              <span className="text-xs text-gray-400">NO ALLERGENS</span>
            )}
          </div>

          <ol className="list-none space-y-1 text-sm text-white">
            {recipe.info?.length > 0 ? (
              recipe.info.map((step, index) => (
                <li key={index} className="bg-black/5 px-3 py-1.5 rounded-md shadow-sm text-xs">
                  {step.toUpperCase()}
                </li>
              ))
            ) : (
              <li className="shadow-sm bg-black/10 px-3 py-1.5 rounded-md text-xs">NO STEPS PROVIDED</li>
            )}
          </ol>

          <div className="flex gap-1 mt-6 justify-center flex-wrap flex-grow overflow-auto max-h-[180px] sm:max-h-[160px]">
            {recipe.ingredients?.length > 0 ? (
              recipe.ingredients.map((ingredient, index) => (
                <span
                  key={index}
                  className="border border-white bg-white text-black text-[10px] font-semibold whitespace-nowrap px-2 py-1 rounded-md shadow-sm"
                >
                  {ingredient.toUpperCase()}
                </span>
              ))
            ) : (
              <span className="text-xs text-gray-400">NO INGREDIENTS</span>
            )}
          </div>
        </div>
      </div>

      {/* Big Beautiful Button */}
      <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 z-20">
        <ButtonWithTextEffect
          onClick={getRandomRecipe}
          className="px-6 py-3 bg-black transition-all duration-500 rounded-xl text-white font-semibold shadow-md"
        />
      </div>
    </main>
  );
}

export default function Recipe() {
  return (
    <Suspense fallback={<div className="text-white text-sm">Loading recipe...</div>}>
      <RecipeContent />
    </Suspense>
  );
}
