import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import ScreenLoading from "@components/ScreenLoading"
import Layout from "@components/Layout"

import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

  *, *::after, *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: ${p => p.theme.colors.greyDark};
  }

  button, input {
    outline:none;
    border:none;
    font-family: inherit;
  }


  @media (max-width: ${p => p.theme.media.sm}px) {
    .md-slider-specialist{
      display:none;
    }
    .sm-slider-specialist{
      display:flex !important;
    }
  }

  .vertical-banner{

    width: 90%;
    height: 600px;
    @media (max-width: ${p => p.theme.media.md}px) {
      display: none;
    }
    @media (max-width: ${p => p.theme.media.sm}px) {
      display: none;
    }
    
  }

  .horizontal-banner{
    
    // width: 728px;
    height: 90px;
    @media (max-width: ${p => p.theme.media.md}px) {
      display: none;
    }
    @media (max-width: ${p => p.theme.media.sm}px) {
      display: none;
    }
    
  }

  .category-section {

    background: #2A3037;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
    border-radius: 5px;
    height: 68px;
  }

  .icon span{
    font-family: inherit;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    text-transform: capitalize;
    color: #FFFFFF;
    text-shadow: 0px 0px 1px rgba(26, 32, 36, 0.32), 0px 4px 8px rgba(91, 104, 113, 0.24);
  }

  .slick-slide {
    padding: 0 20px 0 2px;
    @media (max-width: ${p => p.theme.media.md}px) {
      padding: 0 10px;
    }
    @media (max-width: ${p => p.theme.media.sm}px) {
      padding:10px;
    }
  }
  
  .slick-slide {height: auto;}
  .slick-list {
    // margin: 0 2em;

    @media (max-width: ${p => p.theme.media.md}px) {
      // margin: 0 1em;
    }
    @media (max-width: ${p => p.theme.media.sm}px) {
      // margin: 0 0em;
    }
  }
  
  .ui-slider .ui-btn-inner {
    padding: 4px 0 0 0 !important;
  }
  
  .ui-slider-popup {
      position: absolute !important;
      width: 64px;
      height: 64px;
      text-align: center;
      font-size: 36px;
      padding-top: 14px;
      z-index: 100;
      opacity: 0.8;
  }
  
  .top___bar_service_search {
    & > div > p {
      font-family:Poppins, sans-serif;
      color: #A6ADB5;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 18px;

      & > span {
        font-family:Poppins, sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
        color: #2ECB84;

        & > svg {
          transform: scale(0.7)
        }
      }
    }
  }

  .text-grey {
    color:#A6ADB5;
  }

  .text-status {
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    /* identical to box height */
    letter-spacing: 0.02em;
  }

  .horizontal-service-card-title {
    font-family: Poopins, sans-serif;
    font-style: italic;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    text-transform: uppercase;

    color: #FFFFFF;

    text-shadow: 0px 0px 1px rgba(26, 32, 36, 0.32), 0px 4px 8px rgba(91, 104, 113, 0.24);
  }

  .horizontal-service-card-text{
    color: #A6ADB5;
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
  }

  .service-card-icon-wrapper{
    float:right; 
    transform:translateY(-50%);
    border-radius:50%; 
    margin-left:10px;
    border-color:#353A41 !important;

    & > svg {
      path{
        fill: #A6ADB5;
      }
    }
  }
  
  .icon-wrapper{
    & > svg {
      path{
        fill: #2ECB84;
      }
    }
  }

  .service-horizontal-card-bottom{
    & > svg > path {
      fill: #2ECB84 !important;
    }
  }

  .filter-arrow-down-icon > svg{
    path{
      fill:#A6ADB5;
    }
  }


  .card-top-filter-option > svg {
    path {
      fill : #2ECB84;
    }
  }




  .horizontal-product-card-title {
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    color: #FFFFFF;
    text-shadow: 0px 0px 1px rgba(26, 32, 36, 0.32), 0px 4px 8px rgba(91, 104, 113, 0.24);
  }

  .horizontal-product-card-text{
    color: #A6ADB5;
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
  }

  .product-card-icon-wrapper{
    float:right; 
    transform:translateY(-50%);
    border-radius:50%; 
    margin-left:10px;
    border-color:#353A41 !important;

    & > svg {
      path{
        fill: #A6ADB5;
      }
    }
  }
  

  .service-horizontal-card-bottom{
    & > svg > path {
      fill: #2ECB84 !important;
    }
  }




  .thumbnail-slider-wrap .slick-slider .slick-list {
    margin: 0 !important;
  }

  .slider-wrapper .slick-slider .slick-list {
    margin: 0 !important;
  }

  .thumbnail-slider-wrap .slick-slider {
    height: 440px !important;
  }
  .thumbnail-slider-wrap .slick-slider .slick-list {
    height: 440px !important;
  }

  .slick-list .slick-track{
    width:10000px !important;
  }

  .thumbnail-slider-wrap .slick-track .slick-slide img {
    border-radius:5px !important;
  }

  .0{
    --bs-gutter-x:0rem !important;
    --bs-gutter-y:0rem !important;
  }

  .slider-wrapper .slick-slider .slick-list .slick-track .slick-slide {
      width:  100%; 
    height: 100%; 
    margin: 0 !important;
    
  }
  .slider-wrapper .slick-slider .slick-list .slick-track .slick-slide div .slick-slide img {
    
    object-fit: contain !important;
  }

  .breadcrump{
    color: #A6ADB5;
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 18px;

    & > svg{
      transform:translateY(10%);
      path{
        fill:#2ECB84;
      }
    }

    & > span {
      padding: 5px 10px 20px 10px;
    }

  }
  .breadcrump .active-bread{
    color: #fff;
  }

  .d-product-heading {

    font-family: Poppins, sans-serif;
    font-style: italic;
    font-weight: bold;
    font-size: 22px;
    line-height: 29px;
    text-transform: uppercase;

    color: #FFFFFF;

    text-shadow: 0px 0px 1px rgba(26, 32, 36, 0.32), 0px 4px 8px rgba(91, 104, 113, 0.24);


  }

  .text-success-2{
    color: #2ECB84;
  }

  .bg-success-2{
    background: #2ECB84 !important;
    color: #01301B !important;
  }

  .d-product-color-size{
    font-size:13px;
    font-weight:600;
  }

  .color-image {
    position:relative;
    width: 60px;
    height: 60px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
    border-radius: 5px;
    margin:2px;
  }

  .color-selected{
    position: absolute; 
    bottom: 0; 
    background: rgb(0, 0, 0);
    background: linear-gradient(0deg, rgba(46, 203, 132, 0.8), rgba(46, 203, 132, 0.8)); /* Black see-through */
    color: #f1f1f1;
    height:100%;
    width: 100%;
    display:flex;
    outline: none;
    curson:pointer;
    border:none;
    align-items-center:center;
    justify-content:center;
    transition: .5s ease;
    opacity:0;
    color: white;
    font-size: 20px;
    // padding: 20px;
    text-align: center;

    & > svg {
      // transform: scale(0.7)
      transform: translateY(50%)
    }
  }

  .color-image:hover .color-selected{
    opacity:1;
  }
  

  .d-product-size{
    width: 39px;
    height: 34px;
    background: #2A3037;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
    border-radius: 5px;
    padding: 8px 15px;
    text-align:center;
    color: #A6ADB5;
    margin:0px 8px;
  }

  .d-product-size1{
    width: 39px;
    height: 34px;
    background: #2A3037;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
    border-radius: 5px;
    padding: 8px 15px;
    text-align:center;
    color: #A6ADB5;
    margin:0px 8px 0px 0px;
  }

  .d-product-sizes{
    & > active-size {
      background: #2ECB84 !important;
    }
  }
  
  .d-product-amount-counter{

    width:30px;
    height: 30px;
    border-radius: 50%;
    background: #2A3037;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
    backdrop-filter: blur(30px);
    transform: rotate(-180deg);

  }

  .counter-amount { 
    padding: 0px 15px;
    transform: translateY(10%);
  }

  .action-rounded{
    padding:5px;
    border-radius:50%; 
    margin-left:10px;
    border-color:#353A41 !important;

    & > svg {
      path{
        fill: #A6ADB5;
      }
    }
  }


  .liked-comment{
    & > svg{
      path{
        fill: #2ECB84;
      }
    }
  }


  .product-details-heading{
    font-family: Poppins, sans-serif;
    font-style: italic;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #FFFFFF;

  }

  .product-details-description{
    font-family:Poppins, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    /* or 150% */


    color: #A6ADB5;
  }

  .characteristics-card{
    margin: 5px;
    width: 100%;
    height: 48px;
    background: #2A3037;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
    border-radius: 5px;

  }

  .characteristic-title{
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    text-transform: capitalize;
    color: #A6ADB5;
    transform: translateY(30%);
  }

  .characteristic-value{

    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    text-align: right;
    text-transform: capitalize;
    color: #FFFFFF;
    transform: translateY(30%);
  }

  .reviews-heading{
    font-family: Poppins, sans-serif;
    font-style: italic;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */

    letter-spacing: 0.02em;
    text-transform: uppercase;

    color: #FFFFFF;
  }

  .reviews-header{
    width:100%;
    background: #2A3037;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
    border-radius: 5px;
  }

  .svg-button{
    path{
      fill:#01301B;
    }
  }

  .font-size-12{
    font-size:12px;
  }

  .author-picture{
    width: 40px;
    height: 40px;
    border-radius:50%;
    background: url(.png);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
  } 
  .author-name{
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #2ECB84;
  }
  .comment-time{

    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: #495462;

  }

  .comment-text{
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 25px;
    color: #A6ADB5;
  }


  .service-main-image img{
    width: 100%;
    height: 100%;
    border-radius: 5px;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .service-minor-images img{
    width: 100%;
    height: 100%;
    border-radius: 5px;
    box-sizing: border-box;
  }

  .service-details-heading{
    font-family: Poppins, sans-serif;
    font-style: italic;
    font-weight: bold;
    font-size: 20px;
    line-height: 25px;
    text-transform: uppercase;
    color: #FFFFFF;
    text-shadow: 0px 0px 1px rgba(26, 32, 36, 0.32), 0px 4px 8px rgba(91, 104, 113, 0.24);

  }

  .font-size-14{
    font-size:14px;
  }

  .service-details-description{
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    color: #A6ADB5;
  }

  .opening-hours-container{
    width:100%;
    background: #1A1F24;
    border: 1px solid rgba(255, 255, 255, 0.07);
    box-sizing: border-box;
    border-radius: 5px;
  }
  .opening-hour-days{
    font-family: Poppins, sans-serif;
    font-style: italic;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #2ECB84;
    padding: 10px;
  }

  .opening-timings{
    padding-left:30px;
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 18px;
    color: #A6ADB5;
  }

  .service-detail-offer{
    background: #2A3037;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
    border-radius: 5px;
    padding:8px 14px;
  }
  .offer-title{
    font-family: ${p => p.theme.font.mulish} !important;
    // font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    text-transform: capitalize;
    color: #FFFFFF;
    text-shadow: 0px 0px 1px rgba(26, 32, 36, 0.32), 0px 4px 8px rgba(91, 104, 113, 0.24);
  }

  .cart-item-img{
    width:140px;
    height:140px;
    border-radius: 5px;
  }

  .cart-item-title{
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;
    text-transform: capitalize;
    color: #FFFFFF;
    text-shadow: 0px 0px 1px rgba(26, 32, 36, 0.32), 0px 4px 8px rgba(91, 104, 113, 0.24);
  }

  .cart-item-category{
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    text-transform: capitalize;
    color: #A6ADB5;
    text-shadow: 0px 0px 1px rgba(26, 32, 36, 0.32), 0px 4px 8px rgba(91, 104, 113, 0.24);
  }

  .cart-item-price{
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    text-align: right;
    text-transform: capitalize;
    color: #2ECB84;
  }

  .cart-item-price-title{ 
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;
    text-align: right;
    text-transform: capitalize;
    color: #A6ADB5;
  } 

  .cart-item-price-title2{ 
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;
    text-transform: capitalize;
    color: #A6ADB5;
  } 

  .summary-card{
    // padding:20px;
    width: 100%;
    // height: 361px;
    background: #2A3037;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
    border-radius: 5px;
  }

  .promo-code-select{
    background: #1A1F24;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
    border-radius: 5px;

  }
  
  .tab-item{
    display:none;
  }

  .active-tab-content{
    display:block !important;
  }

  .img_slider{
    position: relative;
    text-align: center;
    // color: white;
  }


  .active-svg {
    cursor:pointer;
    path {
      stroke : #2ECB84;
    }
  }

  .inactive-svg{
    cursor:pointer;
    path{
      stroke:#A6ADB5;
    }
  }

  .category-select{
    color:'#2ECB84 !important';
    -webkit-appearance: none !important;
    -moz-appearance: none !important;
    background: transparent !important;
    background-image: url("../assets/icons/ArrowDownMuutos.svg") !important;
    background-repeat: no-repeat !important;
    background-position-x: 100% !important;
    background-position-y: 5px !important;
    border: none;
    outline: none;
    border-radius: 2px !important;
    margin-right: 0.6rem !important;
    // padding-right: 10.px !important;
    padding-top:0.2rem;
    padding-bottom:1.2rem;
  }

  .category__checkbox{
    padding: 0;
    height: 20px;
    width: 20px;
    margin-bottom: 0;
    display: none;
    cursor: pointer;
  }



  .filter-bar-check-container {
    display: block;
    position: relative;
    padding-left: 30px;
    // margin-bottom: 12px;
    cursor: pointer;
    font-family: inherit;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    // line-height: 18px;
    /* identical to box height */

    text-transform: capitalize;

    color: #A6ADB5;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  
  /* Hide the browser's default checkbox */
  .filter-bar-check-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  
  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: -2px;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #353C44;
    border: 1px solid rgba(255, 255, 255, 0.05);
    // box-sizing: border-box;
    border-radius: 4px;
  }
  
  /* On mouse-over, add a grey background color */
  .filter-bar-check-container:hover input ~ .checkmark {
    background-color: #757372;
  }
  
  /* When the checkbox is checked, add a blue background */
  .filter-bar-check-container input:checked ~ .checkmark {
    background-color: #2196F3;
  }
  
  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  
  /* Show the checkmark when checked */
  .filter-bar-check-container input:checked ~ .checkmark:after {
    display: block;
  }
  
  /* Style the checkmark/indicator */
  .filter-bar-check-container .checkmark:after {
    left: 8px;
    top: 4px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }


  .service-details-sidebar{
    position:relative;
    // height: 712px;
    background: #2A3037;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
    border-radius: 5px;

    & > p {
      font-family: ${p => p.theme.font.montserrat} !important;
      font-style: italic;
      font-weight: bold;
      font-size: 12px;
      line-height: 15px;
      text-transform: uppercase;
      color: #A6ADB5;
    }
    & > .service-details-inside{
      padding: 10px;
      // position: absolute;
      width: 100%;
      height: 140px;
      background: #2ECB84;
      border: 1px solid #2ECB84;
      box-sizing: border-box;
      border-radius: 5px;

      & > p {
        font-family: ${p => p.theme.font.montserrat} !important;
        font-style: italic;
        font-weight: bold;
        font-size: 12px;
        line-height: 15px;
        /* identical to box height */
        line-height:20px;
        text-transform: uppercase;

        color: #01301B;
        & > ul > li{
          font-family: ${p => p.theme.font.mulish} !important;
          font-style: normal;
          font-weight: 600;
          font-size: 12px;
          line-height: 18px;
        }
      }
    }

    & > .service-details-inside2{
      width: 100%;
      height: 140px;
      background: #353B42;
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-sizing: border-box;
      border-radius: 5px;

      & > p {
        font-family: ${p => p.theme.font.montserrat} !important;
        font-style: italic;
        font-weight: bold;
        font-size: 12px;
        line-height: 15px;
        /* identical to box height */

        text-transform: uppercase;

        color: #A6ADB5;

        & > ul > li {
          font-family: ${p => p.theme.font.mulish} !important;
          font-style: normal;
          font-weight: 600;
          font-size: 12px;
          line-height: 18px;
          /* identical to box height */


          color: #A6ADB5;          
        }
      }
    }

    .service-sidebar-specialist-wrapper{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 8px 15px;
      width:100%;
      height: 42px;
      background: #1A1F24;
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-sizing: border-box;
      border-radius: 5px;
    }

  }
  .service-sidebar-slots{
    padding: 8px 10px;
    // width: 74px;
    height: 34px;
    background: #353B42;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
    border-radius: 5px;

    & > div > .offer-title{
      font-family: ${p => p.theme.font.mulish} !important;
      font-style: normal;
      font-weight: 500;
      font-size: 11px !important;
      line-height: 18px;
      /* identical to box height */

      text-transform: capitalize;

      color: #A6ADB5;

    }
  }

  .profile-card {
    width:100%;
    height:auto;
    background: #2A3037;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
    border-radius: 5px;
  }


  .user-name{
    font-family: ${p => p.theme.font.mulish} !important;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;
    text-align: center;
    text-transform: capitalize;
    color: #FFFFFF;
  }

  .user-phone{
    font-family: ${p => p.theme.font.mulish} !important;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    // text-align: center;
    text-transform: capitalize;
    color: #A6ADB5;
    text-shadow: 0px 0px 1px rgba(26, 32, 36, 0.32), 0px 4px 8px rgba(91, 104, 113, 0.24);
  }

  .profile-tab{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 8px 15px;
    width: 100%;
    height: 40px;
    background: #353B42;
    border: 1px solid #2ECB84;
    box-sizing: border-box;
    border-radius: 5px;
    font-family: ${p => p.theme.font.mulish} !important;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    text-transform: capitalize;
    color: #2ECB84;
  }

  .search-profile{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 15px;
    background: #2A3037;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
    border-radius: 10px;
  }

  .order-heading{
    font-family: ${p => p.theme.font.mulish} !important;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 15px;
    text-align:left;
    text-transform: capitalize;
    color: #FFFFFF;
    text-shadow: 0px 0px 1px rgba(26, 32, 36, 0.32), 0px 4px 8px rgba(91, 104, 113, 0.24);
  }

  .order-category{
    font-family: ${p => p.theme.font.mulish} !important;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 5px;
    text-transform: capitalize;
    color: #A6ADB5;
    text-shadow: 0px 0px 1px rgba(26, 32, 36, 0.32), 0px 4px 8px rgba(91, 104, 113, 0.24);
  }

  .order-button{
    background: #2A3037;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    font-family: ${p => p.theme.font.montserrat} !important;
    font-style: italic;
    font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;
    color: #A6ADB5;
  }

  .favourites-indicator{
    padding: 5px 10px;
    position: static;
    height: 25px;
    background: #2A3037;
    border: 1px solid rgba(255, 255, 255, 0.05);
    box-sizing: border-box;
    border-radius: 6px;
  }
  .rating-indicator{
    padding: 5px 10px;
    position: static;
    height: 25px;
    background: #2A3037;
    border: 1px solid rgba(255, 255, 255, 0.05);
    box-sizing: border-box;
    border-radius: 6px;
  }
  .active-indicator{
    border: 1px solid #2ECB84 !important;
  }

  .settings-input-label{
    font-family: ${p => p.theme.font.montserrat} !important;
    font-style: italic;
    font-weight: bold;
    font-size: 12px;
    // line-height: 15px;
    /* identical to box height */
    text-transform: uppercase;
    color: #A6ADB5;
  }

  .settings-input{
    color: #A6ADB5;
    padding: 11px 15px;
    font-size: 13px;
    // line-height: 18px;
    width:100%;
    background: #1A1F24;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
    border-radius: 5px;
  }

  .account-heading{
    font-family: ${p => p.theme.font.montserrat} !important;
    font-style: italic;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #FFFFFF;
  }

  .card-number{
    font-family: ${p => p.theme.font.mulish} !important;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    /* identical to box height */
    color: #FFFFFF;
    text-shadow: 0px 0px 1px rgba(26, 32, 36, 0.32), 0px 4px 8px rgba(91, 104, 113, 0.24);
  }
  .card-expiry{
    font-family: ${p => p.theme.font.mulish} !important;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    /* identical to box height */


    color: #A6ADB5;

    text-shadow: 0px 0px 1px rgba(26, 32, 36, 0.32), 0px 4px 8px rgba(91, 104, 113, 0.24);
  }
  .edit-method{
    font-family: ${p => p.theme.font.mulish} !important;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    /* identical to box height */
    color: #2ECB84;

  }

  .billing-card{
    background: #2A3037;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
    border-radius: 5px;
  }



  /*Radio Button*/
  input[type="radio"] {
    appearance: none;
    width: 20px;
    border: 1px solid #424B56;
    height: 20px;
    border-radius: 50%;
    background-clip: content-box;
    padding: 3px;
  }
  
  input[type="radio"]:checked {
    border: 1px solid #2ECB84;
    background-color: #2ECB84;
  }

  .card-address{
    font-family: ${p => p.theme.font.mulish} !important;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    transform: scale(0.9) translateY(5%);
    line-height: 20px;
    /* identical to box height */


    color: #A6ADB5;

    text-shadow: 0px 0px 1px rgba(26, 32, 36, 0.32), 0px 4px 8px rgba(91, 104, 113, 0.24);
  }

  .thank-you{
    height:700px !important;
    width:100%;
    position:relative;

    & > div {
      position:absolute;
      top:50%;
      left:50%;
      transform:translateX(-50%) translateY(-50%);
    }
  }

  .saqlain__carees{
    color: white;
    font-size: 36px;
    font-style: italic;
}
.saqlain__paragraph{
    color: white;
    font-size: 16px;
}
.saqlain__image{
    width: 100%;
    height: 350px;
}
.saqlain__listing{
     color: white;
    font-size: 36px;
    font-style: italic;
    text-align: center;
}
.saqlain__job{
    background-color: #2A3037;
    border-radius: 8px;
}
.saqlain__job__title{
    font-size: 16px;
    color: white;
}
.saqlain__job__paragraph{
     font-size: 14px;
    color: white;
}
.saqlain__job__location{
  font-size: 16px;
    color: white;  
}
.saqlain__job__adress{
     font-size: 14px;
    color: white;
}
.saqlain__btn{
   background: linear-gradient(328.11deg, #05D0C2 12.59%, #2ECB84 53%, #8CE01D 87.41%);
  
   height: 40px;
   border-radius: 13px;
   font-weight: 600;
}
.saqlain__faqs{
    color: white;
    font-size: 36px;
    font-style: italic; 
}
.saqlain__question{
  font-family: ${p => p.theme.font.mulish} !important;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 24px;
  /* identical to box height, or 133% */
  
  display: flex;
  align-items: center;
  
  color: #2ECB84;
}
.saqlain__question1{
    color:  white;
    font-size: 18px;
}

.question-inactive{
  font-family: ${p=>p.theme.font.mulish} !important;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 133% */

  display: flex;
  align-items: center;

  color: #FFFFFF;
}
.saqlain__answer__paragraph{
  font-family: ${p=>p.theme.font.mulish} !important;
  font-style: normal;
  letter-spacing:1px;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #A6ADB5;  
}
.saqlain__minus{
   color:  #2ECB84;
}
.saqlain__terms{
      color: white;
    font-size: 36px;
    font-style: italic;
}
.saqlain__term__paragraph{
     color: #A6ADB5;
    font-size: 16px;
}
.saqlain__world{
    color: white;
    font-size: 24px;
    font-style: italic; 
}
.saqlain__initiative{
    width: 90%;
}
.saqlain__stat{
    background-color: #2A3037;
   
    color:white;
    font-style: italic;
}
.jane{
    font-size: 14px;
}
.Ellipse{
    width: 90%;
}


.saqlain__ro{
  background-color: 
#2A3037;
border-radius: 10px;
}
.saqlain__wade__wern{
  color: white;
  font-weight: bold;
  font-size: 13px;
}
.saqlain__wade__spe{
font-size: 10px;
color: white;
}
.saqlain__qar{
  color:
#2ECB84;
font-size: 12px;
}
.saqlain__show__btn{
  color: #A6ADB5;
  font-weight: bold;
  background-color: #353B42;
  font-size: 12px;
  font-style: italic;
}
.saqlain__book__btn{
  color: black;
  font-weight: bold;
  background: linear-gradient(328.11deg, #05D0C2 12.59%, #2ECB84 53%, #8CE01D 87.41%);
  font-size: 12px;
  font-style: italic;
}
.saqlain__heart__back{
   background-color: #353B42;
   width:30px;
   height: 30px;
   border-radius: 50%;
   
}
.saqlain__star{
  transform:translateY(-10%);
 
}
.saqlain__ro__2{
  background-color: 
#2A3037;
border-radius: 10px;
}
.heart2{
   transform:translateY(30%);
}
hr.new1{
color: #3F454B;  
}
.new__star{
transform:translateY(-40%);  
}
@media only screen and (max-width: 600px) {
.saqlain__first{
    display: none;
}
}
@media only screen and (min-width: 600px) {
 
.saqlain__2nd{
    display: none;
}
.items__6{
    margin-bottom: 10px;
}
}
.saqlain_card_date{
  font-size: 10px;
  color:#798089 ;
  margin-bottom: 0px;
  
}
.saqlain_card_text{
  color: white;
  font-weight: bold;
  margin-bottom: 0px;
}
.saqlain_lorem_trend{
  font-size: 10px;
  color: #ABAFB4;
}
.saqlain_show_more{
text-decoration: none;
color: #2ECB84;
font-size: 10px;
}
.saqlain_card{
  background-color: #2A3037;
  border-radius: 10px;
 
}
.back2{
  position: relative;
  left: 85%;
 bottom: 200px;
  z-index: 999;
  
}
.saqlain__category{
  width: 50px;
  position: relative;
  top: 50px;
  left: 15px;
  border-radius: 5px;
  color: black;
  font-weight: bold;
  background-color: #2ECB84;
  font-size: 10px;
    z-index: 999;
}

.slick-next{
  right:0px;
  background: #2ECB84;
  border-radius:50%;
  width:30px;
  height:30px;
}
.slick-prev{
  left:4px;
  z-index:300;
  border-radius:50%;
  background: #2ECB84;
  width:30px;
  height:30px;
}

.thumbnail-slider-wrapper .thumbnail-slider-wrap .slick-slider .slick-list .slick-track{
  width:100% !important;
}

.text__saqlain{
  font-family: ${p => p.theme.font.montserrat} !important;
  font-style: italic;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height */

  text-transform: uppercase;

  color: #FFFFFF;
}

.job-container{
  width: 100%;
  background: #2A3037;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-sizing: border-box;
  border-radius: 5px;
}

.community-question-button{
  padding:7px 10px;
  background:transparent;
  color:#2ECB84;
  border: 1px solid #2ECB84;
  box-sizing: border-box;
  border-radius: 5px;
  font-family: ${p=>p.theme.font.montserrat} !important;
  font-style: italic;
  font-weight: bold;
  font-size: 14px;
}

.community-question-date{
  font-family: ${p => p.theme.font.mulish} !important;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: right;

  color: #646C75;
}

.community-question-text{
  font-family: ${p=>p.theme.font.mulish};
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  display: flex;
  align-items: center;

  color: #A6ADB5;
}
.slick-next:before{
  content: url(https://syedali.easystay.com.pk/muutos/ArrowLeft.svg) !important;
  margin-top:-10px !important;
  background:transparent;
  color:#000;
  line-height: 0.6;
  font-family: ${p=>p.theme.font.mulish} !important;
}
.slick-prev:before{
  content: url(https://syedali.easystay.com.pk/muutos/ArrowRight.svg) !important;
  margin-top:-10px !important;
  background:transparent;
  color:#000;
  line-height: 0.6;
  font-family: ${p=>p.theme.font.mulish} !important;
}
 
 .carosuel{
  background:rgb(26, 31, 36);
 }
 .carosuel .coca_img{
   width: 450px;
   height: 300px;
 }
 .carosuel .coca_img2{
   width: 450px;
   height: 300px;
 }
.carosuel .carosuel-left h2{
  font-weight: bold;
  font-size: 50px;
  color: #fff;
}
.carosuel .carosuel-left p{
  font-size: 24px;
  color: #fff;
}
.counters{
  background-color: rgb(26,31,36);
}
.counters h2{
  font-weight: bold;
  font-size: 55px;
  color: #fff;
}
.counters_section h2{
  font-weight: bold;
  font-size: 40px;
  color: #fff;
}
.counters_section p{
  color: #fff;
  text-transform: capitalize;
}
.counters .para h5{
  color: #fff;
}
`



function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <ScreenLoading />
            <GlobalStyles />
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
