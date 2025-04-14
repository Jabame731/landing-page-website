import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  // const navLinkClass =
  //   "relative text-md transition-colors hover:text-primary " +
  //   "after:content-[''] after:absolute after:left-0 after:bottom-[-] after:h-[2px] after:w-full " +
  //   "after:scale-x-0 hover:after:scale-x-100 after:bg-primary after:origin-left after:transition-transform after:duration-300";

  return (
    <header className="w-full border-b shadow-sm">
      <div className="container mx-auto  flex h-20 items-center justify-between">
        {/* logo == nav */}

        <div className="flex items-center gap-8">
          <Link href="/" className="text-lg font-semibold">
            <Image
              src="/favicon.ico"
              alt="tri-j logo"
              width={42}
              height={42}
            ></Image>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-md">
            <Link href="/">Home</Link>
            <Link href="/">About Us</Link>
            <Link href="/">Services</Link>
            <Link href="/">Our Team</Link>
            <Link href="/">Contact Us</Link>
          </nav>
        </div>

        {/* Right Section */}

        <div className="hidden md:flex">
          <Link
            href=""
            className={cn(
              buttonVariants({ variant: "default", size: "default" })
            )}
          >
            Get a Quote / Request Service
          </Link>
        </div>
      </div>
    </header>
  );
}
