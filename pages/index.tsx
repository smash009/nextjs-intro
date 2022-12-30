import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <h1>Hello</h1>
      <style jsx global>{`
        a {
          text-decoration: none;
        }
      `}</style>
    </div>
  );
}
