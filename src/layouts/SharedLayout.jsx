import { Outlet, Link } from "react-router-dom";

export function SharedLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-zinc-800 px-6 py-4 shadow-md flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">SkipHire</h1>
        <div className="space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link to="/skips" className="text-gray-300 hover:text-white">
            Skips
          </Link>
        </div>
      </nav>

      {/* Page Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-zinc-800 text-center text-sm text-gray-400 py-4">
        &copy; {new Date().getFullYear()} SkipHire Ltd . By / Eng.Basma Elmasry
        . All rights reserved.
      </footer>
    </div>
  );
}
