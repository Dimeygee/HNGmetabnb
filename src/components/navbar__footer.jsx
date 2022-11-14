import { Outlet, Link } from "react-router-dom"
import { Container } from "./styles/container"
import logo from "../images/logo_img.png"
import { Footer } from "./footer"
import { Modal } from "./modal"
import { ModalContent } from "./modalcontent"
import { useState } from "react"
import { MobileModal } from "./mobileModal"
import { MobileMenu } from "./mobilemenu"



export const NavBarFooter = () => {


    const [open, isOpen] = useState(false)
    const [mobile, ismobileOpen] = useState(false)
   
    return (
        <>
            <Modal isOpen={isOpen} open={open}>
                <ModalContent isOpen={isOpen} open={open} ismobileOpen={ismobileOpen} mobile={mobile} />
            </Modal>
            <MobileModal mobile={mobile}>
                <MobileMenu mobile={mobile} ismobileOpen={ismobileOpen} isOpen={isOpen} open={open} />
            </MobileModal>
            <Container>
                <nav id="navbar">
                    <Link to="/" className="logo_img">
                        <img src={logo} alt="logo_img" />
                    </Link>
                    <div className="navlink_container">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/Placetostay">Place to stay</Link></li>
                            <li><Link href="/">NFTs</Link></li>
                            <li><Link href="/">Community</Link></li>
                        </ul>
                    </div>
                    <div className="btn__container"> 
                        <button onClick={() => isOpen(!open)}>Connect Wallet</button>  
                        <div className="hamburger__container" onClick={() => ismobileOpen(!mobile)}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
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