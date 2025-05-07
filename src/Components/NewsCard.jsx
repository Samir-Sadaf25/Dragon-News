import React from 'react';
import { HiOutlineBookmark, HiOutlineShare } from 'react-icons/hi';
import { AiFillStar } from 'react-icons/ai';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router';

const NewsCard = ({ news }) => {
    const {
        title,
        author,
        thumbnail_url,
        details,
        total_view,
        rating,
        id
    } = news;

    const formattedDate = new Date(news.author.published_date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const shortDetails = details.length > 200 ? details.slice(0, 200) + '...' : details;

    return (
        <div className="bg-white shadow-md rounded-lg p-4 space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between bg-base-200 p-4">
                <div className="flex items-center gap-3">
                    <img src={author.img} alt={author.name} className="w-10 h-10 rounded-full" />
                    <div>
                        <h3 className="font-semibold">{author.name}</h3>
                        <p className="text-sm text-gray-500">{formattedDate}</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 text-xl text-gray-500">
                    <HiOutlineBookmark className="cursor-pointer" />
                    <HiOutlineShare className="cursor-pointer" />
                </div>
            </div>

            {/* Title */}
            <h2 className="text-lg font-bold text-gray-800 leading-snug">{title}</h2>

            {/* Image */}
            <img src={thumbnail_url} alt="news" className="w-full h-56 object-cover rounded-lg" />

            {/* Details */}
            <p className="text-gray-600 text-sm">
                {shortDetails}
                {details.length > 200 && (
                    <Link to={`/newsDetails/${id}`}><span className="text-orange-600 font-semibold ml-1 cursor-pointer">
                        Read More
                    </span></Link>
                )}
            </p>

            {/* Footer */}
            <div className="flex justify-between items-center border-t pt-3 text-sm text-gray-600">
                <div className="flex items-center gap-1 text-orange-500">
                    {Array.from({ length: rating.number }).map((_, i) => (
                        <AiFillStar key={i} />
                    ))}
                    <span className="text-gray-800 ml-2 font-semibold">{rating.number.toFixed(1)}</span>
                </div>
                <div className="flex items-center gap-1">
                    <FaEye />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
