import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { playfair, inter } from '@/config/fonts'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Ruta del Vino — Valle de Guadalupe',
  description: 'Discover the best wineries, restaurants and experiences in Valle de Guadalupe, Ensenada.',
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = await getMessages()

  return (
    <html lang={locale} className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-body bg-[#FAF7F2] text-stone-800 antialiased">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="pt-16 lg:pt-20">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}