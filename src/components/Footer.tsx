export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* What's New */}
        <div>
          <h2 className="text-lg font-bold mb-2">What's New</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">More content in the Atemba Store</a></li>
            <li><a href="#" className="hover:underline">Apps</a></li>
            <li><a href="#" className="hover:underline">Games</a></li>
            <li><a href="#" className="hover:underline">Movies & TV</a></li>
            <li><a href="#" className="hover:underline">Windows Experience Blog</a></li>
          </ul>
        </div>

        {/* Microsoft Store */}
        <div>
          <h2 className="text-lg font-bold mb-2">Atemba Store</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Atemba account</a></li>
            <li><a href="#" className="hover:underline">Atemba Store support</a></li>
            <li><a href="#" className="hover:underline">Returns</a></li>
            <li><a href="#" className="hover:underline">Flexible payments</a></li>
            <li><a href="#" className="hover:underline">Policies and Code of Conduct</a></li>
          </ul>
        </div>

        {/* For Developers */}
        <div>
          <h2 className="text-lg font-bold mb-2">For Developers</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Publish your app</a></li>
            <li><a href="#" className="hover:underline">Advertise with us</a></li>
            <li><a href="#" className="hover:underline">Generate your app badge</a></li>
          </ul>
        </div>

        {/* Windows */}
        <div>
          <h2 className="text-lg font-bold mb-2">Windows</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">About Atemba</a></li>
            <li><a href="#" className="hover:underline">Company news</a></li>
            <li><a href="#" className="hover:underline">Investors</a></li>
            <li><a href="#" className="hover:underline">Diversity & inclusion</a></li>
            <li><a href="#" className="hover:underline">Accessibility</a></li>
            <li><a href="#" className="hover:underline">Sustainability</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm mt-6">
        <p>&copy; {new Date().getFullYear()} Atemba. All rights reserved.</p>
        <ul className="flex justify-center space-x-4 mt-2">
          <li><a href="#" className="hover:underline">Privacy</a></li>
          <li><a href="#" className="hover:underline">Terms of use</a></li>
          <li><a href="#" className="hover:underline">Trademarks</a></li>
          <li><a href="#" className="hover:underline">Safety & eco</a></li>
          <li><a href="#" className="hover:underline">About our ads</a></li>
          <li><a href="#" className="hover:underline">Contact Atemba</a></li>
        </ul>
      </div>
    </footer>
  );
}
