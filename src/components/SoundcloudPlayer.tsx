import '@/styles/soundcloudPlayer.css';

import TrackId from '@/types/trackId';

function SoundcloudPlayer({ trackId }: TrackId) { 
  const src = new URL("https://w.soundcloud.com/player/");

  src.searchParams.append(
    "url",
    `https://api.soundcloud.com/tracks/${trackId}`,
  );
  src.searchParams.append("color", "ffb70f");
  src.searchParams.append("auto_play", "false");
  src.searchParams.append("hide_related", "false");
  src.searchParams.append("show_comments", "false");
  src.searchParams.append("show_user", "false");
  src.searchParams.append("show_reposts", "false");
  src.searchParams.append("show_teaser", "false");
  src.searchParams.append("visual", "true");
  src.searchParams.append("show_artwork", "true");

  const url = src.toString();

  //TODO: Accessibility: display a player name with the artist name and track name.
  return (
    <div data-testid={`soundcloud-player-${trackId}`} className="dj-kat-soundcloud-player is-flex is-justify-content-center is-align-items-center">
      <iframe
        className="dj-kat-soundcloud-player__iframe"
        width="400"
        height="400"
        src={url}
        title="Soundcloud Player"
      />
    </div>
  );
}

export default SoundcloudPlayer;
