import Slider from "react-slick";
import Container from "./../../Components/Container";

const Carosuel = () => {

    const Mysettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    };

    return (
        <>
            <section className="carosuel">
                <Container>
                    <div className="row">
                        <Slider {...Mysettings}>
                            <div className="col-md-6 mt-5">
                                <div className="carosuel-left">
                                    <h2>TURN VIDEO STREAMS INTO REVENUE STREAMS</h2>
                                    <p className="pt-5">Engage viewers, subscribers, and advertisers, unlocking innovative business models and new opportunities for monetization.</p>
                                </div>
                            </div>
                            <div className="col-md-6 mt-5">
                                <div className="carosuel-right mt-5">
                                    <img src="https://www.pixellot.tv/wp-content/uploads/2020/07/advertising-antiques-coca-cola-210126-1024x683.jpg" alt="coca" className="coca_img" />
                                </div>
                            </div>
                            <div className="col-md-6 mt-5">
                                <div className="carosuel-left">
                                    <h2>Bringing sports to fans... and fans to sports 100% automatically</h2>
                                    <p className="pt-5">Especially in times when it's physically impossible to attend games, AI-automated filming technology is playing a key role in keeping the games going safely by providing live event coverage via automated sports video cameras.</p>
                                </div>
                            </div>
                            <div className="col-md-6 mt-3">
                                <div className="carosuel-right mt-5">
                                    <img src="https://www.pixellot.tv/wp-content/uploads/2020/03/ladies-forming-a-circle-159812-scaled-e1621528212765-798x1024.jpg" alt="coca" className="coca_img2" />
                                </div>
                            </div>
                            <div className="col-md-6 mt-5">
                                <div className="carosuel-left">
                                    <h2>AI in Sports Production Can Save Up to 80% of Your Production Costs!</h2>
                                    <p className="pt-5">It’s a revolution in sports broadcasting! <br />
                                        With Pixellot, anyone can produce sporting events automatically, broadcast the event, analyze the data and break down the video.<br/>
                                        <b>No production team required!</b>
                                        </p>
                                </div>
                            </div>
                            <div className="col-md-6 mt-5">
                                <div className="carosuel-right mt-5">
                                    <img src="https://www.pixellot.tv/wp-content/uploads/2020/08/Cost-1024x670.png" className="coca_img mt-5" />
                                </div>
                            </div>
                        </Slider>
                    </div>
                </Container>
            </section>
        </>
    );
}

export default Carosuel;