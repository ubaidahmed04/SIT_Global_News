import React from 'react'

const Herosection = () => {
  return (
     <section className="relative bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col lg:flex-row items-center">
          <div className="flex-1 text-center lg:text-left z-10">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-xs font-bold mb-4 uppercase tracking-widest">
              Season Sale — Up to 40% Off
            </span>
            <h2 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">
              Redefine Your <br /> 
              <span className="text-blue-600">Everyday Style.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Discover our latest collection of premium essentials designed for comfort, durability, and timeless elegance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all">
                Shop Collection <ArrowRight size={18} />
              </button>
              <button className="bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-full font-semibold hover:bg-slate-50 transition-all">
                View Lookbook
              </button>
            </div>
          </div>
          <div className="flex-1 mt-12 lg:mt-0 relative">
            <div className="w-full h-100px lg:h-125 bg-linear-to-tr from-blue-200 to-indigo-100 rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Replace with an <img> tag */}
              <div className="w-full h-full flex items-center justify-center text-slate-400 italic">
                Product Hero Image
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Herosection