import React from "react";

interface CardProps {
  item: any;
}

const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div className="w-[300px] cursor-pointer">
      <img
        className="w-[300px] h-[200px] object-cover rounded-xl"
        src={item?.snippet.thumbnails.default.url}
        alt=""
      />
      <div className="space-y-0.5 mt-2">
        <div className="font-bold line-clamp-2">{item?.snippet.title}</div>
        <div className="text-sm line-clamp-1">{item?.snippet.channelTitle}</div>
        <div className="text-xs tracking-wider text-gray-700 line-clamp-1">
          <span>100K Views</span>
          <span>2 years ago</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
