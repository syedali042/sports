import { CategoryContainer } from "./styles";
import ScissorIcon from '@assets/icons/Scissors.svg'
const CategorySection = (props) => {

    return <CategoryContainer>
        <div className="item">
            <ScissorIcon /> <span className="item-text">{props.text}</span>
        </div>
    </CategoryContainer>

}

export default CategorySection;