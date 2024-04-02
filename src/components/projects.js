import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      category: 'Web Development',
      title: 'KratoX',
      description: 'Clothing brand website landing page, for an online client. For sampling asthetic beautiful clothing designs, with a call to action to clients socials',
      image: '/KratoX.png',
      demoLink: 'https://rublyn11.github.io/KratoX/',
      githubLink: 'https://github.com/Rublyn11/KratoX'
    },
    {
        category: 'Web Development',
        title: 'Go-Green',
        description: 'Community donation development website, Make our planet clean help the needy campaign',
        image: '/Go-Green.png',
        demoLink: 'https://rublyn11.github.io/Go-Green/',
        githubLink: 'https://github.com/Rublyn11/Go-Green'
    },
    {
        category: 'Web Development',
        title: 'YouTube Data v3 Api',
        description: 'This application allows users to search for YouTube videos, view video details, create playlists, and manage them collaboratively. The project is built using React and Material-UI components, with data fetched from the YouTube Data API v3.',
        image: '/ydata-v3.png',
        demoLink: 'https://rublyn11.github.io/youtube-data-v3-api/',
        githubLink: 'https://github.com/Rublyn11/youtube-data-v3-api'
    },
    {
        category: 'Web Development',
        title: 'Nextjs Portfolio Website',
        description: 'A portfolio website for a colleage, used as a project to test my skills in using the react framework Nextjs',
        image: '/Next.png',
        demoLink: 'https://example.com/demo',
        githubLink: 'https://github.com/example/ecommerce'
    },
    {
        category: 'Web Development',
        title: 'School Education Website',
        description: 'Tech School Education Website, for showcasing course and interacting virtually with students',
        image: '/Education.png',
        demoLink: 'https://example.com/demo',
        githubLink: 'https://github.com/Rublyn11/Education'
    },
    {
        category: 'Web Development',
        title: 'Ifind Technologies',
        description: 'This multi page website was developed by me for an embedded systems tech start up company, during there onboarding session and pitch deck competition',
        image: '/Ifind.png',
        demoLink: 'https://example.com/demo',
        githubLink: 'https://github.com/example/ecommerce'
    },
    // Add more projects as needed
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Portfolio</h2>
        {/* Project cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Demo</a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='p-8'>
        <a href='/'>View more</a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
