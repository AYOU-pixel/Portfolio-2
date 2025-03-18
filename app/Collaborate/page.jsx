import { Mail, Phone, MessageSquare, ArrowRight } from "lucide-react";
import Link from "next/link";

const BackgroundElements = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl opacity-50" />
    <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50" />
  </div>
);

const ContactForm = () => (
  <div className="md:col-span-3 bg-white dark:bg-gray-900 rounded-2xl shadow-xl dark:shadow-gray-800/10 p-8">
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Send a message</h3>
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField label="Your Name" type="text" placeholder="John Doe" />
        <InputField label="Email Address" type="email" placeholder="hello@example.com" />
      </div>
      <InputField label="Subject" type="text" placeholder="Project discussion" />
      <TextAreaField label="Message" placeholder="Tell me about your project..." />
      <SelectField label="Budget Range" options={["Please select", "$1k - $5k", "$5k - $10k", "$10k - $25k", "$25k+"]} />
      <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center group">
        Send Message
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </button>
    </form>
  </div>
);

const InputField = ({ label, type, placeholder }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{label}</label>
    <input type={type} className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-500 dark:text-white" placeholder={placeholder} />
  </div>
);

const TextAreaField = ({ label, placeholder }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{label}</label>
    <textarea className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-36 dark:focus:border-blue-500 dark:text-white" placeholder={placeholder} />
  </div>
);

const SelectField = ({ label, options }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{label}</label>
    <select className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-500 dark:text-white">
      {options.map(option => <option key={option}>{option}</option>)}
    </select>
  </div>
);

const ContactInfo = () => (
  <div className="md:col-span-2 space-y-6">
    <InfoCard title="Contact Information">
      <ContactDetail icon={Mail} label="Email" value="ayoubprograma@gmail.com" link="mailto:ayoubprograma@gmail.com" />
      <ContactDetail icon={Phone} label="Phone" value="+212 781 913 306" link="tel:+212781913306" />
    </InfoCard>
    <InfoCard title="Availability">
      <AvailabilityDetail label="Consultation" value="Available" />
      <AvailabilityDetail label="New Projects" value="Limited Spots" />
      <AvailabilityDetail label="Response Time" value="24-48 hours" />
    </InfoCard>
  </div>
);

const InfoCard = ({ title, children }) => (
  <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl dark:shadow-gray-800/10 p-8">
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">{title}</h3>
    <div className="space-y-6">{children}</div>
  </div>
);

const ContactDetail = ({ icon: Icon, label, value, link }) => (
  <div className="flex items-start">
    <div className="mr-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
      <a href={link} className="text-gray-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{value}</a>
    </div>
  </div>
);

const AvailabilityDetail = ({ label, value }) => (
  <div>
    <div className="flex items-center justify-between">
      <span className="text-gray-600 dark:text-gray-300">{label}</span>
      <span className="text-gray-900 dark:text-white font-medium">{value}</span>
    </div>
    <div className="h-px bg-gray-100 dark:bg-gray-800" />
  </div>
);

const FAQ = () => {
  const faqs = [
    {
      question: "What is your typical process for new projects?",
      answer: "I start with a discovery call to understand your needs, then provide a detailed proposal with timeline and cost estimates. After approval, we'll work together through design, development, and testing phases."
    },
    {
      question: "How do you handle revisions and feedback?",
      answer: "Feedback is essential to the process. I include dedicated revision rounds in all projects and use collaborative tools to make communication seamless throughout our partnership."
    },
    {
      question: "Do you offer ongoing maintenance services?",
      answer: "Yes, I offer flexible maintenance packages to keep your project running smoothly after launch. These can be tailored to your specific needs and budget."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white dark:bg-gray-900 rounded-xl shadow-md dark:shadow-gray-800/10 p-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">{faq.question}</h3>
            <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-950 relative overflow-hidden">
      <BackgroundElements />
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
          <ContactForm />
          <ContactInfo />
        </div>
        <FAQ />
      </div>
    </section>
  );
}