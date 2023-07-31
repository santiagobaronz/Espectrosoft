'use client'

import { GlobalContextProvider } from '@/src/context/translations'
import '../src/styles/globals.css'
import { MantineProvider } from '@mantine/core'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Header from '@/src/components/Header'

const pageFont = Poppins({
	weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: 'Espectrosoft | Desarrollo web profesional',
	description: 'Destaca en línea con nuestro servicio de desarrollo de sitios web profesionales y personalizados. Diseños a medida que se adaptan a tu negocio a precios inigualables.',
	creator: 'Espectrosoft',
	keywords: 'Desarrollo de sitios web personalizados, Diseño web profesional, Servicio de diseño web a medida, Espectrosoft, Precios competitivos, Paginas web, Agencia web, Ecuador, Web Ecuador, Desarrollo web ecuador',
}

export default function RootLayout({ children, }: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={`${pageFont.className}`}>
				<GlobalContextProvider>
					<MantineProvider>
						<Header></Header>
						{children}
					</MantineProvider>
				</GlobalContextProvider>
			</body>
		</html>
	)
}
