


export const Wallet = ({image, name, arrowright}) => {


    return(
        <div className="wallet">
            <div>
                <img src={image} alt="name" />
                <span>{name}</span>
            </div>
            <img src={arrowright} alt="arrowright"  />
        </div>
    )

}