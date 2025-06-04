import social from "../data/socials.js"
import Socials from "./propSocials.jsx"

function Footer() {
    return (
        <footer>
            <section className="sectionFooter1 font">
                <div className="menuFooter container flex">
                    <div>
                        <ul className="m-bt">
                            <li className="m-bt"><h3>DC COMICS</h3></li>
                            <li><a href="">Characters</a></li>
                            <li><a href="">Comics</a></li>
                            <li><a href="">Movies</a></li>
                            <li><a href="">Tv</a></li>
                            <li><a href="">Games</a></li>
                            <li><a href="">Videos</a></li>
                            <li><a href="">News</a></li>
                        </ul>
                        <ul>
                            <li className="m-bt"><a href=""></a><h3>SHOP</h3></li>
                            <li><a href="">Shop DC</a></li>
                            <li><a href="">Shop DC Collectibles</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className="m-bt"><h3>DC</h3></li>
                            <li><a href="">Terms of Use</a></li>
                            <li><a href="">Privacy policy(New)</a></li>
                            <li><a href="">Ad Choices</a></li>
                            <li><a href="">Advertising</a></li>
                            <li><a href="">Jobs</a></li>
                            <li><a href="">Subscriptions</a></li>
                            <li><a href="">Talent Workshop</a></li>
                            <li><a href="">CPSC Certificates</a></li>
                            <li><a href="">Ratings</a></li>
                            <li><a href="">Shop Help</a></li>
                            <li><a href="">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className="m-bt"><h3>SITES</h3></li>
                            <li><a href="">DC</a></li>
                            <li><a href="">MAD Magazine</a></li>
                            <li><a href="">DC Kids</a></li>
                            <li><a href="">DC Universe</a></li>
                            <li><a href="">DC Power Visa</a></li>
                        </ul>
                    </div>

                    <div className="logoBG">
                        <img src="/dc-logo-bg.png" alt="" />
                    </div>
                </div>
            </section>

            <section className="sectionFooter2 font">
                <div className="menuFooter2 container flex">
                    <div>
                        <a href="" className="btn">SIGN-UP NOW!</a>
                    </div>
                    
                    <div className="flex callToAction">

                        <span className="followUs">FOLLOW US</span>

                        <ul className="flex socials">

                            {social.map((curSocial, index) => (
                                <Socials
                                key= {`${index}`}
                                thumb = {curSocial.img}
                                alt = {curSocial.alt}
                                link = {curSocial.link} />
                            ))}

                        </ul>
                    </div>
                    

                </div>
            </section>
        </footer>
    )
}

export default Footer