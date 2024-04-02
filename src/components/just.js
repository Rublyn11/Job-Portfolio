import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import ReactImage from './react.png'; // Import images for each skill
// import NextImage from './next.png';
// import FigmaImage from './figma.png';
// import JavascriptImage from './javascript.png';

const Skills = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-center mb-8"> My Skills</h2>
      <Slider {...settings}>
        <div className="text-center">
          <img src="react.png" alt="React.js" className="w-32 mx-auto" />
          <p className="text-lg font-semibold mt-4">React.js</p>
        </div>
        <div className="text-center">
          <img src="nextjs.png" alt="Next.js" className="w-32 mx-auto" />
          <p className="text-lg font-semibold mt-4">Next.js</p>
        </div>
        <div className="text-center">
          <img src="figma.png" alt="Figma" className="w-32 mx-auto" />
          <p className="text-lg font-semibold mt-4">Figma</p>
        </div>
        <div className="text-center">
          <img src="javascript.png" alt="Javascript" className="w-32 mx-auto" />
          <p className="text-lg font-semibold mt-4">JavaScript</p>
        </div>
      </Slider>
    </div>
  );
};

export default Skills;
