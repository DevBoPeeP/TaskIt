import SignUpForm from "@/components/SignUpForm";

export default function SignUpPage() {
  return (
    <div className="flex flex-col justify-center items-center  px-6 py-12 m-8 h-[720px] ">
      <div className="w-full flex flex-col mb-10 items-start text-center md:text-left mt-[5rem]">
        <h1 className="text-3xl font-bold">Create Your Account</h1>
        <p className="text-lg text-gray-700 mb-6">Please enter your details.</p>
        <SignUpForm />
      </div>
    </div>
  );
}
