import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, title, description }) => {
  const { pathname } = useRouter();
  const route = pathname.split("/")[1];
  const btnHeader = (route === "login" && "register") || (route === "register" && "login");

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content="" />
      </Head>
      <Header buttonText={btnHeader} buttonLink={btnHeader} />
      <main className="w-full min-h-screen bg-white flex justify-center">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
