import { SignUp } from "@clerk/nextjs";

interface SignUpPageProps {}

const SignUpPage: React.FC<SignUpPageProps> = () => {
  return (
    <main className="flex h-screen w-full items-center justify-center ">
      <SignUp />
    </main>
  );
};

export default SignUpPage;
