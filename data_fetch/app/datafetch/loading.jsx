const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-white">
      <div className="relative flex items-center justify-center">
        <div className="absolute animate-ping h-20 w-20 rounded-full bg-blue-400 opacity-20"></div>

        <div className="relative animate-pulse h-16 w-16 rounded-full bg-blue-500 shadow-lg"></div>
      </div>
    </div>
  );
};

export default Loading;
