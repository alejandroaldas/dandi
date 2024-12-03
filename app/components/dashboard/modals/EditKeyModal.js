import { useState } from 'react';

export default function EditKeyModal({ apiKey, onClose, onSubmit }) {
  const [name, setName] = useState(apiKey.name);
  const [limitEnabled, setLimitEnabled] = useState(!!apiKey.monthly_limit);
  const [monthlyLimit, setMonthlyLimit] = useState(apiKey.monthly_limit || 1000);

  const handleSubmit = () => {
    onSubmit(apiKey.id, {
      name,
      monthly_limit: limitEnabled ? monthlyLimit : null,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6">
        <h2 className="text-xl font-semibold mb-4">Edit API Key</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Key Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium">
              <input
                type="checkbox"
                checked={limitEnabled}
                onChange={(e) => setLimitEnabled(e.target.checked)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              Limit monthly usage
            </label>
            {limitEnabled && (
              <input
                type="number"
                value={monthlyLimit}
                onChange={(e) => setMonthlyLimit(parseInt(e.target.value))}
                className="mt-2 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
} 