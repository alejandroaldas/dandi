'use client';
import { useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import CurrentPlan from '../components/dashboard/CurrentPlan';
import ApiKeysList from '../components/dashboard/ApiKeysList';
import EmailUsageAlerts from '../components/dashboard/EmailUsageAlerts';
import { useApiKeys } from '../hooks/useApiKeys';

export default function Dashboard() {
  const {
    apiKeys,
    isLoading,
    fetchApiKeys,
    createApiKey,
    deleteApiKey,
    updateApiKey
  } = useApiKeys();

  useEffect(() => {
    fetchApiKeys();
  }, [fetchApiKeys]);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header with breadcrumb */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-3 font-medium">
              <span>Pages</span>
              <span className="text-gray-300">/</span>
              <span className="text-gray-900">Overview</span>
            </div>
            <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Overview</h1>
          </div>

          <div className="space-y-8">
            <CurrentPlan />
            
            <ApiKeysList
              apiKeys={apiKeys}
              isLoading={isLoading}
              onCreateKey={createApiKey}
              onDeleteKey={deleteApiKey}
              onUpdateKey={updateApiKey}
            />

            <EmailUsageAlerts />
          </div>
        </div>
      </div>
    </div>
  );
} 