import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export default function NavBar() {
  const router = useRouter();
  // console.log(router);

  return (
    <nav>
      <Image src="/vercel.svg" alt="Test Image" width={90} height={30} />
      <div className="linkWrap">
        <Link
          href="/"
          legacyBehavior
          className={router.pathname === "/" ? "active" : ""}
        >
          <a>Home</a>
        </Link>
        <Link
          href="/about"
          legacyBehavior
          className={router.pathname === "/about" ? "active" : ""}
        >
          <a>About</a>
        </Link>
      </div>
      <style jsx>{`
        a {
          text-decoration: none;
        }

        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }

        img {
          max-width: 100px;
          margin-bottom: 5px;
        }

        .linkWrap {
          display: flex;
          flex-direction: row;
          width: 100%;
        }

        nav a {
          width: 50%;
          font-weight: 600;
          font-size: 18px;
          text-align: center;
        }

        .active {
          color: tomato;
        }

        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </nav>
  );
}
