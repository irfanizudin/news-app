import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Alert from "../components/Alert";
import Layout from "../components/Layout";
import { AppContext } from "../contexts/AppContext";

const Home = () => {
  const { showAlert } = useContext(AppContext);

  const router = useRouter();

  useEffect(() => {
    localStorage.setItem("login", JSON.stringify({ status: false }));
    const { status } = JSON.parse(localStorage.getItem("login"));
    if (!status) {
      router.push("/login");
      console.log("login dulu");
    } else {
      console.log("sudah login");
    }
    return () => {};
  }, []);

  return <Layout>{showAlert.login && <Alert message="Login Success!" status="success" />}</Layout>;
};

export default Home;
