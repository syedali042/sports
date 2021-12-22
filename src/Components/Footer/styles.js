import styles from "@styles/Global";
import styled from "styled-components";

export const FooterContainer = styled.div`

    .media-footer{
        display:flex;
        justify-content:space-between;
        // flex-flow:wrap;
    }
    .mobile-footer{
        display:none;
    }
    & > svg {
        margin:10px;
    }
    @media (max-width: ${p => p.theme.media.sm}px) {
        justify-items:center;

        & > .media-footer{
            display:none;
        }
        & > .mobile-footer{
            display:block;
        }
        & > svg {
            margin:8px;
        }
    }
    @media (max-width: ${p => p.theme.media.md}px) {
        justify-items:center;
        & > svg {
            margin:10px;
        }
    }
    
`

export const FooterMenuHeading = styled.span`
    font-style: italic;
    font-weight: ${p=>p.theme.font.weight.bold};
    font-size: 15px;
    line-height: 17px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #FFFFFF;


    & > ul > li {
        list-style:none;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 20px;
        color: #A6ADB5;
    }

    & > .trend-container .trend {

        display:block;
        & > .trend-image{
            display:inline-block;
            & > img {
                width:50px;
                height:50px;
            }
        }
        & > p{
            display:inline-block;
            font-size:12px;
            padding-left:10px;
        }
    }

    @media (max-width: ${p => p.theme.media.md}px) {
        .trend-container {
            display:none !important;
        }

        & > ul > li {
            font-size: 12px;
        }

        font-size: 14px;
    }

    @media (max-width: ${p => p.theme.media.sm}px) {
        p {
            font-size: 18px;
        }
    }
`

export const CardDate = styled.span`

    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    color: #A6ADB5;

`

export const Address = styled.div`
   
    & > .address-line {
        width:230px;
        padding-top:30px;
        padding-bottom:30px;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        color: #A6ADB5;
    }
    @media (max-width: ${p => p.theme.media.sm}px) {
        display:block;
        text-align:center;
    }

`

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    img {
        width: 50px;
        height: 50px;
    }
    p {
        padding-left: 20px;
        font-size: 36px;
        display: inline-block;
        color: ${p => p.theme.colors.white};
    }
    @media (max-width: ${p => p.theme.media.md}px) {
        p {
            padding-left: 10px;
            font-size: 24px;
            display: inline-block;
            color: ${p => p.theme.colors.white};
        }
        img {
            width: 40px;
            height: 40px;
        }
    }

    @media (max-width: ${p => p.theme.media.sm}px) {
        justify-content:center;
        p {
            font-size: 18px;
        }
    }
`

export const FooterBottom = styled.div`

    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    height:80px;
    background: #161A1F;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #4F5358;
    
`


export const MobileFooter = styled.div`

    display:flex;
    align-items:center;
    justify-content:center;

`

export const MobileFooter2 = styled.div`
    display:flex;
    // align-items:center;
    justify-content:space-between;
    flex-flow:wrap;
`