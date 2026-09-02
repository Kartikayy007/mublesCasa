import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export function Header() {
  return <header className="page-header"><Link className="page-brand" href="/"><Image src="/assets/logo.JPG" alt="Muebles Casa" width={1300} height={1222} /><span>Muebles Casa</span></Link><nav><Link href="/indoor">Indoor</Link><Link href="/outdoor">Outdoor</Link><Link href="/projects">Projects</Link><Link href="/about">About</Link></nav><Link className="page-cta" href="/contact">Start a project ↗</Link></header>;
}

export function Footer() {
  return <footer className="site-footer"><div className="footer-main"><div className="footer-brand"><Image src="/assets/logo.JPG" alt="Muebles Casa" width={1300} height={1222} /><div><p className="eyebrow light">Muebles Casa</p><h2>Furniture made<br />for hospitality.</h2></div></div><div className="footer-links"><p className="footer-label">Explore</p><Link href="/indoor">Indoor collection</Link><Link href="/outdoor">Outdoor collection</Link><Link href="/projects">Hospitality projects</Link><Link href="/about">Our approach</Link></div><div className="footer-contact"><p className="footer-label">Project enquiries</p><p>Tell us about your hotel, resort, restaurant or hospitality project.</p><Link href="/contact">Start a conversation <span>↗</span></Link></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Muebles Casa. All rights reserved.</span><span>Hotels · Resorts · Restaurants</span></div></footer>;
}

export function PageHero({ eyebrow, title, image, children }: { eyebrow: string; title: ReactNode; image: string; children: ReactNode }) {
  return <section className="page-hero"><Image src={image} alt="Muebles Casa hospitality furniture" fill priority sizes="100vw" /><div className="page-hero-shade" /><div className="page-hero-content shell"><p className="eyebrow light">{eyebrow}</p><h1>{title}</h1><p>{children}</p></div></section>;
}

export function ImageGrid({ images }: { images: { src: string; title: string; copy: string }[] }) {
  return <section className="image-grid shell">{images.map((item) => <article key={item.title}><div><Image src={item.src} alt={item.title} fill sizes="(max-width: 700px) 100vw, 33vw" /></div><h3>{item.title}</h3><p>{item.copy}</p></article>)}</section>;
}
