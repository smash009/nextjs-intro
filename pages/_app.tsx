import { AppProps } from "next/app";
import NavBar from "../components/NavBar";
// import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
      <span>Hello</span>
      <style jsx global>{`
        a {
          text-decoration: none;
        }
      `}</style>
    </div>
  );
}
