import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

export default function MainNav() {
  const name = localStorage.getItem("currentUser");
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center px-3  hover:text-violet-500 gap-2">
          {" "}
          Hello, {name}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link
              to="/user-profile"
              className="font-bold hover:text-violet-500"
            >
              User Profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Button className="flex flex-1 font-bold bg-violet-500">
              Log out
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
