'use client';
import Link from "next/link";
import Image from "next/image";

export default function Menu() {
  return (
    <main className="min-h-screen text-white flex items-center justify-center px-6">
      <ul className="flex flex-col gap-6 text-4xl font-bold uppercase leading-none">
        <Link href={{ pathname: "/recipe", query: { category: "breakfast" } }} passHref>
          <li className="flex items-center gap-4 transform transition-transform duration-1500 hover:scale-125">
            <span className="opacity-50 font-mono">01</span>
            <span>BREAKFAST</span>
          </li>
        </Link>
        <Link href={{ pathname: '/recipe', query: { category: "lunch" } }} passHref>
          <li className="flex items-center gap-4 transform transition-transform duration-1500 hover:scale-125">
            <span className="opacity-50 font-mono">02</span>
            <span>LUNCH</span>
          </li>
        </Link>
        <Link href={{ pathname: "/recipe", query: { category: "dinner" } }} passHref>
          <li className="flex items-center gap-4 transform transition-transform duration-1500 hover:scale-125">
            <span className="opacity-50 font-mono">03</span>
            <span>DINNER</span>
          </li>
        </Link>
      </ul>
    </main>
  );
}
