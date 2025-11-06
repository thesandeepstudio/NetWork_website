import { useSearchParams } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const Auth = () => {
  const [searchParams] = useSearchParams(); // ✅ fixed typo
  const tab = searchParams.get("tab") || "login";

  return <div>{tab === "login" ? <LoginForm /> : <SignUpForm />}</div>;
};

export default Auth;
