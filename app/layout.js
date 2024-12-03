import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Dandi',
  description: 'API Key Management Dashboard',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} h-full`}>
        <div className="min-h-full">
          {children}
          <Toaster position="top-right" />
        </div>
      </body>
    </html>
  );
}
