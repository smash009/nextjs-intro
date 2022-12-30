import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  console.log(router);

  return (
    <nav>
      <Link
        href="/"
        className="firstLink"
        style={{ color: router.pathname === "/" ? "red" : "black" }}
      >
        Home
      </Link>
      <Link
        href="/about"
        className="secondLink"
        style={{ color: router.pathname === "/about" ? "red" : "black" }}
      >
        About
      </Link>
    </nav>
  );
}
