import StarIcon from "@assets/icons/Star.svg"
import styled from "styled-components"

const Dark = styled.span`
    & > svg {
        path {
            fill: #2ecb84;
        }
    }
`
const Star = () => {
    return (
        <>
            <Dark>
                <StarIcon />
            </Dark>
        </>
    )
}
export default Star
