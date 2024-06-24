import { SignIn } from "@clerk/nextjs";

interface SignInPageProps {}

const SignInPage: React.FC<SignInPageProps> = () => {
  return (
    <main className="flex h-screen w-full items-center justify-center ">
      <SignIn />
    </main>
  );
};

export default SignInPage;
