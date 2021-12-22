import styled from "styled-components"

export const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;

    & > h3 {
        font-style: italic;
        font-weight: 900;
        font-size: 46px;
        line-height: 52px;
        text-align: center;
        text-transform: uppercase;
        text-shadow: 0px 0px 1px rgba(26, 32, 36, 0.32),
            0px 4px 8px rgba(91, 104, 113, 0.24);
        & > green {
            color: #6bd841;
        }
        padding-bottom: 20px;
    }

    @media (max-width: ${p => p.theme.media.md}px) {
        & > h3 {
            font-size: 34px;
            font-weight: 800;
            line-height: 35px;
        }
    }
    @media (max-width: ${p => p.theme.media.sm}px) {
        & > h3 {
            font-size: 30px;
            font-weight: 800;
            line-height: 35px;
        }
    }
`

export const InputAndButton = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;

    & > div {
        width: 100%;
    }

    & > div > svg {
        path {
            fill: ${p => p.theme.colors.greywhite};
        }
        position: absolute;
        z-index: 1;
        top: 50%;
        transform: translateY(-50%);
        left: 20px;
    }
    & > div > input {
        width: 100%;
        height: 56px;
        background: rgba(32, 37, 43, 0.6);
        box-shadow: inset 0px -1px 0px rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        padding-left: 55px;
        color: #a6adb5;
        & :: placeholder {
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 20px;
        }
    }

    & > button {
        padding: 15px 20px;
        margin-left: 10px;
        background: linear-gradient(
            328.11deg,
            #05d0c2 12.59%,
            #2ecb84 53%,
            #8ce01d 87.41%
        );
        border: 1px solid rgba(255, 255, 255, 0.3);
        box-sizing: border-box;
        border-radius: 10px;
        font-style: italic;
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #01301b;
    }

    @media (max-width: ${p => p.theme.media.md}px) {
        & > button {
            display: none;
        }

        & > div > input {
            width: 100%;
            height: 41px;
            background: rgba(32, 37, 43, 0.6);
            box-shadow: inset 0px -1px 0px rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            & :: placeholder {
                font-style: normal;
                font-weight: normal;
                font-size: 15px;
                line-height: 20px;
                color: #a6adb5;
                padding-right: 55px;
            }
        }
    }
`

export const HeroImage = styled.div`
    position: relative;
    width: 100%;
    height: 640px;
    background: linear-gradient(0deg, #20252b 0%, rgba(32, 37, 43, 0) 27.5%),
        linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 30.86%),
        url(${p=>p.image.src}),
        #c4c4c4;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (max-width: ${p => p.theme.media.lg}px) {
    }

    @media (max-width: ${p => p.theme.media.md}px) {
    }

    @media (max-width: ${p => p.theme.media.sm}px) {
    }
`
