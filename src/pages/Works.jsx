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

    return (
        <div className="fade-in">
            {/* Header Section */}
            <div style={{ backgroundColor: 'var(--color-ink-deep)', padding: '80px 0', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: 'var(--color-cream-on-dark)'  }}>MY WORKS</h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-cream-muted)' }}>
                        Exploring the intersection of education, personal development, and social impact through research, coaching, and entrepreneurship.
                    </p>
                </div>
            </div>

            <div className="container section-padding">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '100px' }}>
                    
                    {/* Section 1: Education & Thought Leadership */}
                    <div id="thought-leadership" className="works-grid" style={{
                        borderBottom: '1px solid var(--color-rule-soft)',
                        paddingBottom: '80px'
                    }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Education & Thought Leadership</h2>
                            <h4 style={{ color: 'var(--color-ink-deep)', marginBottom: '20px', fontFamily: 'var(--font-body)', fontWeight: 500 }}>
                                Research Work, Teacher Training & Education Policy
                            </h4>
                            <p style={{ color: 'var(--color-ink-muted)', marginBottom: '30px', lineHeight: 1.6 }}>
                                Driving educational transformation through comprehensive research, innovative teacher training programs, and strategic policy development that shapes the future of learning.
                            </p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                            {/* Card 1: Thought Leadership Articles */}
                            <div style={{ background: '#FFF', padding: '35px', boxShadow: '0 5px 15px rgba(58, 51, 43, 0.05)', border: '1px solid var(--color-rule-soft)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <h3 style={{ fontSize: '1.4rem' }}>Thought Leadership</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', flexGrow: 1 }}>
                                    <div>
                                        <p style={{ color: 'var(--color-ink-muted)', marginBottom: '8px', fontSize: '14.5px' }}>Find my articles on TheCable here.</p>
                                        <a href="https://www.thecable.ng/author/oluwatoyin-ajilore-chukwuemeka/" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '12px', display: 'inline-block' }}>
                                            Read Articles
                                        </a>
                                    </div>
                                    <div style={{ borderTop: '1px solid var(--color-rule-soft)', paddingTop: '15px' }}>
                                        <p style={{ color: 'var(--color-ink-muted)', marginBottom: '8px', fontSize: '14.5px' }}>Find some of my policy briefs here.</p>
                                        <a href="https://www.igetafrica.org/policy-briefs/" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '12px', display: 'inline-block' }}>
                                            Read Policy Briefs
                                        </a>
                                    </div>
                                    <div style={{ borderTop: '1px solid var(--color-rule-soft)', paddingTop: '15px' }}>
                                        <p style={{ color: 'var(--color-ink-muted)', marginBottom: '8px', fontSize: '14.5px' }}>Find some of my other thought pieces here.</p>
                                        <a href="https://www.linkedin.com/in/oluwatoyinajilore/" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '12px', display: 'inline-block' }}>
                                            Read LinkedIn Pieces
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2: Teacher Training */}
                            <div id="teacher-training" style={{ background: '#FFF', padding: '35px', boxShadow: '0 5px 15px rgba(58, 51, 43, 0.05)', border: '1px solid var(--color-rule-soft)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <h3 style={{ fontSize: '1.4rem' }}>Teacher Training</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', flexGrow: 1 }}>
                                    <div>
                                        <p style={{ color: 'var(--color-ink-muted)', marginBottom: '8px', fontSize: '14.5px' }}>Training Teachers at Global Schools Program</p>
                                        <a href="https://www.globalschoolsprogram.org/post/educator-workshop-on-teaching-as-research" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '12px', display: 'inline-block' }}>
                                            Global Schools Post
                                        </a>
                                    </div>
                                    <div style={{ borderTop: '1px solid var(--color-rule-soft)', paddingTop: '15px' }}>
                                        <p style={{ color: 'var(--color-ink-muted)', marginBottom: '8px', fontSize: '14.5px' }}>Educator Workshop Video</p>
                                        <a href="https://www.youtube.com/watch?v=rsJjvzOw8Q4&t=239s" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '12px', display: 'inline-block' }}>
                                            Watch Workshop
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3: Skilled Teachers Academy & Tools */}
                            <div style={{ background: '#FFF', padding: '35px', boxShadow: '0 5px 15px rgba(58, 51, 43, 0.05)', border: '1px solid var(--color-rule-soft)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <h3 style={{ fontSize: '1.4rem' }}>Academy & Tools</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', flexGrow: 1 }}>
                                    <div>
                                        <p style={{ color: 'var(--color-ink-muted)', marginBottom: '8px', fontSize: '14.5px' }}>The Skilled Teachers Academy</p>
                                        <a href="https://www.youtube.com/watch?v=h2SFgkeX4Y8" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '12px', display: 'inline-block' }}>
                                            Watch Session
                                        </a>
                                    </div>
                                    <div style={{ borderTop: '1px solid var(--color-rule-soft)', paddingTop: '15px' }}>
                                        <p style={{ color: 'var(--color-ink-muted)', marginBottom: '8px', fontSize: '14.5px' }}>Tech Tools for Educators</p>
                                        <a href="https://oaccoaching.selar.com/44dr" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '12px', display: 'inline-block' }}>
                                            Explore Tech Tools
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Card 4: Research Works */}
                            <div style={{ background: '#FFF', padding: '35px', boxShadow: '0 5px 15px rgba(58, 51, 43, 0.05)', border: '1px solid var(--color-rule-soft)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <h3 style={{ fontSize: '1.4rem' }}>Tufts Research</h3>
                                <p style={{ color: 'var(--color-ink-muted)', fontSize: '14.5px', flexGrow: 1, lineHeight: 1.6 }}>
                                    Exploring responsive teaching, learner agency, authentic scientific thinking, and sociocultural frameworks, with a focus on college-level students in the Global South.
                                </p>
                                <a href="https://sites.tufts.edu/oluwatoyinajilore/" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '12px 20px', fontSize: '13px', textAlign: 'center', marginTop: '10px' }}>
                                    View Research Works
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Personal Transformation */}
                    <div id="personal-transformation" className="works-grid" style={{
                        borderBottom: '1px solid var(--color-rule-soft)',
                        paddingBottom: '80px'
                    }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Personal Transformation</h2>
                            <h4 style={{ color: 'var(--color-ink-deep)', marginBottom: '20px', fontFamily: 'var(--font-body)', fontWeight: 500 }}>
                                Coaching Company & Emerging Circle
                            </h4>
                            <p style={{ color: 'var(--color-ink-muted)', marginBottom: '30px', lineHeight: 1.6 }}>
                                Empowering individuals and organizations through strategic coaching methodologies and leadership development programs that unlock human potential.
                            </p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                            {/* Card 1: OAC Coaching */}
                            <div style={{ background: '#FFF', padding: '35px', boxShadow: '0 5px 15px rgba(58, 51, 43, 0.05)', border: '1px solid var(--color-rule-soft)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <h3 style={{ fontSize: '1.4rem' }}>OAC Coaching</h3>
                                <p style={{ color: 'var(--color-ink-muted)', fontSize: '14.5px', flexGrow: 1, lineHeight: 1.6 }}>
                                    My goal is to help you unlock a higher level of purpose-driven productivity rooted in a life of harmony. Imagine achieving your biggest professional goals without sacrificing your personal life, doing more while staying true to yourself, and reducing overwhelm while increasing results.
                                </p>
                                <a href="https://bit.ly/OACBrochureNG" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '12px 20px', fontSize: '13px', textAlign: 'center' }}>
                                    Explore OAC Coaching
                                </a>
                            </div>

                            {/* Card 2: Book - Driven */}
                            <div style={{ background: '#FFF', padding: '35px', boxShadow: '0 5px 15px rgba(58, 51, 43, 0.05)', border: '1px solid var(--color-rule-soft)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <h3 style={{ fontSize: '1.4rem' }}>Driven (Book)</h3>
                                <p style={{ color: 'var(--color-ink-muted)', fontSize: '14.5px', flexGrow: 1, lineHeight: 1.6 }}>
                                    Driven is a compilation of insights and reflections. It is a date with wisdom that has shone through diverse life experiences. In the book, I shared some of the life lessons I have garnered over 30 years of trudging on the uncharted terrain called life.
                                </p>
                                <a href="https://oaccoaching.selar.co/driven" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '12px 20px', fontSize: '13px', textAlign: 'center' }}>
                                    Get "Driven" Book
                                </a>
                            </div>

                            {/* Card 3: Book - The Other Joseph */}
                            <div style={{ background: '#FFF', padding: '35px', boxShadow: '0 5px 15px rgba(58, 51, 43, 0.05)', border: '1px solid var(--color-rule-soft)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <h3 style={{ fontSize: '1.4rem' }}>The Other Joseph (Book)</h3>
                                <p style={{ color: 'var(--color-ink-muted)', fontSize: '14.5px', flexGrow: 1, lineHeight: 1.6 }}>
                                    The Other Joseph is a journey from fear to courage. It’s how one man came to take his place in God’s agenda for his time. If you have ever wondered how to move from fear to courage, this book will guide you in discovering and understanding how to consistently stand in courage as you take your place.
                                </p>
                                <a href="https://bit.ly/books_by_oac_" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '12px 20px', fontSize: '13px', textAlign: 'center' }}>
                                    Get "The Other Joseph" Book
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Section 3: Social Entrepreneurship */}
                    <div id="social-entrepreneurship" className="works-grid" style={{
                        paddingBottom: '0'
                    }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Social Entrepreneurship</h2>
                            <h4 style={{ color: 'var(--color-ink-deep)', marginBottom: '20px', fontFamily: 'var(--font-body)', fontWeight: 500 }}>
                                ONE Foundation
                            </h4>
                            <p style={{ color: 'var(--color-ink-muted)', marginBottom: '30px', lineHeight: 1.6 }}>
                                Creating sustainable social impact through innovative entrepreneurship initiatives and community development programs that address real-world challenges.
                            </p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                            {/* Card 1: ONE Foundation Overview */}
                            <div style={{ background: '#FFF', padding: '35px', boxShadow: '0 5px 15px rgba(58, 51, 43, 0.05)', border: '1px solid var(--color-rule-soft)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <h3 style={{ fontSize: '1.4rem' }}>Foundation Overview</h3>
                                <p style={{ color: 'var(--color-ink-muted)', fontSize: '14.5px', flexGrow: 1, lineHeight: 1.6 }}>
                                    A nonprofit organization that provides executive entrepreneurial education, mentoring linkages, funding linkages and other forms of resources to youth entrepreneurs.
                                </p>
                                <a href="https://oaccoaching.selar.com/shop" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '12px 20px', fontSize: '13px', textAlign: 'center' }}>
                                    Visit Shop / Overview
                                </a>
                            </div>

                            {/* Card 2: Impact Stories */}
                            <div style={{ background: '#FFF', padding: '35px', boxShadow: '0 5px 15px rgba(58, 51, 43, 0.05)', border: '1px solid var(--color-rule-soft)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <h3 style={{ fontSize: '1.4rem' }}>Impact Stories</h3>
                                <p style={{ color: 'var(--color-ink-muted)', fontSize: '14.5px', flexGrow: 1, lineHeight: 1.6 }}>
                                    Real stories of transformation and community empowerment through our initiatives. Watch and explore first-hand visual impact details of our social enterprise.
                                </p>
                                <a href="https://www.youtube.com/watch?v=ulghsXPHR1A" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '12px 20px', fontSize: '13px', textAlign: 'center' }}>
                                    Watch Impact Stories
                                </a>
                            </div>

                            {/* Card 3: Community Projects */}
                            <div style={{ background: '#FFF', padding: '35px', boxShadow: '0 5px 15px rgba(58, 51, 43, 0.05)', border: '1px solid var(--color-rule-soft)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <h3 style={{ fontSize: '1.4rem' }}>Community Projects</h3>
                                <p style={{ color: 'var(--color-ink-muted)', fontSize: '14.5px', flexGrow: 1, lineHeight: 1.6 }}>
                                    Sustainable development projects creating measurable impact in underserved communities. Discover our current construction, policy, and educational implementations.
                                </p>
                                <a href="https://www.youtube.com/watch?v=p-qRQdyIu1A" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '12px 20px', fontSize: '13px', textAlign: 'center' }}>
                                    Watch Community Projects
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Works;
