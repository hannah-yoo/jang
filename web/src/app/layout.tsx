import type {Metadata} from 'next'
import localFont from 'next/font/local'
import './globals.css'

const pyeojinGothic = localFont({
  src: [
    {path: '../../public/fonts/PyeojinGothic-Light.woff2', weight: '300', style: 'normal'},
    {path: '../../public/fonts/PyeojinGothic-Bold.woff2', weight: '700 900', style: 'normal'},
  ],
  variable: '--font-pyeojin',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'JANG — Web Magazine',
  description: 'TO BE INDICATED',
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${pyeojinGothic.variable} h-full antialiased`}>
      <body>{children}</body>
    </html>
  )
}
