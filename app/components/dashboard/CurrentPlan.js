export default function CurrentPlan() {
  return (
    <div className="card">
      <div className="card-body">
        <div className="flex justify-between items-start">
          <div>
            <div className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Current Plan</div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Researcher</h2>
            
            <div>
              <div className="text-sm font-medium text-gray-700 mb-2">API Usage</div>
              <div className="w-72 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="w-0 h-full bg-indigo-600" />
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs text-gray-600">0 requests</span>
                <span className="text-xs font-medium text-gray-900">1,000 requests</span>
              </div>
            </div>
          </div>
          <button className="btn btn-secondary">
            <svg className="icon mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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