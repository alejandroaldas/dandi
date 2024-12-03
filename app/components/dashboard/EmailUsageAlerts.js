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
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Email usage alerts</h2>
      <p className="text-sm text-gray-600 mb-4">
        An alert will be sent to your email when your monthly usage reaches the set threshold.
      </p>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span>Your alert threshold is currently set to:</span>
          <input
            type="number"
            min="0"
            max="100"
            className="w-16 px-2 py-1 border rounded"
            value={threshold}
            onChange={handleThresholdChange}
          />
          <span>%</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-gray-100 rounded text-sm">Enabled</span>
          <button className="p-1.5 hover:bg-gray-100 rounded-md">
            <span className="i-lucide-pencil text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
} 