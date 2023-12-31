import LayoutLight from "@/components/layout/LayoutLight";
import UserForm from "@/components/users/userForm/UserForm";

const SignUpPage = (): React.ReactNode => {
  return (
    <LayoutLight title="TGC : Inscription">
      <UserForm />
    </LayoutLight>
  );
};

export default SignUpPage;
