import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import Alert from "../components/Alert";
import Card from "../components/Card";
import Layout from "../components/Layout";
import { AppContext } from "../contexts/AppContext";

const Home = ({ posts }) => {
  const { showAlert } = useContext(AppContext);

  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("dataUser") === null || localStorage.getItem("loginStatus") === null) {
      router.push("/login");
    }
    return () => {};
  }, []);

  const items = posts.articles.filter((post) => post.urlToImage !== null);

  return (
    <Layout title="News App" description="News App by Irfan Izudin">
      {showAlert.login && <Alert message="Login Success!" status="success" />}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-[80px] mb-[50px] gap-10">
        {items &&
          items.map((item, index) => {
            return <Card key={index} post={item} />;
          })}
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://saurav.tech/NewsAPI/everything/cnn.json");
  const posts = await res.json();
  return {
    props: { posts },
  };
};

export default Home;
