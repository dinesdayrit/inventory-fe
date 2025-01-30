import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed flex flex-col transition-colors duration-500 shadow-md z-30">
      <div
        className={`flex items-center justify-between py-3 w-screen  transition-colors duration-500 shadow-md backdrop-blur-lg ${
          scrolled && " bg-opacity-0"
        }`}
      >
        <div className="container flex justify-between items-center">
          <div className="flex items-baseline gap-1">
            <a
              href="/"
              className={`flex items-center font-extrabold tracking-tight transition-all duration-500 ${
                scrolled ? "text-2xl" : "text-4xl"
              } text-orange-500`}
            >
              dial
              <span className="text-green-400 flex justify-center items-center">
                Fix
              </span>
            </a>
          </div>

          <div className="md:hidden">
            <>MobileNav</>
          </div>

          <div className="hidden md:block">
            <>MainNav</>
          </div>
        </div>
      </div>
    </div>
  );
}
