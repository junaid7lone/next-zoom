import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Xoom: Secure & Scalable Video Meetings",
  description: "The Ultimate Next.js Video Conferencing App",
  icons: {
    icon: "/icons/xoom-logo.svg",
  },
};

interface HomeLayoutProps {
  children: ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <main className="relative">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <section className="flex min-h-secreen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
          <div className="w-full">{children}</div>
        </section>
      </div>
      footer
    </main>
  );
};

export default HomeLayout;
