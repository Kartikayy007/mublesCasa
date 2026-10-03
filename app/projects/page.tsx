import { Footer, Header, ImageGrid, PageHero, TrustedMarquee } from "@/components/site";

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <PageHero eyebrow="Hospitality projects" image="/assets/932e872d-1af2-4fc1-b726-b0e7ecb91811.JPG" title={<>Made for the way<br /><em>people gather.</em></>}>
        We create furniture stories for hotels, resorts, restaurants, cafés and private hospitality spaces.
      </PageHero>
      <TrustedMarquee />
      <ImageGrid
        images={[
          { src: "/assets/0952cd02-d394-4dbc-a325-010ab8dec9ab.JPG", title: "Boutique hotels", copy: "Furniture systems that bring a property’s guest rooms together." },
          { src: "/assets/a06962d8-2e09-490d-990d-b8af452d7e98.JPG", title: "Dining venues", copy: "Seating and tables that give every cover its own character." },
          { src: "/assets/d6450ebf-43ec-4628-b88d-fb9a7f026d02.JPG", title: "Signature suites", copy: "Layered finishes for spaces guests remember." },
        ]}
      />
      <section className="process-band">
        <p className="eyebrow light">From brief to site</p>
        <h2>Brief · material direction · making · delivery</h2>
      </section>
      <Footer />
    </>
  );
}
