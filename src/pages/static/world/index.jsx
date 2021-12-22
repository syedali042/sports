import Container from "src/Components/Container";
import InitiativeImage from './initiative.png'
import MapImage from './map.png'
import WorldImage from './world.png'
import ArrowRight from '@assets/icons/Arrow/Arrow 2/Right.svg'
import Footer from "src/Components/Footer";
const DataProtection = () => {
    
    return (
        <>
        <Container>
             <div className="row pt-5">
                <div className="d-flex breadcrump pt-4">
                    <span>Home</span> <ArrowRight /> <span>To The World</span>
                </div>
                  <div className="col-md-5 col-12">
                      <h1 className="saqlain__world mt-5">TO THE WORLD</h1>
                      <p className="saqlain__answer__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit ut fermentum, viverra ullamcorper. Est a, convallis
                    sit volutpat fames neque, vulputate porta.<br /><br />
                    Sed maecenas pharetra pellentesque dignissim sed duis arcu, congue. Nisi, nisl eleifend vulputate morbi urna. Sodales
                    non interdum neque dolor sit imperdiet gravida. Curabitur dui sodales lacus, eleifend pharetra, mi venenatis sed.<br /><br />
                    Ipsum leo ut diam ultrices. Non adipiscing turpis aenean orci ac. Nunc lorem elementum dis placerat ut sed.</p>
                  </div>
                  <div className="col-md-7 col-12">
                      <img src={WorldImage.src} alt="careers Image" className="saqlain__image" />
                  </div>
                
              </div>
              <div className="container-fluid">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-2"></div>
                        <div className="col-md-8 col-12 mt-2"> 
                            
                            <center>
                                <h1 className="saqlain__world mt-4">THE COMPANIES COMITMENT TO THE WORLD</h1>
                                <p className="saqlain__answer__paragraph">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. A nibh at elementum viverra dui turpis pellentesque et sed.
                                    Rutrum at etiam tempor urna. Purus tempus, aliquam massa dolor. Sociis tellus, nulla viverra quis lacus, ut purus mus
                                    nunc.<br /><br />
                                    Et a semper fringilla mi sem. Nec id turpis odio lectus. Enim pellentesque lorem amet faucibus posuere. Ut porttitor
                                    vitae, pulvinar consequat semper eget nullam eget. Fermentum pulvinar adipiscing nisi consequat quam congue cras. Ipsum
                                    pharetra fermentum urna tristique egestas amet, cras. Tellus ac ipsum mi nec. Vel, massa nec scelerisque id sit varius.
                                </p>
                            </center>
                        </div>
                        <div className="col-md-2"></div>
                      </div>
                  </div>
              </div>
              <div className="row">
                
                <div className="col-md-1"></div>
                <div className="col-md-10  mt-4 p-2">
                    <div className="row">
                        <div className="col-md-4"></div>
            
                        <div className="col-md-4 col-12">
                            <button className="btn btn saqlain__btn w-100 ">
                                SHOW MORE
                            </button>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
                
                <div className="col-md-1"></div>
              </div>

            <div className="row">
            
                <div className="col-md-2"></div>
                <div className="col-md-8  mt-4 p-2">
                    <img src={MapImage.src} className="w-100" />
                </div>
                <div className="col-md-2"></div>
            </div>

            <div className="row pt-5">
            <div className="col-md-12">
             <center><h1 className="saqlain__world">CSV INITATIVES</h1></center>
            </div>
            </div>

            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <center>
                        <p className="saqlain__answer__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. A nibh at elementum viverra dui turpis pellentesque et sed.</p>
                    </center>
                </div>
                <div className="col-md-4"></div>
            </div>

            <div className="row pt-3">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                  <center><div className="row">
                    <div className="col-md-4 ml-3 mt-2 position-relative">
                        <img src={InitiativeImage.src} className="saqlain__initiative" />
                        <div className="overlay position-absolute" style={{zIndex:200, top:'80%', left:40}}>
                            <div>
                                <p className="text__saqlain">Initiative 1</p>
                                {/* <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</span> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ml-3 mt-2 position-relative">
                        <img src={InitiativeImage.src} className="saqlain__initiative" />
                        <div className="overlay position-absolute" style={{zIndex:200, top:'80%', left:40}}>
                            <div>
                                <p className="text__saqlain">Initiative 1</p>
                                {/* <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</span> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 ml-3 mt-2 position-relative">
                        <img src={InitiativeImage.src} className="saqlain__initiative" />
                        <div className="overlay position-absolute" style={{zIndex:200, top:'80%', left:40}}>
                            <div>
                                <p className="text__saqlain">Initiative 1</p>
                                {/* <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</span> */}
                            </div>
                        </div>
                    </div>
                </div></center>
                </div>
                <div className="col-md-2"></div>
            </div>

            <div className="row pt-5">
                <div className="col-md-12">
                    <center>
                        <h1 className="saqlain__world">RECYCLING INITATIVES</h1>
                    </center>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <center>
                        <p className="saqlain__answer__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. A nibh at
                            elementum viverra dui turpis pellentesque et sed.</p>
                    </center>
                </div>
                <div className="col-md-4"></div>
            </div>
            
            <div className="row pb-4">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                   <center>
                        <div className="row">
                            <div className="col-md-4 ml-1 mt-2 position-relative">
                                <img src={InitiativeImage.src} className="saqlain__initiative" />
                                <div className="overlay position-absolute" style={{zIndex:200, top:'80%', left:40}}>
                                    <div>
                                        <p className="text__saqlain">Initiative 1</p>
                                        {/* <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</span> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 ml-1 mt-2 position-relative">
                                <img src={InitiativeImage.src} className="saqlain__initiative" />
                                <div className="overlay position-absolute" style={{zIndex:200, top:'80%', left:40}}>
                                    <div>
                                        <p className="text__saqlain">Initiative 1</p>
                                        {/* <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</span> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 ml-1 mt-2 position-relative">
                                <img src={InitiativeImage.src} className="saqlain__initiative" />
                                <div className="overlay position-absolute" style={{zIndex:200, top:'80%', left:40}}>
                                    <div>
                                        <p className="text__saqlain">Initiative 1</p>
                                        {/* <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit...</span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                   </center>
                </div>
                <div className="col-md-2"></div>
            </div>
        </Container>
        <Footer />
        </>
    )

}

export default DataProtection;
