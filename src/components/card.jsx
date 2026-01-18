import moment from "moment";
const ProductCard = ({ name, publishDate, source, isSale = false, image }) => (
  <div className="group cursor-pointer">
    <div className="relative aspect-3/4 bg-slate-100 rounded-2xl overflow-hidden mb-4">
      <div className="w-full h-full flex items-center justify-center text-slate-300 italic group-hover:scale-110 transition-transform duration-500">
       <img src={image || "https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-image-vector-illustration-isolated-png-image_1694547.jpg"} alt="" />
      </div>
      {isSale && (
        <span className="absolute top-4 left-4 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded">SALE</span>
      )}
      <button className="absolute bottom-4 left-4 right-4 bg-white py-3 rounded-xl shadow-lg translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 font-semibold text-sm">
       View More
      </button>
    </div>
    <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">{source}</p>
    <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{name}</h4>
    <p className="text-slate-600 mt-1">{moment(publishDate).format("Do MMM YY h:mm:ss a")}</p>
  </div>
);
export default ProductCard