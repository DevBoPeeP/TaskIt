"use client";

import React, { useState, ChangeEvent, ReactNode } from "react";
import { motion } from "framer-motion";
import { Mail, User, Lock } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { registerUser } from "@/services/userService";

export default function SignUpForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.termsAccepted) {
      alert("You must agree to the Terms & Privacy before continuing.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
    };

    try {
      setLoading(true);

      await registerUser(payload);

      // On success → move to OTP page with email
      router.push(`/otp?email=${encodeURIComponent(formData.email)}`);
    } catch (err: any) {
      console.error(err);
      alert(err.response?.data?.message || "Registration failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-[550px] h-[620px] max-w-3xl bg-white p-8 rounded-2xl shadow-md"
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
          placeholder="Enter your email"
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
          className="flex items-center space-x-2 text-sm mt-1"
        >
          <input
            type="checkbox"
            id="terms"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
            className="w-4 h-4 accent-indigo-600 cursor-pointer"
          />
          <label
            htmlFor="terms"
            className="flex items-center space-x-1 text-gray-800"
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
        >
          <button
            type="submit"
            disabled={loading}
            className="w-full h-[45px] gradient text-white rounded-xl hover:bg-indigo-700 
            transform hover:scale-105 transition disabled:opacity-60"
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </motion.div>
      </form>

      <motion.div className="w-full flex items-center justify-center mt-6 space-x-2">
        <p className="text-sm text-black">Already have an account?</p>
        <Link
          href="/login"
          className="text-sm font-semibold text-blue-500 hover:underline"
        >
          Sign In
        </Link>
      </motion.div>
    </motion.div>
  );
}

/* Reusable Input Component */
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
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl 
          focus:ring-2 focus:ring-indigo-400 outline-none transition-all"
        />
      </div>
    </motion.div>
  );
}
