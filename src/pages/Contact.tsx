
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";
import ContactAdditionalInfo from "@/components/contact/ContactAdditionalInfo";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
      <ContactAdditionalInfo />
      <Footer />
    </div>
  );
};

export default Contact;
