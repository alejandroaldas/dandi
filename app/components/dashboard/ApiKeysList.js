import { useState } from 'react';
import ApiKeyModal from './modals/ApiKeyModal';
import ViewKeyModal from './modals/ViewKeyModal';
import EditKeyModal from './modals/EditKeyModal';
import { toast } from 'react-hot-toast';

export default function ApiKeysList({ 
  apiKeys, 
  isLoading, 
  onCreateKey, 
  onDeleteKey, 
  onUpdateKey 
}) {
  const [showNewKey, setShowNewKey] = useState(false);
  const [showViewKey, setShowViewKey] = useState(false);
  const [showEditKey, setShowEditKey] = useState(false);
  const [selectedKey, setSelectedKey] = useState(null);

  const handleViewKey = (key) => {
    setSelectedKey(key);
    setShowViewKey(true);
  };

  const handleEditClick = (key) => {
    setSelectedKey(key);
    setShowEditKey(true);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard');
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">API Keys</h2>
        <button
          onClick={() => setShowNewKey(true)}
          className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm"
        >
          + New API Key
        </button>
      </div>
      
      <p className="text-sm text-gray-600 mb-4">
        The key is used to authenticate your requests to the Research API. 
        To learn more, see the documentation page.
      </p>

      {/* API Keys Table */}
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 text-sm">
            <tr>
              <th className="text-left py-3 px-4 font-medium">NAME</th>
              <th className="text-left py-3 px-4 font-medium">USAGE</th>
              <th className="text-left py-3 px-4 font-medium">KEY</th>
              <th className="text-left py-3 px-4 font-medium">OPTIONS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {apiKeys.map((key) => (
              <tr key={key.id} className="hover:bg-gray-50">
                <td className="py-3 px-4">{key.name}</td>
                <td className="py-3 px-4">0</td>
                <td className="py-3 px-4 font-mono text-sm">
                  {key.key.slice(0, 8)}************************
                </td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleViewKey(key)}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                      title="View API Key"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                      <span className="text-sm">View</span>
                    </button>
                    <button
                      onClick={() => copyToClipboard(key.key)}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                      title="Copy API Key"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                      </svg>
                      <span className="text-sm">Copy</span>
                    </button>
                    <button
                      onClick={() => handleEditClick(key)}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                      title="Edit API Key"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                        <path d="m15 5 4 4"/>
                      </svg>
                      <span className="text-sm">Edit</span>
                    </button>
                    <button
                      onClick={() => onDeleteKey(key.id)}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 text-red-600 hover:bg-red-50 rounded-md transition-colors"
                      title="Delete Key"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                      </svg>
                      <span className="text-sm">Delete</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modals */}
      {showNewKey && (
        <ApiKeyModal
          onClose={() => setShowNewKey(false)}
          onSubmit={onCreateKey}
        />
      )}

      {showViewKey && selectedKey && (
        <ViewKeyModal
          apiKey={selectedKey}
          onClose={() => setShowViewKey(false)}
        />
      )}

      {showEditKey && selectedKey && (
        <EditKeyModal
          apiKey={selectedKey}
          onClose={() => setShowEditKey(false)}
          onSubmit={onUpdateKey}
        />
      )}
    </div>
  );
} 