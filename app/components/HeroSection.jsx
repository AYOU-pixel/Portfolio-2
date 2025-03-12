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

      <div className="container mx-auto px-4 md:px-6 pb-12 md:pb-24 pt-16 md:pt-0">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
          {/* Text Content */}
          <div className="text-center lg:text-left lg:flex-1 space-y-4 md:space-y-5 z-20 max-w-3xl mx-auto lg:mx-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15]">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Digital Experiences
              </span>
              <span className="block mt-2 text-slate-100 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
                That Captivate & Convert
              </span>
            </h1>

            <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I'm a full-stack developer passionate about building high-performance web applications using Next.js and modern technologies. With a deep understanding of performance optimization and UX, I craft engaging web experiences that{" "}
              <span className="text-cyan-300 font-semibold">convert visitors into customers</span>.
            </p>

            <div className="flex flex-col xs:flex-row gap-4 justify-center lg:justify-start mt-4">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base font-medium text-white bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-lg hover:from-cyan-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 md:scale-105"
                aria-label="Explore my portfolio projects"
              >
                <Rocket className="mr-2 h-4 w-4 md:h-5 md:w-5 group-hover:animate-pulse" />
                Explore My Work
              </a>

              <Link
                href="/Collaborate"
                className="inline-flex items-center justify-center px-4 py-2 md:px-5 md:py-2.5 text-sm md:text-base font-medium text-slate-100 border border-slate-600 rounded-lg hover:border-cyan-500 hover:text-cyan-300 transition-all duration-300 shadow-sm hover:shadow-md"
                aria-label="Start collaboration process"
              >
                <Send className="mr-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                Hire Me
              </Link>
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-4">
              {['Next.js 14', 'TypeScript', 'Tailwind CSS', 'React 18'].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 md:px-3 md:py-1.5 bg-slate-800/30 backdrop-blur-sm text-slate-100 rounded-full border border-slate-600 hover:bg-slate-800/50 hover:border-cyan-500 transition-all duration-300 text-xs md:text-sm whitespace-nowrap"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Enlarged Visual Element */}
          <div className="relative mt-8 lg:mt-0 lg:flex-1 flex justify-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-gradient-to-tr from-cyan-500/20 to-emerald-500/20 rounded-2xl p-1 backdrop-blur-lg">
              <div className="relative w-full h-full bg-gray-900/95 rounded-xl flex items-center justify-center group">
                <Image
                  src="/ayoub.webp"
                  alt="Professional portrait of Ayoub"
                  width={200}
                  height={200}
                  className="rounded-full object-cover ring-2 ring-cyan-500/30 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64"
                  placeholder="blur"
                  blurDataURL="/ayoub-blur.webp"
                  priority
                />

                {/* Performance-optimized icons with improved positioning */}
                <Terminal className="absolute top-10 -left-4 sm:-left-6 w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 animate-float hidden sm:block" />
                <Palette className="absolute top-6 -right-4 sm:-right-6 w-6 h-6 sm:w-8 sm:h-8 text-emerald-400 animate-float-delay hidden sm:block" />
                <Code className="absolute -bottom-4 sm:-bottom-6 left-1/4 w-6 h-6 sm:w-8 sm:h-8 text-indigo-400 animate-float hidden sm:block" />
                <Smartphone className="absolute bottom-10 -right-4 sm:-right-6 w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 animate-float-delay hidden sm:block" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-4 md:bottom-6 animate-bounce-slow">
        <div 
          className="w-2 h-6 md:w-3 md:h-8 border-2 border-cyan-400 rounded-full"
          aria-hidden="true"
        >
          <div className="w-0.5 md:w-1 h-1.5 md:h-2 bg-cyan-400 mx-auto mt-1 animate-scroll" />
        </div>
      </div>
    </section>
  );
}