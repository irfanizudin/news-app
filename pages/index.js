import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import Alert from "../components/Alert";
import Layout from "../components/Layout";
import { AppContext } from "../contexts/AppContext";

const Home = () => {
  const { showAlert } = useContext(AppContext);

  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("dataUser") === null || localStorage.getItem("loginStatus") === null) {
      router.push("/login");
    }
    return () => {};
  }, []);

  return <Layout>{showAlert.login && <Alert message="Login Success!" status="success" />}</Layout>;
};

export default Home;
