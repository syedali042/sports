import {
    CardContainer,
    CardBadge,
    CardTop,
    CardIcon,
    StarContainer,
    ReadMore
} from "./styles"
import Container from "src/Components/Container"
import HeartIcon from "@assets/icons/Heart.svg"
import PinIcon from "@assets/icons/Pin.svg"
import ClockIcon from "@assets/icons/Clock.svg"
import StarLight from "src/Components/StarLight"
import Star from "src/Components/Star"
import { CardDate } from "../Article/styles"

const ArticleCard = () => {
    return (
        <>
            <CardContainer img='https://previews.agefotostock.com/previewimage/medibigoff/57badf5ba4e524ec88c4e276b8ae6fb9/esy-027689079.jpg'>
                <CardTop>
                    <CardBadge>20% OFF</CardBadge>
                    <CardIcon>
                        <HeartIcon />
                    </CardIcon>
                </CardTop>
                <div className='overlay' style={{ zIndex: 1000 }}>
                    <StarContainer>
                        <CardDate>
                        02.03.2021
                        </CardDate>
                    </StarContainer>
                    <p className='card-title'>Find Your Zen. 7 Reasons to add yoga to your lifestyle</p>
                    <p className='card-description'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed a...
                    </p>
                    <div className='pricing'>
                        <ReadMore>
                            Read More
                        </ReadMore>
                    </div>
                </div>
            </CardContainer>
        </>
    )
}

export default ArticleCard
