'use client';

import { AlertCircle, RefreshCw } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en" className="h-full dark">
      <body className="h-full bg-slate-950 text-slate-100 flex items-center justify-center p-4">
        <div className="max-w-md text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-950/60 border border-rose-800/50 text-rose-400 text-xs font-semibold tracking-wider">
            <AlertCircle className="w-4 h-4" />
            Fatal Application Error
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-white">
            Application Error
          </h1>

          <p className="text-slate-400 text-sm leading-relaxed">
            A critical system error occurred. Please try reloading the entire application.
          </p>

          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600 text-white text-sm font-medium hover:bg-cyan-500 transition-all active:scale-95 shadow-lg shadow-cyan-600/30"
          >
            <RefreshCw className="w-4 h-4" />
            Reload Application
          </button>
        </div>
      </body>
    </html>
  );
}
