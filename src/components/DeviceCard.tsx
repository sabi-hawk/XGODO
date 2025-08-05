import React from 'react';
import { Star, Clock, Zap } from 'lucide-react';

interface DeviceCardProps {
  device: {
    id: string;
    name: string;
    codename: string;
    version: string;
    ram: string;
    processor: string;
    price: string;
    rating: number;
    responseTime: string;
    availability: string;
    category: string;
    flag: string;
  };
}

const DeviceCard: React.FC<DeviceCardProps> = ({ device }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-1">
            <span className="text-lg font-semibold text-gray-900">{device.name}</span>
            <span className="text-lg">{device.flag}</span>
          </div>
          <p className="text-sm text-gray-500 mb-2">By device_stock</p>
          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span>{device.rating}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{device.responseTime}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Zap className="w-4 h-4" />
              <span>{device.availability}</span>
            </div>
          </div>
        </div>
        <button className="p-2 text-gray-400 hover:text-gray-600">
          <Star className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-2 mb-6">
        <div className="flex justify-between">
          <span className="text-sm text-gray-500">Name</span>
          <span className="text-sm text-gray-900">{device.codename}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-500">Version</span>
          <span className="text-sm text-gray-900">{device.version}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-500">RAM</span>
          <span className="text-sm text-gray-900">{device.ram}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-500">Processor</span>
          <span className="text-sm text-gray-900">{device.processor}</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <select className="border border-gray-300 rounded px-3 py-1 text-sm">
          <option>{device.price}</option>
          <option>$0.08/hr</option>
          <option>$0.15/hr</option>
        </select>
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
          Rent Now
        </button>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>Updated 2 days ago</span>
          <span className={`px-2 py-1 rounded-full ${
            device.category === 'Data' ? 'bg-blue-100 text-blue-800' :
            device.category === 'Social' ? 'bg-purple-100 text-purple-800' :
            'bg-green-100 text-green-800'
          }`}>
            {device.category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DeviceCard;