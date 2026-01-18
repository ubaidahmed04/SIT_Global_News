const FeatureBadge = ({ icon, title, desc }) => (
  <div className="flex items-center gap-4">
    <div className="text-blue-600">{icon}</div>
    <div>
      <h4 className="font-bold text-sm text-slate-900">{title}</h4>
      <p className="text-xs text-slate-500">{desc}</p>
    </div>
  </div>
);
export default FeatureBadge