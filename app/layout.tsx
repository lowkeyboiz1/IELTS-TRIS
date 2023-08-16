import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { CssBaseline, Divider } from '@mui/material'
import theme from '../theme.js'

import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
import { Providers } from '@/components/Providers'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ielts Tris',
  description: 'Ielts Tris',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className={inter.className}>
        <CssBaseline />
        <Providers>
          <Header />
          <main>{children}</main>
          <Divider />
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
