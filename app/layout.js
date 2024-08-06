// app/layout.js
import { ReactNode } from 'react';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>My Inventory App</title>
      </head>
      <body>
        <header>
          {/* Add your header component or navigation here */}
        </header>
        <main>{children}</main>
        <footer>
          {/* Add your footer component here */}
        </footer>
      </body>
    </html>
  );
}
