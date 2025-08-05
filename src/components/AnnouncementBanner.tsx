import React from 'react';
import { Rocket } from 'lucide-react';

const AnnouncementBanner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
            <Rocket className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            XGODO expands mobile testing capabilities! 🚀
          </h3>
          <p className="text-gray-600 leading-relaxed">
            We've just added 50+ new device models to our remote testing platform, 
            including the latest Android 14 devices and iOS 17 iPhones. Access 
            real devices instantly for your app testing needs.
          </p>
        </div>
        <div className="flex-shrink-0">
          <img 
            src="https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop"
            alt="Mobile devices"
            className="w-32 h-20 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBanner;