import { faInstagram, faYoutube, faSoundcloud, faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Hyperlink from "@/types/Hyperlinks";

export const socialNetworks: Hyperlink[] = [
  {
    name: "Instagram",
    type: "link",
    url: "https://www.instagram.com/dj_kat_official/",
    icon: faInstagram,
  },
  {
    name: "Youtube",
    type: "link",
    url: "https://www.youtube.com/@DJKAT909",
    icon: faYoutube,
  },
  {
    name: "Soundcloud",
    type: "link",
    url: "https://soundcloud.com/dj_kat_official",
    icon: faSoundcloud,
  },
  {
    name: "Spotify",
    type: "link",
    url: "https://open.spotify.com/intl-fr/artist/3edwtEfH0EeArhL0V4wedI",
    icon: faSpotify,
  },
  {
    name: "Contact",
    type: "email",
    url: "mailto:musicdjkat@gmail.com",
    icon: faEnvelope,
  }
]; 