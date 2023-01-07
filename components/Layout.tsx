import NavBar from "../components/navbar";

export default function Layout({ children }: any) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
