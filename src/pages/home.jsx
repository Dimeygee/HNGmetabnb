import { Container } from "../components/styles/container"
import { Header } from "../components/header"
import { NtfTypes } from "../components/nftTypes"
import { NFTS } from "../components/ntflists"



function Home(){


    return(
        <>
            <Container>
                <Header />
            </Container>
            <NtfTypes />
            <main>
                <NFTS />
            </main>
        </>
    )

}

export default Home