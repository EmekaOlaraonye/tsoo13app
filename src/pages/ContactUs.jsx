import { useState } from 'react';
import { motion } from 'framer-motion';
import Reveal from '../components/ui/Reveal';
import { Blob } from '../components/ui/Blobs';
import { Tomato } from '../components/ui/Tomato';
import { Instagram, Facebook, WhatsApp, Send, Check, Pin, Mail, Phone, Arrow } from '../components/ui/Icons';
import {
  INSTAGRAM_URL, INSTAGRAM_HANDLE, FACEBOOK_URL, FACEBOOK_HANDLE,
  SALES_EMAIL, PHONE_NUMBERS, RETAILERS, WHATSAPP_URL,
} from '../siteConfig';

/**
 * Where the form posts. Web3Forms relays to whichever address the key was
 * issued against, so there is no server of ours to run and no secret worth
 * hiding — the key only lets you send mail to its owner.
 *
 * With no key configured the form does NOT pretend to send. It showed
 * “We’ll be in touch” and delivered nothing at all, which is worse than
 * having no form: the sender believes they have been heard. Without a key
 * the submit button is replaced by the ways through that do work.
 */
const FORM_ENDPOINT = 'https://api.web3forms.com/submit';
const FORM_KEY = import.meta.env.VITE_WEB3FORMS_KEY || '';

const audiences = [
  { value: 'chef', label: 'Chef / Restaurant' },
  { value: 'retailer', label: 'Retailer / Distributor' },
  { value: 'consumer', label: 'Consumer / Fan' },
  { value: 'media', label: 'Media / Press' },
  { value: 'partner', label: 'Investor / Partner' },
];

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | sending | error
  const [error, setError] = useState('');
  const [form, setForm] = useState({ name: '', email: '', interest: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.id]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!FORM_KEY || status === 'sending') return;

    setStatus('sending');
    setError('');

    // Read off the form element rather than state: the honeypot is never
    // bound to React, because a person never touches it.
    const trapped = e.currentTarget.elements.botcheck?.checked === true;
    const interest = audiences.find((a) => a.value === form.interest)?.label || 'Not given';

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: FORM_KEY,
          subject: `Tsoo...13 website — ${interest}`,
          from_name: form.name || 'Website enquiry',
          replyto: form.email,
          name: form.name,
          email: form.email,
          'I am a': interest,
          message: form.message,
          // Web3Forms drops the submission when this is true, and so would
          // we; only a script ever ticks a box it cannot see.
          botcheck: trapped,
        }),
      });

      const data = await res.json().catch(() => ({}));
      // Only a confirmed success is allowed to show the thank-you.
      if (res.ok && data.success) {
        setStatus('idle');
        setSubmitted(true);
        return;
      }
      throw new Error(data.message || `The form service answered ${res.status}.`);
    } catch (err) {
      setStatus('error');
      setError(err?.message || 'The message could not be sent just now.');
    }
  };

  return (
    <section className="section section--top">
      <Blob color="soft-yellow" size={440} top={-160} right="-12%" />
      <Blob color="red" size={16} top="20%" left="7%" />
      <Blob color="soft-green" size={300} bottom="2%" left="-10%" />
      <Tomato color="var(--c-red)" size={90} bottom="8%" right="6%" opacity={0.13} rotate={-15} outline />

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
          <Reveal variant="left">
            <p className="eyebrow" style={{ '--eyebrow-dot': 'var(--c-red)', marginBottom: '1.1rem' }}>
              Don&apos;t sleep on this
            </p>
            <h1 className="display display--lg" style={{ color: 'var(--c-red)' }}>
              Get in<br />
              the <span className="mark" style={{ '--mark': 'var(--c-yellow)', color: 'var(--ink)' }}>loop</span>.
            </h1>
            <p className="lede" style={{ marginTop: '1.4rem', maxWidth: '34ch' }}>
              Chef, retailer, distributor, or just someone who cares what ends up on the
              plate — we want to hear from you.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', margin: '2rem 0' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.7rem' }}>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--instagram"
                >
                  <Instagram size={16} /> {INSTAGRAM_HANDLE} <Arrow size={14} />
                </a>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--facebook"
                >
                  <Facebook size={16} /> {FACEBOOK_HANDLE} <Arrow size={14} />
                </a>
              </div>
              <a
                href={`mailto:${SALES_EMAIL}`}
                style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem', color: 'var(--ink-2)', fontWeight: 600 }}
              >
                <span style={{ color: 'var(--c-red)', display: 'flex' }}><Mail size={17} /></span>
                {SALES_EMAIL}
              </a>
              {PHONE_NUMBERS.map((number) => (
                <a
                  key={number}
                  href={`tel:${number.replace(/\s+/g, '')}`}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem', color: 'var(--ink-2)', fontWeight: 600 }}
                >
                  <span style={{ color: 'var(--c-yellow-ink)', display: 'flex' }}><Phone size={17} /></span>
                  {number}
                </a>
              ))}
              <p style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem', color: 'var(--ink-2)', fontWeight: 600 }}>
                <span style={{ color: 'var(--c-green-lt)', display: 'flex' }}><Pin size={17} /></span>
                Mookane Village, Botswana
              </p>
            </div>

            <hr className="rule" style={{ margin: '1.75rem 0' }} />

            <p className="eyebrow" style={{ '--eyebrow-dot': 'var(--c-lime)', marginBottom: '1rem' }}>
              Or come and find us
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
          <Reveal variant="right" delay={0.12}>
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
                  <h2 className="display display--md" style={{ marginBottom: '0.75rem', color: 'var(--c-green)' }}>
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

                {/* Honeypot: off-screen and out of the tab order, so only a
                    script ever fills it in. */}
                <input
                  type="checkbox"
                  name="botcheck"
                  tabIndex={-1}
                  autoComplete="off"
                  style={{ position: 'absolute', left: '-9999px' }}
                  aria-hidden="true"
                />

                {status === 'error' && (
                  <p className="form__error" role="alert">
                    <strong>That didn&apos;t send.</strong> {error} Please email{' '}
                    <a href={`mailto:${SALES_EMAIL}`}>{SALES_EMAIL}</a> or message us on
                    {' '}<a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp</a>.
                  </p>
                )}

                {FORM_KEY ? (
                  <button
                    type="submit"
                    id="contact-submit"
                    className="btn btn--red"
                    style={{ justifyContent: 'center' }}
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? 'Sending…' : <>Send it <Send size={16} /></>}
                  </button>
                ) : (
                  <div className="form__offline">
                    <p className="body-sm">
                      This form isn&apos;t connected yet, so it would go nowhere. Use one of
                      these and it reaches the farm directly.
                    </p>
                    <div className="form__offline-links">
                      <a href={`mailto:${SALES_EMAIL}`} className="btn btn--red">
                        <Mail size={16} /> Email us
                      </a>
                      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
                        <WhatsApp size={16} /> WhatsApp
                      </a>
                    </div>
                  </div>
                )}
              </form>
            )}

          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
