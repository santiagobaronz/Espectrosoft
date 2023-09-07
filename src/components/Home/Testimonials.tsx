import { useTranslations } from 'next-intl'
import React from 'react'

export default function Testimonials() {

	const tsHomepage = useTranslations('homePage')

	return (
		<div className='container max-lg:px-10'>
			<div className='mt-28 xl:mx-20'>
				<div>
					<h3 className='md:text-center text-4xl font-bold mb-5'>{tsHomepage('testimonials_title')}</h3>
					<p className='md:text-center lg:w-4/6 mx-auto text-gray-200'>{tsHomepage('testimonials_description')}</p>
				</div>

				<div className='md:flex gap-x-8 mt-10'>
					<div className='md:w-1/3 max-md:mb-5'>
						<div className='bg-blue-bg rounded-lg p-9'>
							<h2 className='font-semibold text-lg mb-4 leading-6'>Perfect choice for a SaaS application</h2>
							<p className='mb-7 text-sm'>This is a very complex and beautiful set of elements. Under the hood it comes with the best things from 2 different worlds: Figma and Tailwind.</p>
							<div className='flex items-center gap-x-3'>
								<img className="w-10 h-10 rounded-full object-cover" src="https://santiagobaron.com/images/yo.jpg" alt="Rounded avatar" />
								<div className='leading-3'>
									<h3 className='font-medium text-sm'>Santiago Baron</h3>
									<p className='text-xs'>Software Engineer at Espectrosoft</p>
								</div>
							</div>
						</div>
					</div>
					<div className='md:w-1/3 max-md:mb-5'>
						<div className='bg-blue-bg rounded-lg p-9'>
							<h2 className='font-semibold text-lg mb-4 leading-6'>Mindblowing workflow and variants</h2>
							<p className='mb-7 text-sm'>Flowbite provides a robust set of design tokens and components based on the popular Tailwind CSS framework. From the most used UI components like forms and navigation bars to the whole app screens designed both for desktop and mobile, this UI kit provides a solid foundation for any project.</p>
							<div className='flex items-center gap-x-3'>
								<img className="w-10 h-10 rounded-full object-cover" src="https://santiagobaron.com/images/yo.jpg" alt="Rounded avatar" />
								<div className='leading-3'>
									<h3 className='font-medium text-sm'>Santiago Baron</h3>
									<p className='text-xs'>Software Engineer at Espectrosoft</p>
								</div>
							</div>
						</div>
					</div>
					<div className='md:w-1/3 max-md:mb-5'>
						<div className='bg-blue-bg rounded-lg p-9'>
							<h2 className='font-semibold text-lg mb-4 leading-6'>Perfect choice for a SaaS application</h2>
							<p className='mb-7 text-sm'>This is a very complex and beautiful set of elements. Under the hood it comes with the best things from 2 different worlds: Figma and Tailwind.</p>
							<div className='flex items-center gap-x-3'>
								<img className="w-10 h-10 rounded-full object-cover" src="https://santiagobaron.com/images/yo.jpg" alt="Rounded avatar" />
								<div className='leading-3'>
									<h3 className='font-medium text-sm'>Santiago Baron</h3>
									<p className='text-xs'>Software Engineer at Espectrosoft</p>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	)
}
