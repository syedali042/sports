import styled from "styled-components";

export const BannerContainer = styled.div`
    display:inline-block;
    // margin-left:7px;
    padding:15px;
    width: 100%;
    height:270px;
    background: url(https://thumbs.dreamstime.com/b/initial-ep-logo-design-geometric-circle-style-business-branding-215703777.jpg);
    border-radius:5px;
    @media (max-width: ${p => p.theme.media.md}px) {
        display:none;
    }
    @media (max-width: ${p => p.theme.media.sm}px) {
        width: 100%;
    }
`
