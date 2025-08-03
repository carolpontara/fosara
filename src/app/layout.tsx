import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FOSARA - Soluções Tecnológicas Avançadas',
  description: 'Empresa de tecnologia especializada em desenvolvimento de e-commerces, chatbots inteligentes, landing pages, plataformas institucionais e soluções de IA para empresas.',
  keywords: 'desenvolvimento web, e-commerce, chatbot, landing pages, inteligência artificial, tecnologia',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
