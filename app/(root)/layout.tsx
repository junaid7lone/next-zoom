import StreamVideoProvider from "@/providers/StreamClientProvider";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Xoom: Secure & Scalable Video Meetings",
  description: "The Ultimate Next.js Video Conferencing App",
  icons: {
    icon: "/icons/xoom-logo.svg",
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
