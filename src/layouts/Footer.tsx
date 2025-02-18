import { getCurrentYear } from '../helpers/date';

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          © {getCurrentYear()} <strong>DJ KAT</strong>. All rights reserved. Unauthorized use is prohibited.
        </p>
        <p className="is-size-7">All music and content on this website are protected by copyright and intellectual property laws. <br />Some tracks may contain samples owned by third parties. Any unauthorized use, reproduction, or distribution is strictly prohibited.</p>
      </div>
    </footer>
  );
}

export default Footer;