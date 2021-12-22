import Container from "src/Components/Container";
import Footer from "src/Components/Footer";
import ArrowRight from "@assets/icons/Arrow/Arrow 2/Right.svg"
import StarLight from "src/Components/StarLight"
import Star from "src/Components/Star"
import ShareIcon from '@assets/icons/Share.svg'
import HeartIcon from "@assets/icons/Heart.svg"
import Reviews from "src/Components/Reviews";
const PrivacyPolicy = () => {
    
    return (
        <>
        <Container>
            <br /><br />
            <div className="row pt-5 pb-2">
                <div className='d-flex breadcrump'>
                    <span>Home</span> <ArrowRight />
                    <span className='active-bread'>Specialists</span><ArrowRight />
                    <span className='active-bread'>Jane Cooper</span>
                </div>
            </div>
            <hr className="bg-secondary"/>
            <Container>
            <div className="row d-flex align-items-center">
                <div className="col-md-9">
                    <div className="d-flex align-items-center justify-content-between p-2">
                        <div className="d-flex align-items-center autor">
                            <div>
                                <img src="https://syedali.easystay.com.pk/muutos/author.png" alt="" style={{width:'110px', height:'110px', borderRadius:'50%'}}/>
                            </div>
                            <div className="d-inline-block">
                                &nbsp;<span className="text-white font-weight-bold" style={{fontWeight:'600', fontSize:'20px'}}> Jane Cooper</span><br />
                                &nbsp;&nbsp;<span className="text-grey">Speciality</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="stars">
                            <Star />&nbsp;
                            <Star />&nbsp;
                            <Star />&nbsp;
                            <Star />&nbsp;
                            <StarLight />
                        </div>
                        <div>
                            <div className='p-1' style={{borderRadius:'50%', border:'1px solid #353B42'}}>
                                <HeartIcon />
                            </div>
                        </div>
                        <div>
                            <div className="p-1" style={{borderRadius:'50%', border:'1px solid #353B42'}}>
                                <ShareIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Container>
            <br />
            <Reviews />
        </Container>
        <Footer />
        </>
    )

}

export default PrivacyPolicy;
