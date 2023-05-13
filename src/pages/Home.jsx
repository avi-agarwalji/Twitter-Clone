import Tweet from '../components/Tweet';
import TweetForm from '../components/TweetForm';

export default function Home() {
  const tweet = {
    name: 'Aadhar Agarwal',
    userName: 'Aadhar@22',
    date: '12h',
    text: 'A beautiful scenery',
    img: 'https://images.unsplash.com/photo-1538991383142-36c4edeaffde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    like: 10,
    retweet: 4,
    reply: 2,
    share: 1,
  };

  const tweet_2 = {
    name: 'Agarwal',
    userName: 'Agarwal@22',
    date: '1d',
    text: 'Some random tweet',
    like: 2,
    retweet: 1,
    reply: 0,
    share: 0,
  };
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 bg-white opacity-95 w-full">
        <div className="py-3 pl-4">
          <h2 className="text-lg font-semibold">Home</h2>
        </div>
        <div className="flex justify-around border-b-2 border-gray-100">
          <h4 className="flex-1 text-center py-3 text-gray-500 font-semibold hover:bg-gray-200 hover:cursor-pointer">
            For you
          </h4>
          <h4 className="flex-1 text-center py-3 text-gray-500 font-semibold hover:bg-gray-200 hover:cursor-pointer">
            Following
          </h4>
        </div>
      </header>
      <main>
        {/* Tweet Form */}
        <TweetForm />
        {/* Tweets */}
        <Tweet tweet={tweet} />
        <Tweet tweet={tweet_2} />
        <Tweet tweet={tweet} />
      </main>
    </>
  );
}
