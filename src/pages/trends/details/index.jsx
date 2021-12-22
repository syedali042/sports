import Container from "src/Components/Container";
import Footer from "src/Components/Footer";
import ArrowRight from '@assets/icons/Arrow/Arrow 2/Right.svg'
import Reviews from "src/Components/Reviews";
const TrendDetails = () => {
    
    return (
        <>
        <Container>
            <br />
            <div className="row pt-5 pb-5">
                    <div className="col-md-12 col-12">
                        <div className="d-flex breadcrump pt-3">
                            <span>Home</span> <ArrowRight /> <span>Trends</span> <ArrowRight /> <span>Trend Article</span>
                        </div>
                        <div>
                            <img src={`https://syedali.easystay.com.pk/muutos/td.png`} alt="" style={{width:'100%', height:'450px', borderRadius:'5px'}}/>
                        </div>
                    </div>
                        <center><h1 className="saqlain__terms mt-4 text-uppercase">custom title for trend article</h1></center>
                    <div className="row pt-4">
                        <p style={{textAlign:'justify'}} className="community-question-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suscipit ut fermentum, viverra ullamcorper. Est a, convallis sit volutpat fames neque, vulputate porta. Sed maecenas pharetra pellentesque dignissim sed duis arcu, congue. Nisi, nisl eleifend vulputate morbi urna. Sodales non interdum neque dolor sit imperdiet gravida. Curabitur dui sodales lacus, eleifend pharetra, mi venenatis sed. Ipsum leo ut diam ultrices. Non adipiscing turpis aenean orci ac. Nunc lorem elementum dis placerat ut sed.
                        </p>
                        <div>
                            <img src={`https://syedali.easystay.com.pk/muutos/td.png`} alt="" style={{width:'100%', height:'450px', borderRadius:'5px'}}/>
                        </div>
                        <p style={{textAlign:'justify'}} className="community-question-text pt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. A nibh at elementum viverra dui turpis pellentesque et sed. Rutrum at etiam tempor urna. Purus tempus, aliquam massa dolor. Sociis tellus, nulla viverra quis lacus, ut purus mus nunc. 
                        Et a semper fringilla mi sem. Nec id turpis odio lectus. Enim pellentesque lorem amet faucibus posuere. Ut porttitor vitae, pulvinar consequat semper eget nullam eget. Fermentum pulvinar adipiscing nisi consequat quam congue cras. Ipsum pharetra fermentum urna tristique egestas amet, cras. Tellus ac ipsum mi nec. Vel, massa nec scelerisque id sit varius. 
                        Orci eget vulputate eu, consectetur sed vitae turpis ut. Aliquam mattis aliquet gravida in tincidunt vel mi tortor diam. Scelerisque velit accumsan, posuere imperdiet vulputate arcu. Sed ut hendrerit turpis mi vulputate ut donec sit. Diam, ultrices mattis faucibus amet et mollis odio sem quis. Lobortis risus massa velit quam. A risus sed in et adipiscing morbi in. Quisque morbi orci etiam diam tincidunt imperdiet. Erat ante integer montes, diam duis eget metus turpis massa. 
                        Ipsum in vitae feugiat ut netus mattis faucibus. Ut accumsan augue tristique at sem. Dolor cras euismod dignissim pretium felis quam nibh in adipiscing. Vitae id egestas vitae ut. Eget at scelerisque non urna, non. Tempus enim odio etiam aliquet. Sollicitudin mattis ultrices dolor, sed elit. Duis nunc massa massa mi faucibus.
                        </p>
                    </div>
                </div>
                <br />
                <Reviews />
        </Container>
        <Footer />
        </>
    )

}

export default TrendDetails;
