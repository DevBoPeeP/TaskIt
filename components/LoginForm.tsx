"use client";

import React, { useState, ChangeEvent, ReactNode } from "react";
import { motion } from "framer-motion";
import { User, Lock } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { loginUser } from "@/services/authService";
import { useAuth } from "@/hooks/useAuth";

export default function LoginForm() {
  const router = useRouter();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    password: "",
    rememberMe: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: {
    target: { name: string; type: string; value: string; checked: boolean };
  }) => {
    const { name, type, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      setLoading(true);

      const res = await loginUser({
        usernameOrEmail: formData.usernameOrEmail,
        password: formData.password,
      });

      if (res.responseCode === "00" && res.token) {
        login(res.token);
        router.push("/dashboard");
      } else {
        setError(res.responseMessage);
      }
    } catch (err) {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-[450px] max-w-md bg-white p-10 rounded-2xl shadow-md"
    >
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <FormInput
          label="Username or Email"
          name="usernameOrEmail"
          value={formData.usernameOrEmail}
          placeholder="Enter your username or email"
          onChange={handleChange}
          icon={<User className="size-5" />}
        />

        <FormInput
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          placeholder="Enter your password"
          onChange={handleChange}
          icon={<Lock className="size-5" />}
        />

        {error && <p className="text-sm text-red-500 font-medium">{error}</p>}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-between text-sm mt-2"
        >
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="accent-indigo-600 size-4"
            />
            <label htmlFor="rememberMe" className="text-gray-700">
              Remember me
            </label>
          </div>
          <span className="text-indigo-600 font-medium underline underline-offset-2 cursor-pointer hover:text-indigo-800">
            Forgot Password?
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <button
            type="submit"
            disabled={loading}
            className="w-full h-[45px] gradient-n text-white rounded-xl
            hover:bg-indigo-700 transform hover:scale-105 transition
            disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </motion.div>
      </form>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="w-full flex items-center justify-center mt-6 space-x-2"
      >
        <p className="text-sm font-normal text-gray-700">
          Don’t have an account?
        </p>
        <Link
          href="/signup"
          className="font-semibold text-blue-500 underline underline-offset-2"
        >
          Create an Account
        </Link>
      </motion.div>
    </motion.div>
  );
}

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
