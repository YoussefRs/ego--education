import React from 'react'
import './MulSlider.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MulSlider() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: (
      <div>
        <div className="next-slick-arrow text-white"> ⫸ </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className="prev-slick-arrow"> ⫷ </div>
      </div>
    ),
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
  };  
    const cards = [
      {"image":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg", 
      "title":"Burgundy Flemming", 
      "subtitle":"Advertising"},
    {"image":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample119.jpg", 
      "title":"Nigel Nigel", 
      "subtitle":"Sound & Vision"},
    {"image":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample120.jpg", 
      "title":"Caspian Bellevedere", 
      "subtitle":"Accounting"},
    {"image":"https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample120.jpg", 
      "title":"Caspian Bellevedere", 
      "subtitle":"Accounting"},
  ];

  return (
    <>
      <Slider {...settings} >
                        {cards.map((each, i) =>(
                            <div key={i} className=' w-full newsCard news-Slide-up '>
                                <img className='object-cover w-inherit cursor-pointer card rounded-2xl border-none ' src={each.image}/>
                                <div class='newsCaption'>
                                  <h2 class='newsCaption-title'>{each.title}</h2>
                                  <p class='newsCaption-content'>
                                    Description
                                  </p>
                                  <p><a class='newsCaption-link' href='#'>READ MORE</a></p>    
                                </div>
                            </div>
                        ))}
                    </Slider>
    </>
  )
}

export default MulSlider
