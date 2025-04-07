import { getCurrentYear } from '../helpers/date';

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          © {getCurrentYear()} <strong>DJ KAT</strong>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;