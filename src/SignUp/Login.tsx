import { Button, PasswordInput, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-1/2 flex flex-col justify-center px-20 gap-3">
      <div className="text-4xl font-semibold">Login</div>
      <TextInput
        leftSection={<IconAt size={16} />}
        label="Email"
        placeholder="Your email"
        withAsterisk
        className="[&>*]:!text-xl [&_input]:!text-lg"
      />
      <PasswordInput
        leftSection={<IconLock size={18} stroke={1.5} />}
        label="Password"
        placeholder="Enter Password"
        withAsterisk
        className="[&>*]:!text-xl [&_input]:!text-lg"
      />
      <Button variant="filled" autoContrast>
        Login
      </Button>
      <div className="mx-auto">
        Don't have an account?{" "}
        <Link to="/signup" className="text-primary-400 hover:underline">
          Signup
        </Link>
      </div>
    </div>
  );
};
export default Login;
