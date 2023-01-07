import Head from "next/head";

interface title {
  title: string;
}

export default function Seo({ title }: title) {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
}
