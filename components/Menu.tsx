import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

import useOnClickOutside from "../hooks/useOnClickOutside";

const links = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

const MotionBars = () => (
  <>
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      initial={{ scale: 0.8, opacity: 0, rotate: 180 }}
      animate={{
        scale: 1,
        opacity: 1,
        rotate: 0,
        transition: { duration: 0.1 },
      }}
      exit={{
        scale: 0.8,
        opacity: 0,
        rotate: 180,
        transition: { duration: 0.1 },
      }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 9h16.5m-16.5 6.75h16.5"
      />
    </motion.svg>
  </>
);

const MotionXMark = () => (
  <>
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
      initial={{ scale: 0.8, opacity: 0, rotate: 180 }}
      animate={{
        scale: 1,
        opacity: 1,
        rotate: 0,
        transition: { duration: 0.1 },
      }}
      exit={{
        scale: 0.8,
        opacity: 0,
        rotate: 180,
        transition: { duration: 0.1 },
      }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </motion.svg>
  </>
);

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => setIsOpen(false));

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const listItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <MotionXMark /> : <MotionBars />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.8, translateY: -10 }}
            animate={{
              opacity: 1,
              scale: 1,
              translateY: 0,
              transition: { duration: 0.1 },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.1 },
            }}
            className="absolute right-0 w-64 px-6 z-[1000] py-4 mt-2 origin-top-right bg-background rounded-md shadow-lg ring-1 ring-grey-1 focus:outline-none"
          >
            <motion.ul
              variants={container}
              initial="hidden"
              animate="show"
              className="flex flex-col items-start gap-2"
            >
              {links.map((link) => (
                <motion.li
                  variants={listItem}
                  key={link.href + link.label}
                  className="w-full py-1"
                >
                  <Link
                    href={link.href}
                    className={clsx(
                      router.asPath === link.href
                        ? "underline text-foreground underline-offset-2"
                        : "text-grey-6"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
