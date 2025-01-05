import { UserProfile } from '@clerk/nextjs';
import React from 'react';

function Config() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-50">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl">
        <UserProfile />
      </div>
    </div>
  );
}

export default Config;
