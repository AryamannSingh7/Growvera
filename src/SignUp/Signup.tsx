import {
  Anchor,
  Button,
  Checkbox,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="w-1/2 flex flex-col justify-center px-20 gap-3">
      <div className="text-4xl font-semibold">Create an Account</div>
      <TextInput
        label="Full Name"
        placeholder="Your Name"
        withAsterisk
        className="[&>*]:!text-xl [&_input]:!text-lg"
      />
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
      <PasswordInput
        leftSection={<IconLock size={18} stroke={1.5} />}
        label="Confirm Password"
        placeholder="Re-Enter Password"
        withAsterisk
        className="[&>*]:!text-xl [&_input]:!text-lg"
      />
      <Checkbox
        label={
          <>
            I accept <Anchor>terms and conditions.</Anchor>
          </>
        }
        autoContrast
      />
      <Button variant="filled" autoContrast>
        Signup
      </Button>
      <div className="mx-auto">
        Already have an account?{" "}
        <Link to="/login" className="text-primary-400 hover:underline">
          Login
        </Link>
      </div>
    </div>
  );
};
export default Signup;
