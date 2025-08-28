"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  HiOutlineShoppingBag,
  HiOutlineSparkles,
  HiOutlineHeart,
  HiOutlineStar,
} from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function LoginPage() {
  const { status } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<string | null>(null);

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/");
    }
  }, [status, router]);

  const handleSignIn = async (provider: string) => {
    setIsLoading(provider);
    try {
      await signIn(provider);
    } catch (error) {
      console.error("Sign in error:", error);
    } finally {
      setIsLoading(null);
    }
  };

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg font-medium">Authenticating...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full opacity-10 blur-3xl"></div>

      <div className="max-w-md w-full relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mb-6 shadow-2xl shadow-purple-500/25">
            <HiOutlineShoppingBag className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-3">
            Welcome Back!
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Ready to discover amazing products?
            <span className="block text-purple-400 font-semibold">
              Let&apos;s get you shopping! 🛍️
            </span>
          </p>
        </div>

        {/* Login Cards */}
        <div className="space-y-4">
          {/* Google Login */}
          <button
            onClick={() => handleSignIn("google")}
            disabled={isLoading === "google"}
            className="w-full group relative overflow-hidden bg-gray-800 hover:bg-gray-700 border-2 border-gray-700 hover:border-purple-500 rounded-xl px-6 py-4 transition-all duration-300 ease-out shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transform hover:-translate-y-1"
          >
            <div className="flex items-center justify-center space-x-3">
              <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center">
                <FcGoogle className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-200 font-semibold text-lg">
                {isLoading === "google"
                  ? "Signing in..."
                  : "Continue with Google"}
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
          </button>

          {/* GitHub Login */}
          <button
            onClick={() => handleSignIn("github")}
            disabled={isLoading === "github"}
            className="w-full group relative overflow-hidden bg-gray-900 hover:bg-gray-800 text-white rounded-xl px-6 py-4 transition-all duration-300 ease-out shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-1 border border-gray-700"
          >
            <div className="flex items-center justify-center space-x-3">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <FaGithub className="w-4 h-4 text-gray-900" />
              </div>
              <span className="font-semibold text-lg">
                {isLoading === "github"
                  ? "Signing in..."
                  : "Continue with GitHub"}
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
          </button>
        </div>
      </div>
    </div>
  );
}
