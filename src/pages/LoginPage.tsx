import { useNavigate } from "react-router-dom";
import { LogInIcon } from "lucide-react";
import { Button } from "../components/ui/button";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Button
        onClick={handleLogin}
        className="text-sm font-bold leading-6 py-5 px-4 bg-blue-900 hover:bg-zinc-900 text-white flex items-center gap-2"
      >
        <LogInIcon /> Login
      </Button>
    </div>
  );
}
