import { Footer } from "@/components/site";
import Image from "next/image";
import Link from "next/link";

const offerings = [
  { number: "01", title: "Guest rooms", copy: "Beds, bedside tables, seating and casegoods designed around your room story.", image: "/assets/a1c94549-02d6-4ad0-803b-be980a8de465.JPG", alt: "A refined hotel bedroom with a dark timber bed" },
  { number: "02", title: "Restaurants", copy: "Distinctive dining environments made to welcome a full house, beautifully.", image: "/assets/932e872d-1af2-4fc1-b726-b0e7ecb91811.JPG", alt: "A warmly detailed restaurant dining space" },
  { number: "03", title: "Public spaces", copy: "Lobby, lounge and banquet pieces built for the rhythm of real hospitality.", image: "/assets/84b97661-8244-4d5f-adb6-e672526fbf7a.JPG", alt: "Rows of elegant wood and upholstered chairs" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="rbfurniture home"><Image src="/assets/logo.JPG" alt="rbfurniture" width={1300} height={1222} priority /><span></span></Link>
        <nav className="desktop-nav" aria-label="Primary navigation"><Link href="/indoor">Indoor</Link><Link href="/outdoor">Outdoor</Link><Link href="/projects">Projects</Link><Link href="/about">About</Link></nav>
        <Link className="header-cta" href="/contact">Start a project <span>↗</span></Link>
      </header>

      <section className="hero" id="top">
        <Image src="/assets/hero-hospitality-v2.png" alt="An elegant rbfurniture hotel bedroom" fill priority sizes="100vw" className="hero-image" />
        <div className="hero-overlay" />
        <div className="hero-content shell">
          <p className="eyebrow light">rbfurniture / India</p>
          <h1>Furniture<br /><em>for hotels & resorts.</em></h1>
          <p className="hero-copy">Bespoke hospitality furniture for hotels, resorts and restaurants where every detail is part of the welcome.</p>
          <div className="hero-actions"><a className="button button-ivory" href="#collections">Explore collections <span>↓</span></a><a className="text-link" href="#projects">Discuss your project <span>↗</span></a></div>
        </div>
        <div className="hero-footer shell"><span>Made for considered spaces</span><span className="hero-line" /><span>Hotels · Resorts · Restaurants</span></div>
      </section>

      <section className="intro shell" id="approach">
        <p className="eyebrow">Built around your guest experience</p>
        <div className="intro-grid"><h2>Every room has a feeling.<br />We make the furniture <em>belong to it.</em></h2><div className="intro-side"><p>From a one-off signature suite to a full property fit-out, rbfurniture brings together considered design, material depth and dependable making for the hospitality world.</p><a className="arrow-link" href="#projects">How we work <span>→</span></a></div></div>
      </section>

      <section className="stats"><div className="shell stats-grid"><div><strong>Bespoke</strong><span>Made to your brief</span></div><div><strong>Hospitality</strong><span>Built for daily life</span></div><div><strong>End-to-end</strong><span>From concept to delivery</span></div><div><strong>India + beyond</strong><span>Projects without borders</span></div></div></section>

      <section className="collections" id="collections">
        <div className="shell collection-heading"><div><p className="eyebrow">Our hospitality collection</p><h2>Made for every<br /><em>moment of a stay.</em></h2></div><p>Furniture that looks composed on day one and feels right after a thousand welcomes.</p></div>
        <div className="collection-grid shell">{offerings.map((offering) => <article className="collection-card" key={offering.number}><div className="card-image"><Image src={offering.image} alt={offering.alt} fill sizes="(max-width: 700px) 100vw, 33vw" /></div><div className="card-meta"><span>{offering.number}</span><span>Explore <b>↗</b></span></div><h3>{offering.title}</h3><p>{offering.copy}</p></article>)}</div>
      </section>

      <section className="feature" id="projects"><div className="feature-image"><Image src="/assets/2e07e079-03f0-4dca-9529-f13554afa2e4.JPG" alt="Handcrafted timber dining chairs and tables" fill sizes="(max-width: 850px) 100vw, 52vw" /></div><div className="feature-content"><p className="eyebrow light">Materials with a memory</p><h2>Designed with<br />the hand <em>in mind.</em></h2><p>Warm timber, tailored upholstery and honest construction. We create pieces that invite people to settle in—and stand up to the stories that follow.</p><a className="button button-outline" href="#top">View our capabilities <span>↗</span></a></div></section>
      <Footer />
    </main>
  );
}
