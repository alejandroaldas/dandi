export default function CurrentPlan() {
  return (
    <div className="mb-8 p-6 rounded-xl bg-gradient-to-r from-rose-200 via-purple-200 to-blue-200">
      <div className="flex justify-between items-start">
        <div>
          <div className="text-sm font-medium mb-2">CURRENT PLAN</div>
          <h2 className="text-3xl font-semibold mb-4">Researcher</h2>
          
          <div>
            <div className="text-sm font-medium mb-1">API Limit</div>
            <div className="w-full h-2 bg-black/10 rounded-full overflow-hidden">
              <div className="w-0 h-full bg-blue-600" />
            </div>
            <div className="text-sm mt-1">0/1,000 Requests</div>
          </div>
        </div>
        <button className="flex items-center gap-1 text-sm bg-white/90 hover:bg-white px-4 py-2 rounded-lg transition-colors">
          <span className="i-lucide-settings text-lg" />
          Manage Plan
        </button>
      </div>
    </div>
  );
} 