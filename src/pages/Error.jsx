import { useRouteError } from 'react-router-dom';
import errorGif from '../assets/error.gif';

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="px-6 w-full h-full grid place-items-center">
      <div className="flex flex-col space-y-4">
        <img src={errorGif} alt="error gif" />
        <div className="py-4 px-8">
          <h1 className="text-2xl font-semibold">Oops!</h1>
          <p className="text-lg text-gray-600 font-medium">
            Sorry, an unexpected error has occurred.
          </p>
          <p className="text-lg text-gray-600 font-medium">
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </div>
    </div>
  );
}
