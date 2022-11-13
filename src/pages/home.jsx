import { Container } from "../components/styles/container"
import { Header } from "../components/header"
import { NtfTypes } from "../components/nftTypes"
import { NftLists } from "../components/ntflists"



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
        </>
    )

}

export default Home