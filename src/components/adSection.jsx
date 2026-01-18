const TodayNews = ({ news }) => {
  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* News Cards */}
      <div className="lg:col-span-2">
        <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-900 w-fit pb-1">Today's News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {news.map((article, index) => (
            <div key={index} className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition">
              <img src={article.urlToImage} className="h-48 w-full object-cover" alt="news" />
              <div className="p-4">
                <p className="text-red-600 text-xs font-bold uppercase mb-2">{article.source.name}</p>
                <h3 className="font-bold text-lg mb-2 line-clamp-2">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.description}</p>
                <a href={article.url} target="_blank" className="text-sm font-bold text-blue-600 hover:underline">Read More →</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar Ad Section */}
      <aside className="lg:col-span-1 space-y-8">
        <div className="sticky top-24">
          <div className="bg-gray-100 border-2 border-dashed border-gray-400 p-8 flex items-center justify-center text-gray-400 rounded-lg h-150">
            <div className="text-center">
              <p className="font-bold">ADVERTISEMENT</p>
              <p className="text-sm">300x600 Banner</p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};
