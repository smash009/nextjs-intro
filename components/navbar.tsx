import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <Link href="/" className="firstLink" style={{ color: "green" }}>
        Home
      </Link>
      <Link href="/about" className="secondLink" style={{ color: "green" }}>
        About
      </Link>
    </nav>
  );
}
