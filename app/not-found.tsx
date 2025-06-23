import Link from "next/link";
import { Sparkles } from "lucide-react"; // Optional icon for style

export default function NotFound() {
  return (
    <div className="-my-16 flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 dark:from-black dark:to-neutral-900 px-6 text-center">
      <div className="max-w-xl">
        <div className="flex items-center justify-center gap-2 text-purple-700 dark:text-pink-500 mb-4">
          <Sparkles className="h-6 w-6 animate-pulse" />
          <p className="text-sm font-medium uppercase tracking-wider">404 Error</p>
        </div>
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Lost in Autonomy?
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          The page you’re looking for doesn’t exist. It might have flown off with one of our drones 🚁.
        </p>

        <Link
          href="/"
          className="inline-block rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 px-6 py-3 text-white font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-transform"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
