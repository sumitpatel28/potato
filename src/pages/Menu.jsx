const Menu = () => {
  const menuItems = [
    {
      category: "Classic Fries",
      items: [
        {
          name: "Classic French Fries",
          description: "Golden-brown, crispy on the outside, fluffy on the inside",
          price: "4.99",
          image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=1000"
        },
        {
          name: "Curly Fries",
          description: "Seasoned spiral-cut potatoes, crispy and fun",
          price: "5.99",
          image: "https://images.unsplash.com/photo-1599637777203-4b53c76fe3c2?q=80&w=1000"
        },
        {
          name: "Sweet Potato Fries",
          description: "Crispy sweet potato fries with a hint of cinnamon",
          price: "6.99",
          image: "https://images.unsplash.com/photo-1604182667775-44f27bff8f30?q=80&w=1000"
        }
      ]
    },
    {
      category: "Loaded Potatoes",
      items: [
        {
          name: "Cheese Loaded Baked Potato",
          description: "Fluffy baked potato topped with melted cheese, sour cream, and chives",
          price: "7.99",
          image: "https://images.unsplash.com/photo-1585438014000-2f31f75385c4?q=80&w=1000"
        },
        {
          name: "Bacon Potato Supreme",
          description: "Loaded with crispy bacon, cheese, and green onions",
          price: "8.99",
          image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?q=80&w=1000"
        },
        {
          name: "Vegetarian Delight",
          description: "Topped with grilled vegetables, cheese, and herbs",
          price: "7.99",
          image: "https://images.unsplash.com/photo-1633436375564-2c91e901f505?q=80&w=1000"
        }
      ]
    },
    {
      category: "Potato Specialties",
      items: [
        {
          name: "Potato Soup",
          description: "Creamy potato soup with bacon bits and chives",
          price: "6.99",
          image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=1000"
        },
        {
          name: "Potato Croquettes",
          description: "Crispy breaded potato balls with herbs and cheese",
          price: "5.99",
          image: "https://images.unsplash.com/photo-1619221882220-947b3d3c8861?q=80&w=1000"
        },
        {
          name: "Potato Gratin",
          description: "Layered potatoes with cream and cheese, baked until golden",
          price: "9.99",
          image: "https://images.unsplash.com/photo-1568470009524-8b97c2c0d9fd?q=80&w=1000"
        }
      ]
    }
  ];

  return (
    <div className="bg-white">
      <div className="bg-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gray-900 text-center">Our Menu</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {menuItems.map((category, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{category.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="h-48 w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-amber-600">${item.price}</span>
                      <button className="bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-colors">
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu; 