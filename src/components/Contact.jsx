import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Phone } from 'lucide-react';
import { useIsMobile } from '../hooks/useIsMobile';

const InstagramIcon = ({ size = 18, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill={color} stroke="none"/>
  </svg>
);

const Contact = () => {
  const isMobile = useIsMobile();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', interest: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e) => setForm({ ...form, [e.target.id]: e.target.value });

  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: '0.6rem',
    padding: '0.9rem 1.1rem',
    color: 'white',
    fontSize: '0.95rem',
    outline: 'none',
    fontFamily: 'Inter, sans-serif',
    transition: 'border-color 0.3s'
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.7rem',
    fontWeight: 700,
    letterSpacing: '0.18em',
    color: 'rgba(255,255,255,0.4)',
    marginBottom: '0.5rem',
    textTransform: 'uppercase'
  };

  return (
    <section id="contact" className="section" style={{
      background: 'var(--color-moss-green)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative glows */}
      <div style={{
        position: 'absolute', top: '-80px', right: '-80px',
        width: '450px', height: '450px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(253,184,19,0.12), transparent)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: '-100px', left: '-100px',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(227,123,40,0.08), transparent)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '3rem' : '6rem', alignItems: 'start' }}>

          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p style={{
              color: 'var(--color-golden-yellow)',
              fontWeight: 700,
              letterSpacing: '0.22em',
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              marginBottom: '1rem'
            }}>
              Don't Sleep On This
            </p>
            <h2 style={{
              fontFamily: 'Anton, sans-serif',
              fontSize: 'clamp(3rem, 7vw, 5.5rem)',
              textTransform: 'uppercase',
              lineHeight: 0.9,
              marginBottom: '2rem',
              color: 'white'
            }}>
              GET IN<br />THE LOOP.
            </h2>
            <p style={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: '1rem',
              lineHeight: 1.75,
              maxWidth: '380px',
              marginBottom: '2.5rem'
            }}>
              Whether you're a chef, a distributor, a retailer, or just someone who gives a damn about what they eat — we want to hear from you.
            </p>

            {/* Contact details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
              <a
                href="https://www.instagram.com/_13way_/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.75rem',
                  color: 'rgba(255,255,255,0.75)', textDecoration: 'none',
                  fontSize: '0.9rem', fontWeight: 600
                }}
              >
                <InstagramIcon size={18} color="var(--color-golden-yellow)" />
                @_13way_ on Instagram
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', fontWeight: 600 }}>
                <Phone size={18} color="var(--color-golden-yellow)" />
                Mookane Village, Botswana
              </div>
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', gap: '2.5rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              {[
                { num: '9+', label: 'Months Farming' },
                { num: '3', label: 'Retail Partners' },
                { num: '13', label: 'The Way' }
              ].map(stat => (
                <div key={stat.label}>
                  <p style={{ fontFamily: 'Anton, sans-serif', fontSize: '2.2rem', color: 'var(--color-golden-yellow)', lineHeight: 1 }}>
                    {stat.num}
                  </p>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginTop: '0.2rem' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            {submitted ? (
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  justifyContent: 'center', padding: '4rem 2rem', textAlign: 'center',
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '1.5rem',
                  border: '1px solid rgba(253,184,19,0.25)'
                }}
              >
                <CheckCircle size={56} color="var(--color-golden-yellow)" style={{ marginBottom: '1.5rem' }} />
                <h3 style={{ fontFamily: 'Anton, sans-serif', fontSize: '2rem', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                  You're In The Loop.
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem' }}>
                  We'll be in touch. Real ones only. #askfor13
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: 'flex', flexDirection: 'column', gap: '1.25rem',
                  background: 'rgba(0,0,0,0.2)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '1.5rem',
                  padding: '2.5rem'
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label htmlFor="name" style={labelStyle}>Your Name</label>
                    <input id="name" type="text" placeholder="Who are you?" value={form.name} onChange={handleChange} required style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'var(--color-sunburst-orange)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" style={labelStyle}>Email</label>
                    <input id="email" type="email" placeholder="Where to reach you?" value={form.email} onChange={handleChange} required style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'var(--color-sunburst-orange)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="interest" style={labelStyle}>I'm a...</label>
                  <select
                    id="interest"
                    value={form.interest}
                    onChange={handleChange}
                    style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                    onFocus={e => e.target.style.borderColor = 'var(--color-sunburst-orange)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                  >
                    <option value="" style={{ background: '#111' }}>Select your interest</option>
                    <option value="chef" style={{ background: '#111' }}>Chef / Restaurant</option>
                    <option value="retailer" style={{ background: '#111' }}>Retailer / Distributor</option>
                    <option value="consumer" style={{ background: '#111' }}>Consumer / Fan</option>
                    <option value="media" style={{ background: '#111' }}>Media / Press</option>
                    <option value="investor" style={{ background: '#111' }}>Investor / Partner</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" style={labelStyle}>Message</label>
                  <textarea
                    id="message"
                    placeholder="What's on your mind?"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={e => e.target.style.borderColor = 'var(--color-sunburst-orange)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                  />
                </div>

                <motion.button
                  type="submit"
                  id="contact-submit"
                  whileHover={{ scale: 1.02, backgroundColor: 'var(--color-golden-yellow)' }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    background: 'var(--color-sunburst-orange)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.6rem',
                    padding: '1rem 2rem',
                    fontFamily: 'Anton, sans-serif',
                    fontSize: '0.9rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.6rem',
                    transition: 'all 0.3s ease'
                  }}
                >
                  SEND IT <Send size={16} />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
