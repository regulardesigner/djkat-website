import Biography from "./components/Biography";
import SoundcloudPlayer from "./components/SoundcloudPlayer";
import SocialNetworkMenu from "./components/SocialNetworksMenu";
import NotificationContainer from "./components/NotificationContainer";
import { useEffect, useRef } from "react";
import { tracks } from "./data/tracks";

function App() {
  const notificationShown = useRef(false);

  useEffect(() => {
    if (!notificationShown.current) {
      if ((window as any).showCustomNotification) {
        (window as any).showCustomNotification({
          title: "Welcome French-Touch Lovers! 🎵",
          body: "Thank you for visiting! Enjoy the music.",
          type: "info",
        });
      }
      notificationShown.current = true;
    }
  }, []);

  return (
    <div className="app">
      <NotificationContainer />
      <SocialNetworkMenu />
      <main className="container px-4 mb-5">
        <Biography />
        <h2 className="is-size-3 has-text-weight-bold mb-1">Last Releases:</h2>
        <div className="columns is-0-mobile is-multiline is-justify-content-center">
          {tracks.map((track) => (
            <div
              key={track.id}
              className="column is-one-quarter is-full-mobile"
            >
              <SoundcloudPlayer trackId={track.id} className="p-2" />
            </div>
          ))}
          <div className="column is-two-quarter is-full-mobile">
            <a
              className="soundcloud-djkat-link p-2 has-text-primary-invert is-size-4 has-text-weight-bold has-background-warning is-flex is-justify-content-center is-align-items-center"
              target="_blank"
              href="https://soundcloud.com/dj_kat_official"
            >
              Listen more on soundcloud
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
