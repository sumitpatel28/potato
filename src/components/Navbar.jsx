import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-amber-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/potato-logo.svg" alt="Logo" className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">PotatoDelight</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:bg-amber-700 px-3 py-2 rounded-md">Home</Link>
              <Link to="/about" className="hover:bg-amber-700 px-3 py-2 rounded-md">About</Link>
              <Link to="/menu" className="hover:bg-amber-700 px-3 py-2 rounded-md">Menu</Link>
              <Link to="/contact" className="hover:bg-amber-700 px-3 py-2 rounded-md">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 