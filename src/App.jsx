import React, { useEffect, useState } from 'react';
import { ArrowRight,  Zap, ShieldCheck, Globe, Bell } from 'lucide-react';
import ProductCard from './components/card';
import Header from './components/header';
import TodayNews from './components/todayNews';
import FeatureBadge from './components/featureBadge';
import Footer from './components/footer';
import BadgeSection from './components/badgeSection';

const HomePage = () => {
  const [newData , setNewsData] = useState([])
  const [loading , setLoading] = useState(false)
  const fetchNews = async () =>{
    const API_KEY = '3b30bc5b63a949428ec9c2ab80c88315'
    try {
      setLoading(true)
      const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
      const result = await res.json()
      // console.log(result)
      setNewsData(result?.articles)
bn        } catch (error) {
      console.log(error)
    } finally{
      setLoading(false)
    }
  }
  console.log(newData)
  useEffect(()=>{
    fetchNews()
  },[])// dependency array
  useEffect(()=>{},[])
 
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
    {/* --- Header --- */}
    <Header/>
    {/* --- Featured Products --- */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h3 className="text-3xl font-bold text-slate-900">Trending News</h3>
            <p className="text-slate-500 mt-2">Selected items from our latest release.</p>
          </div>
          <button className="text-blue-600 font-semibold flex items-center gap-1 hover:underline">
            View All <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {
          loading ? 
          <div>Loading ...</div> : 
          newData?.length === 0 ? 
          <div>NO data Avalaible</div> : 
          newData?.map((item, i )=>(
            <ProductCard name={item.title} publishDate={item.publishedAt} source={item.source.name} image={item.urlToImage}/>

          ))
        }
        </div>
      </section>
      <BadgeSection/>
      {/* --- Ad Section --- */}
      {/* <TodayNews news={newData}/> */}
      <Footer/>
    </div>
  );
};





export default HomePage;