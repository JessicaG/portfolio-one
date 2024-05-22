import AboutTopLeftElement from "@/components/pages/about/AboutTopLeftElement";
import BlogDetailsBody from "@/components/pages/blog-details/BlogDetailsBody";
import Footer from "@/components/pages/landing-one/Footer";
import EllipseShapeLandingTwoBottomRight from "@/components/pages/landing-two/EllipseShapeLandingTwoBottomRight";
import LinkBackHome from "@/components/shared/LinkBackHome";
import Navbar from "@/components/shared/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jessica West personal website",
  description: "A website resume for Jessica West",
};

const Blog = () => {
  return (
    <div className="position-relative overflow-hidden">
      <div className="container">
        <Navbar />
        <LinkBackHome />
        <BlogDetailsBody />
        <Footer />
      </div>
      <AboutTopLeftElement />
      <EllipseShapeLandingTwoBottomRight />
    </div>
  );
};

export default Blog;
