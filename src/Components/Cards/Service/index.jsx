import {
    CardContainer,
    CardBadge,
    CardTop,
    CardIcon,
    StarContainer,
} from "./styles"
import Container from "src/Components/Container"
import HeartIcon from "@assets/icons/Heart.svg"
import PinIcon from "@assets/icons/MapMarker.svg"
import ClockIcon from "@assets/icons/ClockMuutos.svg"
import StarLight from "src/Components/StarLight"
import Star from "src/Components/Star"

const ServiceCard = ({data}) => {
    console.log(data)
    return (
        <>
            <CardContainer img={data.images?data.images[0]:'https://syedali.easystay.com.pk/muutos/s1.png'}>
                <CardTop>
                    <CardBadge>20% OFF</CardBadge>
                    <CardIcon>
                        <HeartIcon />
                    </CardIcon>
                </CardTop>
                <div className='overlay' style={{ zIndex: 1000 }}>
                    <StarContainer>
                        <Star />&nbsp;
                        <Star />&nbsp;
                        <Star />&nbsp;
                        <Star />&nbsp;
                        <StarLight />
                        <span>&nbsp;123</span>
                    </StarContainer>
                    <p className='card-title'>{data.name?data.name:'Polyester Leader Navy'}</p>
                    <p className='card-description'>
                        {data.description?data.description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a...'}
                    </p>
                    <div className='pricing'>
                        <PinIcon />
                        &nbsp;
                        <span
                            style={{
                                // marginTop: "1px",
                                fontWeight:'normal !important',
                                fontSize: "13px",
                                color: "#fff",
                            }}>
                            {data.location?data.location.distance:'0.2 Mi'}
                        </span>
                        <ClockIcon style={{ marginLeft: "15px" }} /> &nbsp;
                        <span
                            style={{
                                // marginTop: "1px",
                                fontWeight:'normal !important',
                                fontSize: "13px",
                                color: "#fff",
                                paddingBottom:'15px'
                            }}>
                            {data.workingHours?data.workingHours[0]:'9:30 AM - 8:00 PM'}
                        </span>
                    </div>
                </div>
            </CardContainer>
        </>
    )
}

export default ServiceCard
