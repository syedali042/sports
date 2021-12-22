import Container from "./../../Components/Container"

const Counters = () => {
    return (
        <>
            <section className="counters pt-5">
                <Container>
                    <div className="row">
                        <div className="col text-center">
                            <h2>TRUSTED ACROSS THE SPORTS WORLD</h2>
                        </div>
                    </div>
                    <div className="row text-center pt-5">
                        <div className="col-3 text-center">
                            <div className="counters_section">
                                <h2>1,124,122</h2>
                                <p className="pt-4">Total Games Broadcast</p>
                            </div>
                        </div>
                        <div className="col-3 text-center">
                            <div className="counters_section">
                                <h2>101,913</h2>
                                <p className="pt-4">Games Produced Last Month</p>
                            </div>
                        </div>
                        <div className="col-3 text-center">
                            <div className="counters_section">
                                <h2>17,814</h2>
                                <p className="pt-4">Fields and Courts</p>
                            </div>
                        </div>
                        <div className="col-3 text-center">
                            <div className="counters_section">
                                <h2>57</h2>
                                <p className="pt-4">Countries</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-center pt-4">
                            <div className="para">
                                <h5>Our pioneering 'set-and-forget' technology is powering sports globally, live and on-demand!</h5>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}

export default Counters;