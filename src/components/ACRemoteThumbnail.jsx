import React from 'react';

// Component for displaying a generic AC remote thumbnail when no image is available
const ACRemoteThumbnail = () => {
  return (
    <div className="w-full h-40 bg-gray-100 rounded-lg flex flex-col items-center justify-center p-4">
      <div className="w-20 h-32 bg-gray-200 rounded-md relative">
        {/* Remote outline */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-red-500"></div>
        
        {/* Remote buttons - simplified */}
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-12 h-8 rounded-md bg-gray-300 grid grid-cols-3 grid-rows-2 gap-1 p-1">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-gray-400 rounded-sm"></div>
          ))}
        </div>
        
        {/* Remote footer */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-300"></div>
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 whitespace-nowrap">
          AC Remote
        </div>
      </div>
    </div>
  );
};

export default ACRemoteThumbnail; 