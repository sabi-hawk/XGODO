import React from 'react';
import { 
  Home, 
  Smartphone, 
  Laptop, 
  Tablet, 
  Gamepad2, 
  Camera, 
  Headphones,
  Star,
  Grid3X3,
  Moon,
  Sun
} from 'lucide-react';

const Sidebar = () => {
  const categories = [
    { name: 'All Categories', icon: Grid3X3, count: '500+' },
    { name: 'Smartphones', icon: Smartphone, count: '250+' },
    { name: 'Tablets', icon: Tablet, count: '80+' },
    { name: 'Laptops', icon: Laptop, count: '120+' },
    { name: 'Gaming', icon: Gamepad2, count: '45+' },
    { name: 'Camera', icon: Camera, count: '30+' },
    { name: 'Audio', icon: Headphones, count: '60+' },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen sticky top-16 overflow-y-auto">
      <div className="p-6">
        <nav className="space-y-1">
          <div className="flex items-center space-x-3 px-3 py-2 text-blue-600 bg-blue-50 rounded-lg">
            <Home className="w-5 h-5" />
            <span className="font-medium">Discovery</span>
          </div>
          
          <div className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg cursor-pointer">
            <Star className="w-5 h-5" />
            <span>Workspace</span>
            <button className="ml-auto bg-blue-600 text-white text-xs px-2 py-1 rounded">
              Sign Up
            </button>
          </div>
          
          <div className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg cursor-pointer">
            <Grid3X3 className="w-5 h-5" />
            <span>Collections</span>
          </div>
        </nav>

        <div className="mt-8">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Categories</h3>
          <nav className="space-y-1">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <div key={category.name} className="flex items-center justify-between px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <Icon className="w-5 h-5" />
                    <span>{category.name}</span>
                  </div>
                  <span className="text-xs text-gray-400">{category.count}</span>
                </div>
              );
            })}
          </nav>
          
          <button className="w-full mt-4 text-left px-3 py-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg font-medium">
            View All Categories
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Switch to Dark View</span>
            <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 hover:bg-gray-300 transition-colors">
              <span className="inline-block h-4 w-4 transform rounded-full bg-white shadow-lg transition-transform translate-x-1">
                <Sun className="w-3 h-3 m-0.5 text-gray-400" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;