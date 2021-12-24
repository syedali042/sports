const AboutPageBelieving = (props) => {
    return (
        <>
            <div className="about_beleiving">
                <div className="row pt-5 text-center">
                    <div className="col pt-5">
                        <h2>{props.mainHeading}</h2>
                    </div>
                    {props.order?
                    <div className="row pt-5">
                        <div className="col-4">
                           
                        </div>
                        <div className="col-6 pt-5 text-center">
                            <h3>{props.subHeading}</h3>
                            <p className="pt-5">{props.paragraph}</p>
                        </div>
                    </div>
                    :
                    <div className="row pt-5">
                        <div className="col-6 pt-5 text-center">
                            <h3>{props.subHeading}</h3>
                            <p className="pt-5">{props.paragraph}</p>
                        </div>
                        <div className="col-4">
                           
                        </div>
                    </div>
                    }
                </div>
            </div>
        </>
    );
}

export default AboutPageBelieving;