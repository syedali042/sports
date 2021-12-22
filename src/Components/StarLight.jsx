import StarIcon from "@assets/icons/StarLight.svg"
import styled from "styled-components"

const Light = styled.span`
    // & > svg {
    //     path {
    //         fill: #3f7a5f;
    //     }
    // }
`
const StarLight = () => {
    return (
        <>
            <Light>
                <StarIcon />
            </Light>
        </>
    )
}
export default StarLight
