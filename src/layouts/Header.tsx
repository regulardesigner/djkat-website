import "@styles/header.css";

import djkatLogo from "@assets/djkat_logo.webp";

function Header() {
  return (
    <header className="hero is-small hero-djkat">
      <div className="hero-body is-flex is-align-items-center is-justify-content-center">
        <h1 className="djkat-logo has-text-warning is-size-1">
          <img
            className="image-logo"
            src={djkatLogo}
            alt="DJ KAT"
            width={1000}
            height={480}
            fetchPriority="high"
          />
        </h1>
      </div>
    </header>
  );
}

export default Header;
