function Socials ({thumb, link, alt}) {
    return (
    <li>
        <a href={link}>
        <img src={thumb} alt={alt} /></a>
    </li>
    )
}

export default Socials