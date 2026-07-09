import type { Metadata } from 'next'
import { Providers } from '@/components/Providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'G0DM0DƎ | Liberated AI Chat',
  description: 'Open-source, privacy-respecting, multi-model chat interface for hackers and philosophers',
  keywords: ['AI', 'chat', 'open-source', 'privacy', 'hacker', 'Claude', 'GPT', 'OpenRouter'],
  authors: [{ name: 'Lysios Lab' }],
  manifest: '/manifest.json',
  openGraph: {
    title: 'G0DM0DƎ',
    description: 'Cognition without control. Tools for builders, not gatekeepers.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Share+Tech+Mono&family=VT323&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#00ff41" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js')
                    .then(reg => console.log('[PWA] Service Worker registered:', reg.scope))
                    .catch(err => console.warn('[PWA] Service Worker registration failed:', err));
                });
              }
              window.addEventListener('load', () => {
                const splash = document.getElementById('pwa-splash');
                if (splash) {
                  setTimeout(() => {
                    splash.classList.add('fade-out');
                    setTimeout(() => splash.remove(), 500);
                  }, 2200);
                }
              });
            `
          }}
        />
      </head>
      <body className="font-mono antialiased">
        <div id="pwa-splash" className="pwa-splash-overlay">
          <div className="pwa-splash-content">
            <img src="/logo.jpg" className="pwa-splash-logo" alt="G0DM0D3 Logo" />
            <h1 className="pwa-splash-title">G0DM0DƎ</h1>
            <div className="pwa-splash-loader">
              <div className="pwa-splash-bar"></div>
            </div>
            <p className="pwa-splash-subtitle">COGNITION WITHOUT CONTROL</p>
          </div>
        </div>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
