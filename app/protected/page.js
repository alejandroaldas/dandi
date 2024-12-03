'use client';
import Sidebar from '../components/Sidebar';

export default function Protected() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
              <span>Pages</span>
              <span>/</span>
              <span>Protected</span>
            </div>
            <h1 className="text-2xl font-semibold">Protected Page</h1>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-3 text-green-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h2 className="text-lg font-medium">Access Granted</h2>
            </div>
            <p className="text-gray-600">
              You have successfully accessed the protected page using a valid API key. 
              This page is only accessible with proper authentication.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 