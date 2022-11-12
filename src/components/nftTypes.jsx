
import metamask from "../images/metamask.png"
import mbtoken from "../images/mbtoken.png"
import opensea from "../images/opensea.png"


export const NtfTypes = () => {


    return(
        <div className="ntfTypes">
            <div className="mbtoken">
                <img src={mbtoken} alt="mbtoken" />
            </div>
            <div className="metamask">
                <img src={metamask} alt="metamask" />
            </div>
            <div className="opensea">
                <img src={opensea} alt="opensea" />
            </div>
        </div>
    )

}