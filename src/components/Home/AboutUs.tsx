import Link from 'next/link'
import React from 'react'

export default function AboutUs() {

	return (
		<div className='container max-lg:px-10'>
			<div className='lg:flex mt-28 lg:gap-x-24 xl:mx-20'>
				<div className='lg:w-1/2 text-left'>
					<p className='text-sm mb-5 text-gray-200 font-medium'>SOBRE NOSOTROS</p>
					<h3 className='text- text-4xl font-bold'>El equipo convertirá tus ideas en realidad</h3>
					<p className='mb-8 max-lg:mt-7 text-gray-200 mt-5'>Sentimos que en esta era digital, la conexión es necesaria para desarrollar un imperio corporativo exitoso. Tener sitios web o aplicaciones móviles centrados en el usuario que sean fáciles de usar puede aumentar tu competitividad en el mercado.</p>
					<Link href={'/about-us'} className='text-blue font-semibold bg-blue-bg px-10 py-3 rounded-full'>Más sobre nosotros</Link>

					<div className="md:grid grid-cols-2 grid-rows-2 gap-7 mt-12 text-center ">
						<div className='border border-gray border-opacity-40 md:p-10 p-8 rounded-2xl max-md:mb-5'>
							<p className='text-4xl font-semibold'>2+</p>
							<p className='text-gray-200 mt-1'>Años en Operación</p>
						</div>
						<div className='border border-gray border-opacity-40 md:p-10 p-8 rounded-2xl max-md:mb-5'>
							<p className='text-4xl font-semibold'>20+</p>
							<p className='text-gray-200 mt-1'>Clientes Satisfechos</p>
						</div>
						<div className="row-start-2 border border-gray border-opacity-40 md:p-10 p-8 rounded-2xl max-md:mb-5">
							<p className='text-4xl font-semibold'>15+</p>
							<p className='text-gray-200 mt-1'>Profesionales</p>
						</div>
						<div className="row-start-2 border border-gray border-opacity-40 md:p-10 p-8 rounded-2xl">
							<p className='text-4xl font-semibold'>25+</p>
							<p className='text-gray-200 mt-1'>Proyectos Asombrosos</p>
						</div>
					</div>

				</div>
				<div className='w-1/2'>
					<img src="https://imgur.com/KJA2DdJ.jpg" alt="" className='h-full max-lg:hidden rounded-2xl object-cover ' />
				</div>
			</div>
		</div>
	)
}
