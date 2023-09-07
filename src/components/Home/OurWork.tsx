import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'
import { BsArrowRight, BsCodeSlash, BsFillLightningFill, BsGlobe, BsServer, BsWindowPlus, BsWrench } from 'react-icons/bs'

export default function OurWork() {

	const tsHomepage = useTranslations('homePage')

	return (
		<div className='container max-lg:px-10'>
			<div className='lg:flex items-center mt-28 justify-center'>
				<div className='xl:w-3/6 lg:text-center'>
					<p className='text-sm mb-5 text-gray-200 font-medium'>{tsHomepage('our_work')}</p>
					<h3 className='text- text-4xl font-bold'>{tsHomepage('work_title')}</h3>
					<p className='mb-8 max-lg:mt-7 text-gray-200 mt-5'>{tsHomepage('work_description')}</p>
					<Link href={'#'} className='text-blue lg:hidden font-semibold bg-blue-bg px-10 py-3 rounded-full'>{tsHomepage('work_button')}</Link>
				</div>
			</div>

			<div className="overflow-x-auto flex lg:mt-10 mt-16 gap-x-14 portfolio-home">
				<div className="flex-none">
					<div className="md:w-[450px] w-[400px] h-auto pb-10">
						<img src="https://imgur.com/2oKy1aR.jpg" alt="Imagen 1" className="w-full h-[350px] rounded-3xl object-cover" />
						<div className='flex items-center justify-between mt-6'>
							<div>
								<h4 className='text-xl font-semibold w-10/12 whitespace-nowrap text-ellipsis overflow-hidden'>Servismile | Consultorio odontologico</h4>
								<p>{tsHomepage('work_card_description')}</p>
							</div>
							<div className='px-3 py-3 rounded-full border border-[#ccc]'>
								<BsArrowRight></BsArrowRight>
							</div>
						</div>
					</div>
				</div>

				<div className="flex-none">
					<div className="md:w-[450px] w-[400px] h-auto pb-10">
						<img src="https://imgur.com/BjPbvZR.png" alt="Imagen 1" className="w-full h-[350px] rounded-3xl object-cover" />
						<div className='flex items-center justify-between mt-6'>
							<div>
								<h4 className='text-xl font-semibold w-10/12 whitespace-nowrap text-ellipsis overflow-hidden'>Latin American Aeronautics | Aviación</h4>
								<p>{tsHomepage('work_card_description')}</p>
							</div>
							<div className='px-3 py-3 rounded-full border border-[#ccc]'>
								<BsArrowRight></BsArrowRight>
							</div>
						</div>
					</div>
				</div>

				<div className="flex-none">
					<div className="md:w-[450px] w-[400px] h-auto pb-10">
						<img src="https://imgur.com/BsOIkEO.png" alt="Imagen 1" className="w-full h-[350px] rounded-3xl object-cover" />
						<div className='flex items-center justify-between mt-6'>
							<div>
							<h4 className='text-xl font-semibold w-10/12 whitespace-nowrap text-ellipsis overflow-hidden'>IVAO Ecuador | Simuladores Virtuales</h4>
								<p>{tsHomepage('work_card_description')}</p>
							</div>
							<div className='px-3 py-3 rounded-full border border-[#ccc]'>
								<BsArrowRight></BsArrowRight>
							</div>
						</div>
					</div>
				</div>

				<div className="flex-none">
					<div className="md:w-[450px] w-[400px] h-auto pb-10">
						<img src="https://i.imgur.com/IlArnY5.jpg" alt="Imagen 1" className="w-full h-[350px] rounded-3xl object-cover" />
						<div className='flex items-center justify-between mt-6'>
							<div className='w-11/12 whitespace-nowrap text-ellipsis overflow-hidden'>
							<h4 className='text-xl font-semibold w-10/12 whitespace-nowrap text-ellipsis overflow-hidden'>Servismile | Consultorio odontologico</h4>
								<p>{tsHomepage('work_card_description')}</p>
							</div>
							<div className='px-3 py-3 rounded-full border border-[#ccc]'>
								<BsArrowRight></BsArrowRight>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	)
}
