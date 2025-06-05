import Socials from "./propSocials.jsx"
import social from "../data/socials.js"

import MenuFooter from "./propMenuFooter.jsx"
import { dccomicsLink }  from "../data/footerlinks.js"
import { shopLinks } from "../data/footerlinks.js"
import { infoLinks } from "../data/footerlinks.js"
import { otherdcLinks } from "../data/footerlinks.js"

function Footer() {
    return (
        <footer>
            <section className="sectionFooter1 font">
                <div className="menuFooter container flex">
                    <div>
                        <ul className="m-bt">
                            <li className="m-bt"><h3>DC COMICS</h3></li>

                            {dccomicsLink.map((curLink, index) => (
                                <MenuFooter
                                key = {`${index}`}
                                link = {curLink.href}
                                resourcetitle = {curLink.title} />
                            ))}
        
                        </ul>
                        <ul>
                            <li className="m-bt"><a href=""></a><h3>SHOP</h3></li>

                            {shopLinks.map((curLink, index) => (
                                <MenuFooter
                                key = {`${index}`}
                                link = {curLink.href}
                                resourcetitle = {curLink.title}/>
                            ))}

                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className="m-bt"><h3>DC</h3></li>

                            { infoLinks.map((curLink, index) => (
                                <MenuFooter
                                key = {`${index}`}
                                link = {curLink.href}
                                resourcetitle = {curLink.title}/>
                            ))}

                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className="m-bt"><h3>SITES</h3></li>

                            { otherdcLinks.map((curLink, index) => (
                                <MenuFooter
                                key = {`${index}`}
                                link = {curLink.href}
                                resourcetitle = {curLink.title}/>
                            ))}
                            
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