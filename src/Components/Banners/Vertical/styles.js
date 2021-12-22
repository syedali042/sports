import styled from "styled-components";

export const BannerContainer = styled.div`
    display:inline-block;
    // margin-left:7px;
    height:550px;
    width: 120px;
    background: url(https://thumbs.dreamstime.com/b/initial-ep-logo-design-geometric-circle-style-business-branding-215703777.jpg);

    @media (max-width: ${p => p.theme.media.md}px) {
        display:none;
    }
    @media (max-width: ${p => p.theme.media.sm}px) {
        width: 100%;
    }
`
