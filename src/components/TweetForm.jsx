import Avatar from './Avatar';
import { Emoji, Photos } from './Icons';

export default function TweetForm() {
  return (
    <div className="px-4 flex gap-4 py-2 border-b-2 border-gray-100">
      <div>
        <Avatar profileIcon="A" color="bg-red-700" />
      </div>
      <form className="w-full mt-2">
        <input
          className="w-full outline-none text-lg px-2 border-b-2 border-gray-100"
          type="text"
          placeholder="What is happening?!"
        />
        <div className="py-3 px-2 flex justify-between items-center">
          <div className="flex gap-2">
            <Photos />
            <Emoji />
          </div>
          <button className="bg-blue-500 text-white font-medium px-4 py-2 rounded-full">
            Tweet
          </button>
        </div>
      </form>
    </div>
  );
}
