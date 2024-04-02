import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
  const testimonials = [
    {
      quote: 'Hardworking consistent, and enthusiatic intern. It was a good experience having him join my IT team',
      name: 'Mr. Daniel Chigozie',
      position: 'CEO. Innovation Growth Hub',
      image: '/Rectangle 26 (1).png' // Image path for the customer
    },
    {
        quote: 'Delivers jobs faster and better tha expected, i am amazed. He is trust worthy',
        name: 'Mr. Reuben Chimezie',
        position: 'CEO, Wisydon Nigeria Limited',
        image: '/Rectangle 26 (1).png' // Image path for the customer
      },
      {
        quote: "He handled my business website 'www.Ruheglobalresources.com' despite how complex the job was. He can work under pressure and cooperate well with people in his team",
        name: 'Mr. Joseph Okoronkwo',
        position: 'CEO, Ruhe Globals Resources',
        image: '/Rectangle 26 (1).png' // Image path for the customer
      },
      {
        quote: 'Apart from his IT knowledge this young man is a very honest employee, I have worked with him for months now, and i can say he is worth your job.',
        name: 'Mr. Joshua Ifeanyichukwu',
        position: 'CEO, HFX Nigeria LImited',
        image: '/Rectangle 26 (1).png' // Image path for the customer
      },
    // Add more testimonials as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Testimonials</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-md p-6">
              <div className="flex items-center mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="text-lg text-gray-800 mb-1">{testimonial.quote}</p>
                  <p className="text-gray-600">{testimonial.name}, <span className="font-semibold">{testimonial.position}</span></p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
