import "./Main.css";

import SpotifyButton from "../../../components/Buttons/SpotifyButton";
import ImageGallery from '../../../components/ImageGallery/ImageGallery';

export default function Main(){
    return(
    <main className="main-container" id="section1">
        <section className="main-container">
            <div className="first-text-block"><h1>Show your taste in music!</h1></div>
            <div className="first-combined-block">
                <div className="left-side">
                <ImageGallery />
                </div>
                <div className="right-side">
                <h1 className="main-right-text">Share your musical taste with others!</h1>
                <p className="light-right-text">The web app allows you to export your playlist
                    from Spotify and displaying your favourite pieces of music in your profile. 
                    Anybody can discover each other by their musical preferences with just couple of
                    clicks. Join us!
                </p>
                </div>
            </div>
            <div className="features-block" id="section2">
                <div className="first-text-block"><h1>Features</h1></div>
                <div className="feature-block">
                    <img src='/images/MainPage/magnifier.png' alt="magnifier_image" className="icon" />
                    <h2>Find others who listen like you do</h2>
                    <p>Compare your favorite tracks and artists with other users.</p>
                </div>
                <div className="feature-block">
                    <img src='/images/MainPage/trend.png' alt="graph_image" className="icon" />
                    <h2>Music statistics by day</h2>
                    <p>Find out when you listen the most - morning, night, at work?</p>
                </div>
                <div className="feature-block">
                    <img src='/images/MainPage/calendar.png' alt="calendar_image" className="icon" />
                    <h2>The soundtrack of your month</h2>
                    <p>Automatic listening calendar: your moods in music.</p>
                </div>
                <div className="feature-block">
                    <img src='/images/MainPage/dna.png' alt="dna_image" className="icon" />
                    <h2>Personal music profile</h2>
                    <p>Graphics, genres, mood, energy - everything about your style in one place.</p>
                </div>
            </div>
            <div className="join-block">
                <h2>Join us via <span>Spotify</span></h2>
                <SpotifyButton />
            </div>
            <div className="view-site">
            </div>
        </section>
    </main>
    );
}

 //There will be screenshots of the site on view-site block