"use client";

import React, { useState, ChangeEvent, ReactNode } from "react";
import { motion } from "framer-motion";
import { Mail, User, Lock, Phone, Briefcase } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignUpForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phoneNumber: "",
    jobTitle: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const handleChange = (e: {
    target: { name: any; type: any; value: any; checked: any };
  }) => {
    const { name, type, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!formData.termsAccepted) {
      alert("You must agree to the Terms & Privacy before continuing.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Navigate to OTP page with email
    router.push(`/otp?email=${encodeURIComponent(formData.email)}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-[550px] h-[620px] max-w-3xl bg-white p-8 rounded-2xl shadow-md "
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <FormInput
          label="First Name"
          name="firstName"
          value={formData.firstName}
          placeholder="Enter your first name"
          onChange={handleChange}
          icon={<User className="size-5" />}
        />

        <FormInput
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          placeholder="Enter your last name"
          onChange={handleChange}
          icon={<User className="size-5" />}
        />

        <FormInput
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          placeholder="Enter your email address"
          onChange={handleChange}
          icon={<Mail className="size-5" />}
        />

        <FormInput
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          placeholder="Enter your password"
          onChange={handleChange}
          icon={<Lock className="size-4.5" />}
        />

        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          placeholder="Confirm your password"
          onChange={handleChange}
          icon={<Lock className="size-4.5" />}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="col-span-1 md:col-span-2 flex items-center space-x-2 mt-2 text-sm"
        >
          <input
            type="checkbox"
            id="terms"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
            className="w-4 h-4 accent-indigo-600 cursor-pointer  align-middle"
          />
          <label
            htmlFor="terms"
            className="mt-2 flex items-center text-gray-800 space-x-1 "
          >
            <span>I agree to the</span>
            <span className="text-indigo-600 cursor-pointer hover:underline">
              Terms & Privacy
            </span>
          </label>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="col-span-1 md:col-span-2"
        >
          <button
            type="submit"
            className="w-full h-[45px] gradient text-white rounded-xl hover:bg-indigo-700 transform hover:scale-105 transition mb-2"
          >
            Sign Up
          </button>
        </motion.div>
      </form>
      <motion.div className="w-full flex items-center justify-center mb-6 space-x-2">
        <p className="text-sm font-normal text-black">
          Already have an account?
        </p>
        <Link
          href="/login"
          className="text-sm font-semibold text-blue-500 hover:underline underline-offset-2"
        >
          Sign In
        </Link>
      </motion.div>
    </motion.div>
  );
}

/* Reusable Input Field Component */
type FormInputProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  icon?: ReactNode;
};

function FormInput({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  icon,
}: FormInputProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col"
    >
      <label className="font-semibold text-gray-800 mb-2">{label}</label>
      <div className="relative">
        <span className="absolute left-3 top-3 text-gray-400">{icon}</span>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none transition-all"
        />
      </div>
    </motion.div>
  );
}
