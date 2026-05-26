import React from 'react';
import HeroImage2 from '../assets/Mrs-OAC-2.png';

const About = () => {
    return (
        <div className="fade-in section-padding">
            <div className="container">
                <div className="grid-3" style={{ gap: '60px', alignItems: 'center' }}>
                    <div style={{ gridColumn: 'span 1' }}>
                        <img
                            src={HeroImage2}
                            alt="Oluwatoyin"
                            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                            onError={(e) => { e.target.src = 'https://via.placeholder.com/600x800\?text=Oluwatoyin' }}
                        />
                    </div>

                    <div style={{ gridColumn: 'span 2' }}>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '30px' }}>
                            MY CENTRAL MISSION IS TO EQUIP AFRICANS WHO CAN LEAD AFRICA AND THE WORLD.
                        </h1>

                        <div style={{ display: 'grid', gap: '20px', color: 'var(--color-text)', fontSize: '1.05rem', fontWeight: '300' }}>
                            <p>
                                My name is Oluwatoyin Ajilore-Chukwuemeka. I am fascinated by the capacity of the human mind. I love to see what people, organizations, and nations are capable of, on the other side of their comfort zone. It is no wonder most of my work have focused on uncovering, strengthening, and unleashing human capital.
                            </p>
                            <p>
                                My work is done from an Afrocentric perspective. I love Africa and I am convinced of her greatness. I believe in an Africa powered by her people's creativity and innovation and committed to her people's development.
                            </p>
                            <p>
                                I pursue this mission in a continually evolving pathway. I currently work as an Education Researcher, Policy Advocate, Founder of a social enterprise/nonprofit organization, Personal Transformation Coach, Author, and Speaker.
                            </p>
                            <p>
                                My work in education intersects practice, research, policy, and thought leadership. My research interests lie around fostering learning agency and responsive teaching, and promoting faculty professional development in Higher Education.
                            </p>
                            <p>
                                My work in social entrepreneurship focuses on strengthening entrepreneurial success among young people. Aside from education and social entrepreneurship, I also write and speak on issues that help people clarify and strengthen their capacities.
                            </p>
                        </div>

                        <div style={{ marginTop: '40px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                            <a href="mailto:hellotoyinajilore@gmail.com" className="btn btn-primary">Work With Me</a>
                            <a href="https://drive.google.com/drive/folders/1UvNdtLZQmsRPypz99uIbrpLEVQRuvknf" target="_blank" rel="noreferrer" className="btn btn-outline">Download Bio</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
