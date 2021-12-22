import styled from "styled-components"
export const CategoryContainer = styled.div`

    display:inline-block;
    margin-top:10px;
    width: 28%;
    height: 68px;
    background: #2a3037;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
    border-radius: 5px;

    & > .item{
        padding-left:20px;
        width:100%;
        height:100%;
        display:flex;
        align-items:center;

        & > svg{
            width:30px;
            // height:48px;
        }
        & > .item-text{
            // width:48px;
            font-family: ${p=>p.theme.font.weight.regular};
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 20px;
            letter-spacing:2px;
            /* identical to box height */

            text-transform: capitalize;

            color: #FFFFFF;

            text-shadow: 0px 0px 1px rgba(26, 32, 36, 0.32), 0px 4px 8px rgba(91, 104, 113, 0.24);
        }
    }

    @media (max-width: ${p => p.theme.media.md}px) {
        width: 45%;
        margin-top: 10px;
    }
    @media (max-width: ${p => p.theme.media.sm}px) {
        width: 100%;
    }
`
