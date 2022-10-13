import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="./favi2.png" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Viktoras Šimkevičius CV",
  keywords: "web developer, React developer, Next.js developer",
  description: "This is my CV website",
};

export default Meta;
