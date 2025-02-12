import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function UsernameMenu() {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center px-3  hover:text-green-500 gap-2"></DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link
              to="/manage-services"
              className="font-bold hover:text-green-500"
            >
              Manage your services
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Link to="/user-profile" className="font-bold hover:text-green-500">
              User Profile
            </Link>

            <Button className="flex flex-1 font-bold bg-green-500">
              Log out
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
