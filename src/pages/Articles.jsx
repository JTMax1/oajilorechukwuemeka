import React from 'react';

const Articles = () => {
    const thoughts = [
        {
            title: "My Speech addressing Yemi Osinbajo, VP of Nigeria",
            desc: "Addressing key policy issues and technological advancement in Nigeria.",
            type: "Speech"
        },
        {
            title: "Africa #Agenda2063 Advocacy",
            desc: "Promoting Africa's transformational agenda for sustainable development.",
            type: "Advocacy"
        },
        {
            title: "My Speech at the University of Washington: I believe in the power confusion",
            desc: "Exploring innovative thinking and embracing uncertainty in problem-solving.",
            type: "Speech"
        },
        {
            title: "My Presentation on African Education and Critical Thinking",
            desc: "Discussing the future of education and developing critical thinking skills.",
            type: "Presentation"
        }
    ];

    return (
        <div className="fade-in">
            <div style={{ backgroundColor: 'var(--color-ink-deep)', color: 'var(--color-cream-on-dark)', padding: '100px 0', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: 'var(--color-cream-on-dark)' }}>THOUGHT LEADERSHIP</h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-cream-muted)' }}>
                        Key presentations on technology, education, and African development
                    </p>
                    <div style={{ marginTop: '40px' }}>
                        <a href="https://www.youtube.com/@oluwatoyinajilore" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-ink-deep)' }}>
                            VIEW ALL VIDEOS
                        </a>
                    </div>
                </div>
            </div>

            <div className="container section-padding">
                <div className="grid-3">
                    {thoughts.map((item, idx) => (
                        <div key={idx} style={{
                            background: '#FFF',
                            padding: '40px',
                            border: '1px solid var(--color-rule-soft)',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <span style={{
                                display: 'inline-block',
                                padding: '4px 8px',
                                background: 'var(--color-paper-deep)',
                                color: 'var(--color-ink-deep)',
                                fontSize: '12px',
                                fontWeight: '500',
                                textTransform: 'uppercase',
                                marginBottom: '20px',
                                alignSelf: 'flex-start'
                            }}>
                                {item.type}
                            </span>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>{item.title}</h3>
                            <p style={{ color: 'var(--color-ink-muted)', flexGrow: 1 }}>{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '80px', padding: '60px', background: 'var(--color-paper-deep)', textAlign: 'center', border: '1px solid var(--color-rule-soft)' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Insights Email</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 30px', color: 'var(--color-ink-muted)' }}>
                        In-Sights is the mailing community where I share some of my most personal thoughts and lessons about life. I hope we constantly take an inside/closer look at life together to draw wisdom for every day living.
                    </p>
                    <a href="https://subscribepage.io/insights" target="_blank" rel="noreferrer" className="btn btn-primary">
                        SIGN UP NOW
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Articles;
