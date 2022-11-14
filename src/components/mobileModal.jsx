

import { createPortal } from "react-dom"

export const MobileModal = ({children, mobile}) => {


    if(!mobile) return null

    return createPortal(
        <div className="modal">{children}</div>,
        document.getElementById("mobile")
    )

}