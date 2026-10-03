import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export const CONTACT_EMAIL = "info@furnituremind.in";
export const CONTACT_PHONE = "+91 9899789062";

const TRUSTED_LOGOS = [
  "/assets/hilton-hotels-commercial-furniture-manufacturer.png.webp",
  "/assets/leela-palaces-luxury-restaurant-seating-custom.png.webp",
  "/assets/marriott-resorts-hospitality-furniture-supplier.png.webp",
  "/assets/novotel-hotels-wholesale-cafe-furniture-vendor.png.webp",
  "/assets/radisson-hotel-banquet-event-furniture-b2b.png.webp",
  "/assets/ramada-wyndham-hotel-guestroom-furniture-direct.png.webp",
];

export function Header() {
  return <header className="page-header"><Link className="page-brand" href="/"><Image src="/assets/logo.JPG" alt="rbfurniture" width={1300} height={1222} /><span></span></Link><nav><Link href="/indoor">Indoor</Link><Link href="/outdoor">Outdoor</Link><Link href="/projects">Projects</Link><Link href="/about">About</Link></nav><Link className="page-cta" href="/contact">Start a project ↗</Link></header>;
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link className="footer-logo" href="/" aria-label="rbfurniture home">
            <Image src="/assets/logo.JPG" alt="rbfurniture" width={1300} height={1222} />
          </Link>
          <div className="footer-brand-copy">
            <h2>Furniture made<br />for hospitality.</h2>
            <p className="footer-contact-lines">
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}>{CONTACT_PHONE}</a>
            </p>
          </div>
        </div>
        <div className="footer-links">
          <p className="footer-label">Explore</p>
          <Link href="/indoor">Indoor collection</Link>
          <Link href="/outdoor">Outdoor collection</Link>
          <Link href="/projects">Hospitality projects</Link>
          <Link href="/about">Our approach</Link>
        </div>
        <div className="footer-contact">
          <p className="footer-label">Project enquiries</p>
          <p>Tell us about your hotel, resort, restaurant or hospitality project.</p>
          <a href={`mailto:${CONTACT_EMAIL}`}>Start a conversation <span>↗</span></a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} rbfurniture. All rights reserved.</span>
        <span>Hotels · Resorts · Restaurants</span>
      </div>
    </footer>
  );
}

export function TrustedMarquee() {
  const logos = [...TRUSTED_LOGOS, ...TRUSTED_LOGOS];
  return (
    <section className="trusted-marquee" aria-label="Trusted hospitality partners">
      <p className="trusted-marquee-heading">TRUSTED BY 50+ HOTELS, RESORTS &amp; ARCHITECTURE FIRMS ACROSS GLOBLE</p>
      <div className="trusted-marquee-viewport">
        <div className="trusted-marquee-track">
          {logos.map((src, index) => (
            <div className="trusted-marquee-item" key={`${src}-${index}`}>
              <Image src={src} alt="" width={400} height={200} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PageHero({ eyebrow, title, image, children }: { eyebrow: string; title: ReactNode; image: string; children: ReactNode }) {
  return <section className="page-hero"><Image src={image} alt="rbfurniture hospitality furniture" fill priority sizes="100vw" /><div className="page-hero-shade" /><div className="page-hero-content shell"><p className="eyebrow light">{eyebrow}</p><h1>{title}</h1><p>{children}</p></div></section>;
}

export function ImageGrid({ images }: { images: { src: string; title: string; copy: string }[] }) {
  return <section className="image-grid shell">{images.map((item) => <article key={item.title}><div><Image src={item.src} alt={item.title} fill sizes="(max-width: 700px) 100vw, 33vw" /></div><h3>{item.title}</h3><p>{item.copy}</p></article>)}</section>;
}
