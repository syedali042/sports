
import styled from "styled-components"

export const HomeTabs = styled.div`
    .product-filter-tabs {
        display: flex;
        align-items: center;
        justify-content: center;

        & > button {
            padding: 20px;
            font-style: italic;
            background: none;
            cursor: pointer;
            color: #fff;
        }

        & > .active-tab {
            padding: 10px 15px;
            border: 1px solid #2ecb84;
            box-sizing: border-box;
            border-radius: 5px;
            margin: 0px 10px;
        }
    }

    & > h3 {
        font-style: italic;
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
        /* identical to box height */

        letter-spacing: 0.02em;
        text-transform: uppercase;

        color: ${p => p.theme.colors.greywhite};
    }

    .service-text {
        font-style: italic;
        font-weight: bold;
        font-size: 16px;
        line-height: 22px;
        /* identical to box height */

        letter-spacing: 0.02em;
        text-transform: uppercase;

        color: #a6adb5;
    }
    & .round-image-title{
        
    }

    .section-heading{
        font-size:100px !important;
    }
`

export const Stylesheet = {
    sectionHeading: {
        paddingLeft: "5px",
        fontStyle: "italic",
        fontWeight: "bold",
        fontSize: "16px",
        lineHeight: "20px",
        letterSpacing: "0.02em",
        textTransform: "uppercase",
        color: "#A6ADB5",
    },
    sectionHeading2: {
        paddingLeft: "60px",
        fontStyle: "italic",
        fontWeight: "bold",
        fontSize: "16px",
        lineHeight: "20px",
        letterSpacing: "0.02em",
        textTransform: "uppercase",
        color: "#A6ADB5",
    },
    SilderRoundImage: {
        width:'80px',
        height:'80px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxSizing: 'border-box',
        flex: 'none',
        order: 0,
        flexGrow: 0,
        margin: '12px 0px',
        borderRadius:'50%'
    },
    roundImageTitle: {
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: '11px',
        lineHeight: '18px',
        textAlign: 'center',
        textTransform: 'uppercase',
        color: '#FFFFFF',
        textShadow: '0px 0px 1px rgba(26, 32, 36, 0.32), 0px 4px 8px rgba(91, 104, 113, 0.24)'
    },
    roundImageTag: {        
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '18px',
        textAlign: 'center',
        color: '#A6ADB5',
        textShadow: '0px 0px 1px rgba(26, 32, 36, 0.32), 0px 4px 8px rgba(91, 104, 113, 0.24)',
        flex: 'none',
        order: 1,
        flexGrow: 0,
        margin: '3px 0px'
    },
    BannerWrapper: {
        marginTop:'80px',
        display:'flex',
        justifyContent:'center'

    },
    BannerWrapper2: {
        marginTop:'40px',
        display:'flex',
        justifyContent:'space-between'

    },
    flexCenter: {
        display:'flex',
        justifyContent:'center'
    }
    
}
