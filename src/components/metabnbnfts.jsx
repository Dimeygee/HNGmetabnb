import { Container } from "./styles/container"
import image9 from "../images/image 9.png"
import image7 from "../images/image 7.png"
import image8 from "../images/image 8.png"


export const MetaBnbNFTs = () => {


    return(
        <div className="metabnbnfts__container">
            <Container>
                <div className="metabnbnfts_inner_container">
                    <article className="metabnbnfts_article">
                        <h3>Metabnb NFTs</h3>
                        <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                        <button>Learn more</button>
                    </article>
                    <div className="metabnbnfts_img_container">
                        <img src={image9} alt="image9" className="metabnbnfts_img img_one" />
                        <img src={image8} alt="image8" className="metabnbnfts_img img_two"  />
                        <img src={image7} alt="image7" className="metabnbnfts_img img_three"  />
                    </div>
                </div>
            </Container>
        </div>
    )

}