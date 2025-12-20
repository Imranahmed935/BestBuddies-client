const TopDesign = () => {
  return (
    <div className="relative w-full bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-50 rounded overflow-hidden p-10 md:p-20 flex flex-col justify-center max-w-7xl mx-auto shadow-md">
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-yellow-50/50 to-yellow-100/40 pointer-events-none rounded-2xl"></div>

      <div className="relative z-10 text-center md:text-left">
        <p className="text-sm uppercase font-medium text-gray-600 mb-2 tracking-widest">
          Discover new horizons
        </p>
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          Find your perfect <span className="text-yellow-400">travel companion</span>
        </h1>
        <p className="text-gray-700 text-lg md:text-xl max-w-xl mx-auto md:mx-0">
          Explore new destinations and connect with travelers around the world. Adventure awaits — lets find it together!
        </p>
      </div>
    </div>
  );
};

export default TopDesign;
