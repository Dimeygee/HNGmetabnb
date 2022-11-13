import { HOME_NFTSARRAYS } from "../utils/ntfs"
import { NFT } from "./nfts"
import { Container } from "./styles/container"


export const NftLists = () => {



    return (
        <div id="NFTS">
            <h3 className="nts_heading">Inspiration for your next adventure</h3>
            <section>
                <Container>
                    <div className="nftlist_container">
                        {HOME_NFTSARRAYS.map(nft => {
                            const {id}= nft 
                            return <div className="nft_container" key={id}><NFT nft={nft} /></div>
                        })}
                    </div>
                </Container>
            </section>
        </div>
    )
}