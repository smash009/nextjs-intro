import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  console.log(router);

  return (
    <nav>
      <Link href="/">
        <span className={router.pathname === "/" ? "active" : ""}>Home</span>
      </Link>
      <Link href="/about">
        <span className={router.pathname === "/about" ? "active" : ""}>
          About
        </span>
      </Link>
      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
          background-color: yellow;
        }
        span {
          font-size: 21px;
        }
        .active {
          color: red;
        }
      `}</style>
    </nav>
  );
}
