import Container from "src/Components/Container";
import Footer from "src/Components/Footer";
import CareersImage from './Careers.png'
import TopSearch from "src/Components/TopSearch";
const Careers = () => {


    
    return (
        <>
        <Container>
            <br /><br /><br />
            <div className="row pt-5">
                <div className="col-md-6 col-12">
                    <h1 className="saqlain__carees">CAREERS</h1>
                    <p className="saqlain__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit ut
                        fermentum, viverra ullamcorper. Est a, convallis
                        sit volutpat fames neque, vulputate porta.<br /><br />
                        Sed maecenas pharetra pellentesque dignissim sed duis arcu, congue. Nisi, nisl eleifend
                        vulputate morbi urna. Sodales
                        non interdum neque dolor sit imperdiet gravida. Curabitur dui sodales lacus, eleifend pharetra,
                        mi venenatis sed.<br /><br />
                        Ipsum leo ut diam ultrices. Non adipiscing turpis aenean orci ac. Nunc lorem elementum dis
                        placerat ut sed.</p>
                </div>
                <div className="col-md-6 col-12">
                    <img src={CareersImage.src} alt="careers Image" className="saqlain__image" />
                </div>

            </div>

            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        {/* <!-- <div className="col-md-4"></div> --> */}
                        <div className="col-md-12 col-12 mt-2">
                            <h1 className="saqlain__listing">Job Listing</h1>
                        </div>
                        {/* <!-- <div className="col-md-4"></div> --> */}
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                    <div className="m-2">
                        <TopSearch placeholder={`Search By Keywords...`} options={`Category`}/>
                    </div>
                    <div className="row">

                        <div className="mt-2">
                            <div className="job-container d-flex align-items-center justify-content-between p-2">
                                <div className="name-and-address">
                                    <div className="question-inactive" style={{fontSize:'16px !important'}}>
                                        Job Title
                                    </div>
                                    <div className="saqlain__answer__paragraph" style={{fontSize:'13px !important'}}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </div>
                                </div>
                                <div className="job-location">
                                    <div className="question-inactive" style={{fontSize:'16px !important'}}>
                                        Location
                                    </div>
                                    <div className="saqlain__answer__paragraph" style={{fontSize:'13px !important'}}>
                                        New York, NY
                                    </div>
                                </div>
                                <div className="job-button">
                                    <button style={button}>
                                        Apply to Work
                                    </button>
                                </div>
                            </div>
                            <div className="job-container d-flex align-items-center justify-content-between p-2 mt-2">
                                <div className="name-and-address">
                                    <div className="question-inactive" style={{fontSize:'16px !important'}}>
                                        Job Title
                                    </div>
                                    <div className="saqlain__answer__paragraph" style={{fontSize:'13px !important'}}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </div>
                                </div>
                                <div className="job-location">
                                    <div className="question-inactive" style={{fontSize:'16px !important'}}>
                                        Location
                                    </div>
                                    <div className="saqlain__answer__paragraph" style={{fontSize:'13px !important'}}>
                                        New York, NY
                                    </div>
                                </div>
                                <div className="job-button">
                                    <button style={button}>
                                        Apply to Work
                                    </button>
                                </div>
                            </div>
                            <div className="job-container d-flex align-items-center justify-content-between p-2 mt-2">
                                <div className="name-and-address">
                                    <div className="question-inactive" style={{fontSize:'16px !important'}}>
                                        Job Title
                                    </div>
                                    <div className="saqlain__answer__paragraph" style={{fontSize:'13px !important'}}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </div>
                                </div>
                                <div className="job-location">
                                    <div className="question-inactive" style={{fontSize:'16px !important'}}>
                                        Location
                                    </div>
                                    <div className="saqlain__answer__paragraph" style={{fontSize:'13px !important'}}>
                                        New York, NY
                                    </div>
                                </div>
                                <div className="job-button">
                                    <button style={button}>
                                        Apply to Work
                                    </button>
                                </div>
                            </div>
                            <div className="job-container d-flex align-items-center justify-content-between p-2 mt-2">
                                <div className="name-and-address">
                                    <div className="question-inactive" style={{fontSize:'16px !important'}}>
                                        Job Title
                                    </div>
                                    <div className="saqlain__answer__paragraph" style={{fontSize:'13px !important'}}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </div>
                                </div>
                                <div className="job-location">
                                    <div className="question-inactive" style={{fontSize:'16px !important'}}>
                                        Location
                                    </div>
                                    <div className="saqlain__answer__paragraph" style={{fontSize:'13px !important'}}>
                                        New York, NY
                                    </div>
                                </div>
                                <div className="job-button">
                                    <button style={button}>
                                        Apply to Work
                                    </button>
                                </div>
                            </div>
                            <div className="job-container d-flex align-items-center justify-content-between p-2 mt-2">
                                <div className="name-and-address">
                                    <div className="question-inactive" style={{fontSize:'16px !important'}}>
                                        Job Title
                                    </div>
                                    <div className="saqlain__answer__paragraph" style={{fontSize:'13px !important'}}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </div>
                                </div>
                                <div className="job-location">
                                    <div className="question-inactive" style={{fontSize:'16px !important'}}>
                                        Location
                                    </div>
                                    <div className="saqlain__answer__paragraph" style={{fontSize:'13px !important'}}>
                                        New York, NY
                                    </div>
                                </div>
                                <div className="job-button">
                                    <button style={button}>
                                        Apply to Work
                                    </button>
                                </div>
                            </div>
                            <div className="job-container d-flex align-items-center justify-content-between p-2 mt-2">
                                <div className="name-and-address">
                                    <div className="question-inactive" style={{fontSize:'16px !important'}}>
                                        Job Title
                                    </div>
                                    <div className="saqlain__answer__paragraph" style={{fontSize:'13px !important'}}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </div>
                                </div>
                                <div className="job-location">
                                    <div className="question-inactive" style={{fontSize:'16px !important'}}>
                                        Location
                                    </div>
                                    <div className="saqlain__answer__paragraph" style={{fontSize:'13px !important'}}>
                                        New York, NY
                                    </div>
                                </div>
                                <div className="job-button">
                                    <button style={button}>
                                        Apply to Work
                                    </button>
                                </div>
                            </div>
                            <div className="job-container d-flex align-items-center justify-content-between p-2 mt-2">
                                <div className="name-and-address">
                                    <div className="question-inactive" style={{fontSize:'16px !important'}}>
                                        Job Title
                                    </div>
                                    <div className="saqlain__answer__paragraph" style={{fontSize:'13px !important'}}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </div>
                                </div>
                                <div className="job-location">
                                    <div className="question-inactive" style={{fontSize:'16px !important'}}>
                                        Location
                                    </div>
                                    <div className="saqlain__answer__paragraph" style={{fontSize:'13px !important'}}>
                                        New York, NY
                                    </div>
                                </div>
                                <div className="job-button">
                                    <button style={button}>
                                        Apply to Work
                                    </button>
                                </div>
                            </div>
                            <div className="job-container d-flex align-items-center justify-content-between p-2 mt-2">
                                <div className="name-and-address">
                                    <div className="question-inactive" style={{fontSize:'16px !important'}}>
                                        Job Title
                                    </div>
                                    <div className="saqlain__answer__paragraph" style={{fontSize:'13px !important'}}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </div>
                                </div>
                                <div className="job-location">
                                    <div className="question-inactive" style={{fontSize:'16px !important'}}>
                                        Location
                                    </div>
                                    <div className="saqlain__answer__paragraph" style={{fontSize:'13px !important'}}>
                                        New York, NY
                                    </div>
                                </div>
                                <div className="job-button">
                                    <button style={button}>
                                        Apply to Work
                                    </button>
                                </div>
                            </div>
                            <div className="job-container d-flex align-items-center justify-content-between p-2 mt-2">
                                <div className="name-and-address">
                                    <div className="question-inactive" style={{fontSize:'16px !important'}}>
                                        Job Title
                                    </div>
                                    <div className="saqlain__answer__paragraph" style={{fontSize:'13px !important'}}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </div>
                                </div>
                                <div className="job-location">
                                    <div className="question-inactive" style={{fontSize:'16px !important'}}>
                                        Location
                                    </div>
                                    <div className="saqlain__answer__paragraph" style={{fontSize:'13px !important'}}>
                                        New York, NY
                                    </div>
                                </div>
                                <div className="job-button">
                                    <button style={button}>
                                        Apply to Work
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>
        <br />
        <br />
        </Container>
        <Footer />
        </>
    )

}

export default Careers


const button = {
    padding: '8px 17px',
    width:'100%',
    background: 'linear-gradient(328.11deg,#05d0c2 12.59%,#2ecb84 53%, #8ce01d 87.41%)',
    outline: '1px solid rgba(255, 255, 255, 0.3)',
    boxSizing: 'border-box',
    borderRadius: '7px',
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '20px',
    letterSpacing: '0.02em',
    textTransform: 'uppercase',
    color: '#01301b',
    // margin : '4px'
}