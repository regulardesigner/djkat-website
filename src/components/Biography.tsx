import PhotosSlider from "./PhotosSlider";

function Biography() {
  return (
    <section
      data-testid="biography-section"
      className="biography columns is-align-items-center is-0-mobile has-text-current mb-6"
    >
      <div className="column is-half is-size-5">
        <h2 className="is-size-3 has-text-weight-bold">Biography:</h2>

        <p className="mb-4">
          DJ KAT is already making his mark on the house music scene. A French
          DJ and producer with a real passion for house music, he has been
          self-taught for the past four years, creating a unique style inspired
          by the house sounds of the 90s and 2000s. As well as mixing with
          fluidity on controller, CDJ and vinyl, DJ KAT produces original tracks
          in which he weaves a rich sonic palette.
        </p>

        <p className="mb-4">
          In particular, he likes to sample soul, funk and disco vinyl to infuse
          his creations with a vintage, groovy touch, adding synthesizers and
          drum machines. His influences include icons such as Thomas Bangalter,
          DJ Falcon, Olav Basoski and Phats & Small...
        </p>
      </div>
      <div className="column is-half">
        <PhotosSlider />
      </div>
    </section>
  );
}

export default Biography;
