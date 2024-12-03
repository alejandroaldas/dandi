import { toast } from 'react-hot-toast';

export default function ViewKeyModal({ apiKey, onClose }) {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard');
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6">
        <h2 className="text-xl font-semibold mb-4">View API Key</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-500 mb-1">Key Name</label>
            <p className="font-medium">{apiKey.name}</p>
          </div>
          <div>
            <label className="block text-sm text-gray-500 mb-1">API Key</label>
            <div className="flex items-center gap-2">
              <code className="flex-1 p-2 bg-gray-50 rounded font-mono text-sm">
                {apiKey.key}
              </code>
              <button
                onClick={() => copyToClipboard(apiKey.key)}
                className="p-2 hover:bg-gray-100 rounded-md"
                title="Copy to clipboard"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                </svg>
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-500 mb-1">Created</label>
            <p>{new Date(apiKey.created_at).toLocaleDateString()}</p>
          </div>
          {apiKey.monthly_limit && (
            <div>
              <label className="block text-sm text-gray-500 mb-1">Monthly Limit</label>
              <p>{apiKey.monthly_limit.toLocaleString()} requests</p>
            </div>
          )}
        </div>
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
} 