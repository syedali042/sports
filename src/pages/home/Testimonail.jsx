import Container from "../../Components/Container"

const Testimonail = () => {

    return (
        <>
            <div className="testimonail">
                <Container>
                    <div className="row">
                        <div className="col pt-5 text-center">
                            <h2>...AND WHY THEY LIKE US!</h2>
                        </div>
                    </div>
                    <div className="row pt-5 pb-5">
                            <div className="col-4">
                                <img src="https://www.pixellot.tv/wp-content/uploads/2020/12/banner.png" alt="img" />
                            </div>
                            <div className="col-4">
                                <img src="https://www.pixellot.tv/wp-content/uploads/2020/06/NAB-Show-LV-2019-Product-of-the-Year-Logo-e1593427017948.png" alt="img" />
                            </div>
                            <div className="col-4">
                                <img src="https://www.pixellot.tv/wp-content/uploads/2020/06/Pixellot-Award-Logo-400x297-1.jpg" alt="img" />
                            </div>
                    </div>

                </Container>
            </div>
        </>
    );
}

export default Testimonail;