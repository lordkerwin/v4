/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        "grey-1": "rgb(var(--grey-1) / <alpha-value>)",
        "grey-2": "rgb(var(--grey-2) / <alpha-value>)",
        "grey-3": "rgb(var(--grey-3) / <alpha-value>)",
        "grey-4": "rgb(var(--grey-4) / <alpha-value>)",
        "grey-5": "rgb(var(--grey-5) / <alpha-value>)",
        "grey-6": "rgb(var(--grey-6) / <alpha-value>)",
        "grey-7": "rgb(var(--grey-7) / <alpha-value>)",
        "grey-8": "rgb(var(--grey-8) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: "rgb(var(--foreground) / <alpha-value>)",
            a: {
              color: "#3182ce",
              "&:hover": {
                color: "#2c5282",
              },
            },
            code: {
              color: "#fff",
              backgroundColor: theme("colors.blue[900]"),
              padding: "0.29em 0.5em 0.2em",
              borderRadius: "0.25em",
              lineHeight: "1",
              display: "inline-block",
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
            "--tw-prose-headings": theme("colors.blue[500]"),
            "--tw-prose-bold": theme("colors.blue[900]"),
            "--tw-prose-code": theme("colors.blue[900]"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
