import { useState } from 'react';
import { motion } from 'framer-motion';
import Reveal from '../components/ui/Reveal';
import { Blob } from '../components/ui/Blobs';
import { Instagram, Send, Check, Pin, Arrow } from '../components/ui/Icons';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE, RETAILERS } from '../siteConfig';

const audiences = [
  { value: 'chef', label: 'Chef / Restaurant' },
  { value: 'retailer', label: 'Retailer / Distributor' },
  { value: 'consumer', label: 'Consumer / Fan' },
  { value: 'media', label: 'Media / Press' },
  { value: 'partner', label: 'Investor / Partner' },
];

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', interest: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.id]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <section className="section section--top">
      <Blob color="soft-yellow" size={440} top={-160} right="-12%" />
      <Blob color="red" size={16} top="20%" left="7%" />
      <Blob color="soft-green" size={300} bottom="2%" left="-10%" />

      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gap: 'clamp(2.5rem, 6vw, 5rem)',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'start',
          }}
        >
          {/* Left */}
          <Reveal>
            <p className="eyebrow" style={{ '--eyebrow-dot': 'var(--c-red)', marginBottom: '1.1rem' }}>
              Don&apos;t sleep on this
            </p>
            <h1 className="display display--lg">
              Get in<br />
              the <span className="mark" style={{ '--mark': 'var(--c-yellow)' }}>loop</span>.
            </h1>
            <p className="lede" style={{ marginTop: '1.4rem', maxWidth: '34ch' }}>
              Chef, retailer, distributor, or just someone who cares what ends up on the
              plate — we want to hear from you.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', margin: '2rem 0' }}>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost"
                style={{ alignSelf: 'flex-start' }}
              >
                <Instagram size={16} /> {INSTAGRAM_HANDLE} <Arrow size={14} />
              </a>
              <p style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem', color: 'var(--ink-2)', fontWeight: 600 }}>
                <span style={{ color: 'var(--c-green-lt)', display: 'flex' }}><Pin size={17} /></span>
                Mookane Village, Botswana
              </p>
            </div>

            <hr className="rule" style={{ margin: '1.75rem 0' }} />

            <p className="eyebrow" style={{ '--eyebrow-dot': 'var(--c-lime)', marginBottom: '1rem' }}>
              Or find us on a shelf
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {RETAILERS.map((r) => (
                <span key={r.name} className="chip" style={{ '--chip-bg': 'var(--paper)', '--chip-fg': 'var(--ink-2)' }}>
                  {r.name}
                </span>
              ))}
            </div>
          </Reveal>

          {/* Right */}
          <Reveal delay={0.12}>
            {submitted ? (
              <motion.div
                initial={{ scale: 0.94, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  background: 'var(--c-lime-soft)',
                  borderRadius: 'var(--r-lg)',
                  padding: 'clamp(2.5rem, 6vw, 4rem) 2rem',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <span className="blob blob--yellow" aria-hidden="true" style={{ width: 170, height: 170, top: -60, right: -50, opacity: 0.6 }} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <span style={{ color: 'var(--c-red)', display: 'inline-flex', marginBottom: '1.25rem' }}>
                    <Check size={48} />
                  </span>
                  <h2 className="display display--md" style={{ marginBottom: '0.75rem' }}>
                    You&apos;re in the loop.
                  </h2>
                  <p className="body-sm" style={{ maxWidth: '30ch', margin: '0 auto' }}>
                    We&apos;ll be in touch. Real ones only. #AskFor13
                  </p>
                </div>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.1rem',
                  background: 'var(--paper)',
                  border: '1px solid var(--line)',
                  borderRadius: 'var(--r-lg)',
                  padding: 'clamp(1.75rem, 4vw, 2.5rem)',
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                  <div className="field">
                    <label htmlFor="name">Your name</label>
                    <input id="name" className="input" type="text" placeholder="Who are you?" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email</label>
                    <input id="email" className="input" type="email" placeholder="Where do we reach you?" value={form.email} onChange={handleChange} required />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="interest">I&apos;m a...</label>
                  <select id="interest" className="input" value={form.interest} onChange={handleChange}>
                    <option value="">Select one</option>
                    {audiences.map((a) => <option key={a.value} value={a.value}>{a.label}</option>)}
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" className="input" placeholder="What's on your mind?" value={form.message} onChange={handleChange} />
                </div>

                <button type="submit" id="contact-submit" className="btn btn--red" style={{ justifyContent: 'center' }}>
                  Send it <Send size={16} />
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
