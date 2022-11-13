
import close from "../images/close.png"
import { Wallet } from "./wallet"
import meta from "../images/meta.png"
import wallet from "../images/wallet.png"
import arrowright from "../images/arrowright.png"

export const ModalContent = ({isOpen, open}) => {


    return(
        <div className="modalcontent">
            <div className="modal_header">
                <h4>Connect Wallet</h4>
                <img src={close} alt="close" className="close" onClick={() => isOpen(!open)} />
            </div>
            <div className="modal_body">
                <p>Choose your preferred wallet:</p>
                <div className="wallet_container">
                    <Wallet name="Metamask" image={meta} arrowright={arrowright} />
                    <Wallet name="WalletConnect" image={wallet} arrowright={arrowright} />
                </div>
            </div>
        </div>
    )

}