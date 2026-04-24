import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Maqdad Ali — AI Engineer & Full Stack Developer',
  description: 'Portfolio of Maqdad Ali — Final-year AI student at COMSATS University, building ML-powered systems, scalable Python backends, and end-to-end AI pipelines.',
  keywords: ['AI Engineer', 'Machine Learning', 'Full Stack Developer', 'Python', 'FastAPI', 'React'],
  authors: [{ name: 'Maqdad Ali' }],
  openGraph: {
    title: 'Maqdad Ali — AI Engineer & Full Stack Developer',
    description: 'Portfolio of Maqdad Ali',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="noise-overlay">
        {children}
      </body>
    </html>
  )
}
