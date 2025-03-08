import Link from "next/link";
import Image from "next/image";
import { Code, Rocket, Send, Terminal, Palette, Smartphone } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center bg-gradient-to-br from-[#0f172a] to-[#1e40af] overflow-hidden border-b border-slate-700">
      {/* Optimized Background Layer */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center">
        <div className="absolute inset-0 backdrop-blur-[50px] bg-black/40" />
      </div>

      <div className="container mx-auto px-4 md:px-6 pb-24">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="text-center lg:text-left lg:flex-1 space-y-6 z-20">
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.15]">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Digital Experiences
              </span>
              <span className="block mt-4 text-slate-100 text-3xl md:text-4xl font-medium">
                That Captivate & Convert
              </span>
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Full-stack architect specializing in performance-driven solutions. Leveraging Next.js and modern tooling to build web experiences that{" "}
              <span className="text-cyan-300 font-semibold">convert visitors into customers</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center px-5 py-2.5 text-base font-medium text-white bg-gradient-to-r from-cyan-600 to-indigo-600 rounded-lg hover:from-cyan-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-cyan-500/15"
                aria-label="Explore my portfolio projects"
              >
                <Rocket className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Explore My Work
              </a>

              <Link
                href="/Collaborate"
                className="inline-flex items-center justify-center px-5 py-2.5 text-base font-medium text-slate-100 border border-slate-600 rounded-lg hover:border-cyan-500 hover:text-cyan-300 transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="Start collaboration process"
              >
                <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                Let's Collaborate
              </Link>
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-6">
              {['Next.js 14', 'TypeScript', 'Tailwind CSS', 'React 18'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-slate-800/30 backdrop-blur-sm text-slate-100 rounded-full border border-slate-600 hover:bg-slate-800/50 hover:border-cyan-500 transition-all duration-300 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Optimized Visual Element */}
          <div className="relative mt-8 lg:mt-0 lg:flex-1 flex justify-center">
            <div className="relative w-60 h-60 sm:w-68 sm:h-68 bg-gradient-to-tr from-cyan-500/20 to-emerald-500/20 rounded-2xl p-1 backdrop-blur-lg">
              <div className="relative w-full h-full bg-gray-900/95 rounded-xl flex items-center justify-center group">
                <Image
                  src="/ayoub.webp"
                  alt="Professional portrait of Ayoub"
                  width={192}
                  height={192}
                  className="rounded-full object-cover ring-2 ring-cyan-500/30"
                  placeholder="blur"
                  blurDataURL="/ayoub-blur.webp"
                  priority
                />

                {/* Performance-optimized icons */}
                <Terminal className="absolute top-10 -left-5 w-7 h-7 text-cyan-400 animate-float" />
                <Palette className="absolute top-6 -right-5 w-7 h-7 text-emerald-400 animate-float-delay" />
                <Smartphone className="absolute -bottom-5 left-1/4 w-7 h-7 text-cyan-400 animate-float" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-6 animate-bounce-slow">
        <div 
          className="w-3 h-8 border-2 border-cyan-400 rounded-full"
          aria-hidden="true"
        >
          <div className="w-1 h-2 bg-cyan-400 mx-auto mt-1 animate-scroll" />
        </div>
      </div>
    </section>
  );
}