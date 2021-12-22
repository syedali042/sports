import styles from "@styles/Global"
import { Component } from "react"
import styled from "styled-components"

export const CardContainer = styled.div`
    // margin: 5px;
    position: relative;
    display: inline-block;
    width: 100%;

    height: 350px;
    background: linear-gradient(0deg, #12151a 0%, rgba(18, 21, 26, 0) 100%),
        url(${p => p.img}), #0a0d10;
    background-size: cover;
    background-position: center;
    outline: 1px solid rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
    border-radius: 5px;

    .overlay {
        position: absolute;
        bottom: 0;
    }
    .card-title {
        padding: 5px 15px;
        font-family:Mulish
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 23px;
        color: #FFFFFF;
        text-shadow: 0px 0px 1px rgba(26, 32, 36, 0.32), 0px 4px 8px rgba(91, 104, 113, 0.24);
    }

    .card-description {
        padding: 5px 15px;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 20px;
        /* or 143% */

        color: rgba(255, 255, 255, 0.7);
    }

    .pricing {
        display: flex;
        align-item: center;
        justify-content: left;
        font-size: 14px;
        padding: 5px 15px;
        & > .current {
            color: #fff;
        }

        & > .old {
            padding-left: 7px;
            text-decoration: line-through;
            color: #798089;
        }
    }

    @media (max-width: ${p => p.theme.media.md}px) {
        width: 100%;
    }
    @media (max-width: ${p => p.theme.media.sm}px) {
        width: 100%;
    }
`

export const CardTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    width: 100%;
    padding: 10px;
`

export const CardBadge = styled.span`
    font-size: 10px;
    font-weight: 700;
    padding: 5px 10px;
    background: linear-gradient(0deg, #2ecb84, #2ecb84);
    font-family: inherit;
    border-radius: 6px;
`

export const CardIcon = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background: rgba(32, 37, 43, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.05);
    box-sizing: border-box;
    backdrop-filter: blur(30px);
    border-radius: 50%;

    & > svg {
        path {
            fill: ${p => p.theme.colors.greywhite};
        }
    }
`

export const StarContainer = styled.div`
    padding: 10px 15px 0px 15px;
    display: flex;
    align-items: center;
    color: #798089;
`

export const CardsContainer = styled.div``

export const CardDate = styled.span`

    font-style: italic;
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.4);

`

export const ReadMore = styled.span`
    font-style: italic;
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #2ECB84;
    padding-bottom:15px;
`