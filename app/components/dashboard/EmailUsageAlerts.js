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
            <h2 className="text-base font-semibold text-gray-900">Email Usage Alerts</h2>
            <p className="mt-0.5 text-sm text-gray-500">
              Configure when you want to receive email notifications about your API usage.
            </p>
          </div>
        </div>

        <div className="mt-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-medium text-gray-700">Alert threshold:</span>
              <div className="flex items-center">
                <input
                  type="number"
                  min="0"
                  max="100"
                  className="input w-14"
                  value={threshold}
                  onChange={handleThresholdChange}
                />
                <span className="ml-1 text-sm text-gray-500">%</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="badge badge-success">
                Enabled
              </span>
              <button className="icon-btn">
                Edit
              </button>
            </div>
          </div>
          <p className="mt-1.5 text-xs text-gray-500">
            You will receive an email notification when your API usage reaches {threshold}% of your monthly limit.
          </p>
        </div>
      </div>
    </div>
  );
} 