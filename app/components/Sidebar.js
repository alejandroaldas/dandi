import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Sidebar() {
  const [isPersonalExpanded, setIsPersonalExpanded] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    { name: 'Overview', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', href: '/dashboards' },
    { name: 'Research Assistant', icon: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z', href: '/research-assistant' },
    { name: 'Research Reports', icon: 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z', href: '/reports' },
    { name: 'API Playground', icon: 'M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z', href: '/playground' },
    { name: 'Invoices', icon: 'M2.25 8.25h19.5M2.25 9h19.5m-16.5 13.5h13.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6.75v13.5a2.25 2.25 0 002.25 2.25z', href: '/invoices' },
    { name: 'Documentation', icon: 'M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25', href: '/docs' },
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
            <div className="w-8 h-8 flex-shrink-0">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M50 0 L100 25 L100 75 L50 100 L0 75 L0 25 Z" fill="#4F46E5" />
                <path d="M50 20 L85 37.5 L85 62.5 L50 80 L15 62.5 L15 37.5 Z" fill="white" />
              </svg>
            </div>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-4 h-4 transition-transform ${isPersonalExpanded ? 'rotate-180' : ''}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
              </svg>
              {!isCollapsed && <span>{item.name}</span>}
            </Link>
          ))}
        </nav>

        {/* Collapse Toggle Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm"
          title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-4 h-4 transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
      </div>
      {/* Spacer div to prevent content from being hidden under the fixed sidebar */}
      <div className={`flex-shrink-0 transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`} />
    </>
  );
} 