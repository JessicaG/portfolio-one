import AboutTopLeftElement from "@/components/pages/about/AboutTopLeftElement";
import AboutUsBody from "@/components/pages/about/AboutUsBody";
import Footer from "@/components/pages/landing-one/Footer";
import EllipseShapeLandingTwoBottomRight from "@/components/pages/landing-two/EllipseShapeLandingTwoBottomRight";
import LinkBackHome from "@/components/shared/LinkBackHome";
import Navbar from "@/components/shared/Navbar";
import { Metadata } from "next";
import aboutOne from "@/../public/image/about-1.png"

export const metadata: Metadata = {
  title: "Jessica West personal website",
  description: "A website resume for Jessica West",
};

const AboutUs = () => {
  return (
    <div className="position-relative overflow-hidden ">
      <div className="container">
        <Navbar />
        <LinkBackHome />
        <AboutUsBody image={aboutOne} />
        <Footer />
      </div>
      <AboutTopLeftElement />
      <EllipseShapeLandingTwoBottomRight />
    </div>
  );
};

export default AboutUs;
