import Link from "next/link";
import { Code, Rocket, Send, Terminal, Palette, Smartphone } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center bg-gradient-to-br from-[#0f172a] to-[#1e40af] overflow-hidden border-b border-slate-700">
      {/* Glassmorphism Background Layer */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center">
        <div className="absolute inset-0 backdrop-blur-[100px] bg-black/30" />
      </div>

      <div className="container mx-auto px-4 md:px-6 pb-32">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Centered Text Content */}
          <div className="text-center lg:text-left lg:flex-1 space-y-8 z-20">
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.15]">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Digital Experiences
              </span>
              <span className="block mt-4 text-slate-300 text-4xl md:text-5xl font-medium">
                That Captivate & Convert
              </span>
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Full-stack architect specializing in performance-driven solutions. Leveraging Next.js and modern tooling to build web experiences that{" "}
              <span className="text-cyan-300">convert visitors into customers</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 rounded-lg hover:from-cyan-700 hover:via-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.02]"
              >
                <Rocket className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Explore My Work
              </a>

              <Link
                href="/Collaborate"
                className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-slate-300 border border-slate-600 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 shadow hover:shadow-lg hover:scale-[1.02]"
              >
                <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                Let's Collaborate
              </Link>
            </div>

            {/* Tech Pill Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-8">
              {['Next.js 14', 'TypeScript', 'Tailwind CSS', 'React 18'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-slate-800/20 backdrop-blur-sm text-slate-300 rounded-full border border-slate-700 hover:bg-slate-800/40 hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive Visual Element */}
          <div className="relative mt-12 lg:mt-0 lg:flex-1 flex justify-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 bg-gradient-to-tr from-cyan-500/30 to-emerald-500/30 rounded-2xl p-1 backdrop-blur-xl">
              <div className="relative w-full h-full bg-gray-900/95 rounded-xl flex items-center justify-center group">
                {/* Profile Image */}
                <img
                  src="/ayoub.webp"
                  alt="Ayoub - Profile Picture"
                  className="w-48 h-48 rounded-full object-cover ring-4 ring-cyan-500/30 drop-shadow-2xl"
                />

                {/* Floating Tech Icons */}
                <Terminal className="absolute top-12 -left-6 w-8 h-8 text-cyan-400 animate-float" />
                <Palette className="absolute top-8 -right-6 w-8 h-8 text-emerald-400 animate-float-delay" />
                <Smartphone className="absolute -bottom-6 left-1/4 w-8 h-8 text-cyan-400 animate-float" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 animate-bounce">
        <div className="w-3 h-8 border-2 border-cyan-400 rounded-full">
          <div className="w-1 h-2 bg-cyan-400 mx-auto mt-1 animate-scroll" />
        </div>
      </div>
    </section>
  );
}