import { ImSpinner9 } from "react-icons/im";

const LoadingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="flex flex-col items-center">
        <p className="my-6 text-teal-500 text-xl font-semibold">
          Loading the awesomeness...
        </p>

        <p className="text-gray-400 text-sm mb-6">
          Crafting a pixel-perfect experience just for you!
        </p>
        
        <ImSpinner9 className="animate-spin" color="secondary" size={64} />
      </div>
    </div>
  );
};

export default LoadingPage;
