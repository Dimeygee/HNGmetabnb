import { Outlet, Link } from "react-router-dom"
import { Container } from "./styles/container"
import logo from "../images/logo_img.png"
import { Footer } from "./footer"


export const NavBarFooter = () => {

    return (
        <>
            <Container>
                <nav id="navbar">
                    <Link href="/" className="logo_img">
                        <img src={logo} alt="logo_img" />
                    </Link>
                    <div>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/Placetostay">Place to stay</Link></li>
                            <li><Link to="/NFTs">NFTs</Link></li>
                            <li><Link to="/Community">Community</Link></li>
                        </ul>
                    </div>
                    <div className="btn__container"> 
                        <button>Connect Wallet</button>  
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