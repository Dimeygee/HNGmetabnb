
import image3 from "../images/image3.png"
import image4 from "../images/image4.png"
import image5 from "../images/image5.png"
import image6 from "../images/image6.png"


export const Header = () => {


    return(
        <header>
            <div className="header_inner_container">
                <section className="header_content">
                    <article>
                        <h2>Rent a <span className="color_select">Place</span> away from <span className="color_select">Home</span> in the <span className="color_select">Metaverse</span></h2>
                        <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                        <div className="form_container">
                            <input type="text" placeholder="Search for location" />
                            <button>Search</button>
                        </div>
                    </article>           
                </section>
                <section className="header_img_content">
                    <div className="header_imgcontainer_1">
                        <div className="header_img_wrapper">
                            <img src={image4} alt="" />
                       </div>
                        <div className="header_img_wrapper">
                            <img src={image6} alt="" />
                        </div>
                    </div>
                    <div className="header_imgcontainer_2">
                        <div className="header_img_wrapper">
                            <img src={image3} alt="" />
                        </div>
                        <div className="header_img_wrapper">
                            <img src={image5} alt="" />
                        </div>
                    </div>
                </section>  
            </div>
        </header>
    )

}