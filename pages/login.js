import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import Alert from "../components/Alert";
import Input from "../components/Input";
import Layout from "../components/Layout";
import { AppContext } from "../contexts/AppContext";

const login = () => {
  const { input, setInput, showAlert, setShowAlert } = useContext(AppContext);

  const router = useRouter();
  const handleLogin = (e) => {
    e.preventDefault();

    if (localStorage.getItem("dataUser") !== null) {
      const { email, password } = JSON.parse(localStorage.getItem("dataUser"));
      if (input.email === email && input.password === password) {
        localStorage.setItem("loginStatus", true);
        setShowAlert({ login: true });
        router.push("/");
      } else {
        setShowAlert({ wrongLogin: true });
        console.log("Email atau password salah");
        console.log("wrongLogin", showAlert.wrongLogin);
      }
    } else {
      setShowAlert({ notRegistered: true });
      console.log("Akun belum terdaftar");
      console.log("not registerd ", showAlert.notRegistered);
    }

    setInput({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      gender: "",
      province: "",
      city: "",
    });
  };

  return (
    <Layout title="Login - News App" description="Login News App by Irfan Izudin">
      <div className="h-full flex flex-col justify-center mt-[80px]">
        {showAlert.login && <Alert message="Login failed!" status="failed" />}
        {showAlert.registration && <Alert message="Registration success!" status="success" />}
        {showAlert.logout && <Alert message="Logout success!" status="success" />}
        {showAlert.wrongLogin && <Alert message="Email or password incorrect!" status="failed" />}
        {showAlert.notRegistered && (
          <Alert message="Your account is not registered!" status="failed" />
        )}

        <h1 className="text-2xl font-bold text-center">Login to News App</h1>
        <form onSubmit={handleLogin}>
          <div className="w-[350px] flex flex-col mt-10 space-y-3">
            <Input
              label="Email"
              name="email"
              type="email"
              value={input.email}
              placeholder="john@mail.com"
            />
            <Input
              label="Password"
              name="password"
              type="password"
              value={input.password}
              placeholder="Password"
            />
            <Input
              type="submit"
              value="Login"
              className="text-white bg-blue !border-blue cursor-pointer"
            />
          </div>
        </form>
        <p className="text-sm text-center mt-3">
          Don't have account ?{" "}
          <Link href="/register">
            <a className="text-blue underline">Register Now</a>
          </Link>
        </p>
      </div>
    </Layout>
  );
};

export default login;
