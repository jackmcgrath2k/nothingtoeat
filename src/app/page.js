import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid h-screen grid-rows-[1fr_auto] items-center justify-items-center p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Main Content (Logo + Arrow) */}
      <main className="flex flex-col items-center justify-center gap-8">
        <a href="/menu">
          <Image
            src="/Instagram post - 1.svg"
            alt="Logo"
            width={180}
            height={38}
            priority
          />
        </a>
        <div className="animate-bounce">
          <Link href="/menu">
            <Image
              src="/Frame.svg"
              alt="Arrow"
              width={50}
              height={50}
              priority
            />
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex flex-col items-center gap-6 opacity-50">
        <p>Jack McGrath 2025</p>
        <p className="opacity-20">vibe coding forever! lol</p>
      </footer>
    </div>
  );
}
