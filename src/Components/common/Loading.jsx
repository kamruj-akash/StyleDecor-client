const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#faf9fb] relative overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute w-[380px] h-[380px] bg-purple-300/30 blur-3xl rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-200/20 blur-3xl rounded-full animate-pulse-slow"></div>

      {/* Loader Animation */}
      <div className="relative flex flex-col items-center">
        {/* Spinning Ring */}
        <div className="w-20 h-20 border-4 border-purple-400/30 border-t-purple-600 rounded-full animate-spin"></div>

        {/* Text Animation */}
        <p className="mt-6 text-lg font-medium text-gray-700 animate-fade">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
};

export default Loading;
