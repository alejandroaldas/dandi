import Link from 'next/link';
import { useState } from 'react';

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isPersonalExpanded, setIsPersonalExpanded] = useState(true);

  const navItems = [
    { name: 'Dashboard', href: '/dashboards' },
    { name: 'API Playground', href: '/playground' },
    { name: 'Invoices', href: '/invoices' },
    { name: 'Documentation', href: '/docs' },
  ];

  return (
    <>
      <div 
        className={`fixed top-0 left-0 h-screen bg-white border-r border-gray-200 flex flex-col transition-all duration-300 ease-in-out ${
          isCollapsed ? 'w-16' : 'w-64'
        }`}
      >
        {/* Logo */}
        <div className={`p-6 flex items-center ${isCollapsed ? 'justify-center' : ''}`}>
          <Link href="/dashboards" className="flex items-center gap-2">
            <span className="text-xl font-semibold text-primary">D</span>
            {!isCollapsed && <span className="text-xl font-semibold">dandis</span>}
          </Link>
        </div>

        {/* Personal/Organization Selector */}
        {!isCollapsed && (
          <div className="px-3 mb-6">
            <button
              onClick={() => setIsPersonalExpanded(!isPersonalExpanded)}
              className="w-full px-3 py-2 text-left rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-between"
            >
              <span className="font-medium">Personal</span>
              <span className="text-sm">▼</span>
            </button>
          </div>
        )}

        {/* Navigation */}
        <nav className="flex-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-6 py-2 text-gray-700 hover:bg-gray-50 transition-colors ${
                isCollapsed ? 'justify-center' : ''
              }`}
              title={isCollapsed ? item.name : ''}
            >
              {isCollapsed ? (
                <span className="text-sm font-medium">{item.name[0]}</span>
              ) : (
                <span className="text-sm">{item.name}</span>
              )}
            </Link>
          ))}
        </nav>

        {/* Collapse Toggle Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm"
          title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <span className={`text-sm transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`}>
            ◀
          </span>
        </button>
      </div>
      {/* Spacer div to prevent content from being hidden under the fixed sidebar */}
      <div className={`flex-shrink-0 transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`} />
    </>
  );
} 