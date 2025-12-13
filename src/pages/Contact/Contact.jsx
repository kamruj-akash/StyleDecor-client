import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className=" bg-gray-50 px-6 py-12">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* HEADER */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
          <p className="text-base-content/60 mt-3">
            Have questions? We’d love to hear from you.
          </p>
        </div>

        {/* CONTACT INFO + FORM */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* CONTACT INFO */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-md border border-base-200 p-6 flex gap-4">
              <div className="bg-purple-100 p-3 rounded-xl">
                <Phone className="text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-base-content/60">+880 1700-000000</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md border border-base-200 p-6 flex gap-4">
              <div className="bg-purple-100 p-3 rounded-xl">
                <Mail className="text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-base-content/60">support@styledecor.com</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md border border-base-200 p-6 flex gap-4">
              <div className="bg-purple-100 p-3 rounded-xl">
                <MapPin className="text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold">Office Address</h3>
                <p className="text-base-content/60">
                  Gulshan-1, Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="bg-white rounded-2xl shadow-md border border-base-200 p-8">
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full"
              />

              <textarea
                rows={4}
                placeholder="Your Message"
                className="textarea textarea-bordered w-full"
              ></textarea>

              <button
                type="button"
                className="btn bg-[#8E6CE4] hover:bg-[#7a5ad1] text-white w-full rounded-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* FOOTER NOTE */}
        <div className="text-center text-sm text-base-content/60">
          We usually respond within 24 hours on business days.
        </div>
      </div>
    </div>
  );
};

export default Contact;
