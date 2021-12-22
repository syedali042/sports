import React, { useState, useEffect } from 'react';

import Slider from "react-slick";

function ThumbnailSlider({images}) {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {

    setNav1(slider1);
    setNav2(slider2);

  });


  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    centerMode:false,
  };

  const settingsThumbs = {
    infinite:true,
    arrows:false,
    vertical:true,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    swipeToSlide: true,
    focusOnSelect: true,
    verticalSwiping: true
  };

  return (

    <div className="App">
        <div className="row">
            <div className="col-md-2 thumbnail-slider-wrapper">
                <div className="thumbnail-slider-wrap">
                    <Slider
                        {...settingsThumbs}
                        asNavFor={nav1}
                        ref={slider => (setSlider2(slider))}>

                        {images.map((slide, index) =>

                        <div className="slick-slide" key={index}>
                            <img className="slick-slide-image" src={slide} width="90" height="90"/>
                        </div>

                        )}

                    </Slider>
                </div>
            </div> 
            <div className="col-md-10">
                <div className="slider-wrapper">
                    <Slider
                    {...settingsMain}
                    asNavFor={nav2}
                    ref={slider => (setSlider1(slider))}
                    >
                    {images.map((slide, index) =>

                        <div className="slick-slide" key={index}>
                        {/* <h2 className="slick-slide-title">{slide.title}</h2> */}
                        <img className="slick-slide-image abc" src={slide} height="440px" />
                        {/* <label className="slick-slide-label">{slide.label}</label> */}
                        </div>

                    )}
                    </Slider>
                </div>
            </div>  
        </div>
    </div>
  );
}

export default ThumbnailSlider;