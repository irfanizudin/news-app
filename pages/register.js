import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import Input from "../components/Input";
import Layout from "../components/Layout";
import Select from "../components/Select";
import { AppContext } from "../contexts/AppContext";

const register = () => {
  const gender = ["male", "female"];
  const province = ["Jawa Barat", "Jawa Timur"];

  const region = [
    {
      province: "Jawa Barat",
      city: ["Bandung", "Bekasi", "Bogor", "Depok", "Cirebon"],
    },
    {
      province: "Jawa Timur",
      city: ["Surabaya", "Malang", "Madiun", "Kediri", "Mojokerto"],
    },
  ];

  const { input, setInput, setShowAlert } = useContext(AppContext);

  const router = useRouter();

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(input);
    localStorage.setItem("dataUser", JSON.stringify(input));
    setInput({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      gender: "",
      province: "",
      city: "",
    });
    router.push("/login");
    setShowAlert({ registration: true });
  };

  const cities = region.filter((region) => region.province === input.province);
  let city = null;
  if (input.province === "Jawa Barat" || input.province === "Jawa Timur") {
    city = cities[0].city;
  } else {
    city = [];
  }

  return (
    <Layout title="Register - News App" description="Register News App by Irfan Izudin">
      <div className="h-full flex flex-col justify-center mt-[80px]">
        <h1 className="text-2xl font-bold text-center">Register to News App</h1>
        <form onSubmit={handleRegister}>
          <div className="w-full flex flex-col mt-10 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <Input
                label="First Name"
                name="first_name"
                type="text"
                value={input.first_name}
                placeholder="John"
              />
              <Input
                label="Last Name"
                name="last_name"
                type="text"
                value={input.last_name}
                placeholder="Doe"
              />
            </div>
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
            <Select label="Gender" name="gender" data={gender} value={input.gender} />
            <Select label="Province" name="province" data={province} value={input.province} />
            <Select label="City" name="city" data={city} value={input.city} />
            <Input
              type="submit"
              value="Register"
              className="text-white bg-blue border-blue focus:border-blue focus:ring-1 cursor-pointer"
            />
          </div>
        </form>
        <p className="text-sm text-center mt-3">
          Already a Member ?{" "}
          <Link href="/login">
            <a className="text-blue underline">Login Now</a>
          </Link>
        </p>
      </div>
    </Layout>
  );
};

export default register;
