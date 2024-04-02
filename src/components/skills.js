import React from 'react';

const Skills = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6"> My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {/* Skill Badges */}
          <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md">
            <img src="/html5-logo-24.png" alt="HTML5" className="w-12 h-12 mr-4" />
            <span className="text-lg font-semibold text-gray-900">HTML5</span>
          </div>
          <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md">
            <img src="/css3-logo-24.png" alt="CSS3" className="w-12 h-12 mr-4" />
            <span className="text-lg font-semibold text-gray-900">CSS3</span>
          </div>
          <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md">
            <img src="/javascript-logo-24.png" alt="JavaScript" className="w-12 h-12 mr-4" />
            <span className="text-lg font-semibold text-gray-900">JavaScript</span>
          </div>
          <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md">
            <img src="/react-logo-24.png" alt="React.js" className="w-12 h-12 mr-4" />
            <span className="text-lg font-semibold text-gray-900">React.js</span>
          </div>
          <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md">
            <img src="/nextjs.png" alt="HTML5" className="w-12 h-12 mr-4" />
            <span className="text-lg font-semibold text-gray-900">Next.js</span>
          </div>
          <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md">
            <img src="/figma.png" alt="CSS3" className="w-12 h-12 mr-4" />
            <span className="text-lg font-semibold text-gray-900">Figma</span>
          </div>
          <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md">
            <img src="/git-logo-24.png" alt="JavaScript" className="w-12 h-12 mr-4" />
            <span className="text-lg font-semibold text-gray-900">Git</span>
          </div>
          <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md">
            <img src="/nodejs-logo-24.png" alt="React.js" className="w-12 h-12 mr-4" />
            <span className="text-lg font-semibold text-gray-900">Node.js</span>
          </div>
          <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md">
            <img src="/mongodb-logo-24.png" alt="React.js" className="w-12 h-12 mr-4" />
            <span className="text-lg font-semibold text-gray-900">MongoDb</span>
          </div>
          <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md">
            <img src="/tailwind-css-logo-24.png" alt="React.js" className="w-12 h-12 mr-4" />
            <span className="text-lg font-semibold text-gray-900">Tailwind Css</span>
          </div>
          <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md">
            <img src="/typescript-logo-24.png" alt="React.js" className="w-12 h-12 mr-4" />
            <span className="text-lg font-semibold text-gray-900">Typescript</span>
          </div>
          {/* Add more skills as needed */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
