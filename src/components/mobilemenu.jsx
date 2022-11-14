import close from "../images/close.png"
import logo from "../images/logo_img.png"
import { Link } from "react-router-dom"


export const MobileMenu = ({open, isOpen ,mobile,ismobileOpen} ) => {


    const handleClick = () => {
        if(mobile) ismobileOpen(!mobile)
        isOpen(!open)
    }

    return (
        <div className="mobilemenu__container">
            <div className="mobile_header">
                <Link to="/" className="logo_img" onClick={() => ismobileOpen(!mobile)}>
                    <img src={logo} alt="logo_img" />
                </Link>
                <img src={close} alt="close" className="close" onClick={() => ismobileOpen(!mobile)} width="36px"  />
            </div>
            <div className="mobile_body">
                <Link to="/" onClick={() => ismobileOpen(!mobile)}>Home</Link>
                <Link to="/Placetostay" onClick={() => ismobileOpen(!mobile)}>Place to stay</Link>
                <Link href="/" onClick={() => ismobileOpen(!mobile)}>NFTs</Link>
                <Link href="/" onClick={() => ismobileOpen(!mobile)}>Community</Link>
                <div className="mobile_btn__container"> 
                    <button onClick={handleClick}>Connect Wallet</button> 
                </div>
            </div>
        </div>
    )

}