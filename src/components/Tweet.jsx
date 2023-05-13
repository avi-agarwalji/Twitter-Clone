import Avatar from './Avatar';
import { Heart, Options, Reply, Retweet, Share } from './Icons';

export default function Tweet({ tweet }) {
  return (
    <div className="w-full flex gap-4 py-2 px-4 border-b-2 border-gray-200">
      <div>
        <Avatar profileIcon="A" color="bg-red-700" />
      </div>
      <div className="flex-1">
        {/* Tweet Info */}
        <div className="flex justify-between items-center">
          <div className="space-x-1">
            <span className="font-semibold">{tweet.name}</span>
            <span className="text-sm text-gray-700">
              {tweet.userName} . {tweet.date}
            </span>
          </div>
          <div className="cursor-pointer">
            <Options />
          </div>
        </div>
        {/* Tweet Content */}
        <div className="mt-2 cursor-pointer">
          {tweet.text ? <p className="text-sm">{tweet.text}</p> : null}
          {tweet.img ? (
            <img
              className="max-w-full mt-4 rounded-xl"
              src={tweet.img}
              alt="postImage"
            />
          ) : null}
        </div>
        {/* Tweet Actions */}
        <div className="mt-2 p-2 flex justify-between">
          <div className="flex items-center gap-1 text-gray-600 cursor-pointer hover:text-blue-400">
            <Heart />
            <span>{tweet.like}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600 cursor-pointer hover:text-blue-400">
            <Retweet />
            <span>{tweet.retweet}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600 cursor-pointer hover:text-blue-400">
            <Reply />
            <span>{tweet.reply}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600 cursor-pointer hover:text-blue-400">
            <Share />
            <span>{tweet.share}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
