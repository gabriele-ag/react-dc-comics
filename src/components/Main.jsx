// Comics data & prop
import comics from "../data/comics.js"
import CardComic from "./propCard.jsx"

// cta data & prop
import CtaSite from "./propCTA.jsx"
import cta from "../data/CTAsite.js"


function Main() {
    return (
        <main>

            <section className="dividerImg"></section>

            {/* Content*/}

            <section className="sectionContent font">
                <span className="font titleSectionContent">CURRENT SERIES</span>
                <div className="container">
                    <ul className="comics flex">

                        {comics.map((curComic, index) => (

                            <CardComic 
                            key = {`${index}`} 
                            thumb = {curComic.thumb} 
                            type = {curComic.type}
                            series = {curComic.series}/>
                            
                            ))}

                        <button className="btnLoad">LOAD MORE</button>
                    </ul>
                </div>
            </section>

            {/* /Content*/}

            {/* Menu-2 */}
            <section className="sectionMenu2 font">
                <div className="menu2 container flex">
                    
                    {cta.map((curCta, index) => (
                        <CtaSite
                        key = {`${index}`}
                        thumb = {curCta.img}
                        alt = {curCta.alt}
                        title = {curCta.title}
                        link = {curCta.link}
                        />
                    ))}

                </div>
            </section>
            {/* /Menu-2 */}
        </main>
    )
}

export default Main