export default function CurrentPlan() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <div className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Current Plan</div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Researcher</h2>
            
            <div>
              <div className="text-sm font-medium text-gray-700 mb-2">API Usage</div>
              <div className="w-96 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="w-0 h-full bg-indigo-600" />
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm text-gray-600">0 requests</span>
                <span className="text-sm font-medium text-gray-900">1,000 requests</span>
              </div>
            </div>
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-gray-200 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
            <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Manage Plan
          </button>
        </div>
      </div>
    </div>
  );
} 