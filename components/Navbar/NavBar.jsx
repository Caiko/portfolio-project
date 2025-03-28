import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="">
      <div className="">
        <div>
          <Link href="/" className="">
            Logo
          </Link>
        </div>
        <div className="">
          <Link href="/about" className="">
            About Me
          </Link>
          <Link href="/projects" className="">
            Projects
          </Link>
          <Link href="/contact" className="">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
