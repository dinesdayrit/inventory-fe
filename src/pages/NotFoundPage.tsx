// src/pages/NotFoundPage.tsx
import { useNavigate } from "react-router-dom";
import { Home } from "lucide-react";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="flex-1 p-8">
      <div className="bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-xl p-8 max-w-4xl mx-auto min-h-[500px] flex items-center justify-center">
        <div className="relative overflow-hidden w-full">
          <main className="relative z-10 text-center">
            <div className="text-9xl font-bold mb-4 animate-fade-in">404</div>

            <h1 className="text-3xl font-bold mb-6">Page Not Found</h1>

            <p className="text-lg mb-8 text-gray-200">
              The page you're looking for doesn't exist or has been moved.
            </p>

            <button
              onClick={() => navigate("/")}
              className="px-8 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg font-semibold transition-colors flex items-center gap-2 mx-auto"
            >
              <Home size={20} />
              Return to Home
            </button>
          </main>
        </div>
      </div>
    </div>
  );
}
