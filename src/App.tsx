import Biography from "./components/Biography";
import SoundcloudPlayer from "./components/SoundcloudPlayer";
import SocialNetworkMenu from "./components/SocialNetworksMenu";
import { useEffect, useRef } from "react";
import { tracks } from "./data/tracks";
import { useNotify } from "./contexts/NotificationContext";

function App() {
  const notify = useNotify();
  const notificationShown = useRef(false);

  useEffect(() => {
    // Guard against StrictMode running the effect twice in development.
    if (notificationShown.current) return;

    notify({
      title: "Welcome French-Touch Lovers! 🎵",
      body: "Thank you for visiting! Enjoy the music.",
      type: "info",
    });
    notificationShown.current = true;
  }, [notify]);

  return (
    <div className="app">
      <SocialNetworkMenu />
      <main id="main-content" tabIndex={-1} className="container px-4 mb-5">
        <Biography />
        <section aria-labelledby="releases-heading">
          <h2
            id="releases-heading"
            className="is-size-3 has-text-weight-bold mb-1"
          >
            Last Releases:
          </h2>
          <div className="columns is-0-mobile is-multiline is-justify-content-center">
            {tracks.map((track) => (
              <div
                key={track.id}
                className="column is-one-quarter is-full-mobile"
              >
                <SoundcloudPlayer
                  trackId={track.id}
                  title={track.title}
                  className="p-2"
                />
              </div>
            ))}
            <div className="column is-two-quarter is-full-mobile">
              <a
                className="soundcloud-djkat-link p-2 has-text-primary-invert is-size-4 has-text-weight-bold has-background-warning is-flex is-justify-content-center is-align-items-center"
                target="_blank"
                rel="noopener noreferrer"
                href="https://soundcloud.com/dj_kat_official"
              >
                Listen more on soundcloud
                <span className="is-sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
