import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#34495E] shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div>
          <Link href="/" className="text-xl font-bold">
            Logo
          </Link>
        </div>
        <div className="space-x-6">
          <Link
            href="/about"
            className="bg-[#FF6B6B] text-black px-4 py-2 rounded hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]
         active:-translate-y-px active:shadow-[0_5px_10px_rgba(0,0,0,0.2)]"
          >
            About Me
          </Link>
          <Link
            href="/projects"
            className="bg-[#FFD93D] text-black px-4 py-2 rounded hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]
         active:-translate-y-px active:shadow-[0_5px_10px_rgba(0,0,0,0.2)]"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="bg-[#6BCB77] text-black px-4 py-2 rounded hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]
         active:-translate-y-px active:shadow-[0_5px_10px_rgba(0,0,0,0.2)]"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

// className="bg-blue-500 text-white px-4 py-2 rounded transition-transform shadow-md
//          hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]
//          active:-translate-y-px active:shadow-[0_5px_10px_rgba(0,0,0,0.2)]"
//           >
