import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1] as const;

const inputBase =
  'w-full bg-transparent border-b border-white/10 py-3 text-xs sm:text-sm text-primary placeholder-primary/30 focus:outline-none focus:border-primary/50 transition-colors duration-300';

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent('New project enquiry');
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:zac@builtby.ai?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="bg-black py-16 md:py-24 lg:py-32 px-4 md:px-8">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — label + heading */}
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <p className="text-primary text-[10px] sm:text-xs tracking-widest uppercase mb-6">
              Get in touch
            </p>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.9] tracking-[-0.04em] m-0"
              style={{ color: '#E1E0CC' }}
            >
              Let's work together.
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm mt-6 leading-relaxed max-w-sm">
              Have a project in mind? Whether it's workflow automation, API integration, or a custom application, get in touch and let's discuss how I can help.
            </p>
            <p className="text-gray-400 text-xs sm:text-sm mt-4">
              <a href="mailto:zac@builtby.ai" className="hover:text-primary transition-colors duration-200">
                zac@builtby.ai
              </a>
            </p>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className={inputBase}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className={inputBase}
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputBase} resize-none`}
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-2 hover:gap-3 transition-all duration-300 bg-primary rounded-full pl-5 pr-1 py-1"
                  >
                    <span className="font-medium text-sm sm:text-base text-black">Send message</span>
                    <span className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </span>
                  </button>
                </div>
              </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
