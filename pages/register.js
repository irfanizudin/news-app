import Input from "../components/Input";
import Layout from "../components/Layout";

const register = () => {
  return (
    <Layout title="Register - News App" description="Register News App by Irfan Izudin">
      <div className="h-full flex flex-col justify-center mt-[80px]">
        <h1 className="text-2xl font-bold text-center">Register to News App</h1>
        <div className="w-full flex flex-col mt-10 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <Input label="First Name" labelFor="first_name" type="text" />
            <Input label="Last Name" labelFor="last_name" type="text" />
          </div>
          <Input label="Email" labelFor="email" type="email" />
          <Input label="Password" labelFor="password" type="password" />
        </div>
      </div>
    </Layout>
  );
};

export default register;
