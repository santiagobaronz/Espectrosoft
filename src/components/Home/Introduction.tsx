import React from 'react'
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { useTranslations } from 'next-intl';

export default function Introduction() {

	const tsHomepage = useTranslations('homePage')

	return (

		<div className='container'>
			<div className='lg:flex gap-x-8'>

				<div className='introduction w-4/6 max-lg:w-full max-lg:mb-10 p-14 h-[600px] rounded-3xl shadow-xl hover:shadow-2xl flex items-end hover:translate-x-0.5 hover:-translate-y-0.5 transition-all'>
					<div className='xl:flex items-center'>
						<div className='text-white md:w-4/6'>
							<p className='text-sm text-[#ccc] max-md:hidden'>{tsHomepage('software_card_category')}</p>
							<h2 className='text-3xl font-semibold mt-3'>{tsHomepage('software_card_title')}</h2>
						</div>
						<div className='md:w-2/6 flex md:justify-center max-xl:mt-5'>
							<div className=' bg-white px-12 cursor-pointer h-14 rounded-full max-xl:rounded-lg text-blue font-medium flex items-center gap-x-2'>
								<Link href={'#'} className=''>{tsHomepage('project_estimation')}</Link>
								<BsArrowRight></BsArrowRight>
							</div>
						</div>
					</div>
				</div>


				<div>
					<div className='w-full'>
						<Link href={'#'} className='h-[285px] p-8 mb-7 shadow-xl hover:shadow-2xl rounded-3xl hosting flex items-end hover:translate-x-0.5 hover:-translate-y-0.5 transition-all'>
							<div className='text-white w-2/3'>
								<p className='text-[13px] text-[#ccc] max-md:hidden'>{tsHomepage('hosting_card_category')}</p>
								<h2 className='text-xl font-semibold mt-2'>{tsHomepage('hosting_card_title')}</h2>
							</div>
						</Link>
						<Link href={'#'} className='h-[285px] p-8 mb-7 shadow-xl hover:shadow-2xl rounded-3xl domains flex items-end hover:translate-x-0.5 hover:-translate-y-0.5 transition-all'>
							<div className='text-white w-2/3'>
								<p className='text-[13px] text-[#ccc] max-md:hidden'>{tsHomepage('domains_card_category')}</p>
								<h2 className='text-xl font-semibold mt-2'>{tsHomepage('domains_card_title')}</h2>
							</div>
						</Link>
					</div>
				</div>
			</div>

			<div className='sm:pt-8 container max-sm:px-8 flex justify-center'>
				<div className='lg:flex justify-center items-center gap-x-16 mt-10'>
					<div className='sm:flex sm:gap-x-16 max-sm:mb-2 max-sm:gap-x-10'>
						<img src="https://i.imgur.com/IfGNB61.png" alt="" className='lg:w-40 md:w-56 max-md:w-44 max-sm:w-32 max-lg:mb-10 select-none' />
						<img src="https://i.imgur.com/AMrRL7v.png" alt="" className='lg:w-40 md:w-56 max-md:w-44 max-sm:w-32 max-lg:mb-10 select-none' />
					</div>

					<div className='sm:flex sm:gap-x-16 max-sm:mb-3 items-center max-sm:gap-x-10'>
						<img src="https://i.imgur.com/XkmbqVt.png" alt="" className='lg:w-40 md:w-56 max-md:w-44 max-sm:w-32 max-lg:mb-10 select-none' />
						<img src="https://i.imgur.com/jK9nBP7.png" alt="" className='lg:w-40 md:w-56 max-md:w-44 max-sm:w-32 max-lg:mb-10 select-none' />
					</div>

					<img src="https://i.imgur.com/mTK8J8D.png" alt="" className='lg:w-40 md:w-56 max-md:w-44 max-sm:w-32 select-none mx-auto' />
				</div>
			</div>
		</div>

	);
}
