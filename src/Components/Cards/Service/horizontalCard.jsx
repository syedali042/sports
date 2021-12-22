import ImgCard from '@assets/images/img-card.png'
import { CardBadge, StatusBage } from './styles';
import StarLight from 'src/Components/StarLight';
import Star from 'src/Components/Star';
import HeartIcon from "@assets/icons/Heart.svg"
import PinIcon from "@assets/icons/Pin.svg"
import ClockIcon from "@assets/icons/Clock.svg"
import ShareIcon from '@assets/icons/Share.svg'
const HorizontalServiceCard = ({data}) => {

    const addToCart = (cart, data) => event => {
        if (localStorage.getItem(cart) == null) {
            localStorage.setItem(cart, "[]")
            let addCart = JSON.parse(localStorage.getItem(cart))
            addCart.push(data)
            localStorage.setItem(cart, JSON.stringify(addCart))
            event.target.innerText = "Added To Cart"
        } else {
            let addCart = JSON.parse(localStorage.getItem(cart))
            addCart.push(data)
            localStorage.setItem(cart, JSON.stringify(addCart))
            event.target.innerText = "Added To Cart"
        }
    }

    return (

        <>  
            <div className="row">
                <div className="col-md-4">
                    <img src={data.images?data.images[0]:'https://syedali.easystay.com.pk/muutos/s1.png'} style={{width:290, maxWidth:290, maxHeight:210, height:210, borderRadius:5}} alt="" className="img-responsive" />
                </div>
                
                <div className="col-md-8" style={{paddingLeft:25}}>
                    <div className="row">
                        <div className="col-md-12">
                            <CardBadge>{data.serviceType}</CardBadge>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <Star />&nbsp;
                            <Star />&nbsp;
                            <Star />&nbsp;
                            <Star />&nbsp;
                            <StarLight />
                            <span style={{float:'right'}}>
                                <StatusBage color="#2ECB84">
                                    <ul className="d-inline-block text-success" style={{paddingLeft:'15px'}}>
                                        <li style={{padding:"0px"}}>
                                            <span className="text-grey text-status text-uppercase">{data.status}</span>
                                        </li>
                                    </ul>
                                </StatusBage>
                            </span>
                        </div>
                    </div>
                    <div className="row pt-2">
                        <p className="horizontal-service-card-title">
                            {data.name}
                        </p>
                        <p className="horizontal-service-card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae volutpat in neque egestas etiam nunc. Auctor blandit elit congue ut at sit. Turpis nullam senectus eget nibh neque euismod iaculis. 
                        </p>
                    </div>
                    <div className='service-horizontal-card-bottom pricing flex align-items-center justify-content-center'>
                        <PinIcon style={{transform:'scale(0.8)'}}/>
                        
                        <span
                            style={{
                                marginTop: "5px",
                                fontSize: "12px",
                                color: "rgba(255, 255, 255, 0.7)",
                            }}>
                        {data.location?data.location.distance:'0.2 Mi'}
                        </span>
                        <ClockIcon style={{ marginLeft: "15px", transform:'scale(0.8)'}} /> &nbsp;
                        <span
                            style={{
                                marginTop: "5px",
                                fontSize: "12px",
                                color: "rgba(255, 255, 255, 0.7)",
                                paddingBottom:'15px'
                            }}>
                            {/* {data.workingHours?data.workingHours[0]:null} */}
                        </span>
                        <div className="service-card-icon-wrapper border p-1">
                            <ShareIcon />
                        </div>
                        <div className="service-card-icon-wrapper border p-1">
                            <HeartIcon />
                        </div>
                        <div className="" style={{float:'right', transform:'translateY(-50%)'}}>
                            
                            <button style={button} onClick={addToCart("serviceCart", data)}>
                                Book
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <hr style={{color:'#fff'}} />
        </>

    )

}
export default HorizontalServiceCard;


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
    float: 'right'
    // margin : '4px'
}