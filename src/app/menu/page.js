'use client';
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Menu() {
  const router = useRouter();
  const [vegetarian, setVegetarian] = useState(false);

  // Check if the vegetarian state is present in the URL when the component mounts
  useEffect(() => {
    const queryVegetarian = new URLSearchParams(window.location.search).get("vegetarian");
    if (queryVegetarian === "true") {
      setVegetarian(true);
    }
  }, []);

  const buildLink = (baseCategory) => {
    const category = vegetarian ? `vegetarian_${baseCategory}` : baseCategory;
    return {
      pathname: "/recipe",
      query: { category, vegetarian: vegetarian.toString() },  // Add vegetarian state to the query params
    };
  };

  const toggleVegetarian = () => {
    const newVegetarianState = !vegetarian;
    setVegetarian(newVegetarianState);

    // Ensure the URL is updated with the new vegetarian state as a string
    const newUrl = `/menu?vegetarian=${newVegetarianState.toString()}`;

    // Update the URL to reflect the new vegetarian state
    router.push(newUrl);
  };

  return (
    <main className={`min-h-screen text-white flex flex-col items-center justify-center px-6 transition-colors duration-500 ${vegetarian ? 'bg-green-700' : ''}`}>
      <button
        onClick={toggleVegetarian}
        className={`mb-8 px-6 py-2 rounded-full font-bold transition ${vegetarian ? 'bg-green-700 text-white border-2 border-white' : 'bg-white text-black border-2 border-transparent'}`}
      >
        Vegetarian
      </button>

      <ul className="flex flex-col gap-6 text-4xl font-bold uppercase leading-none">
        <Link href={buildLink("breakfast")} passHref>
          <li className="flex items-center gap-4 transform transition-transform duration-500 hover:scale-125 cursor-pointer">
            <span className="opacity-50 font-mono">01</span>
            <span>BREAKFAST</span>
          </li>
        </Link>
        <Link href={buildLink("lunch")} passHref>
          <li className="flex items-center gap-4 transform transition-transform duration-500 hover:scale-125 cursor-pointer">
            <span className="opacity-50 font-mono">02</span>
            <span>LUNCH</span>
          </li>
        </Link>
        <Link href={buildLink("dinner")} passHref>
          <li className="flex items-center gap-4 transform transition-transform duration-500 hover:scale-125 cursor-pointer">
            <span className="opacity-50 font-mono">03</span>
            <span>DINNER</span>
          </li>
        </Link>
      </ul>
    </main>
  );
}
