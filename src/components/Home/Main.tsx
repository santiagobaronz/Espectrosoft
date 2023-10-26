import Link from 'next/link'
import React from 'react'
import { BsStars } from 'react-icons/bs'
import { contactPhoneNumber } from '../contact'

export default function Main() {



	return (
		<div className='max-lg:px-10'>
			<div className='container bg-header w-full md:py-24 pt-16 pb-20 flex items-center'>
				<div className='xl:w-2/4 max-lg:w-full'>

					<div className='bg-blue-bg md:px-8 px-4 py-2 rounded-full max-md:text-sm text-gray-200 flex items-center gap-x-2 w-fit'>
						<BsStars></BsStars>
						<p>Preparados para nuevos proyectos</p>
					</div>

					<h1 className='text-[55px] max-xl:w-2/4 max-lg:w-full leading-[1.10] font-semibold mb-5 mt-8'>Soluciones <span className='text-blue'>Web</span> que impulsan tu éxito en  <span className='text-blue'>internet</span></h1>
					<p className='text-lg max-xl:w-2/4 max-lg:w-full'>El futuro de tu negocio se encuentra en la web, y nosotros estamos aquí para construirlo. Te ofrecemos soluciones web personalizadas, basadas en tecnología de vanguardia y diseñadas para impulsar tu crecimiento y éxito.</p>

					<div className='md:flex items-center gap-x-16 mt-8'>
						<div>
							<div className="flex -space-x-2">
								<img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800 object-cover" src="https://i.imgur.com/7eH2bl1.jpg" alt="" />
								<img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800 object-cover" src="https://i.imgur.com/7eH2bl1.jpg" alt="" />
								<img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800 object-cover" src="https://i.imgur.com/7eH2bl1.jpg" alt="" />
								<img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800 object-cover" src="https://i.imgur.com/7eH2bl1.jpg" alt="" />
								<span className="flex items-center justify-center w-10 h-10 text-xs font-medium text-black bg-blue-bg border-2 border-[#ccc] rounded-full hover:bg-gray-600 dark:border-gray-800">+10</span>
							</div>
							<p className='text-sm text-gray mt-2 max-md:mb-10'>Únete a la comunidad de clientes</p>
						</div>
						<Link href={contactPhoneNumber} target='_blank' className='px-10 py-4 rounded-full bg-blue text-white font-medium'>Hablar con un especialista</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
