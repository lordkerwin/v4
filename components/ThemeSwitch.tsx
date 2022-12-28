import { clsx } from "clsx";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Switch } from "@headlessui/react";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Switch
      checked={theme === "dark"}
      onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none"
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute h-full w-full rounded-md "
      />
      <span
        aria-hidden="true"
        className={clsx(
          theme === "dark" ? "bg-cyan-500" : "bg-gray-200",
          "pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out"
        )}
      />
      <span
        aria-hidden="true"
        className={clsx(
          theme === "dark" ? "translate-x-5" : "translate-x-0",
          "pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out"
        )}
      />
    </Switch>
  );
};

export default ThemeSwitch;
