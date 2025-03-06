import { Mail, Phone, Clock, Send, Briefcase, Globe } from "lucide-react";
import Link from "next/link";
import { Rocket } from "lucide-react";

export default function CollaboratePage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
      
      <div className="container mx-auto px-4 md:px-6 py-24 relative">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-emerald-500 bg-clip-text text-transparent">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Whether you have a project in mind or just want to explore possibilities,<br />
            I'm here to turn your vision into reality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-gray-800 shadow-xl">
            <h3 className="text-2xl font-bold text-cyan-400 mb-8 flex items-center gap-2">
              <Send className="w-6 h-6" />
              Send a Message
            </h3>
            
            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full bg-gray-900/50 rounded-lg px-4 py-3 border border-gray-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full bg-gray-900/50 rounded-lg px-4 py-3 border border-gray-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  placeholder="hello@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Project Details</label>
                <textarea
                  className="w-full bg-gray-900/50 rounded-lg px-4 py-3 border border-gray-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all h-32"
                  placeholder="Describe your project..."
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Project Budget</label>
                <select className="w-full bg-gray-900/50 rounded-lg px-4 py-3 border border-gray-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all">
                  <option>Select budget range</option>
                  <option>$1k - $5k</option>
                  <option>$5k - $15k</option>
                  <option>$15k - $30k</option>
                  <option>$30k+</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-600 to-emerald-600 text-white py-3 rounded-lg font-medium hover:from-cyan-700 hover:to-emerald-700 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-gray-800 shadow-xl">
              <h3 className="text-2xl font-bold text-emerald-400 mb-8 flex items-center gap-2">
                <Briefcase className="w-6 h-6" />
                Collaboration Options
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-lg">
                    <Clock className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-100">Quick Start</h4>
                    <p className="text-gray-400">Got an urgent project? Let's discuss accelerated development options.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-500/10 rounded-lg">
                    <Globe className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-100">Remote Work</h4>
                    <p className="text-gray-400">Comfortable working across timezones with global clients.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-gray-800 shadow-xl">
              <h3 className="text-2xl font-bold text-cyan-400 mb-8 flex items-center gap-2">
                <Mail className="w-6 h-6" />
                Direct Contact
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-all">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-400">Email</p>
                    <a href="mailto:contact@ayoub.dev" className="text-gray-100 hover:text-cyan-400 transition-colors">
                    ayoubprograma@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-all">
                    <Phone className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-gray-400">Phone</p>
                    <a href="tel:+1234567890" className="text-gray-100 hover:text-emerald-400 transition-colors">
                    +212781913306
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Footer */}
        <div className="text-center mt-20">
          <p className="text-gray-400 mb-4">Prefer another method?</p>
          <Link
            href="/projects"
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group"
          >
            <span className="mr-2">Check out my work first</span>
            <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Animated Elements */}
      <div className="absolute top-20 right-20 w-8 h-8 bg-cyan-500/20 rounded-full animate-pulse" />
      <div className="absolute bottom-40 left-32 w-12 h-12 bg-emerald-500/20 rounded-full animate-pulse delay-300" />
    </section>
  );
}