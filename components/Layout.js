import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, title, description, image }) => {
  return (
    <div className="font-inter">
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />
      </Head>
      <Header />
      <main className="w-full min-h-screen bg-white flex justify-center">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
