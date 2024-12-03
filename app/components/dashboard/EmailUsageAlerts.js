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
    <div className="card">
      <div className="card-body">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Email Usage Alerts</h2>
            <p className="mt-1 text-sm text-gray-500">
              Configure when you want to receive email notifications about your API usage.
            </p>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">Alert threshold:</span>
              <div className="flex items-center">
                <input
                  type="number"
                  min="0"
                  max="100"
                  className="input w-16"
                  value={threshold}
                  onChange={handleThresholdChange}
                />
                <span className="ml-1 text-sm text-gray-500">%</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="badge badge-success">
                Enabled
              </span>
              <button className="icon-btn">
                <svg className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </button>
            </div>
          </div>
          <p className="mt-2 text-xs text-gray-500">
            You will receive an email notification when your API usage reaches {threshold}% of your monthly limit.
          </p>
        </div>
      </div>
    </div>
  );
} 