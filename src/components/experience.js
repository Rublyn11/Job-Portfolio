import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Experience = () => {
  const experienceData = [
    {
      title: 'Web Developer Intern',
      company: 'Innovation Growth Hub',
      duration: 'June 2023 to December 2023',
      description: 'Innovative tech company located at Abia State, known for its contributions in development of technology in Abia state',
      responsibilities: [
        'Developed responsive and user-friendly web applications using HTML, CSS, and JavaScript.',
        'Collaborated with backend developers to integrate front-end code with server-side logic.',
        'Utilized React.js to create interactive user interfaces and improve overall user experience.',
        'Contributed to project planning, code reviews, and team meetings to ensure project success.'
      ],
      achievements: [
        'Implemented performance optimizations that reduced page load times by 30%.',
        'Led the development of a new feature that increased user engagement by 40%.'
      ]
    },
    {
        title: 'Freelance Frontend Developer',
        company: 'Remote',
        duration: 'January 2020 to Present',
        description: 'Personal growth and development of cross platform web solutions for clients. Proving satisfactory.',
        responsibilities: [
          'Developed responsive and user-friendly web applications using HTML, CSS, and JavaScript, React, Nextjs.',
          'Collaborated with backend developers to integrate front-end code with server-side logic.',
          'Utilized React.js to create interactive user interfaces and improve overall user experience.',
          'Contributed to project planning, code reviews, and team meetings to ensure project success.'
        ],
        achievements: [
          'Implemented performance optimizations that reduced page load times by 30%.',
          'Led the development of a new feature that increased user engagement by 40%.'
        ]
      },
    // Add more experience items as needed
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
        <h2 className="text-3xl font-semibold text-gray-800 mb-6"> My Work Experiences</h2>
        <Slider {...settings}>
          {experienceData.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-2">{item.company} - {item.duration}</p>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                {item.responsibilities.map((responsibility, i) => (
                  <li key={i}>{responsibility}</li>
                ))}
              </ul>
              <p className="text-gray-600">Key Achievements:</p>
              <ul className="list-disc list-inside text-gray-700">
                {item.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Experience;

