



export const SocialIcon = ({width, height, image, name}) => {


    return(
        <img src={image} style={{ width: width, height: height }} alt={name}/>
    )

}