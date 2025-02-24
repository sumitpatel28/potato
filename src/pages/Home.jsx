import Hero from '../components/Hero'

const Home = () => {
  return (
    <div>
      <Hero />
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Popular Dishes
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Check out our most loved potato creations
            </p>
          </div>
          
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Add your menu items here */}
            {/* Example of a menu item card */}
            <div className="bg-amber-50 rounded-lg shadow-lg overflow-hidden">
              <img
                src="/path-to-your-image.jpg"
                alt="French Fries"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Crispy French Fries</h3>
                <p className="mt-2 text-gray-600">
                  Golden-brown, crispy on the outside, fluffy on the inside.
                </p>
                <div className="mt-4">
                  <span className="text-amber-600 font-bold">$4.99</span>
                </div>
              </div>
            </div>
            {/* Add more menu items */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 