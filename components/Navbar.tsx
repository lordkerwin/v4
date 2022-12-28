// typed navbar component

import Link from "next/link";

import Logo from "./Logo";
import Menu from "./Menu";
import ThemeSwitch from "./ThemeSwitch";

const Navbar = () => {
  return (
    <nav className="container my-8">
      <div className="flex items-center justify-between">
        <Link href="/" className="block m-0">
          <Logo className="w-10" />
          <span className="sr-only">Home</span>
        </Link>

        <Menu />
        {/* <ThemeSwitch /> */}
      </div>
    </nav>
  );
};

export default Navbar;
