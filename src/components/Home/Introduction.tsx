import React from 'react'
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { useTranslations } from 'next-intl';

export default function Introduction() {

	const tsHomepage = useTranslations('homePage')

	return (

		<div className='container'>
			<div className='flex gap-x-8'>
				<div className='introduction w-4/6 p-14 h-[600px] rounded-3xl shadow-xl hover:shadow-2xl flex items-end hover:translate-x-0.5 hover:-translate-y-0.5 transition-all'>
					<div className='text-white w-4/6'>
						<p className='text-sm text-[#ccc]'>{tsHomepage('software_card_category')}</p>
						<h2 className='text-3xl font-semibold mt-3'>{tsHomepage('software_card_title')}</h2>
					</div>
					<div className='w-2/6 flex justify-center mb-5'>
						<div className=' bg-white px-12 cursor-pointer py-3 rounded-full text-blue font-medium flex items-center gap-x-2'>
							<Link href={'#'} className=''>{tsHomepage('project_estimation')}</Link>
							<BsArrowRight></BsArrowRight>
						</div>
					</div>
				</div>
				<div className='w-2/6'>
					<Link href={'#'} className='h-[285px] p-8 mb-7 shadow-xl hover:shadow-2xl rounded-3xl hosting flex items-end hover:translate-x-0.5 hover:-translate-y-0.5 transition-all'>
						<div className='text-white w-2/3'>
							<p className='text-[13px] text-[#ccc]'>{tsHomepage('hosting_card_category')}</p>
							<h2 className='text-xl font-semibold mt-2'>{tsHomepage('hosting_card_title')}</h2>
						</div>
					</Link>
					<Link href={'#'} className='h-[285px] p-8 mb-7 shadow-xl hover:shadow-2xl rounded-3xl domains flex items-end hover:translate-x-0.5 hover:-translate-y-0.5 transition-all'>
						<div className='text-white w-2/3'>
							<p className='text-[13px] text-[#ccc]'>{tsHomepage('domains_card_category')}</p>
							<h2 className='text-xl font-semibold mt-2'>{tsHomepage('domains_card_title')}</h2>
						</div>
					</Link>
				</div>
			</div>

			<div className='pt-8 container max-sm:px-8'>
				<div className='sm:flex justify-center items-center gap-x-16 mt-10'>
					<div className='flex sm:gap-x-16 max-sm:mb-2'>
						<img src="https://i.imgur.com/IfGNB61.png" alt="" className='w-40 select-none max-sm:mx-auto max-sm:mb-3 max-sm:w-24' />
						<img src="https://i.imgur.com/AMrRL7v.png" alt="" className='w-40 select-none max-sm:mx-auto max-sm:mb-3 max-sm:w-24' />
					</div>

					<div className='flex sm:gap-x-16 max-sm:mb-3 items-center'>
						<img src="https://i.imgur.com/XkmbqVt.png" alt="" className='w-40 select-none max-sm:mx-auto max-sm:mb-3 max-sm:w-24' />
						<img src="https://i.imgur.com/jK9nBP7.png" alt="" className='w-40 select-none max-sm:mx-auto max-sm:mb-3 max-sm:w-24' />
					</div>


					<img src="https://i.imgur.com/mTK8J8D.png" alt="" className='w-40 select-none max-sm:mx-auto max-sm:mb-3 max-sm:w-24' />
				</div>
			</div>
		</div>

	);
}
