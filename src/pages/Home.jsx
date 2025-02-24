import Hero from '../components/Hero'

const popularDishes = [
  {
    name: "Truffle Parmesan Fries",
    description: "Hand-cut fries tossed with truffle oil, parmesan cheese, and fresh herbs",
    price: "7.99",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=1000",
    tag: "Best Seller"
  },
  {
    name: "Loaded Potato Skins",
    description: "Crispy potato skins filled with cheese, bacon, and green onions",
    price: "8.99",
    image: "https://images.unsplash.com/photo-1581622558663-b2ce33ba0b36?q=80&w=1000",
    tag: "Popular"
  },
  {
    name: "Sweet Potato Gnocchi",
    description: "Homemade sweet potato gnocchi in sage butter sauce",
    price: "12.99",
    image: "https://images.unsplash.com/photo-1604579278540-db35e3c1dd36?q=80&w=1000",
    tag: "Chef's Special"
  },
  {
    name: "Potato Tornado",
    description: "Spiral-cut whole potato, deep-fried and seasoned to perfection",
    price: "6.99",
    image: "https://images.unsplash.com/photo-1623238913973-21e45cced554?q=80&w=1000",
    tag: "New"
  }
];

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
          
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {popularDishes.map((dish, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    loading="lazy"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-amber-600 text-white px-2 py-1 rounded-full text-sm">
                    {dish.tag}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{dish.name}</h3>
                  <p className="mt-2 text-gray-600">
                    {dish.description}
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-amber-600 font-bold">${dish.price}</span>
                    <button className="bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-colors">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 