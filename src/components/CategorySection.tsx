import React from 'react';
import { Smartphone, Tablet, Laptop, Gamepad2 } from 'lucide-react';

const CategorySection = () => {
  const categories = [
    {
      icon: Smartphone,
      title: 'Smartphones',
      description: 'Latest Android and iOS devices for mobile app testing, automation, and debugging.',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: Tablet,
      title: 'Tablets',
      description: 'iPad and Android tablets for testing responsive designs and tablet-specific features.',
      color: 'bg-gray-100 text-gray-600'
    },
    {
      icon: Laptop,
      title: 'Laptops',
      description: 'Windows and Mac laptops for cross-platform testing and development workflows.',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Gamepad2,
      title: 'Gaming',
      description: 'Gaming devices and consoles for testing mobile games and entertainment apps.',
      color: 'bg-blue-100 text-blue-600'
    }
  ];

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Top Categories</h2>
        <button className="text-blue-600 hover:text-blue-700 font-medium">View All Categories</button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer">
              <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{category.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{category.description}</p>
              <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                Browse Category
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategorySection;