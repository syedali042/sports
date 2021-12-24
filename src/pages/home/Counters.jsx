import Container from "./../../Components/Container"

const Counters = (props) => {
    return (
        <>
            <section className="counters pt-5">
                <Container>
                    <div className="row">
                        <div className="col text-center">
                            <h2>{props.mainHeading}</h2>
                        </div>
                    </div>
                    <div className="row text-center pt-5">
                        <div className="col-3 text-center">
                            <div className="counters_section">
                                <h2>{props.firstCountHeading}</h2>
                                <p className="pt-4">{props.firstCountPara}</p>
                            </div>
                        </div>
                        <div className="col-3 text-center">
                            <div className="counters_section">
                                <h2>{props.secondCountHeading}</h2>
                                <p className="pt-4">{props.secondCountPara}</p>
                            </div>
                        </div>
                        <div className="col-3 text-center">
                            <div className="counters_section">
                                <h2>{props.thirdCountHeading}</h2>
                                <p className="pt-4">{props.thirdCountPara}</p>
                            </div>
                        </div>
                        <div className="col-3 text-center">
                            <div className="counters_section">
                                <h2>{props.fourCountHeading}</h2>
                                <p className="pt-4">{props.fourCountPara}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-center pt-4">
                            <div className="para">
                                <h5>{props.bottomPara}</h5>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}

export default Counters;