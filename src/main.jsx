import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight, CalendarDays, CheckCircle2, Clock3, Globe2, Heart,
  Home, Instagram, Mail, Menu, MessageCircle, Phone, Sparkles,
  Star, X, BriefcaseBusiness, Gem, BookOpen, Compass
} from 'lucide-react';
import './styles.css';
import profileImage from './assets/profile.jpg';
import brandCard from './assets/brand-card.jpg';

const WHATSAPP = '918866656100';
const PHONE = '+91 8866656100';
const EMAIL = 'Ashokmaharaj026@gmail.com';

const services = [
  { icon: Sparkles, title: 'Kundli Analysis', price: '₹5,100', duration: '30 min', text: 'Personalized birth-chart reading for life direction, strengths and important phases.' },
  { icon: Heart, title: 'Marriage Matching', price: '₹3,100', duration: '45 min', text: 'Kundli Milan guidance to understand compatibility, strengths and key considerations.' },
  { icon: BriefcaseBusiness, title: 'Business & Career Guidance', price: '₹4,500', duration: '60 min', text: 'Astrological guidance for career choices, business direction and opportunities.' },
  { icon: Home, title: 'Vastu Consultation', price: '₹6,500', duration: '60 min', text: 'Practical Vastu consultation for home and workspaces with directional guidance.' },
  { icon: Gem, title: 'Numerology Reading', price: '₹2,500', duration: '30 min', text: 'Explore name and number patterns for personal, professional and life guidance.' },
];

const posts = [
  {
    icon: '🪐', title: 'April 2026 Rashifal',
    content: 'આ મહિને મેષ, વૃષભ, મિથુન માટે સારા યોગ છે. નોકરી અને બિઝનેસમાં પ્રગતિ થશે. કર્ક અને સિંહ રાશિ માટે ધ્યાન રાખવાનું રહેશે. ખર્ચ વધશે. કન્યા, તુલા, વૃશ્ચિક માટે લાભદાયક સમય છે. ધનુ, મકર, કુંભ અને મીન માટે નવા અવસર મળશે. 👉 આ મહિનો overall growth અને improvement માટે શુભ છે.'
  },
  {
    icon: '📘', title: 'Kundli શું છે અને કેમ મહત્વની છે?',
    content: 'કુંડળી જન્મ સમયે ગ્રહોની સ્થિતિ બતાવે છે. તે વ્યક્તિના સ્વભાવ, ભાગ્ય, કારકિર્દી અને લગ્ન વિશે માહિતી આપે છે. સાચી કુંડળી માર્ગદર્શન જીવનમાં યોગ્ય નિર્ણય લેવા મદદ કરે છે.'
  },
  {
    icon: '💎', title: 'તમારી રાશિ મુજબ રત્ન',
    content: 'મેષ: મૂંગો • વૃષભ: હીરા • મિથુન: પન્ના • કર્ક: મોતી • સિંહ: મણિક. 👉 યોગ્ય રત્ન પહેરવાથી ભાગ્ય મજબૂત બને છે.'
  },
  {
    icon: '🏠', title: 'ઘર માટે સરળ વાસ્તુ ટીપ્સ',
    content: 'ઘરનું મુખ્ય દરવાજું પૂર્વ કે ઉત્તર દિશામાં હોવું જોઈએ. રસોડું દક્ષિણ-પૂર્વમાં શુભ છે. પૈસા માટે તિજોરી ઉત્તર દિશામાં રાખવી.'
  },
  {
    icon: '🪔', title: 'સાડેસાતી શું છે?',
    content: 'શનિ ગ્રહનો 7.5 વર્ષનો પ્રભાવ સાડેસાતી કહેવાય છે. આ સમયમાં મુશ્કેલીઓ આવી શકે છે, પણ મહેનતથી સફળતા મળે છે. ઉપાયથી અસર ઓછી કરી શકાય છે.'
  }
];

const reviews = [
  ['Ramesh Patel', 'Surat', 'ખૂબ જ સચોટ માર્ગદર્શન મળ્યું, જીવનમાં સુધારો આવ્યો.'],
  ['Meena Shah', 'Mumbai', 'Marriage matching ખૂબ જ perfect કર્યું.'],
  ['Rajesh Kumar', 'Delhi', 'Business guidance થી profit વધ્યો.'],
  ['Pooja Verma', 'Ahmedabad', 'Very accurate predictions.'],
  ['Sunil Joshi', 'Nairobi', 'Online consultation best experience.'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const wa = (service = '') =>
    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
      `Namaste Ashokbhai, I would like to enquire about ${service || 'a consultation'}.`
    )}`;

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="site">
      <header className="nav">
        <div className="container nav-inner">
          <button className="brand" onClick={() => scrollTo('home')} aria-label="Go home">
            <span className="brand-mark">ॐ</span>
            <span>
              <strong>JAY AMBE JYOTISH</strong>
              <small>Ashokbhai Acharya</small>
            </span>
          </button>

          <button className="menu-btn" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>

          <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
            {[
              ['home', 'Home'], ['about', 'About'], ['services', 'Services'],
              ['blog', 'Blog'], ['reviews', 'Reviews'], ['contact', 'Contact']
            ].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)}>{label}</button>
            ))}
            <a className="nav-cta" href={wa()} target="_blank" rel="noreferrer">
              <MessageCircle size={17}/> WhatsApp
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-glow one"></div>
          <div className="hero-glow two"></div>
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><Sparkles size={15}/> Trusted Astrology Guidance • 10+ Years</div>
              <h1>Find clarity.<br/><span>Choose your path.</span></h1>
              <p className="hero-sub">
                Personalized guidance through <b>Kundli</b>, Vastu, Numerology,
                Marriage Matching, Business and Career consultations.
              </p>
              <div className="hero-actions">
                <a className="btn primary" href={wa()} target="_blank" rel="noreferrer">
                  <MessageCircle size={19}/> Book on WhatsApp
                </a>
                <button className="btn secondary" onClick={() => scrollTo('services')}>
                  Explore Services <ArrowRight size={18}/>
                </button>
              </div>
              <div className="trust-row">
                <div><span>10+</span><small>Years Experience</small></div>
                <div><span>5</span><small>Consultation Services</small></div>
                <div><span>🌎</span><small>Worldwide Online</small></div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="orbit orbit-a"></div>
              <div className="orbit orbit-b"></div>
              <div className="portrait-card">
                <img src={profileImage} alt="Ashokbhai Acharya" />
                <div className="portrait-overlay">
                  <span className="mini-badge"><CheckCircle2 size={14}/> Trusted Astrologer</span>
                  <h3>Ashokbhai Acharya</h3>
                  <p>Jyotish Acharya · Surat</p>
                </div>
              </div>
              <div className="floating-card fc-top"><Sparkles size={18}/><span>Personalized<br/><b>Guidance</b></span></div>
              <div className="floating-card fc-bottom"><Globe2 size={18}/><span>India · Kenya<br/><b>Worldwide</b></span></div>
            </div>
          </div>
        </section>

        <section className="strip">
          <div className="container strip-inner">
            <span>🔮 Kundli</span><i></i><span>💍 Marriage</span><i></i><span>💼 Career</span><i></i><span>🏠 Vastu</span><i></i><span>💎 Numerology</span>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="container about-grid">
            <div className="about-image-wrap">
              <img src={brandCard} alt="Jay Ambe Jyotish consultation card" />
              <div className="seal"><span>10+</span><small>YEARS<br/>EXPERIENCE</small></div>
            </div>
            <div className="section-copy">
              <div className="section-kicker">ABOUT JAY AMBE JYOTISH</div>
              <h2>Traditional wisdom,<br/><em>personal guidance.</em></h2>
              <p>
                Ashokbhai Acharya is a Jyotish Acharya based in Surat, offering
                thoughtful and personalized astrology guidance with 10+ years of experience.
              </p>
              <p>
                Consultations are available in <b>Gujarati, Hindi and English</b>,
                with online guidance available worldwide.
              </p>
              <div className="feature-list">
                <div><CheckCircle2/> Personalized consultation</div>
                <div><CheckCircle2/> Gujarati · Hindi · English</div>
                <div><CheckCircle2/> India & Kenya availability</div>
                <div><CheckCircle2/> Online consultation via WhatsApp</div>
              </div>
              <a className="text-link" href={wa()} target="_blank" rel="noreferrer">Start a consultation <ArrowRight size={17}/></a>
            </div>
          </div>
        </section>

        <section id="services" className="section services">
          <div className="container">
            <div className="section-head">
              <div><div className="section-kicker">CONSULTATION SERVICES</div><h2>Guidance for life's <em>important moments.</em></h2></div>
              <p>Choose the consultation that fits your question. Book directly on WhatsApp.</p>
            </div>
            <div className="service-grid">
              {services.map((s) => {
                const Icon = s.icon;
                return (
                  <article className="service-card" key={s.title}>
                    <div className="service-icon"><Icon size={22}/></div>
                    <div className="service-meta"><span>{s.duration}</span><span>{s.price}</span></div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                    <button onClick={() => setSelectedService(s)} className="service-link">Book consultation <ArrowRight size={16}/></button>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="blog" className="section blog">
          <div className="container">
            <div className="section-head centered">
              <div><div className="section-kicker">FROM THE ASTROLOGY DESK</div><h2>Insights & <em>guidance.</em></h2></div>
              <p>Simple astrology and Vastu insights in an easy-to-understand format.</p>
            </div>
            <div className="blog-grid">
              {posts.map((post, i) => (
                <article className="post" key={post.title}>
                  <div className="post-icon">{post.icon}</div>
                  <span className="post-no">0{i+1}</span>
                  <h3>{post.title}</h3>
                  <p>{post.content}</p>
                  <div className="post-footer"><span>Jay Ambe Jyotish</span><BookOpen size={15}/></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="section reviews">
          <div className="container">
            <div className="section-head centered">
              <div><div className="section-kicker">CLIENT EXPERIENCES</div><h2>Words from <em>our clients.</em></h2></div>
            </div>
            <div className="review-grid">
              {reviews.map(([name, city, text]) => (
                <article className="review" key={name}>
                  <div className="stars">{[1,2,3,4,5].map(i => <Star key={i} size={15} fill="currentColor"/>)}</div>
                  <p>“{text}”</p>
                  <div className="reviewer"><span>{name[0]}</span><div><b>{name}</b><small>{city}</small></div></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="container cta-inner">
            <div><div className="section-kicker">READY WHEN YOU ARE</div><h2>Have a question about your <em>next step?</em></h2><p>Connect with Ashokbhai for a personalized consultation.</p></div>
            <a className="btn light" href={wa()} target="_blank" rel="noreferrer"><MessageCircle size={19}/> Chat on WhatsApp <ArrowRight size={18}/></a>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="container contact-grid">
            <div>
              <div className="section-kicker">CONTACT</div>
              <h2>Let's connect.</h2>
              <p>Consultations are available daily from <b>10 AM – 8 PM</b>.</p>
              <div className="contact-list">
                <a href={wa()} target="_blank" rel="noreferrer"><span><MessageCircle/></span><div><small>WhatsApp</small><b>{PHONE}</b></div></a>
                <a href={`mailto:${EMAIL}`}><span><Mail/></span><div><small>Email</small><b>{EMAIL}</b></div></a>
                <div><span><Compass/></span><div><small>Locations</small><b>Surat, Gujarat (India) · Nairobi (Kenya)</b></div></div>
                <div><span><Clock3/></span><div><small>Working Hours</small><b>10 AM – 8 PM · Daily</b></div></div>
              </div>
            </div>
            <div className="contact-panel">
              <div className="contact-symbol">ॐ</div>
              <h3>JAY AMBE JYOTISH</h3>
              <p>Jyotish Acharya · Ashokbhai Acharya</p>
              <div className="contact-divider"></div>
              <span>Gujarati · Hindi · English</span>
              <span>Worldwide Online Consultation</span>
              <a href={wa()} target="_blank" rel="noreferrer" className="panel-wa"><MessageCircle size={17}/> WhatsApp Now</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <div><b>JAY AMBE JYOTISH</b><span>© 2026 Ashokbhai Acharya. All rights reserved.</span></div>
          <div className="footer-links"><button onClick={() => scrollTo('services')}>Services</button><button onClick={() => scrollTo('blog')}>Blog</button><button onClick={() => scrollTo('contact')}>Contact</button></div>
        </div>
      </footer>

      <a className="whatsapp-float" href={wa()} target="_blank" rel="noreferrer" aria-label="WhatsApp">
        <MessageCircle size={25}/>
      </a>

      {selectedService && (
        <div className="modal-backdrop" onClick={() => setSelectedService(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedService(null)}><X size={19}/></button>
            <div className="modal-icon"><selectedService.icon size={25}/></div>
            <div className="section-kicker">BOOK A CONSULTATION</div>
            <h3>{selectedService.title}</h3>
            <div className="modal-price">{selectedService.price} <span>· {selectedService.duration}</span></div>
            <p>{selectedService.text}</p>
            <a className="btn primary full" href={wa(selectedService.title)} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Continue on WhatsApp</a>
            <a className="modal-email" href={`mailto:${EMAIL}?subject=${encodeURIComponent('Consultation: ' + selectedService.title)}`}><Mail size={16}/> Prefer email? Contact {EMAIL}</a>
          </div>
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
