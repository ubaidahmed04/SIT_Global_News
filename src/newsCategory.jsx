import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ProductCard from './components/card'

const NewsCategory = () => {
    const {category} = useParams()
    // console.log(category)
    const [newData , setNewsData] = useState([])
    const [loading , setLoading] = useState(false)
      
    const fetchNews = async (category) =>{
    const API_KEY = '3b30bc5b63a949428ec9c2ab80c88315'
    try {
      setLoading(true)
      const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`)
      const result = await res.json()
      console.log(result)
      setNewsData(result?.articles)
     } catch (error) {
      console.log(error)
    } finally{
      setLoading(false)
    }
  }
  useEffect(()=>{
    fetchNews(category)
  }, [])
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {
              loading ? 
              <div>Loading ...</div> : 
              newData?.length === 0 ? 
              <div className='text-center text-gray-600 text-xl'>NO data Avalaible</div> : 
              newData?.map((item, i )=>(
                <ProductCard name={item.title} publishDate={item.publishedAt} source={item.source.name} image={item.urlToImage}/>
    
              ))
            }
            </div>
  )
}

export default NewsCategory