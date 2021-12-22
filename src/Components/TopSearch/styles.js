import styled from "styled-components";

export const Search__SearchBar = styled.div`

& > .row{

    align-items:center;
    justify-content:center;

}
& > .row .first > .row{
    padding:5px;
    border-radius: 10px;
    background-color: #2A3037;
    & > div > div > .form-control {
        color: #A6ADB5;
        border-radius: 0px;
        border:none;
        background-color: #2A3037;
        padding:16px;
        letter-spacing:1px;
        font-weight:400;
        font-size:13px;
        outline:none;

        &:focus{

                border-color: inherit;
                -webkit-box-shadow: none;
                box-shadow: none;
        }
    }
    
    .border-right {
        border-right: 1px solid #A6ADB5;
        float:right;
        margin-top:13px;
        color: #2A3037
    }

}




`