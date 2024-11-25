import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md space-y-4">
        <h1 className="text-2xl font-bold text-center">Welcome</h1>
        <div className="space-y-2">
          <Link
            href="/auth/login"
            className="block w-full text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            Login
          </Link>
          <Link
            href="/auth/signup"
            className="block w-full text-center border border-blue-500 text-blue-500 py-2 px-4 rounded hover:bg-blue-50 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </main>
  )
}
