import styled  from "styled-components";

export const FilterBarStyled = styled.div`

    width:100%;
    background: #2A3037;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
    border-radius: 5px;


    & .border-bottom {

        padding: 10px 0;
        border-bottom: 2px solid #3F464E !important;

    }

    hr {
        background-color: #3F464E;
        height:2px;
    }
.



    & > div > div > svg {
        path{
            fill:#A6ADB5;
        }
    }
`

export const LightTextCat = styled.span`

    font-family: inherit;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 18px;
    /* identical to box height */

    text-transform: capitalize;

    color: #A6ADB5;

`


export const Text = styled.span`

    font-family: inherit;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 15px;
    color: #A6ADB5;

`

export const ClearFilterText = styled.span`

    font-family: Mulish;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    /* identical to box height */


    color: #2ECB84;


    /* Inside Auto Layout */

    flex: none;
    order: 1;
    flex-grow: 0;
    font-family: inherit;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    /* identical to box height */
    color: #2ECB84;


`

export const CategoryItemText = styled.span`

font-family: inherit;
font-style: normal;
font-weight: normal;
font-size: 13px;
line-height: 20px;
text-transform: capitalize;
color: #FFFFFF;
text-shadow

`

export const CategoryItemTextActive = styled.span`

font-family: inherit;
font-style: normal;
font-weight: normal;
font-size: 13px;
line-height: 20px;
text-transform: capitalize;
color: #2ECB84;

`

export const CategoryItemQtyText = styled.span`

font-family: inherit;
font-style: normal;
font-weight: normal;
font-size: 13px;
line-height: 18px;
/* identical to box height */

text-transform: capitalize;

color: #2ECB84;

`

export const CategoryTitle = styled.span`

    font-style: italic;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    letter-spacing: 0.02em;
    text-transform: uppercase;

    color: #FFFFFF;

`