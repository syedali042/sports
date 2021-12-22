import {
    CardContainer,
    CardBadge,
    CardTop,
    CardIcon,
    StarContainer,
} from "./styles"
import Container from "src/Components/Container"
import HeartIcon from "@assets/icons/Heart.svg"
import StarLight from "src/Components/StarLight"
import Star from "src/Components/Star"
import ImgCard from '@assets/images/img-card.png'

const ProductCard = ({data}) => {
    return (
        <>
            <CardContainer>
                <img
                    src={data.images?data.images[0]:'https://syedali.easystay.com.pk/muutos/p1.png'}
                    alt='Product-Image'
                />
                <CardTop>
                    <CardBadge>20% OFF</CardBadge>
                    <CardIcon>
                        <HeartIcon />
                    </CardIcon>
                </CardTop>
                <StarContainer>
                    <Star />&nbsp;
                    <Star />&nbsp;
                    <Star />&nbsp;
                    <Star />&nbsp;
                    <StarLight />&nbsp;
                    <span>&nbsp;123</span>
                </StarContainer>
                <p className='card-title'>
                    {data?data.name:'Polyester Leader Navy womans Hanbag'}
                </p>
                <div className='pricing'>
                    <span className='current'>QAR {data.price}</span>
                    <span className='old'>QAR {parseInt(data.price)+150}</span>
                </div>
            </CardContainer>
        </>
    )
}

export default ProductCard
