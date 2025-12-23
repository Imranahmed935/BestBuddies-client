import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactUsPage = () => {
  return (
    <div className="bg-white text-gray-800">
      <section className="bg-gradient-to-br from-yellow-400 to-yellow-500 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-slate-800 max-w-2xl mx-auto">
            Have a question, feedback, or need help planning your next adventure?
            We’re here for you.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14">
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <p className="text-gray-600 mb-10">
              Reach out to us through any of the channels below. Our support
              team usually responds within 24 hours.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-5 border rounded-2xl hover:shadow-md transition">
                <div className="bg-yellow-100 p-3 rounded-full text-yellow-600">
                  <Mail />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm text-gray-500">support@travelbuddy.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 border rounded-2xl hover:shadow-md transition">
                <div className="bg-yellow-100 p-3 rounded-full text-yellow-600">
                  <Phone />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-sm text-gray-500">+880 1234-567890</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 border rounded-2xl hover:shadow-md transition">
                <div className="bg-yellow-100 p-3 rounded-full text-yellow-600">
                  <MapPin />
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-sm text-gray-500">
                    Sylhet, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-3xl shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>

            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-3 rounded-xl transition-transform transform hover:scale-[1.02]"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
