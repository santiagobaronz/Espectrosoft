'use client'

import { GlobalContextProvider } from '@/src/context/translations'
import '../src/styles/globals.css'
import { MantineProvider } from '@mantine/core'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Header from '@/src/Navigation/Header'

const pageFont = Poppins({
	weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin']
})

export default function RootLayout({ children, }: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<head>
				<title>Espectrosoft | Desarrollo web profesional</title>
				<meta name="author" content="Espectrosoft" />
				<meta name="description" content="Destaca en línea con nuestro servicio de desarrollo de sitios web profesionales y personalizados. Diseños a medida que se adaptan a tu negocio a precios inigualables." />
				<link rel="icon" href="/icon.ico" sizes="any" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="keywords" content="Desarrollo de sitios web personalizados, Diseño web profesional, Servicio de diseño web a medida, Espectrosoft, Precios competitivos, Paginas web, Agencia web, Ecuador, Web Ecuador, Desarrollo web ecuador" />
				<meta name="robots" content="index, follow" />
				<meta httpEquiv="Content-Language" content="es" />
				<meta name="geo.region" content="EC" />
				<meta name="geo.placename" content="Ecuador" />
				<meta name="geo.position" content="-0.2295;-78.5249" />
				<meta name="ICBM" content="-0.2295, -78.5249" />
			</head>
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
