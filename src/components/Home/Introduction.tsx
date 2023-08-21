import React from 'react'
import Link from 'next/link';
import Translation from '@/src/translation/Translation';
import { BsArrowRight } from 'react-icons/bs';

export default function Introduction() {

	return (

		<div className='container'>
			<div className='flex gap-x-8'>
				<div className='introduction w-4/6 p-14 h-[600px] rounded-3xl shadow-xl hover:shadow-2xl flex items-end hover:translate-x-0.5 hover:-translate-y-0.5 transition-all'>
					<div className='text-white w-4/6'>
						<p className='text-sm text-[#ccc]'>SOFTWARE DEVELOPMENT SERVICES</p>
						<h2 className='text-3xl font-semibold mt-3'>We are a Website & Software development agency</h2>
					</div>
					<div className='w-2/6 flex justify-center mb-5'>
						<div className=' bg-white px-12 cursor-pointer py-3 rounded-full text-blue font-medium flex items-center gap-x-2'>
							<Link href={'#'} className=''>Cotizar</Link>
							<BsArrowRight></BsArrowRight>
						</div>
					</div>
				</div>
				<div className='w-2/6'>
					<Link href={'#'} className='h-[285px] p-8 mb-7 shadow-xl hover:shadow-2xl rounded-3xl hosting flex items-end hover:translate-x-0.5 hover:-translate-y-0.5 transition-all'>
						<div className='text-white w-2/3'>
							<p className='text-[13px] text-[#ccc]'>CLOUD HOSTING SERVICES</p>
							<h2 className='text-xl font-semibold mt-2'>Host your project in the cloud with us</h2>
						</div>
					</Link>
					<Link href={'#'} className='h-[285px] p-8 mb-7 shadow-xl hover:shadow-2xl rounded-3xl domains flex items-end hover:translate-x-0.5 hover:-translate-y-0.5 transition-all'>
						<div className='text-white w-2/3'>
							<p className='text-[13px] text-[#ccc]'>DOMAIN REGISTRATION SERVICES</p>
							<h2 className='text-xl font-semibold mt-2'>Professional domains for your online success</h2>
						</div>
					</Link>
				</div>
			</div>

			<div className='pt-8 container max-sm:px-8'>
				<div className='sm:flex justify-center items-center gap-x-16 mt-10'>
					<div className='flex sm:gap-x-16 max-sm:mb-2'>
						<img src="/logos/wordpress.png" alt="" className='w-40 select-none max-sm:mx-auto max-sm:mb-3 max-sm:w-24' />
						<img src="/logos/cpanel.png" alt="" className='w-40 select-none max-sm:mx-auto max-sm:mb-3 max-sm:w-24' />
					</div>

					<div className='flex sm:gap-x-16 max-sm:mb-3 items-center'>
						<img src="/logos/litespeed.png" alt="" className='w-40 select-none max-sm:mx-auto max-sm:mb-3 max-sm:w-24' />
						<img src="/logos/gsuite.png" alt="" className='w-40 select-none max-sm:mx-auto max-sm:mb-3 max-sm:w-24' />
					</div>


					<img src="/logos/cloudflare.png" alt="" className='w-40 select-none max-sm:mx-auto max-sm:mb-3 max-sm:w-24' />
				</div>
			</div>
		</div>

	);
}
