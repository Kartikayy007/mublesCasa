import { ContactForm } from "@/components/contact-form";
import { CONTACT_EMAIL, CONTACT_PHONE, Footer, Header } from "@/components/site";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="contact-page">
        <div className="shell">
          <p className="eyebrow">Start a project</p>
          <h1>Tell us about<br /><em>the space.</em></h1>
          <p>
            Share your property type, project location, quantity and the kind of atmosphere you are building. We will start with the brief.
          </p>
          <p className="contact-direct">
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}>{CONTACT_PHONE}</a>
          </p>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
