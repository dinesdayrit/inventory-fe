import { Twitter, Facebook, Instagram } from "lucide-react";

export default function ComingSoonPage() {
  return (
    <div className="h-screen bg-gradient-to-br from-blue-900 to-purple-900 text-white flex flex-col items-center justify-center p-4">
      <main className="relative z-10 text-center max-w-2xl">
        <h1 className="text-5xl font-bold mb-6 animate-fade-in">
          Coming Soon!
        </h1>

        <p className="text-xl mb-8 text-gray-200">
          We're building the ultimate inventory management solution to
          streamline your business operations.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a
            href="#"
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <Twitter
              size={20}
              className="hover:text-blue-400 transition-colors"
            />
          </a>
          <a
            href="#"
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <Facebook
              size={20}
              className="hover:text-blue-600 transition-colors"
            />
          </a>
          <a
            href="#"
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <Instagram
              size={20}
              className="hover:text-pink-500 transition-colors"
            />
          </a>
        </div>
      </main>
    </div>
  );
}
