import Link from "next/link";

const Footer = () => {
  return (
    <footer className="landing-footer m-t-120px position-relative z-2">
      <div className="landing-footer__left">
        <p className="landing-footer__copyright-text textL">
          Copyright @ {new Date().getFullYear()}{" "}
          <Link href={`/`} className="footer-template-link">
            JessicaW
          </Link>
        </p>
      </div>
      <ul className="landing-footer__menu">
        <li className="landing-footer__menu-item">
          <Link className="textL" href={`/`}>
            Home
          </Link>
        </li>
        <li className="landing-footer__menu-item">
          <Link className="textL" href={`/about`}>
            About
          </Link>
        </li>
        <li className="landing-footer__menu-item">
          <Link className="textL" href={`/all-projects`}>
            Works
          </Link>
        </li>
        <li className="landing-footer__menu-item">
          <Link className="textL" href={`/contact`}>
            Contact
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
