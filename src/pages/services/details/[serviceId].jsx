import Container from "src/Components/Container";
import React from 'react'
import ThumbnailSlider from "src/Components/ThumbnailSlider";
import ArrowRight from '@assets/icons/Arrow/Arrow 2/Right.svg'
import { CardBadge } from "src/Components/Cards/Product/styles";
import StarLight from "src/Components/StarLight";
import Star from "src/Components/Star";
import PlusIcon from '@assets/icons/Plus/Plus.svg'
import MinusIcon from '@assets/icons/Minus/Minus.svg'
import ShareIcon from '@assets/icons/Share.svg'
import HeartIcon from "@assets/icons/Heart.svg"
import Reviews from '@components/Reviews'
import Footer from "src/Components/Footer";
import ProductCard from "src/Components/Cards/Product";
import ServiceCard from "src/Components/Cards/Service";
import MyGallery from "src/Components/Gallery";
import { ServiceStatusBage } from "src/Components/Styles/ServiceDetailsStyles";
import ArrowDownMuutos from '@assets/icons/ArrowDownMuutos.svg'
import PinIcon from "@assets/icons/Pin.svg"
import PassPort from '@assets/icons/PassPort.svg'
import UserGroup from '@assets/icons/UserGroup.svg'
import CalendarGreen from '@assets/icons/CalendarGreen.svg'
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Host from "src/host";
import axios from "axios";
import Slider from 'react-slick'
import MapImage from '@assets/images/map.png'
const ServiceDetails = ({service, comments, fserv, fproduct}) => {

    var settings = {
        // dots: true,
        
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        centerPadding:20,
        slidesToScroll: 1,
        centerMode:true,
        
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 922,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 520,
              settings: {
                arrows:false,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode:true
              }
            }
          ]
      };

    // let map;

    // function initMap() {
    // map = new google.maps.Map(document.getElementById("map"), {
    //     center: { lat: -34.397, lng: 150.644 },
    //     zoom: 8,
    // });
    // }
    // initMap();
    let serOff = service.servicesOffered;
    let ServicesOffered = () => {
        console.log(serOff)
        return (
            <>  
            {serOff.map((item)=>{
                // import Icon from ;
                // let Icon = import(`@assets/icons/${item.icon}`);
                return (
                    <div className="d-inline-block service-detail-offer m-1" key={item.id}>
                        <div className="d-flex align-items-center">
                            <div className="icon-wrapper">
                                {/* <Icon /> */}
                                <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQYtZDuQsPfd5egvgOJujXHSbB7aUNLfXteA&usqp=CAU`} alt="" width="22px" height="22px" />
                            </div>&nbsp;&nbsp;&nbsp;
                            <div className="fs-5 text-grey offer-title">{item.value}</div>
                        </div>
                    </div>
                )
            })}
            </>
        )
    }
    
    let facOff = service.facilities;
    let FacilitiesOffered = () => {
        console.log(facOff)
        return (
            <>  
            {facOff.map((item)=>{
                // import Icon from ;
                // let Icon = import(`@assets/icons/${item.icon}`);
                return (
                    <div className="d-inline-block service-detail-offer m-1" key={item.id}>
                        <div className="d-flex align-items-center">
                            <div className="icon-wrapper">
                                {/* <Icon /> */}
                                <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQYtZDuQsPfd5egvgOJujXHSbB7aUNLfXteA&usqp=CAU`} alt="" width="22px" height="22px" />
                            </div>&nbsp;&nbsp;&nbsp;
                            <div className="fs-5 text-grey offer-title">{item.value}</div>
                        </div>
                    </div>
                )
            })}
            </>
        )
    }
    return (

        <>
            <br /><br /><br /><br />
            <Container>
                <div className="d-flex breadcrump">
                    <span>Home</span> <ArrowRight /> <span>Services</span> <ArrowRight />  <span className="active-bread">{service.name}</span>
                </div>
                <div className="row">
                    <div className="col-md-6 p-0">
                        <div className="service-main-image">
                            <img src={service.images?service.images[0]:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7Z6nS0paslUx7X-rSOyNqmhge_ugyoMcFA&usqp=CAU'}  style={{width:'100%', height:'415px'}}  alt="" />                            
                        </div>
                    </div>
                    <div className="col-md-6 p-0">
                        <div className="row m-0">
                            <div className="col-md-6 pt-1">
                                <div className="service-minor-images">
                                    <img src={service.images?service.images[1]:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7Z6nS0paslUx7X-rSOyNqmhge_ugyoMcFA&usqp=CAU'}  style={{width:'100%', height:'200px'}} alt="" />                            
                                </div>
                            </div>
                            <div className="col-md-6 pt-1">
                                <div className="service-minor-images">
                                    <img src={service.images?service.images[2]:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7Z6nS0paslUx7X-rSOyNqmhge_ugyoMcFA&usqp=CAU'}  style={{width:'100%', height:'200px'}} alt="" />                            
                                </div>
                            </div>
                            <div className="col-md-6 pt-2">
                                <div className="service-minor-images">
                                    <img src={service.images?service.images[3]:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7Z6nS0paslUx7X-rSOyNqmhge_ugyoMcFA&usqp=CAU'}  style={{width:'100%', height:'200px'}} alt="" />                            
                                </div>
                            </div>
                            <div className="col-md-6 pt-2">
                                <div className="service-minor-images">
                                    <img src={service.images?service.images[4]:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7Z6nS0paslUx7X-rSOyNqmhge_ugyoMcFA&usqp=CAU'}  style={{width:'100%', height:'200px'}} alt="" />                            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-md-8">
                                <span className="d-block service-details-heading">
                                    {service.name?service.name:'Anytime Gym Qattar'}
                                </span>
                                <div className="d-inline-block pt-3">
                                    <ServiceStatusBage>
                                        <ul className="d-inline-block text-success" style={{paddingLeft:'15px'}}>
                                            <li style={{padding:"0px"}}>
                                                <span className="text-grey text-uppercase text-status">{service.status?service.status:'Not Available'}</span>
                                            </li>
                                        </ul>
                                    </ServiceStatusBage>
                                </div>&nbsp;&nbsp;&nbsp;&nbsp;
                                <div className="d-inline-block pt-3">
                                    <span className="icon-wrapper"><PinIcon /> </span> <span className="text-grey font-size-14" >{service.address?service.address:'2972 Westheimer Rd. Santa Ana, Illinois 85486'} </span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div style={{float:"right"}}>
                                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" className="author-picture" alt="" /><span className="text-grey"> Jane Cooper</span>
                                </div>
                            </div>
                        </div>
                        <hr className="bg-secondary"/>
                        <div className="row">
                            <div className="col-md-6">
                                <span className="service-details-heading" style={{fontWeight:'500', fontSize:'18px'}}>
                                    About the Spot
                                </span>
                                <p className="text-grey service-details-description pt-3">
                                    {service.aboutSpot?service.aboutSpot:'Not Available'}
                                </p>
                            </div>
                            <div className="col-md-6">
                                <span className="service-details-heading" style={{fontWeight:'500', fontSize:'18px'}}>
                                    Opening Hours
                                </span>
                                <div className="opening-hours-container">
                                    <div className="d-flex justify-content-between">
                                        <div className="row text-center p-2">
                                            {service.workingHours?service.workingHours.map((time, index)=>(
                                                <div className="col-md-6 opening-hour-days" key={index}>{Object.keys(time)} <span className="opening-timings"> {time?time[Object.keys(time)]:'09:00 -20:00'}</span></div>
                                            )):'Not Available'}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="bg-secondary" />
                        <div className="services-offered pt-3 pb-3">
                            <span className="service-details-heading" style={{fontWeight:'500', fontSize:'18px'}}>
                                Services Offered
                            </span>
                        </div>
                        <div className="service-detail-offers">
                            <ServicesOffered />
                        </div>
                        <hr className="bg-secondary" />
                        <div className="services-offered pt-3 pb-3">
                            <span className="service-details-heading" style={{fontWeight:'500', fontSize:'18px'}}>
                                Amenities
                            </span>
                        </div>
                        <div className="service-detail-offers">
                            <FacilitiesOffered />
                        </div>
                        <hr className="bg-secondary" />
                        <div className="services-offered pt-3 pb-3">
                            <span className="service-details-heading" style={{fontWeight:'500', fontSize:'18px'}}>
                                Permits & Offers
                            </span>
                        </div>
                        <div className="service-detail-offers">
                            <div className="row w-100">
                                <Slider {...settings}>
                                    {fproduct.map(data => (
                                        <div className="m-2 col-md-4" key={data.id}>
                                            <ProductCard data={data}/>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                        <hr className="bg-secondary" />
                        <div className="services-offered pt-3 pb-3">
                            <span className="service-details-heading" style={{fontWeight:'500', fontSize:'18px'}}>
                                Location
                            </span>
                            <br />
                            <div className="d-inline-block pt-3">
                                <span className="icon-wrapper"><PinIcon /> </span> <span className="text-grey font-size-14" >{service.address?service.address:'2972 Westheimer Rd. Santa Ana, Illinois 85486'} </span>
                            </div>
                        </div>
                        <div className="service-detail-offers">
                            <div className="row w-100">
                                <div className="col-md-12" id="map">
                                    <img src={MapImage.src} alt="" style={{width:'100%', height:'100%', borderRadius:5}}/>
                                </div>
                            </div>
                        </div>
                        <hr className="bg-secondary"/>
                        <div className="reviews pt-4">
                            <Reviews comments={comments}/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        {/* <div className="row">
                            {fserv.map(data => (
                                <div className="m-2 col-md-12">
                                    <ServiceCard data={data}/>
                                </div>
                            ))}
                        </div> */}
                        <div className="row ">
                            <div className="col-md-12 service-details-sidebar">
                                <p className="p-2 mt-3">Select Plan</p>
                                <div className="pl-2 pr-2 service-details-inside">
                                    <p className=" text-uppercase">
                                        <PassPort /> &nbsp;&nbsp;Day Pass
                                        <hr className="bg-secondary"/>
                                        <ul className="p-0 m-3">
                                            <li className="p-0">One Visit To Your Chosen Gym</li>
                                            <li className="p-0">Valid For 30 Days</li>
                                            <li className="p-0">Swimming Pool & Beach</li>
                                        </ul>
                                    </p>

                                </div>
                                <div className="pl-2 mt-3 pr-2 service-details-inside2">
                                    <p className="p-2 text-uppercase">
                                        <UserGroup /> &nbsp;&nbsp;Day Pass
                                        <hr className="bg-secondary"/>
                                        <ul className="p-0 m-3">
                                            <li className="p-0">One Visit To Your Chosen Gym</li>
                                            <li className="p-0">Valid For 30 Days</li>
                                            <li className="p-0">Swimming Pool & Beach</li>
                                        </ul>
                                    </p>

                                </div>

                                <p className="mt-3">Select Specialist</p>
                                <div className="service-sidebar-specialist-wrapper">
                                    <div className="d-flex">
                                        <img src="data:image/png;base64,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" alt="" className="rounded-circle" style={{width:'25px', height:'25px', borderRadius:'50%'}}/>
                                        &nbsp;&nbsp;<span style={{color:"#A6ADB5"}}>Janne Cooper</span>
                                    </div>
                                    <div><ArrowDownMuutos /></div>
                                </div>
                                <p className="mt-3">Select Date</p>
                                <div className="service-sidebar-specialist-wrapper">
                                    <div className="d-flex">
                                        <span style={{color:"#A6ADB5"}}>15.01.2002</span>
                                    </div>
                                    <div><CalendarGreen /></div>
                                </div>

                                <p className="mt-3">Select Date</p>
                                <div className="flex">
                                    <div className="d-inline-block service-sidebar-slots m-1">
                                        <div className="d-flex align-items-center">
                                            <div className="fs-5 text-grey offer-title">1:15 PM</div>
                                        </div>
                                    </div>
                                    <div className="d-inline-block service-sidebar-slots m-1">
                                        <div className="d-flex align-items-center">
                                            <div className="fs-5 text-grey offer-title">1:15 PM</div>
                                        </div>
                                    </div>
                                    <div className="d-inline-block service-sidebar-slots m-1">
                                        <div className="d-flex align-items-center">
                                            <div className="fs-5 text-grey offer-title">1:15 PM</div>
                                        </div>
                                    </div>
                                    <div className="d-inline-block service-sidebar-slots m-1">
                                        <div className="d-flex align-items-center">
                                            <div className="fs-5 text-grey offer-title">1:15 PM</div>
                                        </div>
                                    </div>
                                    <div className="d-inline-block service-sidebar-slots m-1">
                                        <div className="d-flex align-items-center">
                                            <div className="fs-5 text-grey offer-title">1:15 PM</div>
                                        </div>
                                    </div>  
                                    <div className="d-inline-block service-sidebar-slots m-1 bg-success-2">
                                        <div className="d-flex align-items-center bg-success-2">
                                            <div className="fs-5 text-grey offer-title bg-success-2">1:15 PM</div>
                                        </div>
                                    </div>
                                </div>

                                <button className="mt-2 mb-2 w-100" style={button} >Book </button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </Container>
            <Footer />
        </>

    );
}

export default ServiceDetails;


const button = {
    padding: '8px 17px',
    width:'35%',
    background: 'linear-gradient(328.11deg,#05d0c2 12.59%,#2ecb84 53%, #8ce01d 87.41%)',
    outline: '1px solid rgba(255, 255, 255, 0.3)',
    boxSizing: 'border-box',
    borderRadius: '7px',
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '20px',
    letterSpacing: '0.02em',
    textTransform: 'uppercase',
    color: '#01301b',
    // margin : '4px'
}

const button2 = {
    marginLeft:10,
    padding: '8px 17px',
    width:'35%',
    background: '#2A3037',
    outline: '1px solid rgba(255, 255, 255, 0.1)',
    boxSizing: 'border-box',
    borderRadius: '7px',
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '20px',
    letterSpacing: '0.02em',
    textTransform: 'uppercase',
    color: '#A6ADB5',
    // margin : '4px'
}


export async function getServerSideProps({request, params,}) {
    const {serviceId} = params;
    // console.log(serviceId);
    const serv = await axios.post(`${Host}api/serviceById`,{id: serviceId})
    const comment = await axios.post(`${Host}api/getItemCommentsById`, {commentFor:'service', itemId:serviceId});
    const fservices = await axios.get(`${Host}api/getFeaturedServices`);
    const fprod = await axios.get(`${Host}api/getFeaturedProducts`);
    // console.log(comment);
    return {
        props: {
            service: serv.data.data,
            comments:comment.data.data,
            fserv:fservices.data.data,
            fproduct:fprod.data.data
        }
    }
}