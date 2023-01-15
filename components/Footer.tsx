import ThemeSwitch from "./ThemeSwitch";

const Footer = () => {
  return (
    <footer className="mt-12">
      <div className="container">
        <div className="flex justify-between border-t border-foreground/20 pt-8 pb-12">
          <div></div>
          <ThemeSwitch />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
