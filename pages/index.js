import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Alert from "../components/Alert";
import Card from "../components/Card";
import Layout from "../components/Layout";
import { AppContext } from "../contexts/AppContext";
import ButtonScrollTop from "../components/ButtonScrollTop";

const Home = ({ posts }) => {
  const { showAlert } = useContext(AppContext);

  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("dataUser") === null || localStorage.getItem("loginStatus") === null) {
      router.push("/login");
    }
    return () => {};
  }, [router]);

  const items = posts.articles.filter((post) => post.urlToImage !== null && post.title !== null);

  const [showBtnScroll, setShowBtnScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowBtnScroll(true);
      } else {
        setShowBtnScroll(false);
      }
    });
    return () => {};
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Layout title="News App" description="News App by Irfan Izudin">
      {showAlert.login && <Alert message="Login Success!" status="success" />}
      <div className="grid place-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:flex 2xl:flex-wrap 2xl:justify-center mt-[30px] md:mt-[80px] mb-[50px] gap-10 sm:px-[50px]">
        {items &&
          items.map((item, index) => {
            return <Card key={index} post={item} />;
          })}
      </div>
      {showBtnScroll && <ButtonScrollTop onClick={scrollToTop} />}
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch("https://saurav.tech/NewsAPI/everything/cnn.json");
  const posts = await res.json();
  return {
    props: { posts },
  };
};

export default Home;
