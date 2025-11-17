import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex flex-col justify-center items-center px-6 py-12 lg:py-24 md:col-span-1 lg:col-span-2">
      <div className="w-full flex flex-col mb-8 items-start">
        <h1 className="text-3xl font-bold">Welcome Back!</h1>
        <p className="text-lg text-gray-700 mb-4">Please enter your details.</p>
      </div>
      <LoginForm />
    </div>
  );
}
