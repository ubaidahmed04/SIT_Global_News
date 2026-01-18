import React from 'react'
import FeatureBadge from './featureBadge'
import { Bell, Globe, ShieldCheck, Zap } from 'lucide-react'

const BadgeSection = () => {
  return (
   <section className="py-10 border-b border-gray-100 bg-gray-50/50">
  <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
    {/* Real-time Updates */}
    <FeatureBadge 
      icon={<Zap size={24} className="text-amber-500" />} 
      title="Live Updates" 
      desc="Breaking news as it happens" 
    />
    
    {/* Fact Checked / Trust */}
    <FeatureBadge 
      icon={<ShieldCheck size={24} className="text-blue-600" />} 
      title="Fact Checked" 
      desc="Verified by our expert team" 
    />
    
    {/* Global Coverage */}
    <FeatureBadge 
      icon={<Globe size={24} className="text-emerald-600" />} 
      title="Global Coverage" 
      desc="Reporting from 50+ countries" 
    />
    
    {/* Personalized Alerts */}
    <FeatureBadge 
      icon={<Bell size={24} className="text-red-600" />} 
      title="Custom Alerts" 
      desc="News that matters to you" 
    />
  </div>
</section>
  )
}

export default BadgeSection