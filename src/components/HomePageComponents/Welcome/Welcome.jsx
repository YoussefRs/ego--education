import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import prog from '../../../assets/logo/Progetto-senza-titolo.png';
import reg from '../../../assets/reglage.png';
import learn from '../../../assets/svg.png';

function Welcome() {
  const welcome = useRef(null);

  useEffect(() => {
    const el = welcome.current;

    gsap.fromTo(el, { y: 200, opacity: 1 }, { opacity: 1, y: 0, duration: 3, scrollTrigger: { trigger: el, scrub: true } });
  }, []);

  return (
    <section className="relative">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-10 sm:px-6">
        <br />
        <div className="border-t border-gray-800">
          <br />
          <br />
          {/* Section header */}
          <div className="max-w-3xl mx-auto pb-12 md:pb-16">
            <h1 className="text-sm md:text-xl lg:text-2xl mb-4 text-center">WELCOME TO EGO</h1>
             <p className="text-sm md:text-sm lg:text-lg text-gray-400">
                Ieli is in the process of being accredited by Malta Further and Higher Education Authority (MFHEA) to obtain a High Education Institution license for its brand eGO.<br/>
                eGO represents a new international project of integrated, innovative, highly specialized training. A new Higher Education Institution aimed not only for young people, but also for  whomever needs professional requalification or updating status.
            </p>
          </div>
        </div>
      </div>
      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-10 sm:px-6">
        <div className="border-t border-gray-800">
          <br />
          <br />
          {/* Items */}
          <div className="grid gap-5 item-wrapper">
            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="text-xl text-white mb-2">High Quality Didactic Materials</div>
                  <p className="text-sm md:text-sm lg:text-lg text-gray-400">
                    The courses are delivered on the e-learning platform, property of Pegaso International, available from any device, 24/7 and 100% student-friendly.
                  </p>
                </div>
              </div>
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={prog} width="250" height="405" />
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
                <div>
                  <div className="font-architects-daughter text-xl text-white mb-2">Learning and Support</div>
                  <p className="text-xl text-gray-500">
                    Our online courses allow you to work in a unique virtual learning environment. The online platform allows you to virtually attend the lessons and to actively participate in forums and live chats.
                  </p>
                </div>
              </div>
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={learn} width="150" height="405" />
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="text-xl text-white mb-2">Flexibility</div>
                  <p className="text-xl text-gray-500">
                    You can study at your own pace, at work, at home, or on the road. <br /> Save time and money; you do not need to move to attend courses.
                  </p>
                </div>
              </div>
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={reg} width="150" height="405" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#004C4C] to-transparent z-[-1] "></div>
      <style>
        {`
          @media (max-width: 768px) {
            .item-wrapper {
              display: flex;
              flex-direction: column-reverse; /* Reverses the order for mobile */
            }

            .max-w-xl {
              margin: 0 auto; /* Center content horizontally on mobile */
            }
          }
        `}
      </style>
    </section>
  );
}

export default Welcome;
