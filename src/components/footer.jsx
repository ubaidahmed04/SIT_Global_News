const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold text-red-600 mb-4 uppercase">Global News</h2>
          <p className="text-gray-400 text-sm">Apni har roz ki breaking news aur update ke liye hum se jude rahein.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Categories</h4>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>World News</li>
            <li>Economy</li>
            <li>Environment</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Support</h4>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Subscribe</h4>
          <div className="flex">
            <input type="email" placeholder="Email" className="bg-gray-800 p-2 text-sm outline-none rounded-l w-full" />
            <button className="bg-red-600 px-4 py-2 rounded-r">Go</button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
        © 2026 Global News. All Rights Reserved.
      </div>
    </footer>
  );
};
export default Footer