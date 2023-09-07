import React from 'react'
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { useTranslations } from 'next-intl';

export default function Introduction() {

	const tsHomepage = useTranslations('homePage')

	return (

		<div className='container max-lg:px-10'>
			<div className='lg:flex gap-x-8'>

				<div className='introduction w-4/6 max-lg:w-full max-lg:mb-10 md:p-14 p-8 md:h-[600px] h-[500px] rounded-3xl shadow-xl hover:shadow-2xl flex items-end hover:translate-x-0.5 hover:-translate-y-0.5 transition-all'>
					<div className='xl:flex items-center'>
						<div className='text-white md:w-4/6'>
							<p className='text-sm text-[#ccc] max-md:hidden'>{tsHomepage('software_card_category')}</p>
							<h2 className='md:text-3xl text-2xl font-semibold mt-3'>{tsHomepage('software_card_title')}</h2>
						</div>
						<div className='md:w-2/6 flex md:justify-center max-xl:mt-5'>
							<div className=' bg-white md:px-12 px-6 cursor-pointer h-14 rounded-full max-xl:rounded-lg text-blue font-medium flex items-center gap-x-2'>
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
		</div>

	);
}
