import Container from "src/Components/Container";
import Vector from '@assets/icons/Specialists/Vector.svg'
import VectorOne from '@assets/icons/Specialists/Vector (1).svg'
import VectorTwo from '@assets/icons/Specialists/Vector (2).svg'
import ElipseImage from '@assets/icons/Specialists/Ellipse 18.png'
import FilterBarTrends from "src/Components/FilterBarTrends";
import TopSearch from "src/Components/TopSearch";
import FilterBarSpecialists from "src/Components/FilterBarSpecialists";
import StarLight from "src/Components/StarLight"
import Star from "src/Components/Star"
import HeartIcon from "@assets/icons/Heart.svg"
import Footer from "src/Components/Footer"

const About = () => {
    
    return (
        <>
        <Container>
            <br /><br />
            <div className="row pt-5 pb-5">
                <div className="col-md-12 col-12">
                    <center><h1 className="saqlain__terms mt-4 text-uppercase">Specialists</h1></center>
                </div>
            </div>
            <div className="m-2">
                <TopSearch options={['Speciality']} placeholder={`Search Specialists...`}/>
            </div>
            <div className="row">   
                <div className="col-md-3">
                    <FilterBarSpecialists />
                </div>
                <div className="col-md-9">
                    <div className="job-container mb-2">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="d-flex align-items-center justify-content-between p-2">
                                    <div className="d-flex align-items-center autor">
                                        <div>
                                            <img src="https://syedali.easystay.com.pk/muutos/author.png" alt="" style={{width:'50px', height:'50px', borderRadius:'50%'}}/>
                                        </div>
                                        <div className="d-inline-block">
                                            &nbsp;<span className="text-white font-weight-bold" style={{fontWeight:'600'}}> Jane Cooper</span><br />
                                            &nbsp;&nbsp;<span className="text-grey">Speciality</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7 d-flex align-items-center justify-content-between">
                                <div>
                                    <Star />&nbsp;
                                    <Star />&nbsp;
                                    <Star />&nbsp;
                                    <Star />&nbsp;
                                    <StarLight />
                                </div>
                                <div className="text-success-2">
                                    QAR. 45.00
                                </div>
                                <div className="">
                                    <button style={button2}>
                                        SHOW MORE
                                    </button>
                                </div>
                                <div className="">
                                    <button style={button}>
                                        BOOK
                                    </button>
                                </div>
                                <div>
                                    <div className='p-1' style={{borderRadius:'50%', border:'1px solid #353B42'}}>
                                        <HeartIcon />
                                    </div>
                                </div>
                                &nbsp;
                            </div>
                        </div>
                    </div>
                    <div className="job-container mb-2">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="d-flex align-items-center justify-content-between p-2">
                                    <div className="d-flex align-items-center autor">
                                        <div>
                                            <img src="https://syedali.easystay.com.pk/muutos/author.png" alt="" style={{width:'50px', height:'50px', borderRadius:'50%'}}/>
                                        </div>
                                        <div className="d-inline-block">
                                            &nbsp;<span className="text-white font-weight-bold" style={{fontWeight:'600'}}> Jane Cooper</span><br />
                                            &nbsp;&nbsp;<span className="text-grey">Speciality</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7 d-flex align-items-center justify-content-between">
                                <div>
                                    <Star />&nbsp;
                                    <Star />&nbsp;
                                    <Star />&nbsp;
                                    <Star />&nbsp;
                                    <StarLight />
                                </div>
                                <div className="text-success-2">
                                    QAR. 45.00
                                </div>
                                <div className="">
                                    <button style={button2}>
                                        SHOW MORE
                                    </button>
                                </div>
                                <div className="">
                                    <button style={button}>
                                        BOOK
                                    </button>
                                </div>
                                <div>
                                    <div className='p-1' style={{borderRadius:'50%', border:'1px solid #353B42'}}>
                                        <HeartIcon />
                                    </div>
                                </div>
                                &nbsp;
                            </div>
                        </div>
                    </div>
                    <div className="job-container mb-2">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="d-flex align-items-center justify-content-between p-2">
                                    <div className="d-flex align-items-center autor">
                                        <div>
                                            <img src="https://syedali.easystay.com.pk/muutos/author.png" alt="" style={{width:'50px', height:'50px', borderRadius:'50%'}}/>
                                        </div>
                                        <div className="d-inline-block">
                                            &nbsp;<span className="text-white font-weight-bold" style={{fontWeight:'600'}}> Jane Cooper</span><br />
                                            &nbsp;&nbsp;<span className="text-grey">Speciality</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7 d-flex align-items-center justify-content-between">
                                <div>
                                    <Star />&nbsp;
                                    <Star />&nbsp;
                                    <Star />&nbsp;
                                    <Star />&nbsp;
                                    <StarLight />
                                </div>
                                <div className="text-success-2">
                                    QAR. 45.00
                                </div>
                                <div className="">
                                    <button style={button2}>
                                        SHOW MORE
                                    </button>
                                </div>
                                <div className="">
                                    <button style={button}>
                                        BOOK
                                    </button>
                                </div>
                                <div>
                                    <div className='p-1' style={{borderRadius:'50%', border:'1px solid #353B42'}}>
                                        <HeartIcon />
                                    </div>
                                </div>
                                &nbsp;
                            </div>
                        </div>
                    </div>
                    <div className="job-container mb-2">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="d-flex align-items-center justify-content-between p-2">
                                    <div className="d-flex align-items-center autor">
                                        <div>
                                            <img src="https://syedali.easystay.com.pk/muutos/author.png" alt="" style={{width:'50px', height:'50px', borderRadius:'50%'}}/>
                                        </div>
                                        <div className="d-inline-block">
                                            &nbsp;<span className="text-white font-weight-bold" style={{fontWeight:'600'}}> Jane Cooper</span><br />
                                            &nbsp;&nbsp;<span className="text-grey">Speciality</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7 d-flex align-items-center justify-content-between">
                                <div>
                                    <Star />&nbsp;
                                    <Star />&nbsp;
                                    <Star />&nbsp;
                                    <Star />&nbsp;
                                    <StarLight />
                                </div>
                                <div className="text-success-2">
                                    QAR. 45.00
                                </div>
                                <div className="">
                                    <button style={button2}>
                                        SHOW MORE
                                    </button>
                                </div>
                                <div className="">
                                    <button style={button}>
                                        BOOK
                                    </button>
                                </div>
                                <div>
                                    <div className='p-1' style={{borderRadius:'50%', border:'1px solid #353B42'}}>
                                        <HeartIcon />
                                    </div>
                                </div>
                                &nbsp;
                            </div>
                        </div>
                    </div>
                    <div className="job-container mb-2">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="d-flex align-items-center justify-content-between p-2">
                                    <div className="d-flex align-items-center autor">
                                        <div>
                                            <img src="https://syedali.easystay.com.pk/muutos/author.png" alt="" style={{width:'50px', height:'50px', borderRadius:'50%'}}/>
                                        </div>
                                        <div className="d-inline-block">
                                            &nbsp;<span className="text-white font-weight-bold" style={{fontWeight:'600'}}> Jane Cooper</span><br />
                                            &nbsp;&nbsp;<span className="text-grey">Speciality</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7 d-flex align-items-center justify-content-between">
                                <div>
                                    <Star />&nbsp;
                                    <Star />&nbsp;
                                    <Star />&nbsp;
                                    <Star />&nbsp;
                                    <StarLight />
                                </div>
                                <div className="text-success-2">
                                    QAR. 45.00
                                </div>
                                <div className="">
                                    <button style={button2}>
                                        SHOW MORE
                                    </button>
                                </div>
                                <div className="">
                                    <button style={button}>
                                        BOOK
                                    </button>
                                </div>
                                <div>
                                    <div className='p-1' style={{borderRadius:'50%', border:'1px solid #353B42'}}>
                                        <HeartIcon />
                                    </div>
                                </div>
                                &nbsp;
                            </div>
                        </div>
                    </div>
                    <div className="job-container mb-2">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="d-flex align-items-center justify-content-between p-2">
                                    <div className="d-flex align-items-center autor">
                                        <div>
                                            <img src="https://syedali.easystay.com.pk/muutos/author.png" alt="" style={{width:'50px', height:'50px', borderRadius:'50%'}}/>
                                        </div>
                                        <div className="d-inline-block">
                                            &nbsp;<span className="text-white font-weight-bold" style={{fontWeight:'600'}}> Jane Cooper</span><br />
                                            &nbsp;&nbsp;<span className="text-grey">Speciality</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7 d-flex align-items-center justify-content-between">
                                <div>
                                    <Star />&nbsp;
                                    <Star />&nbsp;
                                    <Star />&nbsp;
                                    <Star />&nbsp;
                                    <StarLight />
                                </div>
                                <div className="text-success-2">
                                    QAR. 45.00
                                </div>
                                <div className="">
                                    <button style={button2}>
                                        SHOW MORE
                                    </button>
                                </div>
                                <div className="">
                                    <button style={button}>
                                        BOOK
                                    </button>
                                </div>
                                <div>
                                    <div className='p-1' style={{borderRadius:'50%', border:'1px solid #353B42'}}>
                                        <HeartIcon />
                                    </div>
                                </div>
                                &nbsp;
                            </div>
                        </div>
                    </div>
                    <div className="job-container mb-2">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="d-flex align-items-center justify-content-between p-2">
                                    <div className="d-flex align-items-center autor">
                                        <div>
                                            <img src="https://syedali.easystay.com.pk/muutos/author.png" alt="" style={{width:'50px', height:'50px', borderRadius:'50%'}}/>
                                        </div>
                                        <div className="d-inline-block">
                                            &nbsp;<span className="text-white font-weight-bold" style={{fontWeight:'600'}}> Jane Cooper</span><br />
                                            &nbsp;&nbsp;<span className="text-grey">Speciality</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7 d-flex align-items-center justify-content-between">
                                <div>
                                    <Star />&nbsp;
                                    <Star />&nbsp;
                                    <Star />&nbsp;
                                    <Star />&nbsp;
                                    <StarLight />
                                </div>
                                <div className="text-success-2">
                                    QAR. 45.00
                                </div>
                                <div className="">
                                    <button style={button2}>
                                        SHOW MORE
                                    </button>
                                </div>
                                <div className="">
                                    <button style={button}>
                                        BOOK
                                    </button>
                                </div>
                                <div>
                                    <div className='p-1' style={{borderRadius:'50%', border:'1px solid #353B42'}}>
                                        <HeartIcon />
                                    </div>
                                </div>
                                &nbsp;
                            </div>
                        </div>
                    </div>
                    <div className="job-container mb-2">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="d-flex align-items-center justify-content-between p-2">
                                    <div className="d-flex align-items-center autor">
                                        <div>
                                            <img src="https://syedali.easystay.com.pk/muutos/author.png" alt="" style={{width:'50px', height:'50px', borderRadius:'50%'}}/>
                                        </div>
                                        <div className="d-inline-block">
                                            &nbsp;<span className="text-white font-weight-bold" style={{fontWeight:'600'}}> Jane Cooper</span><br />
                                            &nbsp;&nbsp;<span className="text-grey">Speciality</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7 d-flex align-items-center justify-content-between">
                                <div>
                                    <Star />&nbsp;
                                    <Star />&nbsp;
                                    <Star />&nbsp;
                                    <Star />&nbsp;
                                    <StarLight />
                                </div>
                                <div className="text-success-2">
                                    QAR. 45.00
                                </div>
                                <div className="">
                                    <button style={button2}>
                                        SHOW MORE
                                    </button>
                                </div>
                                <div className="">
                                    <button style={button}>
                                        BOOK
                                    </button>
                                </div>
                                <div>
                                    <div className='p-1' style={{borderRadius:'50%', border:'1px solid #353B42'}}>
                                        <HeartIcon />
                                    </div>
                                </div>
                                &nbsp;
                            </div>
                        </div>
                    </div>
                    <div className="job-container mb-2">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="d-flex align-items-center justify-content-between p-2">
                                    <div className="d-flex align-items-center autor">
                                        <div>
                                            <img src="https://syedali.easystay.com.pk/muutos/author.png" alt="" style={{width:'50px', height:'50px', borderRadius:'50%'}}/>
                                        </div>
                                        <div className="d-inline-block">
                                            &nbsp;<span className="text-white font-weight-bold" style={{fontWeight:'600'}}> Jane Cooper</span><br />
                                            &nbsp;&nbsp;<span className="text-grey">Speciality</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7 d-flex align-items-center justify-content-between">
                                <div>
                                    <Star />&nbsp;
                                    <Star />&nbsp;
                                    <Star />&nbsp;
                                    <Star />&nbsp;
                                    <StarLight />
                                </div>
                                <div className="text-success-2">
                                    QAR. 45.00
                                </div>
                                <div className="">
                                    <button style={button2}>
                                        SHOW MORE
                                    </button>
                                </div>
                                <div className="">
                                    <button style={button}>
                                        BOOK
                                    </button>
                                </div>
                                <div>
                                    <div className='p-1' style={{borderRadius:'50%', border:'1px solid #353B42'}}>
                                        <HeartIcon />
                                    </div>
                                </div>
                                &nbsp;
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
        <br />
        <Footer />
        </>
    )

}

export default About


const button2 = {
    marginLeft:10,
    padding: '8px 17px',
    width:'100%',
    background: '#2A3037',
    outline: '1px solid rgba(255, 255, 255, 0.1)',
    boxSizing: 'border-box',
    borderRadius: '7px',
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '20px',
    letterSpacing: '0.02em',
    textTransform: 'uppercase',
    color: '#A6ADB5',
    // margin : '4px'
}

const button = {
    padding: "8px 17px",
    width: "100%",
    background:
      "linear-gradient(328.11deg,#05d0c2 12.59%,#2ecb84 53%, #8ce01d 87.41%)",
    outline: "1px solid rgba(255, 255, 255, 0.3)",
    boxSizing: "border-box",
    borderRadius: "7px",
    fontStyle: "italic",
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "20px",
    letterSpacing: "0.02em",
    textTransform: "uppercase",
    color: "#01301b",
    // margin : '4px'
  }