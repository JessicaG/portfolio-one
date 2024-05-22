import AboutTopLeftElement from "@/components/pages/about/AboutTopLeftElement";
import ContactBody from "@/components/pages/contact/ContactBody";
import Footer from "@/components/pages/landing-one/Footer";
import ServiceBottomRight from "@/components/pages/service/AboutTopLeftElement";
import LinkBackHome from "@/components/shared/LinkBackHome";
import Navbar from "@/components/shared/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Grid System Unique Portfolio NextJs Template",
  description: "NextJs Template",
};

const Contact = () => {
  return (
    <div className="position-relative overflow-hidden">
      <div className="container">
        <Navbar />
        <LinkBackHome />
        <ContactBody />
        <Footer />
      </div>
      <AboutTopLeftElement />
      <ServiceBottomRight />
    </div>
  );
};

export default Contact;
