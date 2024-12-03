export default function CurrentPlan() {
  return (
    <div className="card">
      <div className="card-body">
        <div className="flex justify-between items-start">
          <div>
            <div className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Current Plan</div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Researcher</h2>
            
            <div>
              <div className="text-sm font-medium text-gray-700 mb-2">API Usage</div>
              <div className="w-64 h-1 bg-gray-100 rounded-full overflow-hidden">
                <div className="w-0 h-full bg-indigo-600" />
              </div>
              <div className="flex justify-between items-center mt-1.5">
                <span className="text-xs text-gray-600">0 requests</span>
                <span className="text-xs font-medium text-gray-900">1,000 requests</span>
              </div>
            </div>
          </div>
          <button className="btn btn-secondary">
            <svg className="icon-sm mr-1.5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
            Manage
          </button>
        </div>
      </div>
    </div>
  );
} 