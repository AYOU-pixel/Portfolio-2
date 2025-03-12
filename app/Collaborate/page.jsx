import { Mail, Phone, Layers, Send, Briefcase, Globe, MessageSquare, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50" />
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
            <MessageSquare className="w-4 h-4 mr-2" />
            <span>Let's work together</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Have a project in mind? <span className="text-blue-600 dark:text-blue-400">Let's make it happen</span>
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 mb-20">
          {/* Contact Form - 3 columns */}
          <div className="md:col-span-3 bg-white dark:bg-gray-900 rounded-2xl shadow-xl dark:shadow-gray-800/10 p-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Send a message
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-500 dark:text-white"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-500 dark:text-white"
                    placeholder="hello@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-500 dark:text-white"
                  placeholder="Project discussion"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-36 dark:focus:border-blue-500 dark:text-white"
                  placeholder="Tell me about your project..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Budget Range
                </label>
                <select className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-500 dark:text-white">
                  <option>Please select</option>
                  <option>$1k - $5k</option>
                  <option>$5k - $10k</option>
                  <option>$10k - $25k</option>
                  <option>$25k+</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center group"
              >
                Send Message
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Contact Info - 2 columns */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl dark:shadow-gray-800/10 p-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <a href="mailto:ayoubprograma@gmail.com" className="text-gray-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      ayoubprograma@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                    <a href="tel:+212781913306" className="text-gray-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      +212 781 913 306
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl dark:shadow-gray-800/10 p-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Availability
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Consultation</span>
                  <span className="text-gray-900 dark:text-white font-medium">Available</span>
                </div>
                
                <div className="h-px bg-gray-100 dark:bg-gray-800" />
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-300">New Projects</span>
                  <span className="text-gray-900 dark:text-white font-medium">Limited Spots</span>
                </div>
                
                <div className="h-px bg-gray-100 dark:bg-gray-800" />
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Response Time</span>
                  <span className="text-gray-900 dark:text-white font-medium">24-48 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md dark:shadow-gray-800/10 p-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">What is your typical process for new projects?</h3>
              <p className="text-gray-600 dark:text-gray-300">I start with a discovery call to understand your needs, then provide a detailed proposal with timeline and cost estimates. After approval, we'll work together through design, development, and testing phases.</p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md dark:shadow-gray-800/10 p-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">How do you handle revisions and feedback?</h3>
              <p className="text-gray-600 dark:text-gray-300">Feedback is essential to the process. I include dedicated revision rounds in all projects and use collaborative tools to make communication seamless throughout our partnership.</p>
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md dark:shadow-gray-800/10 p-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Do you offer ongoing maintenance services?</h3>
              <p className="text-gray-600 dark:text-gray-300">Yes, I offer flexible maintenance packages to keep your project running smoothly after launch. These can be tailored to your specific needs and budget.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}