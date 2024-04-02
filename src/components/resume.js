import React from 'react';
import Pdf from '../utilities/My Web Developer Resume CV.pdf';

const Resume = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Resume/CV</h2>
        <div className="flex items-center justify-center">
          {/* Link to PDF version */}
          <a
            href={Pdf}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md mr-4"
            download
          >
            Download PDF
          </a>
          {/* Link to Google Docs version */}
          <a
            href="https://docs.google.com/document/d/1-OpfgSkOOxDxozyO-UO7lERkN1kvIir4b-NPIRa8C5U/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md shadow-md"
          >
            View Online
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
