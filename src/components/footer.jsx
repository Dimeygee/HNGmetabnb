import { Container } from "./styles/container"
import footerlogo from "../images/footerlogo.png"
import facebook from "../images/facebook.png"
import twitter from "../images/twitter.png"
import instagram from "../images/instagram.png"
import { SocialIcon } from "./socialicon"
import { FooterArticle } from "./footer_articles"




export const Footer = () => {

    return(
        <div className="footer_container">
            <Container>
                <div className="footer_container_main">
                    <div className="logo_container">
                        <img src={footerlogo} className="footerlogo" alt="footerlogo" />
                        <div className="social_icons">
                            <SocialIcon image={facebook} width="9px" height="18px" />
                            <SocialIcon image={instagram} width="18px" height="18px"  />
                            <SocialIcon image={twitter} width="18px" height="18px"  />
                        </div>
                    </div>
                    <FooterArticle name="Community" link1="NFT" link2='Token' link3='Landlords' link4='Discord' />
                    <FooterArticle name="Places" link1="Castle" link2='Farms ' link3='Beach' link4='Career' />
                    <FooterArticle name="About us" link1="Road map" link2='Creators  ' link3='Career' link4='Contact us'  />
                </div>
            </Container>
        </div>
    )

}