import { useEffect, useMemo, useState } from 'react';
import { ArrowDownRight, ArrowRight, BookOpen, Braces, Check, FileText, FlaskConical, Gamepad2, Menu, MessageCircle, Mic2, MoonStar, MousePointer2, Sparkles, WandSparkles, X } from 'lucide-react';
import type { Route } from './+types/home';

const SITE_URL = 'https://oppia.world';

export function meta({ }: Route.MetaArgs) {
  const title = 'Oppia — Six ways to move forward';
  const description =
    'Thoughtful digital products for reading, learning, speaking, building, creating, and coding. Explore Moozhaf, PICA, Tolk, Toolhub, Writer, and insideLab.';

  return [
    { title },
    { name: 'description', content: description },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'Oppia World' },
    { property: 'og:site_name', content: 'Oppia' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: SITE_URL },
    { property: 'og:image', content: `${SITE_URL}/og.png` },
    { property: 'og:image:secure_url', content: `${SITE_URL}/og.png` },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: title },
    { property: 'og:locale', content: 'en_US' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: `${SITE_URL}/og.png` },
    { name: 'twitter:image:alt', content: title },
  ];
}

export function links() {
  return [
    { rel: 'canonical', href: SITE_URL },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
  ];
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Oppia',
      url: SITE_URL,
      logo: `${SITE_URL}/logo-small.png`,
      description:
        'Thoughtful digital products for reading, learning, speaking, building, and creating.',
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Oppia',
      inLanguage: 'en',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
    ...[
      ['Moozhaf', 'https://moozhaf.oppia.world', 'A calm, considered space for Quran, surah, and ayah—made for returning daily.'],
      ['PICA', 'https://pica.oppia.world', 'Joyful matching games that help children ages 2–7 learn colors, images, and letters.'],
      ['Tolk', 'https://tolk.oppia.world', 'Realistic AI roleplay that listens, corrects, and helps every sentence sound professional.'],
      ['Toolhub', 'https://toolhub.oppia.world', 'Fast, focused utilities for developers converting PDFs, text, and structured data.'],
      ['Writer', 'https://write.oppia.world', 'Generate ideas, transform documents, and extract useful data from PDFs and Threads.'],
      ['insideLab', 'https://insidelab.oppia.world', 'An interactive lab for learning JavaScript and computational logic by running code.'],
    ].map(([name, url, description]) => ({
      '@type': 'WebSite',
      name: `Oppia ${name}`,
      url,
      description,
      inLanguage: 'en',
      publisher: { '@id': `${SITE_URL}/#organization` },
    })),
  ],
};

const products = [
  { id: 'moozhaf', name: 'Moozhaf', eyebrow: 'Read with presence', description: 'A calm, considered space for Quran, surah, and ayah—made for returning daily.', color: '#1f9d74', soft: '#dff5eb', icon: BookOpen, action: 'Begin reading', detail: 'Quran companion', href: 'https://moozhaf.oppia.world' },
  { id: 'pica', name: 'PICA', eyebrow: 'Little hands, big discoveries', description: 'Joyful matching games that help children ages 2–7 learn colors, images, and letters.', color: '#e46140', soft: '#ffe8db', icon: Gamepad2, action: 'Start playing', detail: 'Early learning games', href: 'https://pica.oppia.world' },
  { id: 'tolk', name: 'Tolk', eyebrow: 'Speak business with confidence', description: 'Realistic AI roleplay that listens, corrects, and helps every sentence sound professional.', color: '#7257d9', soft: '#ebe5ff', icon: Mic2, action: 'Practice a scenario', detail: 'Business English coach', href: '#products' },
  { id: 'toolhub', name: 'Toolhub', eyebrow: 'Small tools. Zero friction.', description: 'Fast, focused utilities for developers converting PDFs, text, and structured data.', color: '#1777d2', soft: '#dceeff', icon: Braces, action: 'Open the toolbox', detail: 'Developer utilities', href: 'https://toolhub.oppia.world' },
  { id: 'writer', name: 'Writer', eyebrow: 'Turn raw material into momentum', description: 'Generate ideas, transform documents, and extract useful data from PDFs and Threads.', color: '#c47a13', soft: '#fff0cf', icon: FileText, action: 'Create something', detail: 'Creative workflow', href: 'https://write.oppia.world' },
  { id: 'insidelab', name: 'insideLab', eyebrow: 'Learn code by running it', description: 'An interactive lab for JavaScript and logic. Read a model, test your prediction, and run it yourself to see what is really happening.', color: '#2e5b47', soft: '#e6efe9', icon: FlaskConical, action: 'Enter the lab', detail: 'JavaScript & logic lessons', href: 'https://insidelab.oppia.world' },
];

function ProductPreview({ id }: { id: string }) {
  if (id === 'moozhaf') return <div className="preview quran-preview"><div className="preview-top"><span>Al-Fātiḥah</span><span>01 / 07</span></div><div className="arabic">ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ</div><p>All praise is for Allah—Lord of all worlds.</p><div className="audio-line"><span className="play">▶</span><i /><span>00:18</span></div></div>;
  if (id === 'pica') return <div className="preview pica-preview"><div className="pica-label">Match the color</div><div className="pica-row"><span className="shape sun">●</span><span className="shape berry">▲</span><span className="shape sky">■</span></div><div className="pica-score"><Sparkles size={17} /> Great match! <b>3 / 5</b></div></div>;
  if (id === 'tolk') return <div className="preview tolk-preview"><div className="call-person"><span>JL</span><div><b>Jordan Lee</b><small>Procurement Director · AI roleplay</small></div><i /></div><div className="waveform">{Array.from({ length: 28 }).map((_, i) => <i key={i} style={{ height: `${14 + ((i * 17) % 32)}px` }} />)}</div><div className="feedback"><Check size={16} /> Clear proposal <span>Try “I recommend…”</span></div></div>;
  if (id === 'toolhub') return <div className="preview tool-preview"><div className="tool-grid"><span><FileText />PDF to text</span><span><Braces />JSON format</span><span><WandSparkles />Clean data</span><span><ArrowRight />More tools</span></div><div className="drop-zone">Drop a file here <small>Private, quick, browser-based</small></div></div>;
  if (id === 'insidelab') return <div className="preview lab-preview"><div className="lab-bar"><span className="lab-dots"><i /><i /><i /></span><span>latihan.js</span></div><div className="lab-code"><span className="lab-num">1</span><code>const age = 20;</code></div><div className="lab-code"><span className="lab-num">2</span><code>typeof age;</code></div><div className="lab-out"><small>Run</small><b>「number」</b></div></div>;
  return <div className="preview writer-preview"><div className="writer-document"><small>Idea studio</small><h4>Five angles for your next launch</h4><span /><span /><span className="short" /></div><div className="writer-command"><Sparkles size={15} /> Turn this title into a useful outline <ArrowRight size={15} /></div></div>;
}

export default function Home() {
  const [active, setActive] = useState('moozhaf'); const [menuOpen, setMenuOpen] = useState(false); const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const selected = useMemo(() => products.find(p => p.id === active) ?? products[0], [active]);
  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <header className="site-header"><a className="brand" href="#top" aria-label="Oppia home"><span className="brand-mark"><img src="/logo-small.png" alt="" /></span><span>Oppia world</span></a><nav className="desktop-nav" aria-label="Primary navigation"><a href="#products">Products</a><a href="#principles">Why Oppia world</a><a href="#about">About</a></nav><a className="header-cta" href="#products">Explore products <ArrowDownRight size={16} /></a><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>{menuOpen && <nav className="mobile-nav"><a href="#products" onClick={() => setMenuOpen(false)}>Products</a><a href="#principles" onClick={() => setMenuOpen(false)}>Why Oppia world</a><a href="#about" onClick={() => setMenuOpen(false)}>About</a></nav>}</header>
    <section className="hero" id="top"><div className={`hero-copy ${mounted ? 'is-in' : ''}`}><p className="kicker"><span />One world. Six useful ways forward.</p><h1>Digital products for the moments that <em>move you.</em></h1><p className="hero-lede">Read with intention. Help a child discover. Speak with confidence. Build faster. Turn ideas into something real.</p><div className="hero-actions"><a className="button primary" href="#products">Find your product <ArrowRight size={18} /></a><a className="text-link" href="#principles">See how we design <ArrowDownRight size={17} /></a></div><div className="trust-line"><span className="avatars"><i>M</i><i>P</i><i>T</i><i>+</i></span><span>Made for focus, built for real life.</span></div></div>
      <div className={`orbit-stage ${mounted ? 'is-in' : ''}`} aria-label="Oppia product constellation"><div className="ambient ambient-a" /><div className="ambient ambient-b" /><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="core"><span className="core-mark"><img src="/logo-white-small.png" width={50} height={50} /></span></div>{products.map((p, i) => { const Icon = p.icon; return <button key={p.id} className={`planet planet-${i + 1} ${active === p.id ? 'active' : ''}`} style={{ '--product': p.color, '--soft': p.soft } as React.CSSProperties} onClick={() => setActive(p.id)} aria-label={`Show ${p.name}`}><Icon size={19} /><span>{p.name}</span></button> })}<div className="orbit-note"><MousePointer2 size={14} />Explore the constellation</div></div></section>
    <section className="signal-strip" aria-label="Product promises"><span>Thoughtful by default</span><i /><span>Useful from the first click</span><i /><span>Human at every scale</span></section>
    <section className="products-section" id="products"><div className="section-heading"><div><p className="kicker"><span />The Oppia constellation</p><h2>Different needs.<br />One thoughtful ecosystem.</h2></div><p>Every product has its own character and purpose. What connects them is a refusal to make simple things feel complicated.</p></div><div className="product-selector" role="tablist" aria-label="Oppia products">{products.map((p, i) => <button key={p.id} role="tab" aria-selected={active === p.id} className={active === p.id ? 'selected' : ''} onClick={() => setActive(p.id)} style={{ '--product': p.color } as React.CSSProperties}><span>0{i + 1}</span>{p.name}</button>)}</div><article className="product-stage" style={{ '--product': selected.color, '--soft': selected.soft } as React.CSSProperties}><div className="product-copy"><span className="product-chip"><selected.icon size={16} />{selected.detail}</span><p>{selected.eyebrow}</p><h3>{selected.name}</h3><div className="product-description">{selected.description}</div><a className="button product-button" href={selected.href}>{selected.action}<ArrowRight size={18} /></a><div className="product-pagination">{products.map(p => <button key={p.id} aria-label={`View ${p.name}`} className={p.id === active ? 'current' : ''} onClick={() => setActive(p.id)} />)}</div></div><div className="product-visual"><div className="halo" /><ProductPreview id={selected.id} /><span className="floating-tag tag-one">Designed for flow</span><span className="floating-tag tag-two">No clutter</span></div></article></section>
    <section className="principles" id="principles"><p className="kicker light"><span />How Oppia feels</p><h2>Technology should leave you with <em>more attention</em>, not less.</h2><div className="principle-grid"><article><span>01</span><MoonStar /><h3>Calm, not cold</h3><p>Warm surfaces and clear hierarchy keep the experience focused without feeling clinical.</p></article><article><span>02</span><MessageCircle /><h3>Guidance, not noise</h3><p>Each interaction gives the next useful cue—nothing competes with the task in front of you.</p></article><article><span>03</span><Sparkles /><h3>Delight with purpose</h3><p>Motion, depth, and personality signal progress and relationships, never delay them.</p></article></div></section>
    <section className="journeys"><div className="journey-intro"><p className="kicker"><span />Start where you are</p><h2>What do you want to do today?</h2></div><div className="journey-list">{products.map((p, i) => { const Icon = p.icon; return <a key={p.id} id={p.id} href={p.href} onClick={() => setActive(p.id)} style={{ '--product': p.color, '--soft': p.soft } as React.CSSProperties}><span className="journey-number">0{i + 1}</span><span className="journey-icon"><Icon /></span><span><b>{p.eyebrow}</b><small>{p.name} · {p.detail}</small></span><ArrowDownRight className="journey-arrow" /></a> })}</div></section>
    <section className="final-cta" id="about"><div className="cta-orb"><img src="/logo-small.png" width={75} height={75} /></div><p className="kicker light"><span />Your next useful thing</p><h2>Six products.<br />One place to begin.</h2><p>Choose the moment you want to improve. Oppia will help you move it forward.</p><a className="button white" href="#products">Explore the ecosystem <ArrowRight size={18} /></a></section>
    <footer><a className="brand footer-brand" href="#top"><span className="brand-mark"><img src="/logo-white-small.png" alt="Logo Oppia world" /></span><span>oppia world</span></a><p>Thoughtful digital products for everyday progress.</p><nav><a href="#products">Products</a><a href="#principles">Principles</a><a href="#about">About</a><a href="#">Privacy</a><a href="#">Terms</a></nav><small>© 2026 Oppia World</small></footer>
  </main>;
}
