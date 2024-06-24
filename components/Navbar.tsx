import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href={"/"} className="flex items-center gap-1">
        <Image src="/icons/xoom-logo.svg" alt="Logo" width={32} height={32} />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden"></p>
      </Link>
      <div className="flex-between gap-5 ">
        <header>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </header>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
