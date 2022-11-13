import { Container } from "../components/styles/container"
import setting from "../images/setting.png"
import { PLACETOSTAY_NFTS } from "../utils/ntfs"
import { NFT } from "../components/nfts"


function PlaceToStay () {

    return(
        <div className="">
            <Container>
                <div className="collections">
                    <div className="collection_list">
                        <p>Resturant</p>
                        <p>Cottage</p>
                        <p>Castle</p>
                        <p>fantast city</p>
                        <p>beach</p>
                        <p>Carbins</p>
                        <p>Off-grid</p>
                        <p>Farm</p>
                    </div>
                    <button className="location_filter">
                        <span>Location</span>
                        <img src={setting} alt="setting" />
                    </button>
                </div>
                <div className="placetostaynft_container">
                    {PLACETOSTAY_NFTS.map(nft => {
                        const {id}= nft 
                        return <div className="nft_container" key={id}><NFT nft={nft} /></div>
                    })}
                </div>
            </Container>
        </div>
    )

}

export default PlaceToStay