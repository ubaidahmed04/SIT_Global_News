const TopHeadlines = ({ news }) => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-6">
        <div className="w-2 h-8 bg-red-600 mr-3"></div>
        <h2 className="text-2xl font-bold uppercase tracking-widest">Top Headlines</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Main Featured News */}
        <div className="relative group overflow-hidden rounded-xl h-112.5">
          <img src={news[0]?.urlToImage || 'https://via.placeholder.com/800x600'} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" alt="headline" />
          <div className="absolute inset-0 bg-linear-to-t from-black via-transparent p-6 flex flex-col justify-end text-white">
            <span className="bg-red-600 w-fit px-3 py-1 text-xs font-bold mb-3 uppercase">Breaking</span>
            <h3 className="text-3xl font-bold leading-tight">{news[0]?.title}</h3>
          </div>
        </div>
        
        {/* Secondary News List */}
        <div className="flex flex-col gap-4">
          {news.slice(1, 4).map((item, idx) => (
            <div key={idx} className="flex gap-4 border-b pb-4 last:border-0">
              <img src={item.urlToImage} className="w-24 h-24 object-cover rounded-lg" alt="news" />
              <div>
                <h4 className="font-bold text-lg leading-snug hover:text-red-600 cursor-pointer">{item.title}</h4>
                <p className="text-gray-500 text-sm mt-1">{new Date(item.publishedAt).toDateString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};