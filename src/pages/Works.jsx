import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Works = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);

    const sections = [
        {
            id: 'education',
            title: 'Education Thought Leadership',
            subtitle: 'Research Work, Teacher Training & Education Policy',
            desc: 'Driving educational transformation through comprehensive research, innovative teacher training programs, and strategic policy development that shapes the future of learning.',
            items: [
                { title: 'Educational Research', text: 'I am a PhD student in STEM Education at Tufts University. Her research explores responsive teaching, learner agency, authentic scientific thinking, and sociocultural frameworks, with a focus on college-level students in the Global South. She previously taught undergraduates at the University of Ibadan, fostering learning spaces for authentic knowledge-building.' },
                { title: 'Teacher Training Workshop', text: 'I lead professional development sessions for teachers, equipping them with innovative strategies to enhance classroom engagement and student learning. My work spans both K–12 and higher education, supporting educators in building responsive and inclusive teaching practices.' },
                { title: 'Policy Development', text: 'I advise government leaders on education policies designed to strengthen systems and promote sustainable human capital development in Africa. My focus is on shaping strategies that align education with workforce needs, innovation, and socio-economic growth.' }
            ]
        },
        {
            id: 'personal-transformation',
            title: 'Personal Transformation',
            subtitle: 'Coaching Company & Emerging Circle',
            desc: 'Empowering individuals and organizations through strategic coaching methodologies and leadership development programs that unlock human potential.',
            items: [
                { title: 'OAC Coaching', text: 'Personalized coaching solutions designed for business leaders and entrepreneurs seeking transformational growth.' },
                { title: 'Emerging Women', text: 'Building the next generation of African women leaders through mentorship and development.' },
                { title: 'Books', text: 'I write books around the themes of faith, personal mastery, education and more. I have published 3 books.' }
            ],
            link: { text: 'Learn More', url: 'https://oaccoaching.selar.com/shop' }
        },
        {
            id: 'social-entrepreneurship',
            title: 'Social Entrepreneurship',
            subtitle: 'ONE Foundation',
            desc: 'Creating sustainable social impact through innovative entrepreneurship initiatives and community development programs that address real-world challenges.',
            items: [
                { title: 'Foundation Overview', text: 'A nonprofit organization that provides executive entrepreneurial education, mentoring linkages, funding linkages and other forms of resources to youth entrepreneurs.' },
                { title: 'Impact Stories', text: 'Real stories of transformation and community empowerment through our initiatives.' },
                { title: 'Community Projects', text: 'Sustainable development projects creating measurable impact in underserved communities.' }
            ]
        }
    ];

    return (
        <div className="fade-in">
            <div style={{ backgroundColor: 'var(--color-paper-deep)', padding: '80px 0', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>MY WORKS</h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-ink-muted)' }}>
                        Exploring the intersection of education, personal development, and social impact through research, coaching, and entrepreneurship.
                    </p>
                </div>
            </div>

            <div className="container section-padding">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
                    {sections.map((sec, idx) => (
                        <div id={sec.id} key={sec.id} className="works-grid" style={{
                            borderBottom: idx !== sections.length - 1 ? '1px solid var(--color-rule-soft)' : 'none',
                            paddingBottom: idx !== sections.length - 1 ? '80px' : '0'
                        }}>
                            <div>
                                <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{sec.title}</h2>
                                <h4 style={{ color: 'var(--color-ink-deep)', marginBottom: '20px', fontFamily: 'var(--font-body)', fontWeight: 500 }}>{sec.subtitle}</h4>
                                <p style={{ color: 'var(--color-ink-muted)', marginBottom: '30px' }}>{sec.desc}</p>
                                {sec.link && (
                                    <a href={sec.link.url} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '10px 20px', fontSize: '12px' }}>
                                        {sec.link.text}
                                    </a>
                                )}
                            </div>

                            <div style={{ display: 'grid', gap: '30px' }}>
                                {sec.items.map((item, i) => (
                                    <div key={i} style={{ background: '#FFF', padding: '30px', boxShadow: '0 5px 15px rgba(58, 51, 43, 0.05)', border: '1px solid var(--color-rule-soft)' }}>
                                        <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>{item.title}</h3>
                                        <p style={{ color: 'var(--color-ink-muted)' }}>{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Works;
