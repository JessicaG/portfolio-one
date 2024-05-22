import profileImage from "@/../public/image/landing-bio-image.png";
import AboutTopLeftElement from "@/components/pages/about/AboutTopLeftElement";
import AboutUsBody from "@/components/pages/about/AboutUsBody";
import Footer from "@/components/pages/landing-one/Footer";
import EllipseShapeLandingTwoBottomRight from "@/components/pages/landing-two/EllipseShapeLandingTwoBottomRight";
import LinkBackHome from "@/components/shared/LinkBackHome";
import Navbar from "@/components/shared/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jessica West personal website",
  description: "A website resume for Jessica West",
};

const AboutUsTwo = () => {
  return (
    <div className="position-relative overflow-hidden ">
      <div className="container">
        <Navbar />
        <LinkBackHome />
        <AboutUsBody image={profileImage} />
        <Footer />
      </div>
      <AboutTopLeftElement />
      <EllipseShapeLandingTwoBottomRight />
    </div>
  );
};

export default AboutUsTwo;
