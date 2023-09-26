'use client'

import '@mantine/core/styles.css';
import '../../src/styles/globals.css'
import { Poppins} from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';

import { MantineProvider } from '@mantine/core';

import Menu from '../../src/Navigation/Menu';
import Footer from '../../src/Navigation/Footer';

const pageFont = Poppins({
	weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin']
})

type Props = {
	children: ReactNode;
	params: { locale: string };
};

async function getMessages(locale: string) {
	try {
		return (await import(`../../messages/${locale}.json`)).default;
	} catch (error) {
		console.log(error)
	}
}

export async function generateStaticParams() {
	return ['en', 'es'].map((locale) => ({ locale }));
}

export default async function LocaleLayout({
	children,
	params: { locale }
}: Props) {
	const messages = await getMessages(locale);

	return (
		<html lang={locale}>
			<head>
				<title>Espectrosoft | Desarrollo web profesional</title>
				<meta name="author" content="Espectrosoft" />
				<meta name="description" content="Destaca en línea con nuestro servicio de desarrollo de sitios web profesionales y personalizados. Diseños a medida que se adaptan a tu negocio a precios inigualables." />
				<link rel="icon" href="https://i.imgur.com/ZIyZSrF.png" sizes="any" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="keywords" content="Desarrollo de sitios web personalizados, Diseño web profesional, Servicio de diseño web a medida, Espectrosoft, Precios competitivos, Paginas web, Agencia web, Ecuador, Web Ecuador, Desarrollo web ecuador" />
				<meta name="robots" content="index, follow" />
				<meta httpEquiv="Content-Language" content="es" />
				<meta name="geo.region" content="EC" />
				<meta name="geo.placename" content="Ecuador" />
				<meta name="geo.position" content="-0.2295;-78.5249" />
				<meta name="ICBM" content="-0.2295, -78.5249" />
			</head>
			<body className={`${pageFont.className} !bg-white !text-black` }>
				<NextIntlClientProvider locale={locale} messages={messages}>
					<MantineProvider>
						<Menu></Menu>
						{children}
						<Footer></Footer>
					</MantineProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
