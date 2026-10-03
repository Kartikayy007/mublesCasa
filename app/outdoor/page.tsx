import { Footer, Header, PageHero } from "@/components/site";

export default function OutdoorPage() {
  return (
    <>
      <Header />
      <PageHero eyebrow="Outdoor collection" image="/assets/f24ab20e-0c4b-470b-a721-65de0e2b3a51.JPG" title={<>Outdoor pieces,<br /><em>made to stay out.</em></>}>
        Poolside, terrace and open-air hospitality furniture made for beautiful moments under the sky.
      </PageHero>
      <section className="copy-section shell">
        <p className="eyebrow">Resort & terrace furniture</p>
        <h2>For the spaces<br /><em>between indoors.</em></h2>
        <p>Loungers, outdoor dining, bar seating and relaxed social zones designed to extend the character of a property beyond its walls.</p>
      </section>
      <Footer />
    </>
  );
}
