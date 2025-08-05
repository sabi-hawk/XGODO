import React from 'react';
import DeviceCard from './DeviceCard';

const DeviceGrid = () => {
  const devices = [
    {
      id: '1',
      name: 'Oppo Nord CE3',
      codename: 'Patient Pheasant',
      version: 'Android 8.0',
      ram: '4096MB',
      processor: 'Google Tensor G2',
      price: '$0.12/hr',
      rating: 9.9,
      responseTime: '1261ms',
      availability: '100%',
      category: 'Data',
      flag: '🇺🇸'
    },
    {
      id: '2',
      name: 'Realme Reno 8',
      codename: 'Instant Mastodon',
      version: 'Android 13',
      ram: '4096MB',
      processor: 'Qualcomm Snapdragon 8 Gen 2',
      price: '$0.12/hr',
      rating: 9.9,
      responseTime: '4792ms',
      availability: '100%',
      category: 'Data',
      flag: '🇺🇸'
    },
    {
      id: '3',
      name: 'Xiaomi Reno 8',
      codename: 'Misleading Lungfish',
      version: 'Android 12',
      ram: '8192MB',
      processor: 'Qualcomm Snapdragon 8 Gen 2',
      price: '$0.12/hr',
      rating: 9.9,
      responseTime: '908ms',
      availability: '100%',
      category: 'Data',
      flag: '🇺🇸'
    },
    {
      id: '4',
      name: 'Realme Pixel 7',
      codename: 'Comparative Snipe',
      version: 'Android 11',
      ram: '4096MB',
      processor: 'MediaTek Dimensity 9000',
      price: '$0.12/hr',
      rating: 9.9,
      responseTime: '5676ms',
      availability: '100%',
      category: 'Social',
      flag: '🇺🇸'
    },
    {
      id: '5',
      name: 'Motorola Pixel 7',
      codename: 'Current Giraffe',
      version: 'Android 11',
      ram: '6144MB',
      processor: 'MediaTek Dimensity 9000',
      price: '$0.12/hr',
      rating: 9.9,
      responseTime: '5921ms',
      availability: '100%',
      category: 'Data',
      flag: '🇺🇸'
    },
    {
      id: '6',
      name: 'Xiaomi Galaxy S23',
      codename: 'Inherent Chimpanzee',
      version: 'Android 8.1',
      ram: '6144MB',
      processor: 'MediaTek Dimensity 9000',
      price: '$0.12/hr',
      rating: 9.9,
      responseTime: '597ms',
      availability: '99%',
      category: 'Jobs',
      flag: '🇺🇸'
    },
    {
      id: '7',
      name: 'Google V27',
      codename: 'Accepted Wildebeest',
      version: 'Android 12',
      ram: '8192MB',
      processor: 'Google Tensor G2',
      price: '$0.12/hr',
      rating: 9.9,
      responseTime: '1261ms',
      availability: '100%',
      category: 'Data',
      flag: '🇺🇸'
    },
    {
      id: '8',
      name: 'Realme Reno 8',
      codename: 'Rapid Puma',
      version: 'Android 13',
      ram: '8192MB',
      processor: 'Qualcomm Snapdragon 8 Gen 2',
      price: '$0.12/hr',
      rating: 9.9,
      responseTime: '4792ms',
      availability: '100%',
      category: 'Data',
      flag: '🇺🇸'
    },
    {
      id: '9',
      name: 'Oppo Pixel 7',
      codename: 'Disciplinary Mandrill',
      version: 'Android 13',
      ram: '4096MB',
      processor: 'MediaTek Dimensity 9000',
      price: '$0.12/hr',
      rating: 9.9,
      responseTime: '908ms',
      availability: '100%',
      category: 'Data',
      flag: '🇺🇸'
    }
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Best For Your Testing Routine</h2>
        <button className="text-blue-600 hover:text-blue-700 font-medium">View All Devices</button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {devices.map((device) => (
          <DeviceCard key={device.id} device={device} />
        ))}
      </div>
    </div>
  );
};

export default DeviceGrid;