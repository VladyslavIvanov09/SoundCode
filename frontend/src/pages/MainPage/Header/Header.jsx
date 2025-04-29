import './Header.css'
import SpotifyButton from "../../../components/Buttons/SpotifyButton";

export default function Header(){
    return(
    <header>
        <section className="header-container">
            <span className="logo">
                SoundCode
            </span>
            <a href="#section1" class="hyperlink">Info</a>
            <a href="#section2" class="hyperlink">Features</a>
            <a href="#section3" class="hyperlink">View</a>
            <a href="#section4" class="hyperlink">About Us</a>
            <SpotifyButton/>
        </section>
    </header>
    );
}