import React from 'react';
import OluwatoyinPortrait from '../assets/mrs-OAC/Oluwatoyin3.jpg';

const Contact = () => {
    return (
        <div className="fade-in section-padding">
            <div className="container" style={{ maxWidth: '1200px' }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '20px' }}>CONNECT WITH ME</h1>
                    <p style={{ fontSize: '1.1rem', color: 'var(--color-ink-muted)' }}>
                        I am happy to connect with you and explore how we can work together.
                    </p>
                </div>

                <div className="contact-grid">
                    {/* Left Column: Portrait */}
                    <div className="contact-portrait-wrapper" style={{ paddingRight: '20px', paddingBottom: '20px' }}>
                        <div style={{ position: 'relative', width: '100%', aspectRatio: '4/5', borderRadius: '4px', overflow: 'visible' }}>
                            <img 
                                src={OluwatoyinPortrait} 
                                alt="Oluwatoyin Ajilore-Chukwuemeka" 
                                style={{ 
                                    width: '100%', 
                                    height: '100%', 
                                    objectFit: 'cover', 
                                    borderRadius: '4px',
                                    border: '1px solid var(--color-rule-soft)',
                                    boxShadow: '0 10px 30px rgba(58, 51, 43, 0.05)'
                                }} 
                                onError={(e) => { e.target.src = 'https://via.placeholder.com/600x800\?text=Oluwatoyin' }}
                            />
                            {/* Decorative minimalist golden border frame offset */}
                            <div style={{ 
                                position: 'absolute', 
                                top: '20px', 
                                left: '20px', 
                                right: '-20px', 
                                bottom: '-20px', 
                                border: '1px solid var(--color-primary)', 
                                borderRadius: '4px',
                                zIndex: -1 
                            }}></div>
                        </div>
                    </div>

                    {/* Right Column: Form Container */}
                    <div style={{
                        background: '#FFF',
                        padding: '50px',
                        boxShadow: '0 10px 40px rgba(58, 51, 43, 0.05)',
                        border: '1px solid var(--color-rule-soft)',
                        borderRadius: '2px'
                    }}>
                        <form style={{ display: 'grid', gap: '25px' }} onSubmit={(e) => e.preventDefault()}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: 'var(--color-ink-deep)' }}>First Name</label>
                                    <input type="text" style={{ width: '100%', padding: '15px', border: '1px solid var(--color-rule-soft)', background: 'var(--color-bg)', color: 'var(--color-ink-deep)', fontFamily: 'inherit' }} placeholder="Jane" />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: 'var(--color-ink-deep)' }}>Last Name</label>
                                    <input type="text" style={{ width: '100%', padding: '15px', border: '1px solid var(--color-rule-soft)', background: 'var(--color-bg)', color: 'var(--color-ink-deep)', fontFamily: 'inherit' }} placeholder="Doe" />
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: 'var(--color-ink-deep)' }}>Email Address</label>
                                <input type="email" style={{ width: '100%', padding: '15px', border: '1px solid var(--color-rule-soft)', background: 'var(--color-bg)', color: 'var(--color-ink-deep)', fontFamily: 'inherit' }} placeholder="jane@example.com" />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500', color: 'var(--color-ink-deep)' }}>Message</label>
                                <textarea rows="6" style={{ width: '100%', padding: '15px', border: '1px solid var(--color-rule-soft)', background: 'var(--color-bg)', color: 'var(--color-ink-deep)', fontFamily: 'inherit', resize: 'vertical' }} placeholder="How can we collaborate?"></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ padding: '18px', fontSize: '16px', marginTop: '10px' }}>
                                SEND MESSAGE
                            </button>
                        </form>

                        <div style={{ marginTop: '50px', paddingTop: '30px', borderTop: '1px solid var(--color-rule-soft)', textAlign: 'center' }}>
                            <p style={{ color: 'var(--color-ink-muted)', marginBottom: '10px' }}>Or email me directly at:</p>
                            <a href="mailto:hellotoyinajilore@gmail.com" style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--color-primary)' }}>
                                hellotoyinajilore@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
