import "./Buttons.css";

export default function SpotifyButton({ }) {
    return (
      <div className="spotify-wrapper">
        <button /*onClick={() => spotifyRedirect()}*/ className="spotify-btn">
          <span className="spotify-text-normal">Sign in via</span>
          <span className="spotify-text-bold">Spotify<p style={{fontSize:'8px'}}>®</p></span>
        </button>
        <span className="spotify-disclaimer">
          This site is not associated with Spotify Corp.
        </span>
      </div>
    );
  }
  