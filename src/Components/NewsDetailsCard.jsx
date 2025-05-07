import React from 'react';
// import { Link } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
  const {
    id,
    title,
    image_url,
    details,
    category_id,
  } = news;

  

  return (
    <div className="bg-white shadow-md rounded-lg p-4 space-y-4 border border-gray-200">
      {/* Image */}
      <img
        src={image_url}
        alt={title}
        className="w-full h-64 object-cover rounded-md"
      />

      {/* Title */}
      <Link
        to={`/news/${id}`}
        className="text-xl font-semibold text-blue-800 hover:underline"
      >
        {title}
      </Link>

      {/* Meta & Date */}
      

      {/* Details */}
      <p className="text-sm text-gray-700 py-4">{details}</p>

      {/* Footer */}
      <div className="pt-3 border-t">
        <Link
          to={`/category/${category_id}`}
          className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white text-sm font-medium px-4 py-2 rounded-md transition"
        >
          <HiArrowLeft className="text-lg" />
          All news in this category
        </Link>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
