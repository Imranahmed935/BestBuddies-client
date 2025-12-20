const FindBuddyCard = () => {
  return (
    <div className="relative w-full bg-gradient-to-r from-blue-100 via-blue-50 to-yellow-50 rounded-3xl overflow-hidden p-10 md:p-20 flex flex-col justify-center max-w-7xl mx-auto shadow-md">
      

      <div className="absolute  -left-20 w-72 h-72 bg-yellow-200 rounded-full opacity-50 pointer-events-none blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-200 rounded-full opacity-40 pointer-events-none blur-3xl"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-blue-50/50 to-yellow-100/40 pointer-events-none rounded-3xl"></div>

   
      <div className="relative z-10 text-center md:text-left space-y-4">
        <p className="text-sm uppercase font-semibold text-gray-600 tracking-widest">
          Adventure is better together
        </p>

        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Find your ideal <span className="text-yellow-400">travel Plan</span>
        </h1>

        <p className="text-gray-700 text-lg md:text-xl max-w-xl mx-auto md:mx-0">
          Explore new destinations, meet like-minded travelers, and share unforgettable journeys. Start your adventure with a buddy today!
        </p>

    
        </div>
      </div>

  );
};

export default FindBuddyCard;
