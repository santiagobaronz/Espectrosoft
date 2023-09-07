import { useTranslations } from 'next-intl'
import React from 'react'

export default function Services() {

	const tsHomepage = useTranslations('homePage')

	return (
		<div className=' bg-blue-section md:container mt-28 md:rounded-2xl p-16'>
			<div className='container'>
				<div className='lg:text-center xl:w-4/6 lg:w-[600px] mx-auto'>
					<p className='text-sm mb-5 text-text-color font-medium'>{tsHomepage('ourServices')}</p>
					<h3 className='text- text-4xl font-semibold text-white'>{tsHomepage('ourServices_title')}</h3>
				</div>
			</div>
		</div>
	)
}
