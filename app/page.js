import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="pt-20 pb-16 text-center lg:pt-32">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">API Management</span>
            <span className="block text-primary mt-3">Made Simple</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
            Streamline your API development workflow with powerful key management, real-time monitoring, and comprehensive analytics.
          </p>
          <div className="mt-10 flex gap-4 justify-center">
            <a
              href="/dashboards"
              className="btn btn-primary px-8 py-3"
            >
              Get Started
            </a>
            <a
              href="/docs"
              className="btn btn-secondary px-8 py-3"
            >
              Documentation
            </a>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="relative p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">API Key Management</h3>
              <p className="text-gray-600">
                Create, monitor, and revoke API keys with granular access controls and usage limits.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="relative p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Usage Analytics</h3>
              <p className="text-gray-600">
                Track API usage in real-time with detailed metrics and customizable alerts.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="relative p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Developer Tools</h3>
              <p className="text-gray-600">
                Interactive API playground and comprehensive documentation for seamless integration.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="py-12 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">
              © 2024 Dandis. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="/docs" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                Documentation
              </a>
              <a href="/playground" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                API Playground
              </a>
              <a href="/dashboards" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                Dashboard
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
