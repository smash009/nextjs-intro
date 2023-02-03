import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail({ params }: any) {
  // const router = useRouter();
  const [title, id]: any = params || [];

  return (
    <div>
      <Seo title={title} />
      <h4>{title || "Loading..."}</h4>
      <p>{id}</p>
    </div>
  );
}

export function getServerSideProps({ params: { params } }: any) {
  return {
    props: { params },
  };
}
