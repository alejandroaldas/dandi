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
            Manage
          </button>
        </div>
      </div>
    </div>
  );
} 