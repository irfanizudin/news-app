import { useContext } from "react";
import Alert from "../components/Alert";
import Layout from "../components/Layout";
import { AppContext } from "../contexts/AppContext";

const Home = () => {
  const { showAlert } = useContext(AppContext);

  return <Layout>{showAlert.login && <Alert message="Login Success!" status="success" />}</Layout>;
};

export default Home;
