import { Link } from "react-router-dom";
import MainNav from "@/components/MainNav";

type Props = {
  showMenu?: boolean;
};
export default function Header({ showMenu }: Props) {
  return (
    <div className="flex flex-col transition-colors duration-500 shadow-md z-30">
      <div
        className={`flex items-center justify-center py-3 w-screen  transition-colors duration-500 shadow-md backdrop-blur-lg 
        `}
      >
        <div className="container flex justify-between items-center">
          <div className="flex items-baseline gap-1">
            <Link
              to="/"
              className=" text-2xl flex items-center font-extrabold tracking-tight transition-all duration-500  text-blue-900"
            >
              Stocks{" "}
              <span className="text-green-400 flex justify-center items-center">
                Inventory
              </span>
            </Link>
          </div>

          {showMenu && (
            <div className="md:hidden">
              <>MobileNav</>
            </div>
          )}
          {showMenu && (
            <div className="hidden md:block">
              <MainNav />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
