const Footer = () => {
  return (
    <footer className="bg-amber-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">PotatoDelight</h3>
            <p className="text-amber-200">
              Serving the best potato dishes since 2024
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-amber-200 hover:text-white">Home</a></li>
              <li><a href="/about" className="text-amber-200 hover:text-white">About</a></li>
              <li><a href="/menu" className="text-amber-200 hover:text-white">Menu</a></li>
              <li><a href="/contact" className="text-amber-200 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-amber-200">
              <li>123 Potato Street</li>
              <li>Foodville, FD 12345</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@potatodelight.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-amber-700 text-center text-amber-200">
          <p>&copy; 2024 PotatoDelight. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 