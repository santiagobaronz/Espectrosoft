'use client'

import '../../src/styles/globals.css'
import { Poppins, Inter } from 'next/font/google'

import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { constants } from 'buffer';
import Menu from '@/src/Navigation/Menu';
import { MantineProvider } from '@mantine/core';

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
		<html className="h-full" lang={locale}>
			<body className={`${pageFont.className}`}>
				<NextIntlClientProvider locale={locale} messages={messages}>
					<MantineProvider>
						<Menu></Menu>
						{children}
					</MantineProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
