import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
    padding-left: 5%;
    padding-right: 5%;
    // background: #1A1F24;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 15px;
    padding-bottom: 15px;
    z-index: 1000;
`

export const Right = styled.div`
    // padding-right: 50px;
    .menu-bar {
        display: none;
        & > svg {
            width: 40px;
            height: 40px;
        }
    }
    .header-utils {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 7px 12px;
    }

    .section-one {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size:13px;
        padding: 7px 12px;
        background: ${p => p.theme.colors.grey100};
        border-radius: 29px;
        ${p => p.theme.utils.border(p.theme)}
        & > span {
            color: ${p => p.theme.colors.greywhite};
            // margin-top:2px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: ${p => p.theme.font.weight.medium};
        }
    }

    .header-icons {
        & > svg {
            margin-left: 15px;
        }
    }

    svg {
        path {
            fill: ${p => p.theme.colors.greywhite};
        }
    }
    @media (max-width: ${p => p.theme.media.lg}px) {
        // padding-right: 20px;
        .section-one {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 3px 8px;
            font-size: 12px;
            background: ${p => p.theme.colors.grey100};
            border-radius: 29px;
            ${p => p.theme.utils.border(p.theme)}
            & > span {
                color: ${p => p.theme.colors.greywhite};
                // margin-top:2px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: ${p => p.theme.font.weight.medium};
            }
        }
        .header-icons {
            & > svg {
                margin-left: 10px;
            }
        }
    }

    @media (max-width: ${p => p.theme.media.md}px) {
        .section-one {
            display: none;
        }
        .header-icons {
            display:none;
            & > svg {
                display: none;
            }
        }
        .menu-bar {
            padding-top: 5px;
            display: block !important;
        }
    }
    @media (max-width: ${p => p.theme.media.sm}px) {
        .menu-bar {
            padding-top: 5px;
            display: block !important;
        }
    }
`
export const Left = styled.div`
    // padding-left: 50px;
    @media (max-width: ${p => p.theme.media.xl}px) {
        padding-left: 20px;
    }
`
export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
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
    @media (max-width: ${p => p.theme.media.xl}px) {
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
        p {
            font-size: 18px;
        }
    }
`

export const Menu = styled.div`
    // display: inline-block;
    padding-left: 40px;
    ul {
        display: flex;
        padding-top: 5px;
    }

    ul > li {
        list-style: none;
        padding-left: 30px;
        text-transform: uppercase;
        color: ${p => p.theme.colors.white};
        font-style: italic;
    }

    @media (max-width: ${p => p.theme.media.xl}px) {
        padding-left: 20px;
        ul > li {
            list-style: none;
            padding-left: 15px;
            text-transform: uppercase;
            color: ${p => p.theme.colors.white};
            font-style: italic;
            font-size: 14px;
        }
    }
    @media (max-width: ${p => p.theme.media.sm}px) {
        display: none;
    }
`
// ${p => p.theme.utils.border(p.theme)};

export const MmWrapper = styled.div`
    display:${p=>p.isActive?'flex':'none'};
    position:fixed;
    z-index:10000;
    width:100vw;
    height:100vh;
    top:0;
    left:0;
    backdrop-filter: blur(20px) brightness(0.5);
    align-items: center;
    justify-content: center;
`

export const MobileMenu = styled.div`
    width: 90%;
    max-width: 1000px;
    align-items: center;
    height: auto;
    background: #2a3037;
    box-sizing: border-box;
    border-radius: 5px;
    padding-top: 20px;
    ${p => p.theme.utils.border(p.theme)}

    button {
        padding: 10px;
        width: 100%;
        background: ${p => p.theme.colors.darkGrey100};
        ${p => p.theme.utils.border(p.theme)}
        box-sizing: border-box;
        border-radius: 5px;
        color: ${p => p.theme.colors.greywhite};
        font-size: 14px;
        margin-bottom: 10px;
    }
    button:hover {
        background: #fff;
        color: #303030;
    }

    .menu-container {
        width: 90%;
        max-width: 350px;
        margin-top: 10px;
        padding: 0px 10px 10px 10px;
        margin-left: auto;
        margin-right: auto;
    }
`
