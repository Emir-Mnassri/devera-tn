import config from "@config/config.json";
import ImageFallback from "./components/ImageFallback";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title } = frontmatter;

  return (
    <section className="section" style={{ backgroundColor: '#0b1120' }}>
      <div className="container">
        <div className="section row items-center justify-center">
          <div className="animate lg:col-5">
            <ImageFallback
              className="mx-auto lg:pr-10"
              src="/images/vectors/contact.png"
              width={497}
              height={397}
              alt="Contact Illustration"
            />
          </div>
          <div className="animate lg:col-5">
            <form
              method="POST"
              action="https://formspree.io/f/mqenekbb" 
              className="contact-form rounded-xl p-6 shadow-2xl border border-slate-800 bg-slate-900/50"
            >
              <h2 className="h4 mb-6 text-white">Send A Message</h2>
              
              <div className="mb-6">
                <label
                  className="mb-2 block font-medium text-slate-200"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="form-input w-full bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 focus:border-primary"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  type="text"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  className="mb-2 block font-medium text-slate-200"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="form-input w-full bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 focus:border-primary"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  type="email"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  className="mb-2 block font-medium text-slate-200"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  className="form-input w-full bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 focus:border-primary"
                  name="subject"
                  id="subject"
                  placeholder="How can we help?"
                  type="text"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  className="mb-2 block font-medium text-slate-200"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea 
                  name="message"
                  id="message"
                  className="form-textarea w-full bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 focus:border-primary" 
                  rows="6" 
                  placeholder="Tell us about your project..."
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary block w-full py-4 font-bold tracking-wide uppercase transition-all hover:scale-[1.02]">
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
