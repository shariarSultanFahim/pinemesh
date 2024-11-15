import { ShoppingCart } from "lucide-react"

export default function Header() {
  return (
    <header className="border-b mx-auto max-w-screen-2xl">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="text-xl font-bold">Logo</div>
        <nav className="hidden md:flex items-center gap-6">
          <div className="relative group">
            <button className="flex items-center gap-1">
              Courses
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
          <div className="relative group">
            <button className="flex items-center gap-1">
              Instructors
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
          <div className="relative group">
            <button className="flex items-center gap-1">
              Blogs
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
          <a href="#" className="text-sm font-medium">
            About
          </a>
          <a href="#" className="text-sm font-medium">
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="relative">
            <ShoppingCart className="h-6 w-6" />
          </button>
          <button className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded">
            Login
          </button>
        </div>
      </div>
    </header>
  )
}