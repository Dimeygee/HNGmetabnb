
import { Star } from "./staricon"


export const NFT = ({ nft }) => {

    const { image, name, mbt, km, availability } = nft


    return (
        <>
            <img className="nft_image" src={image} alt="name" />
            <div className="nft__article">
                <span className="nft_name">{name}</span>
                <span className="nft_mbt">{mbt}</span>
            </div>
            <div className="nft__article article_2">
                <span className="nft_km">{km}</span>
                <span className="nft_avail">{availability}</span>
            </div>
            <div className="star_container">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
            </div>
        </>
    )

}