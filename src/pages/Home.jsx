import Tweet from '../components/Tweet';
import TweetForm from '../components/TweetForm';

export default function Home() {
  const tweets = [
    {
      id: 1,
      name: 'Aadhar Agarwal',
      userName: 'Aadhar@22',
      date: '12h',
      text: 'A beautiful scenery',
      img: 'https://images.unsplash.com/photo-1538991383142-36c4edeaffde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
      like: 10,
      retweet: 4,
      reply: 2,
      share: 1,
    },
    {
      id: 2,
      name: 'Agarwal',
      userName: 'Agarwal@22',
      date: '1d',
      text: 'Some random tweet',
      like: 2,
      retweet: 1,
      reply: 0,
      share: 0,
    },
    {
      id: 3,
      name: 'Aadhar Agarwal',
      userName: 'Aadhar@22',
      date: '12h',
      text: 'Nice Capture',
      img: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      like: 10,
      retweet: 4,
      reply: 2,
      share: 1,
    },
  ];

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 bg-white opacity-[0.97] w-full">
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
        <div className="last:mb-2">
          {tweets.map((tweet) => (
            <Tweet key={tweet.id} tweet={tweet} />
          ))}
        </div>
      </main>
    </>
  );
}
