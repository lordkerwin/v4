import { Github, Twitter } from "lucide-react";
import Link from "next/link";

import ThemeSwitch from "./ThemeSwitch";

const Footer = () => {
  return (
    <footer className="mt-12">
      <div className="container">
        <div className="flex justify-between items-start border-t border-foreground/20 pt-8 pb-12">
          <div className="flex flex-col gap-4">
            <div className="font-medium">Other Pages</div>
            <ul className="flex flex-col gap-4 text-foreground/80">
              <li>
                <Link href="/" className="hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/uses" className="hover:text-foreground">
                  Uses
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 items-end">
            <div className="flex flex-col gap-4">
              <div className="font-medium">Social Links</div>
              <ul className="flex flex-col items-end gap-4 text-foreground/80">
                <li>
                  <a
                    href="https://github.com/lordkerwin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-foreground"
                  >
                    <Github size="16" /> <span>Github</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/snwkrwn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-foreground"
                  >
                    <Twitter size="16" /> <span>Twitter</span>
                  </a>
                </li>
              </ul>
            </div>
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
