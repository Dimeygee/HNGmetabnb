import { Container } from "../components/styles/container"
import { Header } from "../components/header"
import { NtfTypes } from "../components/nftTypes"
import { NftLists } from "../components/ntflists"
import { MetaBnbNFTs } from "../components/metabnbnfts"



function Home(){


    return(
        <>
            <Container>
                <Header />
            </Container>
            <NtfTypes />
            <main>
                <NftLists />
            </main>
            <MetaBnbNFTs />
        </>
    )

}

export default Home