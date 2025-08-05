import React from 'react';

const StatsSection = () => {
  const stats = [
    { number: '500+', label: 'Devices Available' },
    { number: '25K+', label: 'Active Users' },
    { number: '1M+', label: 'Tests per Month' },
    { number: '99.9%', label: 'Uptime' }
  ];

  return (
    <div className="grid grid-cols-4 gap-8 mb-12">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
          <div className="text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;