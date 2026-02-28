import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-6xl font-bold text-neutral-900 mb-4">404</h1>
      <p className="text-2xl text-neutral-600 mb-8">Page Not Found</p>
      <Link
        href="/"
        className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-all"
      >
        Go Home
      </Link>
    </div>
  )
}
