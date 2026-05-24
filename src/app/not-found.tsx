import Link from "next/link";

export const metadata = {
  title: "Page Not Found | Dharan Kumar Bera",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-bold gradient-text mb-4">404</h1>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-full font-medium hover:shadow-lg hover:shadow-primary/25 transition-shadow"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
