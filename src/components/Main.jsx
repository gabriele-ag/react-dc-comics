import comics from "../data/comics.js"


function Main() {
    return (
        <main>

            <section className="divisorImg"></section>

            {/* Content*/}

            <section className="sectionContent font">
                <span className="font titleSectionContent">CURRENT SERIES</span>
                <div className="container">
                    <ul className="comics flex">
                        {comics.map((curComic, index) => (
                            <li key={index}>
                                <img src={curComic.thumb} alt={curComic.type}/>
                                <p>{curComic.series}</p>
                            </li>
                            )
                        )}
                        <button className="btnLoad">LOAD MORE</button>
                    </ul>
                </div>
            </section>

            {/* /Content*/}

            {/* Menu-2 */}
            <section className="sectionMenu2 font">
                <div className="menu2 container flex">
                    <div className="fontMenu flex">
                        <img src="/buy-comics-digital-comics.png" alt="" />
                        <a href="">DIGITAL COMICS</a>
                    </div>
                    <div className="fontMenu flex">
                        <img src="/buy-comics-merchandise.png" alt="" />
                        <a href="">DC MERCHANDISE</a>
                    </div>
                    <div className="fontMenu flex">
                        <img src="/buy-comics-subscriptions.png" alt="" />
                        <a href="">SUBSCRIPTION</a>
                    </div>
                    <div className="fontMenu flex">
                        <img src="/buy-comics-shop-locator.png" alt="" />
                        <a href="">COMIC SHOP LOCATOR</a>
                    </div>
                    <div className="fontMenu flex">
                        <img src="/buy-dc-power-visa.svg" alt="" />
                        <a href="">DC POWER VISA</a>
                    </div>
                    
                </div>
            </section>
            {/* /Menu-2 */}
        </main>
    )
}

export default Main