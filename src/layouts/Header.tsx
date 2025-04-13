import '@styles/header.css';
import djkatLogo from '@assets/djkat_text.png'

function Header() {
  return (
    <section className="hero is-small hero-djkat">
      <div className="hero-body is-flex is-align-items-center is-justify-content-center">
        <h1 className="djkat-logo has-text-warning is-size-1">
          <img className='image-logo' src={djkatLogo} alt='DJ KAT' />
        </h1>
      </div>
    </section>
  );
}

export default Header;