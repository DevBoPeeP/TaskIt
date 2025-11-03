import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen flex items-start">
      <div className="min-h-screen w-1/2 flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to TMS App</h1>
          <p className="text-gray-600 mb-8">Task Management System</p>
          <div className="space-x-4">
            <a
              href="/login"
              className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Login
            </a>
            <a
              href="/signup"
              className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
