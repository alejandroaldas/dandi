import { useState } from 'react';

export default function EmailUsageAlerts() {
  const [threshold, setThreshold] = useState(90);

  const handleThresholdChange = (e) => {
    const value = parseInt(e.target.value);
    if (value >= 0 && value <= 100) {
      setThreshold(value);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Email Usage Alerts</h2>
            <p className="mt-1 text-sm text-gray-500">
              Configure when you want to receive email notifications about your API usage.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-700">Alert threshold:</span>
              <div className="flex items-center">
                <input
                  type="number"
                  min="0"
                  max="100"
                  className="w-20 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                  value={threshold}
                  onChange={handleThresholdChange}
                />
                <span className="ml-2 text-sm text-gray-500">%</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center px-2.5 py-1.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Enabled
              </span>
              <button className="inline-flex items-center p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </button>
            </div>
          </div>
          <p className="mt-2 text-sm text-gray-500">
            You will receive an email notification when your API usage reaches {threshold}% of your monthly limit.
          </p>
        </div>
      </div>
    </div>
  );
} 