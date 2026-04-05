import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Organize Your
                </span>
                <br />
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Tasks Effortlessly
                </span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed mt-6">
                Transform your productivity with our intelligent task management
                platform. Stay organized, meet deadlines, and achieve your goals
                with ease.
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <Link
                to="/signup"
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 rounded-lg font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-indigo-500/50"
              >
                Get Started Free
              </Link>
            </div>

            <div className="flex gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold">50K+</p>
                <p className="text-gray-400">Active Users</p>
              </div>
              <div>
                <p className="text-3xl font-bold">4.9★</p>
                <p className="text-gray-400">App Rating</p>
              </div>
              <div>
                <p className="text-3xl font-bold">24/7</p>
                <p className="text-gray-400">Support</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden md:flex justify-center">
            <div className="relative w-80 h-80">
              {/* Animated background circles */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>

              {/* Main card */}
              <div className="absolute inset-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-indigo-500/30 rounded-2xl p-6 space-y-4">
                <div className="h-3 bg-indigo-500/30 rounded-full w-3/4"></div>
                <div className="h-3 bg-purple-500/30 rounded-full w-full"></div>
                <div className="h-3 bg-indigo-500/30 rounded-full w-5/6"></div>

                <div className="pt-4 space-y-3">
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-indigo-500/30"></div>
                    <div className="flex-1 h-3 bg-gray-700/50 rounded-full"></div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-purple-500/30"></div>
                    <div className="flex-1 h-3 bg-gray-700/50 rounded-full w-5/6"></div>
                  </div>
                </div>
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-indigo-950/50 to-purple-950/50 border-y border-indigo-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Transform Your{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Productivity?
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Start managing your tasks efficiently today. No credit card
            required.
          </p>
          <Link
            to="/signup"
            className="inline-block px-10 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 rounded-lg font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-indigo-500/50"
          >
            Get Started Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-indigo-500/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">TaskMaster</h4>
              <p className="text-gray-400">
                Your personal productivity partner.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-indigo-500/20 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TaskMaster. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
