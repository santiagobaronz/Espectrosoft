import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'
import { BsStars } from 'react-icons/bs'

export default function Main() {

	const tsHomepage = useTranslations('homePage')

	return (
		<div>
			<div className='container bg-header w-full py-24 flex items-center'>
				<div className='xl:w-2/4 max-lg:w-full'>

					<div className='bg-blue-bg px-8 py-2 rounded-full text-sm text-gray-200 flex items-center gap-x-2 w-fit'>
						<BsStars></BsStars>
						<p>{tsHomepage('pre_title')}</p>
					</div>

					<h1 className='text-[55px] max-xl:w-2/4 max-lg:w-full leading-[1.10] font-semibold mb-5 mt-8'>{tsHomepage('title_s1')} <span className='text-blue'>{tsHomepage('title_s2')}</span> {tsHomepage('title_s3')} <span className='text-blue'>{tsHomepage('title_s4')}</span></h1>
					<p className='text-lg max-xl:w-2/4 max-lg:w-full'>{tsHomepage('description')}</p>

					<div className='md:flex items-center gap-x-16 mt-8'>
						<div>
							<div className="flex -space-x-2">
								<img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800 object-cover" src="/assets/introduction.jpg" alt="" />
								<img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800 object-cover" src="/assets/introduction.jpg" alt="" />
								<img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800 object-cover" src="/assets/introduction.jpg" alt="" />
								<img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800 object-cover" src="/assets/introduction.jpg" alt="" />
								<span className="flex items-center justify-center w-10 h-10 text-xs font-medium text-black bg-blue-bg border-2 border-[#ccc] rounded-full hover:bg-gray-600 dark:border-gray-800">+10</span>
							</div>
							<p className='text-sm text-gray mt-2 max-md:mb-10'>{tsHomepage('join_community')}</p>
						</div>

						<Link href={'#'} className='px-10 py-4 rounded-full bg-blue text-white font-medium'>{tsHomepage('contact_sales')}</Link>
					</div>


				</div>
			</div>
		</div>
	)
}
