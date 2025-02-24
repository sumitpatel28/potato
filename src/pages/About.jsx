const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Our Story
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Bringing the best potato dishes to your table since 2024
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Passion for Potatoes
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              At PotatoDelight, we believe in the versatility and comfort that potato dishes bring to people's lives. Our journey began with a simple idea: to create extraordinary experiences through ordinary potatoes.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Every dish we serve is crafted with care, using locally sourced potatoes and the finest ingredients. Our chefs combine traditional recipes with innovative cooking techniques to bring you the perfect potato dish every time.
            </p>
          </div>
          <div className="relative h-96">
            <img
              src="/path-to-kitchen-image.jpg"
              alt="Our Kitchen"
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality First</h3>
              <p className="text-gray-600">
                We use only the finest ingredients and maintain the highest standards in food preparation.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fresh & Fast</h3>
              <p className="text-gray-600">
                Every dish is prepared fresh to order, ensuring the best taste and quality.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Made with Love</h3>
              <p className="text-gray-600">
                We put our heart into every dish we serve, treating each customer like family.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About 