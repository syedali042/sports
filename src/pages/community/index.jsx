import Container from "src/Components/Container";
import Footer from "src/Components/Footer";
import TopSearch from "src/Components/TopSearch"
import LikeIcon from '@assets/icons/Like.svg'
import DisLikeIcon from '@assets/icons/DisLike.svg'

const Community = () => {


    
    return (
        <>
        <Container>
            <br />
            <div className="row pt-5 pb-5">
                <div className="col-md-12 col-12">
                    <center><h1 className="saqlain__terms mt-4 text-uppercase">Community</h1></center>
                </div>
            </div>

            <div className="row">
                <div className="pb-3">
                    <TopSearch options={['All Catogories']}/>
                </div>
                <hr className="bg-secondary"/>

                <div className="spa-community">
                    <div className="d-flex align-items-center justify-content-between">
                        <h4 className="text-white font-weight-bold mt-4 text-uppercase">Spa</h4>
                        <button className="community-question-button">
                            Ask A Question 
                        </button>
                    </div>
                </div>

                <div className="job-container p-3">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="autor">
                            <img src="https://syedali.easystay.com.pk/muutos/author.png" alt="" style={{width:'40px', height:'40px', borderRadius:'50%'}}/>
                            &nbsp;<span className="text-success-2"> Jane Cooper</span>
                        </div>
                        <div className="community-question-date">02.02.2021</div>
                    </div>
                    <div className="community-question-text pt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum dolor sit habitant hac eu, diam?
                    </div>
                    <div className="d-flex align-items-center justify-content-between pt-3">
                        <div className="d-flex align-items-center">
                            <div className="d-inline-block job-container text-white">
                                <div className="p-2">
                                &nbsp;&nbsp;&nbsp;<LikeIcon />&nbsp;1&nbsp;&nbsp;
                                </div>
                            </div>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <div className="d-inline-block job-container text-white">
                                <div className="p-2">
                                &nbsp;&nbsp;&nbsp;<DisLikeIcon />&nbsp;1&nbsp;&nbsp;
                                </div>
                            </div>&nbsp;&nbsp;&nbsp;
                            <div className="d-inline-block text-gray">
                                <span className="text-secondary">
                                    Comments
                                </span>
                            </div>
                            <div className="d-inline-block">
                                <button style={button2}>COMMENT</button>
                            </div>
                        </div>

                        <div className="d-flex align-items-center">
                            <div className="d-inline-block">
                                <button style={button2}>
                                    SHARE
                                </button>
                            </div>&nbsp;&nbsp;
                            <div className="d-inline-block">
                                <button style={button3}>
                                    <p className="p-0" style={{transform:'translateY(40%) translateX(5%)', lineHeight:'8px'}}>...</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <hr className="bg-secondary"/>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="autor text-white">
                                            <img src="https://syedali.easystay.com.pk/muutos/author.png" alt="" style={{width:'30px', height:'30px', borderRadius:'50%'}}/>
                                            &nbsp;&nbsp;Brooklyn Simmons
                                        </div>
                                        <div className="community-question-date">02.02.2021</div>
                                    </div>
                                    <div className="community-question-text pt-2">
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum dolor sit habitant hac eu, diam?
                                    </div>
                                </div>
                                <div className="col-md-12 pt-4">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="autor text-white">
                                            <img src="https://syedali.easystay.com.pk/muutos/author.png" alt="" style={{width:'30px', height:'30px', borderRadius:'50%'}}/>
                                            &nbsp;&nbsp;Brooklyn Simmons
                                        </div>
                                        <div className="community-question-date">02.02.2021</div>
                                    </div>
                                    <div className="community-question-text pt-2">
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum dolor sit habitant hac eu, diam?
                                    </div>
                                </div>
                                <div className="col-md-12 pt-4">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="autor text-white">
                                            <img src="https://syedali.easystay.com.pk/muutos/author.png" alt="" style={{width:'30px', height:'30px', borderRadius:'50%'}}/>
                                            &nbsp;&nbsp;Brooklyn Simmons
                                        </div>
                                        <div className="community-question-date">02.02.2021</div>
                                    </div>
                                    <div className="community-question-text pt-2">
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum dolor sit habitant hac eu, diam?
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="job-container p-3 mt-2">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="autor">
                            <img src="https://syedali.easystay.com.pk/muutos/author.png" alt="" style={{width:'40px', height:'40px', borderRadius:'50%'}}/>
                            &nbsp;<span className="text-success-2"> Jane Cooper</span>
                        </div>
                        <div className="community-question-date">02.02.2021</div>
                    </div>
                    <div className="community-question-text pt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum dolor sit habitant hac eu, diam?
                    </div>
                    <div className="d-flex align-items-center justify-content-between pt-3">
                        <div className="d-flex align-items-center">
                            <div className="d-inline-block job-container text-white">
                                <div className="p-2">
                                &nbsp;&nbsp;&nbsp;<LikeIcon />&nbsp;1&nbsp;&nbsp;
                                </div>
                            </div>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <div className="d-inline-block job-container text-white">
                                <div className="p-2">
                                &nbsp;&nbsp;&nbsp;<DisLikeIcon />&nbsp;1&nbsp;&nbsp;
                                </div>
                            </div>&nbsp;&nbsp;&nbsp;
                            <div className="d-inline-block text-gray">
                                <span className="text-secondary">
                                    Comments
                                </span>
                            </div>
                            <div className="d-inline-block">
                                <button style={button2}>COMMENT</button>
                            </div>
                        </div>

                        <div className="d-flex align-items-center">
                            <div className="d-inline-block">
                                <button style={button2}>
                                    SHARE
                                </button>
                            </div>&nbsp;&nbsp;
                            <div className="d-inline-block">
                                <button style={button3}>
                                    <p className="p-0" style={{transform:'translateY(40%) translateX(5%)', lineHeight:'8px'}}>...</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
        <Footer />
        </>
    )

}

export default Community
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

const button3 = {
    marginLeft:10,
    padding: '8px 8px',
    width:'100%',
    background: '#2A3037',
    outline: '1px solid rgba(255, 255, 255, 0.1)',
    boxSizing: 'border-box',
    borderRadius: '50%',
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '20px',
    letterSpacing: '0.02em',
    textTransform: 'uppercase',
    color: '#A6ADB5',
    // margin : '4px'
}
