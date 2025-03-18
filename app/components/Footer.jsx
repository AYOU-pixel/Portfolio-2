import { LinkedIn, GitHub, Twitter, Web } from '@mui/icons-material';

export default function FooterSection() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Logo or Brand Name */}
          <div className="flex justify-center sm:justify-start">
            <img
              src="logo.png"
              className="w-16 h-16 rounded-full transform transition-transform duration-700 hover:scale-125 hover:rotate-12 hover:shadow-2xl cursor-pointer"
              alt="Logo"
            />
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center sm:justify-start space-x-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
            >
              <LinkedIn fontSize="large" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-white hover:text-gray-300 transition-colors duration-300 transform hover:scale-110"
            >
              <GitHub fontSize="large" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-white hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Twitter fontSize="large" />
            </a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
            <ul className="text-gray-200 space-y-3 list-none pl-0">
              <li>
                <a
                  href="mailto:ayoubprograma@gmail.com"
                  className="hover:text-blue-400 transition-colors duration-300 font-medium"
                >
                  Email: ayoubprograma@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+212781913306"
                  className="hover:text-blue-400 transition-colors duration-300 font-medium"
                >
                  Phone: +212 781913306
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-3 text-gray-200 list-none pl-0">
              <li>
                <a
                  href="https://www.linkedin.com/in/ayoub-rachd-0b344a322"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-300 transform hover:scale-105 hover:underline"
                >
                  <LinkedIn fontSize="small" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/AYOU-pixel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-300 transform hover:scale-105 hover:underline"
                >
                  <GitHub fontSize="small" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://app.netlify.com/teams/ayou-pixel/sites"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-300 transform hover:scale-105 hover:underline"
                >
                  <Web fontSize="small" />
                  <span>Netlify</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center text-sm text-gray-200 mt-12 border-t border-gray-800 pt-8">
          <p>
            Designed & Developed by{" "}
            <span className="bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text font-semibold">
              AYOUB
            </span>{" "}
            | © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}