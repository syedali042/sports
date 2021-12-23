import Container from "../../Components/Container";
import Slider from "react-slick";

const WorkCaro = () => {

    const settings = {
        // className: "center",
        // centerMode: true,
        infinite: true,
        centerPadding: "10px",
        slidesToShow: 3,
        rows: 1,
        slidesPerRow: 2,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1000,
    };


    return (
        <>
            <div className="workcaro">
                <Container>
                    <div className="row pt-5">
                        <div className="col text-center mt-5">
                            <h2>WHO WE WORK WITH...</h2>
                        </div>
                    </div>
                    <div className="row pt-5 pb-5">
                        <Slider {...settings}>
                            <div>
                                <img src="https://www.pixellot.tv/wp-content/uploads/2020/07/1200px-Maccabi_Tel_Aviv_BC_logo.svg-346x360.png" alt="img" />
                            </div>
                            <div>
                                <img src="https://www.pixellot.tv/wp-content/uploads/2020/07/1200px-Mexico_FA.svg-1-282x360.png" alt="img" />
                            </div>
                            <div>
                                <img src="https://www.pixellot.tv/wp-content/uploads/2020/07/220px-United_Soccer_Coaches_logo.svg-e1596614881578.png" alt="img" />
                            </div>
                            <div>
                                <img src="https://www.pixellot.tv/wp-content/uploads/2020/07/1200px-Liga_MX.svg-360x284.png" alt="img" />
                            </div>
                            <div>
                                <img src="https://www.pixellot.tv/wp-content/uploads/2020/07/1200px-Israel_football_association.svg-317x360.png" alt="img" />
                            </div>
                            <div>
                                <img src="https://www.pixellot.tv/wp-content/uploads/2020/12/logo-getlive-600-360x266.png" alt="img" />
                            </div>
                            <div>
                                <img src="https://www.pixellot.tv/wp-content/uploads/2020/12/MYSP-logo-360x174.png" alt="img" />
                            </div>
                            <div>
                                <img src="https://www.pixellot.tv/wp-content/uploads/2020/08/America_East_Conference_logo-360x349.png" alt="img" />
                            </div>

                        </Slider>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default WorkCaro;