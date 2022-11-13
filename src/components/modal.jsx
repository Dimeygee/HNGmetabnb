
import { createPortal } from "react-dom"

export const Modal = ({children, open}) => {


    if(!open) return null

    return createPortal(
        <div className="modal">{children}</div>,
        document.getElementById("portal")
    )

}