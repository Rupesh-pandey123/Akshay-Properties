import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Award, Send, CheckCircle } from 'lucide-react';
import { contactInfo } from '../data/content';
import { validateContactForm } from '../utils';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import AnimatedButton from '../components/AnimatedButton';
import { fadeInLeft, fadeInRight } from '../animations/variants';

const contactItems = [
  {
    icon: MapPin,
    label: 'Corporate Office',
    value: 'Raheja Tesla, Unit 344, Juinagar, 400705, IN',
  },
  {
    icon: MapPin,
    label: 'Branch Office',
    value: 'Mahavir Apartment, Shop No. 11, Sector 42, Seawoods, Navi Mumbai, 400706, IN',
  },
  {
    icon: Award,
    label: 'RERA Certificate Number',
    value: 'A51700000703',
  },
];

function FloatingInput({ id, label, type = 'text', value, onChange, error, rows }) {
  const [focused, setFocused] = useState(false);
  const hasValue = value?.length > 0;
  const InputTag = rows ? 'textarea' : 'input';

  return (
    <div className="relative">
      <InputTag
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        rows={rows}
        className={`peer w-full px-4 pt-6 pb-2 rounded-xl border bg-white transition-colors outline-none resize-none ${
          error
            ? 'border-red-400 focus:border-red-500'
            : 'border-surface-dark focus:border-accent'
        }`}
        placeholder=" "
      />
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
          focused || hasValue
            ? 'top-2 text-xs text-accent font-medium'
            : 'top-4 text-sm text-muted'
        }`}
      >
        {label}
      </label>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (submitError) setSubmitError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateContactForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);
    setSubmitError('');

    try {
      const formData = new FormData();
      formData.append('access_key', '77285742-9f7b-4fa6-a7f1-bea6c65a6c48');
      formData.append('name', form.name);
      formData.append('email', form.email);
      formData.append('phone', form.phone);
      formData.append('message', form.message);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setForm({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setSubmitError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-surface">
      <Container>
        <SectionTitle
          subtitle="Contact Us"
          title="Let's Start Your Journey"
          description="Ready to find your dream property? Reach out and our team will respond within 24 hours."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="space-y-6 mb-10">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start gap-4 p-5 bg-white rounded-2xl shadow-premium hover:shadow-premium-lg transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-1">{item.label}</p>
                      <p className="text-primary font-medium">{item.value}</p>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href} className="block hover:scale-[1.02] transition-transform">
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>

            <div className="rounded-2xl overflow-hidden shadow-premium h-64 lg:h-80">
              <iframe
                title="Office location"
                src="https://maps.google.com/maps?q=Raheja+Tesla,+Juinagar,+Navi+Mumbai,+Maharashtra+400705,+India&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-premium-lg space-y-5">
              <FloatingInput
                id="name"
                label="Full Name"
                value={form.name}
                onChange={handleChange('name')}
                error={errors.name}
              />
              <FloatingInput
                id="email"
                label="Email Address"
                type="email"
                value={form.email}
                onChange={handleChange('email')}
                error={errors.email}
              />
              <FloatingInput
                id="phone"
                label="Phone Number"
                type="tel"
                value={form.phone}
                onChange={handleChange('phone')}
                error={errors.phone}
              />
              <FloatingInput
                id="message"
                label="Your Message"
                value={form.message}
                onChange={handleChange('message')}
                error={errors.message}
                rows={4}
              />

              <AnimatedButton type="submit" variant="primary" className="w-full" disabled={submitting}>
                {submitting ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </AnimatedButton>

              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 p-4 bg-green-50 text-green-700 rounded-xl"
                  >
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    <p className="text-sm font-medium">Thank you! We'll be in touch within 24 hours.</p>
                  </motion.div>
                )}
                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 p-4 bg-red-50 text-red-700 rounded-xl"
                  >
                    <p className="text-sm font-medium">{submitError}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
