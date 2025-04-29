import './Footer.css'

export default function Footer(){
    return(
    <footer>
        <div className="footer-container" id="section4">
          <div className="first-footer-block">
            <a className="logo" >
                SoundCode
            </a>
            <div className="top-footer-block">
                <a className="footer-links">About Us</a>
                <a className="footer-links">Contact Support</a>
                <a className="footer-links">FAQ Section</a>
                <a className="footer-links">Blog Posts</a>
                <a className="footer-links">User Reviews</a>
            </div>
            <div className="icon-footer-section">
                <img src='/images/MainPage/discord.png' alt="" className="footer-icon"/>
                <img src='/images/MainPage/x.png' alt="" className="footer-icon"/>
                <img src='/images/MainPage/github.png' alt="" className="footer-icon"/>
                <img src='/images/MainPage/telegram.png' alt="" className="footer-icon"/>
                <img src='/images/MainPage/instagram.png' alt="" className="footer-icon"/>
            </div>
          </div>
          <div className="second-footer-block">
            <p>© 2025 SoundCode. All rights reserved.</p>
            <a className="footer-links">Privacy Policy</a>
            <a className="footer-links">Terms of Service</a>
            <a className="footer-links"> Cookies Settings</a>
          </div>
        </div>
    </footer>
    );
}