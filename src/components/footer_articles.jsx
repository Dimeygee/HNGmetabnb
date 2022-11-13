


export const FooterArticle = ({ name, link1, link2, link3, link4 }) => {

    return (
        <article>
            <div className="footer_article">
                <h5>{name}</h5>
                <div className="footer_links_container">
                    <p>{link1}</p>
                    <p>{link2}</p>
                   <p>{link3}</p>
                   <p>{link4}</p>
                 </div>
            </div>
        </article>
    )

}