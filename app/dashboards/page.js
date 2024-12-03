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
  }, []);

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header with breadcrumb */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
              <span>Pages</span>
              <span>/</span>
              <span>Overview</span>
            </div>
            <h1 className="text-2xl font-semibold">Overview</h1>
          </div>

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
  );
} 