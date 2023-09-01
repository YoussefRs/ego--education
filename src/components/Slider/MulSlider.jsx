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
      {"image":"https://www.ego-education.com/wp-content/uploads/elementor/thumbs/educazione_formazione-pubkc8zxjhejkpqu68tvn6qtvqsee4fek8czxecerc.jpg", 
      "title":"Educational Sciences", 
      "subtitle":"Tution fee: € 3000",
      "duration":"Duration: 3 Years Years"},

    {"image":"https://www.ego-education.com/wp-content/uploads/elementor/thumbs/economia-aziendale-pubkjptru3mjt6wckh16gawnrxzdjk2mx6xv6j9tbs.jpg", 
      "title":"Business Administration", 
      "subtitle":"Tution fee: € 3.000",
      "duration":"Duration: 3 Years Years"},

    {"image":"https://www.ego-education.com/wp-content/uploads/elementor/thumbs/sport-sciences-pubk1zlcxlcutynf3b5hx9yofbd5d2ow5fz6bnk4oo.jpg", 
      "title":"Sport Sciences", 
      "subtitle":"Tution fee: € 3.000",
      "duration":"Duration: 3 Years Years"},

    {"image":"https://www.ego-education.com/wp-content/uploads/elementor/thumbs/ingegneria-civile-pubkhzsfb19mixegmq7svqk8kih5fj8convti9tsqg.jpg", 
      "title":"Civil Engineering", 
      "subtitle":"Tution fee: € 3.000",
      "duration":"Duration: 3 Years Years"},
  ];

  return (
    <>
      <Slider {...settings} className=' md:p-0 lg:p-0' >
                        {cards.map((each, i) =>(
                            <div key={i} className=' newsCard news-Slide-up  '>
                                <img className='object-cover w-inherit cursor-pointer card rounded-2xl border-none' src={each.image}/>
                                <div class='newsCaption '>
                                  <h2 class='newsCaption-title'>{each.title}</h2>
                                  <p class='newsCaption-content'>
                                  {each.subtitle}
                                  </p>
                                  {each.duration}
                                  <p><a class='newsCaption-link' href='#'>READ MORE</a></p>    
                                </div>
                            </div>
                        ))}
                    </Slider>
    </>
  )
}

export default MulSlider
