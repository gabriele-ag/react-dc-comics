const menuItem = [
    { sectionTitle: 'Characters', href: "" },
    { sectionTitle: 'Comics', href: "" },
    { sectionTitle: 'Movies', href: "" },
    { sectionTitle: 'Tv', href: "" },
    { sectionTitle: 'Games', href: "" },
    { sectionTitle: 'Collectibles', href: "" },
    { sectionTitle: 'Videos', href: "" },
    { sectionTitle: 'Fans', href: "" },
    { sectionTitle: 'News', href: "" },
    { sectionTitle: 'Shop', href: "" },
];

function Header() {
    return (
    <header className="flex">

        <img src="/dc-logo.png" alt="" />
        <nav>
            <ul className="flex font menu">
                {menuItem.map((curItem, index) => (
                    <li key={index}>
                        <a href={curItem.href}>{curItem.sectionTitle}</a>
                    </li>
                ))}
            </ul>
        </nav>
        
    </header>
    )
}

export default Header