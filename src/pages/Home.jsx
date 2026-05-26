import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PlayCircle } from 'lucide-react';
import './Home.css';
import HeroImage from '../assets/Mrs-OAC-1.png';

// Gallery
import gallery1 from '../assets/gallery/image-1.png';
import gallery2 from '../assets/gallery/image-2.png';
import gallery3 from '../assets/gallery/image-3.png';
import gallery4 from '../assets/gallery/image-4.png';
import gallery5 from '../assets/gallery/image-5.png';

// Media
import logoArise from '../assets/media-mentions/AriseNews.png';
import logoBBC from '../assets/media-mentions/BBC.png';
import logoBiz from '../assets/media-mentions/BusinessDay.png';
import logoChannels from '../assets/media-mentions/Channels.png';
import logoCourier from '../assets/media-mentions/africanCourier.png';
import logoCable from '../assets/media-mentions/theCable.png';

// Blogs
import blogTeachingResearchGap from '../assets/blogs/Teaching-research-gap.png';
import blogAiEducation from '../assets/blogs/AI-education.png';
import blogNobelPrize from '../assets/blogs/Nobel-Prize1.png';

const Home = () => {
    // Duplicated arrays for infinite seamless scrolling effect
    const galleryItems = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery1, gallery2, gallery3, gallery4, gallery5];
    const mediaLogos = [logoArise, logoBBC, logoBiz, logoChannels, logoCourier, logoCable, logoArise, logoBBC, logoBiz, logoChannels, logoCourier, logoCable];

    return (
        <div className="fade-in">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-grid">
                    <div className="hero-content">
                        <h1 className="hero-title">Developing the human capital for the future of Africa.</h1>
                        <p className="hero-subtitle">
                            I am Oluwatoyin Ajilore-Chukwuemeka. I am fascinated by the capacity of the human mind. I love to see what people, organizations, and nations are capable of, on the other side of their comfort zone.
                        </p>
                        <div>
                            <Link to="/about" className="btn btn-primary">Learn More About Me</Link>
                        </div>
                    </div>
                    <div className="hero-image-wrapper">
                        <img src={HeroImage} alt="Oluwatoyin Ajilore-Chukwuemeka" className="hero-img" onError={(e) => { e.target.src = 'https://via.placeholder.com/800x1200\?text=Oluwatoyin' }} />
                    </div>
                </div>
            </section>

            {/* Brief About Snippet Section */}
            <section className="about-snippet">
                <div className="container">
                    <h2 className="section-title">MY CENTRAL MISSION</h2>
                    <p className="about-snippet-text font-body mt-4">
                        My central mission is to equip Africans who can lead Africa and the world. I want to connect Africa's future as a global player that can provide the strong leadership that the world needs, to the necessary human capital this future requires.
                    </p>
                </div>
            </section>

            {/* What I Do Section */}
            <section className="works-snippet">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Areas of Focus</h2>
                        <p>An intersection of education, entrepreneurship, policy advocacy, and personal mastery.</p>
                    </div>

                    <div className="grid-3">
                        <div className="work-card">
                            <div className="work-number">01</div>
                            <h3 className="work-card-title">Education</h3>
                            <p className="work-card-desc">
                                This intersects educational practice, policy, research, and advocacy.
                            </p>
                            <Link to="/works#education" className="work-card-link">
                                Read More <ArrowRight size={16} />
                            </Link>
                        </div>

                        <div className="work-card">
                            <div className="work-number">02</div>
                            <h3 className="work-card-title">Personal Transformation</h3>
                            <p className="work-card-desc">
                                I help visionaries do more without overwhelm! I write stories and books geared towards being true to oneself.
                            </p>
                            <Link to="/works#personal-transformation" className="work-card-link">
                                Read More <ArrowRight size={16} />
                            </Link>
                        </div>

                        <div className="work-card">
                            <div className="work-number">03</div>
                            <h3 className="work-card-title">Social Entrepreneurship</h3>
                            <p className="work-card-desc">
                                This involves equipping young people with social entrepreneurial skills.
                            </p>
                            <Link to="/works#social-entrepreneurship" className="work-card-link">
                                Read More <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Latest Articles Section */}
            <section className="articles-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">LATEST ARTICLES</h2>
                        <p>Thoughts and perspectives from my column at The Cable.</p>
                    </div>

                    <div className="grid-3">
                        {/* Article 1 */}
                        <div className="article-card">
                            <img src={blogTeachingResearchGap} alt="Teaching-research gap" className="article-img" />
                            <div className="article-content">
                                <span className="article-date">January 12, 2026</span>
                                <h3 className="article-title">Teaching-research gap: The overlooked crisis in higher education</h3>
                                <p className="article-desc">When it comes to the need for higher education to better equip students for the modern world, conversations often return to what is commonly called the teaching-research gap...</p>
                                <a href="https://www.thecable.ng/teaching-research-gap-the-overlooked-crisis-in-higher-education/" target="_blank" rel="noreferrer" className="work-card-link">
                                    Read More <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>

                        {/* Article 2 */}
                        <div className="article-card">
                            <img src={blogAiEducation} alt="Nigerian education and AI" className="article-img" />
                            <div className="article-content">
                                <span className="article-date">November 10, 2025</span>
                                <h3 className="article-title">Nigerian education and AI: The conversation we should be having</h3>
                                <p className="article-desc">If you follow news about education in Nigeria, chances are you have come across something about AI and education recently. The conversation is everywhere...</p>
                                <a href="https://www.thecable.ng/nigerian-education-and-ai-the-conversation-we-should-be-having/" target="_blank" rel="noreferrer" className="work-card-link">
                                    Read More <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>

                        {/* Article 3 */}
                        <div className="article-card">
                            <img src={blogNobelPrize} alt="Nobel Prize reflections" className="article-img" />
                            <div className="article-content">
                                <span className="article-date">October 14, 2025</span>
                                <h3 className="article-title">Nobel Prize reflections: The urgent case for funding African research</h3>
                                <p className="article-desc">When a person leaves Nigeria to pursue graduate studies in the West, especially in the most common destinations such as the US, UK, and Canada, they are often reminded of the resource gap...</p>
                                <a href="https://www.thecable.ng/nobel-prize-reflections-the-urgent-case-for-funding-african-research/" target="_blank" rel="noreferrer" className="work-card-link">
                                    Read More <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '50px' }}>
                        <a href="https://www.thecable.ng/author/oluwatoyin-ajilore-chukwuemeka/" target="_blank" rel="noreferrer" className="btn btn-outline">VIEW ALL ARTICLES</a>
                    </div>
                </div>
            </section>

            {/* Featured Highlights Section */}
            <section className="highlights-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">FEATURED HIGHLIGHTS</h2>
                        <p>Key presentations on technology, education, and African development.</p>
                    </div>

                    <div className="grid-3">
                        <a href="https://www.youtube.com/watch?v=--xCI2y_1JI&t=11s" target="_blank" rel="noreferrer" className="highlight-card">
                            <img src="https://i.ytimg.com/vi/--xCI2y_1JI/sddefault.jpg?sqp=-oaymwEmCIAFEOAD8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGGUgWyhXMA8=&rs=AOn4CLAxJEHCcC762P7OJJSO1N9XohCmAQ" alt="Highlight 1" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=800&auto=format&fit=crop' }} />
                            <div className="highlight-content">
                                <PlayCircle size={48} color="var(--color-cream-on-dark)" />
                                <h3 className="highlight-title">Addressing Yemi Osinbajo, VP of Nigeria</h3>
                            </div>
                        </a>
                        <a href="https://www.youtube.com/watch?v=1STGoKg2mVM" target="_blank" rel="noreferrer" className="highlight-card">
                            <img src="https://i.ytimg.com/vi_webp/1STGoKg2mVM/sddefault.webp" alt="Highlight 2" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop' }} />
                            <div className="highlight-content">
                                <PlayCircle size={48} color="var(--color-cream-on-dark)" />
                                <h3 className="highlight-title">Africa #Agenda2063 Advocacy</h3>
                            </div>
                        </a>
                        <a href="https://www.youtube.com/watch?v=H4jIGBnxZ5g" target="_blank" rel="noreferrer" className="highlight-card">
                            <img src="https://i.ytimg.com/vi/H4jIGBnxZ5g/sddefault.jpg?sqp=-oaymwEmCIAFEOAD8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgVihDMA8=&rs=AOn4CLBd5huO400qFnswGpvke8z3locIqA" alt="Highlight 3" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1475721025505-1175af4091f9?q=80&w=800&auto=format&fit=crop' }} />
                            <div className="highlight-content">
                                <PlayCircle size={48} color="var(--color-cream-on-dark)" />
                                <h3 className="highlight-title">University of Washington Presentation</h3>
                            </div>
                        </a>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '50px' }}>
                        <a href="https://www.youtube.com/@oluwatoyinajilore" target="_blank" rel="noreferrer" className="btn btn-outline">VIEW MORE ON YOUTUBE</a>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="gallery-section">
                <div className="section-header">
                    <h2 className="section-title">GALLERY</h2>
                    <p>Moments shared with powerful voices worldwide.</p>
                </div>

                {/* Carousel container */}
                <div className="gallery-carousel">
                    {galleryItems.map((imgSrc, idx) => (
                        <div key={idx} className="gallery-item">
                            <img src={imgSrc} alt={`Gallery moment ${idx}`} />
                        </div>
                    ))}
                </div>
            </section>

            {/* Media Mention Section */}
            <section className="media-section">
                <div className="container" style={{ marginBottom: '40px', textAlign: 'center' }}>
                    <h2 className="section-title" style={{ fontSize: '2rem' }}>MEDIA MENTIONS</h2>
                </div>

                {/* Marquee container */}
                <div className="media-marquee">
                    {mediaLogos.map((logo, idx) => (
                        <img key={idx} src={logo} alt="Media Logo" className="media-logo" />
                    ))}
                </div>
            </section>

            {/* Insights Email Section */}
            <section className="insights-section">
                <div className="container">
                    <div style={{ marginTop: '80px', marginBottom: '80px', padding: '60px', background: 'var(--color-paper-deep)', textAlign: 'center', border: '1px solid var(--color-rule-soft)' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Insights Email</h2>
                        <p style={{ maxWidth: '600px', margin: '0 auto 30px', color: 'var(--color-ink-muted)' }}>
                            In-Sights is the mailing community where I share some of my most personal thoughts and lessons about life. I hope we constantly take an inside/closer look at life together to draw wisdom for every day living.
                        </p>
                        <a href="https://subscribepage.io/insights" target="_blank" rel="noreferrer" className="btn btn-primary">
                            SIGN UP NOW
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
