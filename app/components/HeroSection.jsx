import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-black via-gray-900 to-black min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      {/* Background: Night Sky with Luminous Stars */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        {/* Stars */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          {/* Star animations */}
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className={`star absolute w-${Math.random() * 2 + 1} h-${Math.random() * 2 + 1} bg-white rounded-full animate-pulse delay-${(index + 1) * 100}`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="z-20 px-6 text-white">
        {/* Main Heading */}
        <h1 className="text-6xl sm:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-indigo-400">
          Welcome to My Creative Space
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto opacity-80 hover:opacity-100 transition-all duration-300 ease-in-out">
          I'm Ayoub, a passionate web developer from Morocco, focused on crafting clean, functional, and innovative digital experiences. Let’s create something extraordinary together.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <a
            href="#projects"
            className="bg-indigo-700 hover:bg-indigo-800 text-white py-3 px-10 rounded-full shadow-xl text-lg font-semibold transition-all duration-300 transform hover:scale-110 hover:shadow-2xl"
          >
            Explore My Work
          </a>
          <Link
            href="/Contact"
            className="border-2 border-gray-300 text-gray-300 py-3 px-10 rounded-full text-lg font-semibold transition-all duration-300 transform hover:border-indigo-600 hover:text-indigo-600 hover:scale-110 hover:shadow-2xl"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      {/* Decorative Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Additional particles or star animations can be added here */}
      </div>
    </section>
  );
}