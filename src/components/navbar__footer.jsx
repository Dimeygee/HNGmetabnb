import { Outlet, Link } from "react-router-dom"
import { Container } from "./styles/container"
import logo from "../images/logo_img.png"
import { Footer } from "./footer"
import { Modal } from "./modal"
import { ModalContent } from "./modalcontent"
import { useState } from "react"


export const NavBarFooter = () => {


    const [open, isOpen] = useState(true)

    return (
        <>
            <Modal isOpen={isOpen} open={open}>
                <ModalContent isOpen={isOpen} open={open} />
            </Modal>
            <Container>
                <nav id="navbar">
                    <Link href="/" className="logo_img">
                        <img src={logo} alt="logo_img" />
                    </Link>
                    <div className="navlink_container">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/Placetostay">Place to stay</Link></li>
                            <li><Link to="/">NFTs</Link></li>
                            <li><Link to="/">Community</Link></li>
                        </ul>
                    </div>
                    <div className="btn__container"> 
                        <button onClick={e => isOpen(!open)}>Connect Wallet</button>  
                    </div>
                </nav>
            </Container>
            <Outlet />
            <footer>
                <Footer />
            </footer>
        </>
    )

}